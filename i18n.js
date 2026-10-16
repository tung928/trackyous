/**
 * TrackYourS - Internationalization (i18n) Module
 * English & Traditional Chinese (繁體中文)
 */

const I18N_DICTIONARY = {
  "en": {
    // Top bar
    "demo_badge": "Demo Mode (No Database Needed)",
    "demo_sub": "| Try sample packages or any tracking number",
    "sim_label": "Live Courier Sim:",
    "sim_off": "OFF",
    "sim_live": "LIVE (Active)",
    "hub_status": "Global Hub Status:",
    "hub_optimal": "Optimal",

    // Header
    "nav_track": "Track Shipment",
    "nav_how": "How It Works",
    "nav_carriers": "Supported Carriers",
    "nav_faq": "FAQ",
    "btn_alerts": "Alerts",
    "btn_print": "Print Proof",

    // Hero
    "hero_badge": "Universal Package Tracker & Status Visualizer",
    "hero_title_1": "Track Your Package in",
    "hero_title_highlight": "Real-Time",
    "hero_desc": "Enter any tracking number to see current transit milestones, live route GPS positioning, delivery estimates, and driver updates.",
    "input_placeholder": "e.g. TRK-892341 or enter any code...",
    "btn_track": "Track Now",
    "preset_title": "Try Preset Scenarios:",
    "preset_out_for_delivery": "🚚 Out for Delivery",
    "preset_in_transit": "✈️ In Transit (Air Express)",
    "preset_delivered": "✅ Delivered (With Photo)",
    "preset_weather_delay": "⚠️ Weather Delay / Exception",
    "preset_order_placed": "📦 Order Placed",

    // Dashboard Strip
    "tracking_no_label": "Tracking No:",
    "copy_toast": "Copied!",
    "est_delivery_title": "Estimated Delivery",
    "from_label": "From (Origin)",
    "to_label": "To (Destination)",
    "service_type_label": "Service Type",
    "security_label": "Security & Signature",

    // Map & Driver
    "live_route_title": "Live Transit Route Map",
    "gps_active": "GPS Active",
    "btn_center_map": "Center Map",
    "courier_pos_label": "Current Courier Position",
    "stops_away_label": "Stops Away",
    "btn_delivery_note": "Delivery Note",
    "btn_call_courier": "Call Courier",
    "driver_note_label": "📌 Note for driver:",

    // Timeline & Actions
    "activity_history_title": "Activity History",
    "manage_delivery_title": "Manage Delivery",
    "btn_reschedule": "Reschedule Date",
    "btn_hold_hub": "Hold at Pickup Hub",
    "btn_updates": "SMS/Email Updates",
    "btn_receipt": "View Proof Receipt",
    "stops_remaining_suffix": "stops away",

    // Proof Card
    "delivered_verified": "Delivered & Digitally Verified",
    "proof_on_file": "Proof on file",
    "delivered_by": "Delivered by driver",
    "view_proof_photo": "View Delivery Photo Proof",

    // How It Works
    "hiw_badge": "Logistics Architecture",
    "hiw_title": "How Package Tracking Works Under The Hood",
    "hiw_desc": "Every parcel moves through a barcode-scanning and telematics pipeline that powers customer tracking in real time.",
    "hiw_s1_t": "Barcode Label Creation",
    "hiw_s1_d": "Merchant generates an EDI/API electronic shipment label with a unique Tracking Number (Code 128 / Data Matrix).",
    "hiw_s2_t": "Sorting Hub Scanners",
    "hiw_s2_d": "High-speed optical tunnel scanners read packages on conveyor belts, publishing instant checkpoint events.",
    "hiw_s3_t": "Linehaul & Customs",
    "hiw_s3_d": "Air cargo or long-haul trucks move containers. Telematics transmit GPS telemetry and customs clearance stamps.",
    "hiw_s4_t": "Last-Mile & Proof",
    "hiw_s4_d": "Courier handheld scanner tracks final delivery stop, collects GPS coordinates, electronic signature, and doorstep photo.",

    // Carriers & FAQ
    "carriers_title": "Works with all major global postal & express carriers",
    "faq_title": "Frequently Asked Questions",
    "faq_sub": "Understanding package statuses and common delivery inquiries",
    "faq_q1": "What is the difference between \"In Transit\" and \"Out for Delivery\"?",
    "faq_a1": "<strong>In Transit</strong> means your parcel is traveling between distribution centers, airports, or freight hubs. <strong>Out for Delivery</strong> means the package has been loaded onto a local courier vehicle and will arrive at your destination address today.",
    "faq_q2": "Why hasn't the tracking status updated in 24-48 hours?",
    "faq_a2": "During long-distance transit (cross-country trucking or international maritime/cargo flights), packages do not get scanned until they arrive at the next major regional sort facility. This does not mean the package is lost.",
    "faq_q3": "Can I change my delivery address or instruct the driver where to leave the box?",
    "faq_a3": "Yes! You can use the \"Delivery Note\" button above to leave instructions (e.g. \"Leave behind porch planter\", gate code) or choose \"Hold at Pickup Hub\" to collect it in person at a nearby secure locker.",

    // Modals
    "m_alerts_title": "Delivery Alert Notifications",
    "m_alerts_sub": "Get free SMS or email updates whenever this shipment advances.",
    "m_alerts_email": "Email Address",
    "m_alerts_phone": "Mobile Phone (for SMS / WhatsApp)",
    "m_alerts_c1": "Alert when Out for Delivery",
    "m_alerts_c2": "Alert upon successful delivery & photo confirmation",
    "m_alerts_btn": "Subscribe to Updates",

    "m_resched_title": "Reschedule Delivery",
    "m_resched_sub": "Pick a convenient delivery window that fits your schedule.",
    "m_resched_date": "Select New Date",
    "m_resched_win": "Preferred Time Window",
    "m_resched_w1": "Morning (08:00 AM – 12:00 PM)",
    "m_resched_w2": "Afternoon (12:00 PM – 05:00 PM)",
    "m_resched_w3": "Evening (05:00 PM – 08:30 PM)",
    "m_resched_btn": "Confirm Reschedule",

    "m_hold_title": "Hold at Local Locker Hub",
    "m_hold_sub": "Redirect parcel to a 24/7 secure pickup locker or partner store.",
    "m_hold_opt1_title": "Downtown 24/7 Smart Locker",
    "m_hold_opt1_desc": "500 Pine St (0.4 miles away) • Open 24 Hours",
    "m_hold_opt2_title": "FedEx / Partner Retail Store",
    "m_hold_opt2_desc": "1200 4th Ave • Mon-Sat 8:00 AM - 9:00 PM",
    "m_hold_btn": "Redirect to Locker",

    "m_note_title": "Driver Delivery Note",
    "m_note_sub": "Directly relayed to the courier's handheld device.",
    "m_note_pref": "Drop-off Location Preference",
    "m_note_opt1": "Front Porch / Behind Planter",
    "m_note_opt2": "Building Reception / Doorman",
    "m_note_opt3": "Side Garage Door",
    "m_note_opt4": "Ring Bell & Hand Directly",
    "m_note_code": "Gate Code / Special Note",
    "m_note_ph": "e.g. Gate code #4910. Please do not leave in direct rain.",
    "m_note_btn": "Save Instructions for Driver",

    "m_call_title": "Calling Courier Driver",
    "m_call_sub": "A secure masked phone call will connect you with your assigned courier Alex Mercer.",
    "m_call_cancel": "Cancel",
    "m_call_connect": "Connect Call",

    "m_proof_title": "Proof of Delivery Receipt",
    "m_proof_sub": "Official digital carrier verification record",
    "m_proof_recby": "Received By:",
    "m_proof_delat": "Delivered At:",
    "m_proof_agent": "Carrier Agent:",
    "m_proof_sig": "Signature Type:",
    "m_proof_print": "Print Official Receipt",

    // Footer
    "footer_sub": "— Standalone Package Tracking Demo",
    "footer_desc": "Client-side prototype built without database dependencies. Works completely offline or in any modern browser."
  },

  "zh-TW": {
    // Top bar
    "demo_badge": "示範模式 (無需資料庫)",
    "demo_sub": "| 可點選範例包裹或輸入任意單號",
    "sim_label": "司機即時模擬:",
    "sim_off": "關閉",
    "sim_live": "運行中 (即時)",
    "hub_status": "全球物流中心狀態:",
    "hub_optimal": "運作正常",

    // Header
    "nav_track": "追蹤包裹",
    "nav_how": "運作原理",
    "nav_carriers": "支援物流商",
    "nav_faq": "常見問題",
    "btn_alerts": "配送提醒",
    "btn_print": "列印憑證",

    // Hero
    "hero_badge": "全方位包裹追蹤與動態視覺化平台",
    "hero_title_1": "即時掌握您的包裹",
    "hero_title_highlight": "最新動態",
    "hero_desc": "輸入任何追蹤單號，即刻查閱轉運節點、即時 GPS 路線定位、預計送達時間與外送員動態。",
    "input_placeholder": "例如：TRK-892341 或輸入任意單號...",
    "btn_track": "立即追蹤",
    "preset_title": "試試預設情境：",
    "preset_out_for_delivery": "🚚 派送中",
    "preset_in_transit": "✈️ 運送中 (航空快遞)",
    "preset_delivered": "✅ 已送達 (附照片簽收)",
    "preset_weather_delay": "⚠️ 天候延誤 / 異常",
    "preset_order_placed": "📦 訂單已建立",

    // Dashboard Strip
    "tracking_no_label": "追蹤單號：",
    "copy_toast": "已複製！",
    "est_delivery_title": "預計送達時間",
    "from_label": "出發地 (起點)",
    "to_label": "目的地 (終點)",
    "service_type_label": "服務類型",
    "security_label": "簽收與安全保障",

    // Map & Driver
    "live_route_title": "即時轉運與配送地圖",
    "gps_active": "GPS 連線中",
    "btn_center_map": "地圖置中",
    "courier_pos_label": "外送員當前位置",
    "stops_away_label": "剩餘站數",
    "btn_delivery_note": "配送備註",
    "btn_call_courier": "聯絡司機",
    "driver_note_label": "📌 司機備註：",

    // Timeline & Actions
    "activity_history_title": "運送軌跡歷程",
    "manage_delivery_title": "管理與變更配送",
    "btn_reschedule": "改期配送",
    "btn_hold_hub": "轉送智能自提櫃",
    "btn_updates": "簡訊 / 電郵通知",
    "btn_receipt": "查看簽收收據",
    "stops_remaining_suffix": "站後抵達",

    // Proof Card
    "delivered_verified": "已送達且經數位驗證",
    "proof_on_file": "憑證已建檔",
    "delivered_by": "由外送員親自送達",
    "view_proof_photo": "查看送達照片證明",

    // How It Works
    "hiw_badge": "物流科技架構",
    "hiw_title": "包裹追蹤技術背後的運作原理",
    "hiw_desc": "每個包裹在各物流環節皆經由條碼光學掃描與物聯網車載系統，向使用者提供毫秒級即時狀態更新。",
    "hiw_s1_t": "條碼電子標籤建立",
    "hiw_s1_d": "賣家透過電子數據交換 (EDI) 或 API 產生專屬物流條碼面單 (Code 128 / 二維碼)，登錄寄送規格與地址。",
    "hiw_s2_t": "分揀中心光學掃描",
    "hiw_s2_d": "高速光學隧道掃描儀在輸送帶上自動識別條碼，即時回傳入庫、分揀與裝箱時間戳記。",
    "hiw_s3_t": "幹線運輸與海關申報",
    "hiw_s3_d": "航空或跨省貨車運送集裝箱，車載物聯網傳送 GPS 經緯度，並於關口進行電子通關。",
    "hiw_s4_t": "末端派送與數位簽收",
    "hiw_s4_d": "外送員手持終端指派最後一哩路，送達時精確記錄 GPS 座標、電子手寫簽名與門前拍照存證。",

    // Carriers & FAQ
    "carriers_title": "支援全球各大主流快遞與郵政系統",
    "faq_title": "常見問題解答",
    "faq_sub": "深入了解物流運送狀態與常見疑問",
    "faq_q1": "「運送中 (In Transit)」與「派送中 (Out for Delivery)」有何不同？",
    "faq_a1": "<strong>「運送中 (In Transit)」</strong>代表包裹正於跨國航空、幹線貨車或各大分揀轉運中心之間移動。<strong>「派送中 (Out for Delivery)」</strong>則表示包裹已抵達當地的末端營業所，並已裝入外送專車，預計於當天送達您的收件地址。",
    "faq_q2": "為何追蹤動態超過 24 至 48 小時沒有更新？",
    "faq_a2": "在長途跨省陸運或跨國長途飛行期間，貨物在途中不會經過掃描站，直到班機降落或貨車抵達下一站大型區域分揀樞紐後才會更新狀態。這屬於正常運送流程，並不代表包裹遺失。",
    "faq_q3": "我可以更改送貨地址或指定司機放置包裹的位置嗎？",
    "faq_a3": "可以！您可使用上方的<strong>「配送備註」</strong>按鈕留下具體交代（例如：請放在門口盆栽後、大門密碼），或點選<strong>「轉送智能自提櫃」</strong>以便於您方便的時段 24 小時隨時取件。",

    // Modals
    "m_alerts_title": "訂閱包裹動態提醒",
    "m_alerts_sub": "包裹狀態有所變動時，即時透過免費簡訊或電子郵件通知您。",
    "m_alerts_email": "電子郵件地址",
    "m_alerts_phone": "手機號碼 (用於 SMS / WhatsApp 簡訊通知)",
    "m_alerts_c1": "當包裹出發派送時立即通知",
    "m_alerts_c2": "當成功送達並附帶照片證明時立即通知",
    "m_alerts_btn": "確認訂閱通知",

    "m_resched_title": "重新預約配送日期",
    "m_resched_sub": "選擇最符合您時間的方便送達時段。",
    "m_resched_date": "選擇新配送日期",
    "m_resched_win": "偏好配送時段",
    "m_resched_w1": "上午 (08:00 AM – 12:00 PM)",
    "m_resched_w2": "下午 (12:00 PM – 05:00 PM)",
    "m_resched_w3": "晚間 (05:00 PM – 08:30 PM)",
    "m_resched_btn": "確認變更預約",

    "m_hold_title": "轉送至鄰近智能自提櫃",
    "m_hold_sub": "將包裹轉送至 24 小時智慧儲物櫃或合作超商自提點。",
    "m_hold_opt1_title": "市中心 24小時 智慧取件櫃",
    "m_hold_opt1_desc": "松高路 500 號 (距離 0.4 公里) • 全天 24 小時開放",
    "m_hold_opt2_title": "FedEx / 合作便利商店門市",
    "m_hold_opt2_desc": "忠孝東路四段 1200 號 • 週一至週六 8:00 AM - 9:00 PM",
    "m_hold_btn": "確認轉送至自提櫃",

    "m_note_title": "外送員配送備註",
    "m_note_sub": "此備註將直接顯示於外送員的手持工作終端設備上。",
    "m_note_pref": "指定放置地點偏好",
    "m_note_opt1": "門前廊下 / 隱蔽盆栽後方",
    "m_note_opt2": "大樓管理室 / 物業警衛代收",
    "m_note_opt3": "車庫側門旁",
    "m_note_opt4": "按門鈴親自交付手中",
    "m_note_code": "門禁密碼 / 特殊交待事項",
    "m_note_ph": "例如：大門密碼 #4910。若下雨請勿放置於無遮雨處。",
    "m_note_btn": "儲存外送員指示",

    "m_call_title": "致電專屬外送員",
    "m_call_sub": "系統將使用加密虛擬安全號碼撥通您的外送員 Alex Mercer。",
    "m_call_cancel": "取消",
    "m_call_connect": "立即撥打",

    "m_proof_title": "官方簽收送達收據",
    "m_proof_sub": "物流承運商官方數位驗證紀錄",
    "m_proof_recby": "簽收人 / 放置處：",
    "m_proof_delat": "送達時間：",
    "m_proof_agent": "承運外送專員：",
    "m_proof_sig": "簽核驗證模式：",
    "m_proof_print": "列印正式簽收單",

    // Footer
    "footer_sub": "— 獨立前端包裹追蹤展示系統",
    "footer_desc": "無須資料庫與後端伺服器依賴，純前端實時動態展示。完全支援任何現代網頁瀏覽器。"
  }
};

// Traditional Chinese localized overrides for preset packages
const PACKAGES_ZH_TW = {
  "TRK-892341": {
    carrier: "DHL Express 國際快遞",
    serviceLevel: "全球特快專遞 (Express Worldwide)",
    statusTitle: "派送中 (Out for Delivery)",
    statusDescription: "您的包裹已由專屬外送員 Alex Mercer 裝車派送中，預計今日下午 4:30 前送達收件地址。",
    estimatedDate: "今天 (10月16日)",
    estimatedWindow: "預估時段：下午 1:30 – 4:30",
    origin: {
      name: "美國 加州 舊金山",
      hub: "舊金山國際航空貨運中心 (SFO)"
    },
    destination: {
      name: "美國 華盛頓州 西雅圖",
      address: "西雅圖市 常青路 742 號 (98101)"
    },
    signatureRequired: "需收件人本人親自簽名",
    courier: {
      name: "Alex Mercer",
      role: "DHL 特快專屬外送員",
      vehicle: "奔馳 Sprinter (車號 #412)"
    },
    steps: [
      { key: "ordered", label: "訂單已建立", date: "10月14日 09:15" },
      { key: "shipped", label: "已攬件出庫", date: "10月14日 16:30" },
      { key: "in_transit", label: "幹線轉運中", date: "10月15日 08:20" },
      { key: "out_for_delivery", label: "今日派送中", date: "10月16日 08:45" },
      { key: "delivered", label: "已簽收送達", date: "預估今日" }
    ],
    timeline: [
      {
        time: "今天 08:45",
        location: "西雅圖分揀中心",
        title: "包裹已裝上派送專車",
        detail: "包裹通過光學掃描，並已編入 Alex Mercer 的 #412 車次進行末端派送。"
      },
      {
        time: "今天 05:15",
        location: "西雅圖區域配送轉運站",
        title: "抵達目的地轉運樞紐",
        detail: "貨櫃拆封完成，自動化高速輸送帶完成分流掃描。"
      },
      {
        time: "昨天 22:40",
        location: "波特蘭區域轉運站",
        title: "已離開轉運中心",
        detail: "陸運幹線卡車發車，開往西雅圖分揀中心。"
      },
      {
        time: "昨天 14:15",
        location: "舊金山航空貨運站",
        title: "貨機降落並完成卸載",
        detail: "DHL-310 國內定期貨機順利降落並完成安全放行。"
      },
      {
        time: "10月14日 16:30",
        location: "舊金山電商發貨倉",
        title: "快遞員已成功攬件",
        detail: "掃描寄件條碼，正式由物流網路接管運送。"
      }
    ]
  },

  "DHL-492104": {
    carrier: "DHL Express 全球航空快遞",
    serviceLevel: "航空特快優先服務 (Air Priority)",
    statusTitle: "跨國運送中 (國際航空貨運)",
    statusDescription: "包裹已通過海關出口檢驗，目前正搭乘跨太平洋定期貨運班機前往洛杉磯轉運樞紐。",
    estimatedDate: "明天 (10月17日)",
    estimatedWindow: "預計於下午 12:00 前抵達",
    origin: {
      name: "日本 東京",
      hub: "成田國際航空貨運樞紐 (NRT)"
    },
    destination: {
      name: "美國 加州 洛杉磯",
      address: "洛杉磯環球影城大道 100 號 (91608)"
    },
    signatureRequired: "成人親自簽名 (滿 21 歲)",
    courier: {
      name: "DHL 飛行機組 #882",
      role: "跨太平洋洲際貨運",
      vehicle: "波音 777F 全貨機"
    },
    steps: [
      { key: "ordered", label: "訂單建立", date: "10月13日" },
      { key: "shipped", label: "東京已攬件", date: "10月14日" },
      { key: "in_transit", label: "跨洋航行中", date: "10月16日" },
      { key: "out_for_delivery", label: "抵美清關派送", date: "10月17日" },
      { key: "delivered", label: "簽收完成", date: "待抵達" }
    ],
    timeline: [
      {
        time: "今天 11:20",
        location: "太平洋上空航路",
        title: "航行情資回傳正常",
        detail: "班機 DHL-882 巡航高度 36,000 呎，預計 4 小時 15 分後抵達洛杉磯國際機場 (LAX)。"
      },
      {
        time: "今天 06:10",
        location: "東京成田國際機場 (NRT)",
        title: "海關出口放行並起飛",
        detail: "電子報關程序完畢，貨箱完成配載起飛。"
      },
      {
        time: "10月15日 21:45",
        location: "東京國際樞紐中心",
        title: "通過國際關口自動化分揀",
        detail: "通過自動化安檢 X 光機與規格檢測。"
      }
    ]
  },

  "FDX-771920": {
    carrier: "FedEx 聯邦快遞",
    serviceLevel: "FedEx 2Day® 特快",
    statusTitle: "已送達 — 拍照存證與電子簽收",
    statusDescription: "包裹已安全放置於收件地址大門門廊，外送員 Marcus 已完成數位拍照存證。",
    estimatedDate: "已於 10月16日 送達",
    estimatedWindow: "送達時間：下午 2:15",
    origin: {
      name: "美國 德州 奧斯汀",
      hub: "奧斯汀分揀中心"
    },
    destination: {
      name: "美國 紐約州 紐約市",
      address: "紐約市第五大道 350 號 (10118)"
    },
    signatureRequired: "免接觸拍照存證簽收",
    courier: {
      name: "Marcus Vance",
      role: "FedEx 區域專職外送領班",
      vehicle: "Freightliner 特快專用車 #81"
    },
    steps: [
      { key: "ordered", label: "訂單建立", date: "10月12日" },
      { key: "shipped", label: "已出貨", date: "10月13日" },
      { key: "in_transit", label: "轉運中", date: "10月14日" },
      { key: "out_for_delivery", label: "派送中", date: "10月16日" },
      { key: "delivered", label: "已送達 (14:15)", date: "10月16日" }
    ],
    timeline: [
      {
        time: "今天 14:15",
        location: "紐約市 目的地門市",
        title: "包裹已成功送達並拍照記錄",
        detail: "已放置於大門前廊。數位照片與 GPS 座標已傳送至承運系統存證。"
      },
      {
        time: "今天 08:30",
        location: "FedEx 紐約曼哈頓營運站",
        title: "已由專車出發派送",
        detail: "外送員 Marcus Vance 展開當日配送。"
      },
      {
        time: "10月15日 23:00",
        location: "紐瓦克轉運樞紐",
        title: "抵達區域轉運中心",
        detail: "幹線聯結車順利抵達並完成卸貨掃描。"
      }
    ]
  },

  "UPS-339218": {
    carrier: "UPS 優比速陸運",
    serviceLevel: "UPS Ground™ 標準陸運",
    statusTitle: "配送改期 — 暴風雪天候預警延誤",
    statusDescription: "山區路段發布暴雪封路警報，陸運班次暫時滯留轉運站，預計送達日期已順延至明天。",
    estimatedDate: "明天 (10月17日)",
    estimatedWindow: "更新時段：上午 10:00 – 下午 2:00",
    origin: {
      name: "美國 科羅拉多州 丹佛",
      hub: "丹佛區域物流中心"
    },
    destination: {
      name: "美國 伊利諾州 芝加哥",
      address: "芝加哥市瓦克大道 233 號 (60606)"
    },
    signatureRequired: "標準投遞",
    courier: {
      name: "中西部調度指揮部",
      role: "UPS 陸運調度中心",
      vehicle: "州際長途聯結車"
    },
    steps: [
      { key: "ordered", label: "訂單建立", date: "10月13日" },
      { key: "shipped", label: "已出貨", date: "10月14日" },
      { key: "in_transit", label: "天候受阻", date: "10月16日" },
      { key: "out_for_delivery", label: "預約派送", date: "10月17日" },
      { key: "delivered", label: "簽收送達", date: "待抵達" }
    ],
    timeline: [
      {
        time: "今天 09:30",
        location: "奧馬哈中繼轉運站",
        title: "天候惡劣暫停發車",
        detail: "州警因強烈暴風雪暫時封閉 80 號州際公路。貨品現安全存放於溫控倉庫待命。"
      },
      {
        time: "10月15日 18:15",
        location: "丹佛貨運中心",
        title: "離開丹佛轉運站",
        detail: "長途幹線車輛啟程出發。"
      }
    ]
  },

  "USPS-110293": {
    carrier: "美國郵政 (USPS Priority Mail)",
    serviceLevel: "USPS Priority Mail 2-Day™",
    statusTitle: "電子面單已建立，郵局等待取件中",
    statusDescription: "賣家已列印物流面單，系統已收到電子預報資訊，正等待郵差收件。",
    estimatedDate: "預估 10月19日 - 10月20日",
    estimatedWindow: "預估約 3-4 個工作天送達",
    origin: {
      name: "美國 佛羅里達州 邁阿密",
      hub: "邁阿密商家出貨中心"
    },
    destination: {
      name: "美國 喬治亞州 亞特蘭大",
      address: "亞特蘭大桃樹街 NE (30309)"
    },
    signatureRequired: "無需簽名",
    courier: {
      name: "邁阿密郵政第 14 分局",
      role: "攬收營業所人員",
      vehicle: "USPS 郵務車"
    },
    steps: [
      { key: "ordered", label: "電子資訊接收", date: "10月16日 06:30" },
      { key: "shipped", label: "郵局攬收", date: "待取件" },
      { key: "in_transit", label: "郵務轉運", date: "待轉運" },
      { key: "out_for_delivery", label: "投遞派送", date: "待派送" },
      { key: "delivered", label: "信箱送達", date: "待抵達" }
    ],
    timeline: [
      {
        time: "今天 06:30",
        location: "邁阿密出貨倉",
        title: "電子郵資面單已建立 (寄件預報)",
        detail: "賣方列印 USPS 追蹤條碼面單，等待定期郵務車輛攬收。"
      }
    ]
  }
};

// Global Current Language State
let currentLang = localStorage.getItem("trackyours_lang") || "zh-TW"; // default to Traditional Chinese

function getTranslation(key) {
  const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY["en"];
  return dict[key] || I18N_DICTIONARY["en"][key] || key;
}

function setLanguage(lang) {
  if (lang !== "en" && lang !== "zh-TW") return;
  currentLang = lang;
  localStorage.setItem("trackyours_lang", lang);
  document.documentElement.lang = lang === "zh-TW" ? "zh-Hant" : "en";

  // Update UI texts
  applyTranslations();

  // If a package is currently loaded, re-render it
  if (typeof currentPackage !== "undefined" && currentPackage) {
    // Re-blend localized data
    applyLocalizationToCurrentPackage();
    if (typeof renderDashboard === "function") {
      renderDashboard(currentPackage);
    }
  }

  // Update dropdown button label & checks
  updateLangDropdownUI();

  // Close dropdown menu if open
  const menu = document.getElementById("langMenu");
  if (menu) menu.classList.add("hidden");

  // Show Toast
  const msg = lang === "zh-TW" ? "語言已切換為：繁體中文" : "Language switched to: English";
  if (typeof showToast === "function") {
    showToast(msg);
  }
}

function toggleLangMenu() {
  const menu = document.getElementById("langMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

function updateLangDropdownUI() {
  const label = document.getElementById("currentLangLabel");
  const checkEn = document.getElementById("check-en");
  const checkZh = document.getElementById("check-zh");

  if (label) {
    label.innerText = currentLang === "zh-TW" ? "繁體中文" : "English";
  }
  if (checkEn) {
    checkEn.classList.toggle("hidden", currentLang !== "en");
  }
  if (checkZh) {
    checkZh.classList.toggle("hidden", currentLang !== "zh-TW");
  }
}

function applyTranslations() {
  // Translate standard data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = getTranslation(key);
    if (val) {
      el.innerText = val;
    }
  });

  // Translate HTML data-i18n-html elements
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    const val = getTranslation(key);
    if (val) {
      el.innerHTML = val;
    }
  });

  // Translate input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = getTranslation(key);
    if (val) {
      el.setAttribute("placeholder", val);
    }
  });
}

function applyLocalizationToCurrentPackage() {
  if (!currentPackage) return;
  const num = currentPackage.trackingNumber;

  if (currentLang === "zh-TW" && PACKAGES_ZH_TW[num]) {
    const zh = PACKAGES_ZH_TW[num];
    currentPackage.carrier = zh.carrier;
    currentPackage.serviceLevel = zh.serviceLevel;
    currentPackage.statusTitle = zh.statusTitle;
    currentPackage.statusDescription = zh.statusDescription;
    currentPackage.estimatedDate = zh.estimatedDate;
    currentPackage.estimatedWindow = zh.estimatedWindow;
    currentPackage.origin.name = zh.origin.name;
    currentPackage.origin.hub = zh.origin.hub;
    currentPackage.destination.name = zh.destination.name;
    currentPackage.destination.address = zh.destination.address;
    currentPackage.signatureRequired = zh.signatureRequired;
    currentPackage.courier.role = zh.courier.role;
    currentPackage.courier.vehicle = zh.courier.vehicle;
    if (zh.courier.name) currentPackage.courier.name = zh.courier.name;
    
    // Steps
    if (zh.steps && zh.steps.length) {
      currentPackage.steps.forEach((st, idx) => {
        if (zh.steps[idx]) {
          st.label = zh.steps[idx].label;
          st.date = zh.steps[idx].date;
        }
      });
    }

    // Timeline
    if (zh.timeline && zh.timeline.length) {
      currentPackage.timeline.forEach((tl, idx) => {
        if (zh.timeline[idx]) {
          tl.time = zh.timeline[idx].time;
          tl.location = zh.timeline[idx].location;
          tl.title = zh.timeline[idx].title;
          tl.detail = zh.timeline[idx].detail;
        }
      });
    }
  } else if (PACKAGES_DB[num]) {
    // Revert back to English original from DB
    const orig = PACKAGES_DB[num];
    currentPackage.carrier = orig.carrier;
    currentPackage.serviceLevel = orig.serviceLevel;
    currentPackage.statusTitle = orig.statusTitle;
    currentPackage.statusDescription = orig.statusDescription;
    currentPackage.estimatedDate = orig.estimatedDate;
    currentPackage.estimatedWindow = orig.estimatedWindow;
    currentPackage.origin.name = orig.origin.name;
    currentPackage.origin.hub = orig.origin.hub;
    currentPackage.destination.name = orig.destination.name;
    currentPackage.destination.address = orig.destination.address;
    currentPackage.signatureRequired = orig.signatureRequired;
    currentPackage.courier.role = orig.courier.role;
    currentPackage.courier.vehicle = orig.courier.vehicle;
    if (orig.courier.name) currentPackage.courier.name = orig.courier.name;

    if (orig.steps && orig.steps.length) {
      currentPackage.steps.forEach((st, idx) => {
        if (orig.steps[idx]) {
          st.label = orig.steps[idx].label;
          st.date = orig.steps[idx].date;
        }
      });
    }

    if (orig.timeline && orig.timeline.length) {
      currentPackage.timeline.forEach((tl, idx) => {
        if (orig.timeline[idx]) {
          tl.time = orig.timeline[idx].time;
          tl.location = orig.timeline[idx].location;
          tl.title = orig.timeline[idx].title;
          tl.detail = orig.timeline[idx].detail;
        }
      });
    }
  }
}

// Close language dropdown on clicking outside
document.addEventListener("click", (e) => {
  const btn = document.getElementById("langDropdownBtn");
  const menu = document.getElementById("langMenu");
  if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
