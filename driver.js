/**
 * TrackYourS - Driver & Staff Dispatch Terminal Logic
 * Allows drivers and warehouse staff to update delivery status and milestones in real-time.
 */

// 1. Initial State
let currentDriverMode = 'courier'; // 'courier' | 'hub'
let activePackage = null;
let selectedStatus = 'out_for_delivery';
let remainingStopsCount = 3;
let selectedProofPhoto = 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80';
let sessionLogs = [];
let hasSigned = false;

// Signature canvas context
let sigCanvas, sigCtx;
let isDrawing = false;

// 2. Initialize Page
window.addEventListener('DOMContentLoaded', () => {
  // Setup clock
  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // Setup language from i18n
  if (typeof updateLangDropdownUI === "function") {
    updateLangDropdownUI();
  }
  applyDriverLanguage();

  // Setup signature canvas
  setupSignatureCanvas();

  // Load initial package
  const urlParams = new URLSearchParams(window.location.search);
  const initialTrack = urlParams.get('track') || "TRK-892341";
  loadPackage(initialTrack);
});

// 3. Live Clock
function updateLiveClock() {
  const clockEl = document.getElementById("liveClock");
  if (clockEl) {
    const now = new Date();
    clockEl.innerText = now.toTimeString().split(' ')[0];
  }
}

// 4. Barcode Audio Beep Synth (Standard Logistics Handheld Scanner Beep)
function playScannerBeep() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1950, ctx.currentTime); // High pitch handheld scanner frequency
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (e) {
    console.log("Audio not supported or permitted", e);
  }
}

function playSuccessChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1320, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.28);
  } catch (e) {
    // Ignore audio restriction
  }
}

// 5. Package Loading & Sync
function getStoredOrBasePackage(trackingId) {
  const cleanId = trackingId.toUpperCase().trim();
  const stored = localStorage.getItem(`trackyours_pkg_${cleanId}`);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }

  // Use PACKAGES_DB if available from i18n/app
  if (typeof PACKAGES_DB !== "undefined" && PACKAGES_DB[cleanId]) {
    return JSON.parse(JSON.stringify(PACKAGES_DB[cleanId]));
  }

  // Fallback to sample package
  return {
    trackingNumber: cleanId,
    carrier: "DHL Express",
    serviceLevel: "Express Worldwide",
    weight: "2.4 kg (5.3 lbs)",
    dimensions: "32 x 22 x 10 cm",
    status: "out_for_delivery",
    statusTitle: "派送中 (Out for Delivery)",
    statusDescription: "您的包裹已由專屬外送員 Alex Mercer 裝車派送中，預計今日送達收件地址。",
    estimatedDate: "今天 (10月17日)",
    estimatedWindow: "下午 1:30 – 4:30",
    origin: {
      name: "美國 加州 舊金山",
      hub: "舊金山航空貨運中心",
      coords: [37.7749, -122.4194]
    },
    destination: {
      name: "美國 華盛頓州 西雅圖",
      address: "742 Evergreen Terrace, Seattle, WA 98101",
      coords: [47.6062, -122.3321]
    },
    currentCourierPos: [47.6015, -122.3380],
    stopsRemaining: 3,
    signatureRequired: "需本人親自簽名",
    courier: {
      name: "Alex Mercer",
      rating: "4.9",
      role: "DHL 特快專屬外送員",
      vehicle: "奔馳 Sprinter (車號 #412)",
      phone: "+1 (800) 555-0199",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80"
    },
    steps: [
      { key: "ordered", label: "訂單建立", date: "10月15日", state: "completed" },
      { key: "shipped", label: "已出貨", date: "10月16日", state: "completed" },
      { key: "in_transit", label: "轉運中", date: "10月16日", state: "completed" },
      { key: "out_for_delivery", label: "派送中", date: "今日", state: "current" },
      { key: "delivered", label: "送達", date: "待抵達", state: "upcoming" }
    ],
    timeline: [
      {
        time: "今日 08:45",
        location: "西雅圖分揀中心",
        title: "包裹已裝上派送專車",
        detail: "包裹通過光學掃描，已編入 Alex Mercer 的 #412 車次。",
        icon: "truck",
        color: "blue"
      }
    ]
  };
}

function loadPackage(trackingNumber) {
  activePackage = getStoredOrBasePackage(trackingNumber);
  
  // Set dropdown value if exists
  const selectEl = document.getElementById("packageSelect");
  if (selectEl) {
    let found = false;
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].value === activePackage.trackingNumber) {
        selectEl.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      document.getElementById("customTrackingInput").value = activePackage.trackingNumber;
    }
  }

  // Update Snapshot Card
  document.getElementById("snapTrackingNo").innerText = activePackage.trackingNumber;
  document.getElementById("snapCarrier").innerText = activePackage.carrier;
  document.getElementById("snapDestination").innerText = `📍 目的地: ${activePackage.destination.address || activePackage.destination.name}`;
  document.getElementById("snapService").innerText = `${activePackage.serviceLevel} • ${activePackage.weight || '2.0 kg'} • ${activePackage.signatureRequired || '標準簽收'}`;

  // Update status badge
  const badgeEl = document.getElementById("snapStatusBadge");
  badgeEl.innerText = activePackage.statusTitle;

  // Check if customer left note on index.html
  const savedNote = localStorage.getItem(`note_${activePackage.trackingNumber}`);
  const noteBox = document.getElementById("snapCustomerNoteBox");
  const noteText = document.getElementById("snapCustomerNoteText");
  if (savedNote) {
    noteText.innerText = `「${savedNote}」`;
    noteBox.classList.remove("hidden");
  } else {
    noteBox.classList.add("hidden");
  }

  // Update Stops Display
  remainingStopsCount = typeof activePackage.stopsRemaining === "number" ? activePackage.stopsRemaining : 3;
  updateStopsUI();

  // Highlight current status option
  selectStatusOption(activePackage.status || 'out_for_delivery', false);

  if (window.lucide) lucide.createIcons();
}

function onPackageSelectChange() {
  const selVal = document.getElementById("packageSelect").value;
  loadPackage(selVal);
  showToast(`已載入包裹：${selVal}`);
}

function loadCustomPackage() {
  const val = document.getElementById("customTrackingInput").value.trim();
  if (val) {
    loadPackage(val);
    showToast(`已載入自訂單號：${val.toUpperCase()}`);
  }
}

// 6. Terminal Mode Switcher
function switchTerminalMode(mode) {
  currentDriverMode = mode;
  const courierBtn = document.getElementById("modeCourierBtn");
  const hubBtn = document.getElementById("modeHubBtn");
  const profileRole = document.getElementById("driverProfileRole");
  const isZh = (typeof currentLang !== "undefined" && currentLang === "zh-TW");

  if (mode === "courier") {
    courierBtn.className = "flex-1 sm:flex-none px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center justify-center gap-1.5 transition shadow";
    hubBtn.className = "flex-1 sm:flex-none px-4 py-2 rounded-lg text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    profileRole.innerText = isZh ? "DHL 專屬外送領班 • 奔馳 Sprinter (車號 #412)" : "DHL Express Delivery Lead • Sprinter (Van #412)";
    selectStatusOption('out_for_delivery');
  } else {
    hubBtn.className = "flex-1 sm:flex-none px-4 py-2 rounded-lg bg-indigo-600 text-white flex items-center justify-center gap-1.5 transition shadow";
    courierBtn.className = "flex-1 sm:flex-none px-4 py-2 rounded-lg text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    profileRole.innerText = isZh ? "區域轉運中心 2號 分揀光學掃描操作員 (Station Operator #2)" : "Regional Sorting Hub Gate #2 Optical Station Lead";
    selectStatusOption('in_transit_hub');
  }
}

// 7. Status Option Selection & Form Fill
function selectStatusOption(statusKey, autoFillText = true) {
  selectedStatus = statusKey;
  const isZh = (typeof currentLang !== "undefined" && currentLang === "zh-TW");

  // Reset button styling
  document.querySelectorAll(".status-option-btn").forEach(btn => {
    btn.classList.remove("border-blue-500", "bg-blue-600/30", "border-emerald-500", "bg-emerald-600/30", "border-indigo-500", "bg-indigo-600/30", "border-amber-500", "bg-amber-600/30");
    btn.classList.add("border-slate-700", "bg-slate-900/60");
  });

  const activeBtn = document.getElementById(`btnStat_${statusKey}`);
  if (activeBtn) {
    activeBtn.classList.remove("border-slate-700", "bg-slate-900/60");
    const activeColor = statusKey === "delivered" ? "border-emerald-500 bg-emerald-600/30" : "border-blue-500 bg-blue-600/30";
    activeBtn.className += ` ${activeColor}`;
  }

  // Toggle sections
  const stopsSec = document.getElementById("stopsControlSection");
  const proofSec = document.getElementById("proofCaptureSection");

  if (statusKey === "delivered") {
    stopsSec.classList.add("hidden");
    proofSec.classList.remove("hidden");
    remainingStopsCount = 0;
    updateStopsUI();
  } else if (statusKey === "out_for_delivery") {
    stopsSec.classList.remove("hidden");
    proofSec.classList.add("hidden");
    if (remainingStopsCount === 0) remainingStopsCount = 2;
    updateStopsUI();
  } else {
    stopsSec.classList.add("hidden");
    proofSec.classList.add("hidden");
  }

  // Auto-fill template texts
  if (autoFillText && activePackage) {
    const locInput = document.getElementById("inputCheckpointLocation");
    const titleInput = document.getElementById("inputCheckpointTitle");
    const detailInput = document.getElementById("inputCheckpointDetail");

    switch (statusKey) {
      case "out_for_delivery":
        locInput.value = isZh ? `${activePackage.destination.name} 責任區` : `${activePackage.destination.name} Sector`;
        titleInput.value = isZh ? "包裹已裝上派送專車，出發派送中" : "Loaded onto Delivery Vehicle";
        detailInput.value = isZh ? `包裹通過光學掃描，已編入外送員 ${activePackage.courier?.name || 'Alex Mercer'} 之專車進行最後一哩路配送。` : "Package loaded onto local delivery vehicle for last-mile delivery.";
        break;
      case "in_transit_hub":
        locInput.value = isZh ? "區域自動化轉運樞紐 (Sort Hub)" : "Regional Sort Center";
        titleInput.value = isZh ? "抵達轉運中心並完成光學分揀" : "Arrived at Sorting Hub";
        detailInput.value = isZh ? "光學隧道掃描儀已完成規格量測，包裹已排入銜接幹線輸送帶。" : "Optical scanner completed sort scan and queued for next connection.";
        break;
      case "in_transit_linehaul":
        locInput.value = isZh ? "州際物流幹線 (Highway / Airway)" : "Interstate Freight Corridor";
        titleInput.value = isZh ? "幹線定期班車已啟程出發" : "Departed Transit Facility";
        detailInput.value = isZh ? "車載物聯網傳感器連線正常，貨箱已密封並啟程前往目的地分揀所。" : "Container sealed and in transit to destination distribution center.";
        break;
      case "exception":
        locInput.value = isZh ? "山區轉運管制站 (Mountain Checkpoint)" : "Intermediate Highway Checkpoint";
        titleInput.value = isZh ? "天候異常受阻 / 配送時程順延" : "Severe Weather Delay Exception";
        detailInput.value = isZh ? "公路管理單位發布天候預警，為確保行車安全暫時於溫控庫房待命，時程順延一日。" : "Highway patrol issued weather restriction. Shipment safely staged at climate-controlled facility.";
        break;
      case "delivered":
        locInput.value = isZh ? `${activePackage.destination.address || activePackage.destination.name}` : activePackage.destination.address || activePackage.destination.name;
        titleInput.value = isZh ? "包裹已簽收送達完成" : "Delivered & Signed";
        detailInput.value = isZh ? "包裹已安全送達指定地址。數位簽名與 GPS 座標已傳送至雲端存證。" : "Package successfully delivered. Contactless signature and photo verified.";
        break;
    }
  }
}

// 8. Stops Counter
function adjustStops(delta) {
  remainingStopsCount = Math.max(0, Math.min(10, remainingStopsCount + delta));
  updateStopsUI();
}

function updateStopsUI() {
  const display = document.getElementById("stopsDisplay");
  const isZh = (typeof currentLang !== "undefined" && currentLang === "zh-TW");
  if (display) {
    display.innerText = isZh ? `${remainingStopsCount} 站` : `${remainingStopsCount} stops`;
  }
}

// 9. Signature Pad Canvas Setup
function setupSignatureCanvas() {
  sigCanvas = document.getElementById("signatureCanvas");
  if (!sigCanvas) return;
  sigCtx = sigCanvas.getContext("2d");

  // Resize canvas to match display size
  const resizeCanvas = () => {
    const rect = sigCanvas.getBoundingClientRect();
    sigCanvas.width = rect.width * 2;
    sigCanvas.height = rect.height * 2;
    sigCtx.scale(2, 2);
    sigCtx.lineWidth = 2.5;
    sigCtx.lineCap = "round";
    sigCtx.strokeStyle = "#1e293b"; // dark navy ink
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function getPos(e) {
    const rect = sigCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function startDrawing(e) {
    isDrawing = true;
    hasSigned = true;
    const pos = getPos(e);
    sigCtx.beginPath();
    sigCtx.moveTo(pos.x, pos.y);
    e.preventDefault();
  }

  function draw(e) {
    if (!isDrawing) return;
    const pos = getPos(e);
    sigCtx.lineTo(pos.x, pos.y);
    sigCtx.stroke();
    e.preventDefault();
  }

  function stopDrawing() {
    isDrawing = false;
  }

  sigCanvas.addEventListener("mousedown", startDrawing);
  sigCanvas.addEventListener("mousemove", draw);
  window.addEventListener("mouseup", stopDrawing);

  sigCanvas.addEventListener("touchstart", startDrawing, { passive: false });
  sigCanvas.addEventListener("touchmove", draw, { passive: false });
  window.addEventListener("touchend", stopDrawing);
}

function clearSignatureCanvas() {
  if (sigCanvas && sigCtx) {
    sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
    hasSigned = false;
  }
}

function updateSelectedPhotoPreview(url) {
  selectedProofPhoto = url;
}

// 10. Commit & Broadcast Status Update
function commitStatusUpdate() {
  if (!activePackage) return;
  const isZh = (typeof currentLang !== "undefined" && currentLang === "zh-TW");

  const loc = document.getElementById("inputCheckpointLocation").value.trim() || activePackage.destination.name;
  const title = document.getElementById("inputCheckpointTitle").value.trim() || "Status Update";
  const detail = document.getElementById("inputCheckpointDetail").value.trim();

  // Clone package to mutate
  const updatedPkg = JSON.parse(JSON.stringify(activePackage));
  updatedPkg.status = selectedStatus;
  updatedPkg.statusTitle = title;
  updatedPkg.statusDescription = detail;

  // Now timestamp
  const now = new Date();
  const timeStr = `${now.getMonth() + 1}月${now.getDate()}日 ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // Handle status specific fields
  if (selectedStatus === "delivered") {
    updatedPkg.stopsRemaining = 0;
    updatedPkg.estimatedDate = isZh ? "今日已送達" : "Delivered Today";
    updatedPkg.estimatedWindow = isZh ? "已簽收完成" : "Delivered & Signed";
    
    // Proof details
    const recBy = document.getElementById("selectReceivedBy").value;
    const recName = document.getElementById("inputRecipientName").value;
    updatedPkg.proofPhoto = selectedProofPhoto;
    updatedPkg.proof = {
      receivedBy: `${recBy} (${recName})`,
      deliveredAt: timeStr,
      agent: `${updatedPkg.courier?.name || 'Alex Mercer'} (ID: 8812)`,
      signatureType: hasSigned ? "Digital Signature (電子手寫存證)" : "Contactless Verified",
      photo: selectedProofPhoto
    };

    // Update steps
    updatedPkg.steps.forEach(s => s.state = "completed");
  } else if (selectedStatus === "out_for_delivery") {
    updatedPkg.stopsRemaining = remainingStopsCount;
    updatedPkg.steps.forEach(s => {
      if (s.key === "out_for_delivery") s.state = "current";
      else if (s.key === "delivered") s.state = "upcoming";
      else s.state = "completed";
    });
  } else if (selectedStatus === "exception") {
    updatedPkg.steps.forEach(s => {
      if (s.key === "in_transit") s.state = "exception";
    });
  }

  // Prepend timeline checkpoint
  let iconName = "check-circle";
  if (selectedStatus === "out_for_delivery") iconName = "truck";
  else if (selectedStatus === "in_transit_hub") iconName = "package-check";
  else if (selectedStatus === "in_transit_linehaul") iconName = "plane";
  else if (selectedStatus === "exception") iconName = "alert-triangle";

  updatedPkg.timeline.unshift({
    time: timeStr,
    location: loc,
    title: title,
    detail: detail,
    icon: iconName,
    color: selectedStatus === "delivered" ? "emerald" : (selectedStatus === "exception" ? "amber" : "blue")
  });

  // Save to localStorage
  const cleanId = updatedPkg.trackingNumber.toUpperCase().trim();
  localStorage.setItem(`trackyours_pkg_${cleanId}`, JSON.stringify(updatedPkg));

  // Also play sound
  playSuccessChime();

  // Update activePackage state
  activePackage = updatedPkg;
  loadPackage(cleanId);

  // Add to Session Logs
  addSessionLog(cleanId, title, timeStr);

  // Show Success Modal
  document.getElementById("successModal").classList.remove("hidden");
}

function addSessionLog(trackingNo, actionTitle, time) {
  const container = document.getElementById("sessionLogContainer");
  const empty = document.getElementById("sessionLogEmpty");
  if (empty) empty.remove();

  sessionLogs.unshift({ trackingNo, actionTitle, time });
  document.getElementById("sessionLogCount").innerText = `${sessionLogs.length} 筆更新`;

  const itemHtml = `
    <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span class="font-mono font-bold text-blue-400">${trackingNo}</span>
        <span class="text-slate-300 font-medium">${actionTitle}</span>
      </div>
      <span class="text-[11px] text-slate-500">${time}</span>
    </div>
  `;
  container.insertAdjacentHTML('afterbegin', itemHtml);
}

function closeSuccessModal() {
  document.getElementById("successModal").classList.add("hidden");
}

function openCustomerTrackingPage() {
  if (!activePackage) return;
  window.open(`track.html?track=${activePackage.trackingNumber}`, '_blank');
  closeSuccessModal();
}

function resetToFactoryDemoData() {
  const isZh = (typeof currentLang !== "undefined" && currentLang === "zh-TW");
  if (confirm(isZh ? "確定要清除所有自訂手動修改，重設回原廠預設示範資料嗎？" : "Reset all manually updated statuses back to factory demo defaults?")) {
    // Clear all trackyours_pkg_* keys from localStorage
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith("trackyours_pkg_")) {
        localStorage.removeItem(k);
      }
    });
    showToast(isZh ? "已重設回原始預設值！" : "Factory demo data restored!");
    loadPackage("TRK-892341");
  }
}

// 11. Simulated Optical Scanner
function simulateBarcodeScan() {
  const modal = document.getElementById("scannerModal");
  const targetId = document.getElementById("scannerTargetId");
  if (activePackage) {
    targetId.innerText = activePackage.trackingNumber;
  }
  modal.classList.remove("hidden");

  // Auto beep and scan after 1.4s
  setTimeout(() => {
    if (!modal.classList.contains("hidden")) {
      triggerScannerBeep();
    }
  }, 1400);
}

function triggerScannerBeep() {
  playScannerBeep();
  closeScannerModal();
  showToast(`✅ 條碼掃描成功：${activePackage?.trackingNumber || 'TRK-892341'}`);
}

function closeScannerModal() {
  document.getElementById("scannerModal").classList.add("hidden");
}

// 12. Toast Feedback
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.innerText = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 3000);
}

// 13. Language Apply Helper for Driver Portal
function applyDriverLanguage() {
  const isZh = (typeof currentLang !== "undefined" && currentLang === "zh-TW");

  const texts = {
    terminalStatusText: isZh ? "Field Terminal Online (連線正常)" : "Field Terminal Online (Active)",
    headerSubtitle: isZh ? "外送員與物流站所更新終端" : "Courier Driver & Station Handheld Terminal",
    btnCustomerViewText: isZh ? "查看客戶追蹤頁" : "Customer Tracking View",
    tabCourierModeText: isZh ? "末端外送專員模式" : "Last-Mile Courier Mode",
    tabHubModeText: isZh ? "分揀轉運站模式" : "Hub & Station Mode",
    scanSectionTitle: isZh ? "選擇或掃描包裹單號" : "Select or Scan Package",
    scanSectionSub: isZh ? "可從現有任務清單選擇，或模擬手持光學條碼機掃描" : "Pick active assignment or simulate optical barcode scanner",
    btnSimulateScan: isZh ? "模擬光學條碼掃描" : "Simulate Barcode Scan",
    lblSelectPackage: isZh ? "選擇當前執勤包裹" : "Select Active Package",
    lblCustomCode: isZh ? "或手動輸入追蹤單號" : "Or Enter Tracking Number",
    formTitle: isZh ? "更新運送動態與簽收憑證" : "Update Status & Checkpoint Milestones",
    formSubtitle: isZh ? "選擇新狀態並輸入節點備註，送出後將即時同步更新至客戶追蹤頁面" : "Select new status and submit to synchronize live with customer tracking page",
    lblNewStatus: isZh ? "1. 選擇最新貨態 (New Status)" : "1. Select New Shipment Status",
    btnStatText_out: isZh ? "裝車派送中" : "Out for Delivery",
    btnStatText_hub: isZh ? "轉運樞紐掃描" : "Arrived at Hub",
    btnStatText_flight: isZh ? "幹線運輸/起飛" : "Linehaul Dispatch",
    btnStatText_delay: isZh ? "異常延誤回報" : "Exception / Delay",
    btnStatText_delivered: isZh ? "已簽收送達" : "Mark Delivered",
    lblCheckpointLocation: isZh ? "目前掃描站點 / 街道位置 (Location)" : "Current Scan Location / Checkpoint",
    lblCheckpointTitle: isZh ? "事件動態摘要標題 (Event Title)" : "Event Title / Summary",
    lblCheckpointDetail: isZh ? "詳細說明內容 (Checkpoint Detail)" : "Detailed Description",
    lblStopsSlider: isZh ? "外送專員距離目的地剩餘站數 (Stops Away)" : "Courier Stops Away from Destination",
    lblStopsDesc: isZh ? "同步更新客戶端地圖上方之倒數站數與即時 GPS 距離" : "Syncs countdown stops and GPS distance with customer map",
    lblProofHeader: isZh ? "簽收證明與拍照存證 (Proof of Delivery)" : "Proof of Delivery & Signature",
    lblReceivedBy: isZh ? "簽收人 / 放置位置 (Received By)" : "Drop-off Location / Received By",
    lblRecipientName: isZh ? "簽收人姓名 (Recipient Name)" : "Recipient Name",
    lblSignaturePad: isZh ? "電子數位手寫簽名 (Digital Signature Pad)" : "Digital Signature Pad (Draw with Touch / Mouse)",
    btnClearSignature: isZh ? "清除重新簽名" : "Clear Signature",
    lblDeliveryPhoto: isZh ? "門前送達照片證明 (Proof Photo)" : "Doorstep Delivery Proof Photo",
    btnResetDemoData: isZh ? "重設為原始預設值" : "Reset Demo Data",
    btnSubmitUpdate: isZh ? "儲存並同步發布至客戶端" : "Save & Sync to Customer Tracking",
    lblRecentTerminalLogs: isZh ? "本手持設備近期作業紀錄 (Session Log)" : "Recent Handheld Terminal Activity Log"
  };

  Object.keys(texts).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = texts[id];
  });
}
