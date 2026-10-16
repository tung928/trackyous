/**
 * TrackYourS - Package Tracking Demonstration Script
 * Completely client-side (No database required)
 */

// 1. Preset Packages Dataset
const PACKAGES_DB = {
  "TRK-892341": {
    trackingNumber: "TRK-892341",
    carrier: "DHL Express",
    serviceLevel: "Express Worldwide",
    weight: "2.4 kg (5.3 lbs)",
    dimensions: "32 x 22 x 10 cm",
    status: "out_for_delivery",
    statusTitle: "Out for Delivery",
    statusDescription: "Your package is on the local delivery van with courier Alex Mercer. Estimated arrival before 4:30 PM.",
    statusBadgeColor: "blue",
    estimatedDate: "Today, Oct 16",
    estimatedWindow: "1:30 PM – 4:30 PM",
    origin: {
      name: "San Francisco, CA, USA",
      hub: "SFO International Cargo Center",
      coords: [37.7749, -122.4194]
    },
    destination: {
      name: "Seattle, WA, USA",
      address: "742 Evergreen Terrace, Seattle, WA 98101",
      coords: [47.6062, -122.3321]
    },
    currentCourierPos: [47.6015, -122.3380], // Near destination in Seattle
    stopsRemaining: 3,
    signatureRequired: "Direct Signature Required",
    courier: {
      name: "Alex Mercer",
      rating: "4.9",
      role: "Assigned Express Courier",
      vehicle: "Mercedes Sprinter (Van #412)",
      phone: "+1 (800) 555-0199",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80"
    },
    steps: [
      { key: "ordered", label: "Order Created", date: "Oct 14, 09:15 AM", state: "completed" },
      { key: "shipped", label: "Picked Up", date: "Oct 14, 04:30 PM", state: "completed" },
      { key: "in_transit", label: "In Transit", date: "Oct 15, 08:20 AM", state: "completed" },
      { key: "out_for_delivery", label: "Out for Delivery", date: "Oct 16, 08:45 AM", state: "current" },
      { key: "delivered", label: "Delivered", date: "Pending", state: "upcoming" }
    ],
    timeline: [
      {
        time: "Today, 08:45 AM",
        location: "Seattle Sort Facility, WA",
        title: "Loaded onto Delivery Vehicle",
        detail: "Package has been scanned and sorted into delivery route #412 with Alex Mercer.",
        icon: "truck",
        color: "blue"
      },
      {
        time: "Today, 05:15 AM",
        location: "Seattle Distribution Center, WA",
        title: "Arrived at Destination Hub",
        detail: "Container unsealed and processed through optical sorting facility.",
        icon: "package-check",
        color: "emerald"
      },
      {
        time: "Yesterday, 10:40 PM",
        location: "Portland Regional Gateway, OR",
        title: "Departed Sorting Hub",
        detail: "Ground linehaul transport en route to Seattle facility.",
        icon: "arrow-up-right",
        color: "slate"
      },
      {
        time: "Yesterday, 02:15 PM",
        location: "San Francisco Air Cargo, CA",
        title: "Flight Arrived & Cleared",
        detail: "Domestic cargo flight DHL-310 landed successfully.",
        icon: "plane",
        color: "slate"
      },
      {
        time: "Oct 14, 04:30 PM",
        location: "San Francisco Warehouse, CA",
        title: "Shipment Picked Up by Courier",
        detail: "Barcode generated and scanned by initial pickup vehicle.",
        icon: "box",
        color: "slate"
      }
    ]
  },

  "DHL-492104": {
    trackingNumber: "DHL-492104",
    carrier: "DHL Express Global",
    serviceLevel: "Air Priority Express",
    weight: "4.8 kg (10.5 lbs)",
    dimensions: "45 x 30 x 15 cm",
    status: "in_transit",
    statusTitle: "In Transit (International Flight)",
    statusDescription: "Package has cleared customs inspection and is on international linehaul cargo flight en route to Los Angeles Hub.",
    statusBadgeColor: "amber",
    estimatedDate: "Tomorrow, Oct 17",
    estimatedWindow: "By 12:00 PM End of Day",
    origin: {
      name: "Tokyo, Japan",
      hub: "Narita International Cargo Hub (NRT)",
      coords: [35.7719, 140.3929]
    },
    destination: {
      name: "Los Angeles, CA, USA",
      address: "100 Universal City Plaza, Los Angeles, CA 91608",
      coords: [34.0522, -118.2437]
    },
    currentCourierPos: [36.2048, 170.0], // Mid-Pacific Ocean flight corridor
    stopsRemaining: 2,
    signatureRequired: "Adult Signature Required (21+)",
    courier: {
      name: "DHL Flight Crew #882",
      rating: "5.0",
      role: "Transpacific Air Freight",
      vehicle: "Boeing 777F Cargo",
      phone: "+1 (800) 225-5345",
      avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=160&h=160&q=80"
    },
    steps: [
      { key: "ordered", label: "Order Created", date: "Oct 13", state: "completed" },
      { key: "shipped", label: "Picked Up (Tokyo)", date: "Oct 14", state: "completed" },
      { key: "in_transit", label: "In Flight (Transpacific)", date: "Oct 16", state: "current" },
      { key: "out_for_delivery", label: "Local Dispatch", date: "Oct 17", state: "upcoming" },
      { key: "delivered", label: "Delivered", date: "Pending", state: "upcoming" }
    ],
    timeline: [
      {
        time: "Today, 11:20 AM",
        location: "Pacific Air Corridor",
        title: "In-Flight Telemetry Normal",
        detail: "Flight DHL-882 cruising altitude 36,000 ft, estimated landfall at LAX in 4h 15m.",
        icon: "plane",
        color: "blue"
      },
      {
        time: "Today, 06:10 AM",
        location: "Tokyo Narita Airport (NRT)",
        title: "Export Customs Cleared & Departed",
        detail: "Electronic export declaration validated and container loaded onto cargo freighter.",
        icon: "check-circle",
        color: "emerald"
      },
      {
        time: "Oct 15, 09:45 PM",
        location: "Tokyo Sort Hub, Japan",
        title: "Processed at International Gateway",
        detail: "Passed automated security x-ray and barcode screening.",
        icon: "box",
        color: "slate"
      }
    ]
  },

  "FDX-771920": {
    trackingNumber: "FDX-771920",
    carrier: "FedEx Home Delivery",
    serviceLevel: "FedEx 2Day®",
    weight: "1.1 kg (2.4 lbs)",
    dimensions: "20 x 15 x 8 cm",
    status: "delivered",
    statusTitle: "Delivered — Signed & Photo Confirmed",
    statusDescription: "Package delivered at front porch. Photo verification captured by driver Marcus.",
    statusBadgeColor: "emerald",
    estimatedDate: "Delivered Oct 16",
    estimatedWindow: "Delivered at 2:15 PM",
    origin: {
      name: "Austin, TX, USA",
      hub: "Austin Bergstrom Sort Hub",
      coords: [30.2672, -97.7431]
    },
    destination: {
      name: "New York, NY, USA",
      address: "350 5th Avenue, New York, NY 10118",
      coords: [40.7128, -74.0060]
    },
    currentCourierPos: [40.7128, -74.0060], // At destination
    stopsRemaining: 0,
    signatureRequired: "Contactless Photo Verified",
    courier: {
      name: "Marcus Vance",
      rating: "4.9",
      role: "FedEx Route Lead",
      vehicle: "Freightliner Custom Van #81",
      phone: "+1 (800) 463-3339",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80"
    },
    proofPhoto: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    steps: [
      { key: "ordered", label: "Order Placed", date: "Oct 12", state: "completed" },
      { key: "shipped", label: "Shipped", date: "Oct 13", state: "completed" },
      { key: "in_transit", label: "In Transit", date: "Oct 14", state: "completed" },
      { key: "out_for_delivery", label: "Out for Delivery", date: "Oct 16", state: "completed" },
      { key: "delivered", label: "Delivered (2:15 PM)", date: "Oct 16", state: "completed" }
    ],
    timeline: [
      {
        time: "Today, 02:15 PM",
        location: "New York, NY",
        title: "Package Delivered & Photo Recorded",
        detail: "Delivered to Front Door. Secure digital photo signature attached to consignment record.",
        icon: "check-circle",
        color: "emerald"
      },
      {
        time: "Today, 08:30 AM",
        location: "FedEx Midtown Station, NY",
        title: "On FedEx Vehicle for Delivery",
        detail: "Dispatched with driver Marcus Vance.",
        icon: "truck",
        color: "blue"
      },
      {
        time: "Oct 15, 11:00 PM",
        location: "Newark Gateway Hub, NJ",
        title: "Arrived at Regional Sort Center",
        detail: "Unloaded from regional linehaul tractor.",
        icon: "package",
        color: "slate"
      }
    ]
  },

  "UPS-339218": {
    trackingNumber: "UPS-339218",
    carrier: "UPS Ground",
    serviceLevel: "UPS Ground™",
    weight: "8.2 kg (18.0 lbs)",
    dimensions: "50 x 40 x 30 cm",
    status: "exception",
    statusTitle: "Delivery Rescheduled — Severe Weather Alert",
    statusDescription: "A severe winter weather advisory in the mountain pass has temporarily delayed transport. Delivery updated to tomorrow.",
    statusBadgeColor: "amber",
    estimatedDate: "Tomorrow, Oct 17",
    estimatedWindow: "Updated window: 10:00 AM – 2:00 PM",
    origin: {
      name: "Denver, CO, USA",
      hub: "Denver Regional Freight Center",
      coords: [39.7392, -104.9903]
    },
    destination: {
      name: "Chicago, IL, USA",
      address: "233 S Wacker Dr, Chicago, IL 60606",
      coords: [41.8781, -87.6298]
    },
    currentCourierPos: [41.2565, -95.9345], // Omaha intermediate hub
    stopsRemaining: 1,
    signatureRequired: "Standard Delivery",
    courier: {
      name: "Regional Freight Ops",
      rating: "4.8",
      role: "Midwest Logistics Dispatch",
      vehicle: "Interstate Freight Tractor",
      phone: "+1 (800) 742-5877",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80"
    },
    steps: [
      { key: "ordered", label: "Order Created", date: "Oct 13", state: "completed" },
      { key: "shipped", label: "Shipped", date: "Oct 14", state: "completed" },
      { key: "in_transit", label: "Weather Exception", date: "Oct 16", state: "exception" },
      { key: "out_for_delivery", label: "Local Dispatch", date: "Oct 17", state: "upcoming" },
      { key: "delivered", label: "Delivered", date: "Pending", state: "upcoming" }
    ],
    timeline: [
      {
        time: "Today, 09:30 AM",
        location: "Omaha Intermediate Hub, NE",
        title: "Weather Advisory Hold",
        detail: "Highway state patrol closed I-80 corridor due to blizzard warning. Shipment safely staged at climate-controlled hub.",
        icon: "alert-triangle",
        color: "amber"
      },
      {
        time: "Oct 15, 06:15 PM",
        location: "Denver Freight Gateway, CO",
        title: "Departed Denver Hub",
        detail: "Long haul transport departed.",
        icon: "truck",
        color: "slate"
      }
    ]
  },

  "USPS-110293": {
    trackingNumber: "USPS-110293",
    carrier: "USPS Priority Mail",
    serviceLevel: "Priority Mail 2-Day™",
    weight: "0.6 kg (1.3 lbs)",
    dimensions: "25 x 18 x 5 cm",
    status: "order_placed",
    statusTitle: "Shipping Label Created, USPS Awaiting Item",
    statusDescription: "A shipping label has been prepared by merchant. USPS has been electronically notified and awaits package pickup.",
    statusBadgeColor: "blue",
    estimatedDate: "Est. Oct 19 - Oct 20",
    estimatedWindow: "Expected delivery in 3-4 days",
    origin: {
      name: "Miami, FL, USA",
      hub: "Miami Merchant Logistics Depot",
      coords: [25.7617, -80.1918]
    },
    destination: {
      name: "Atlanta, GA, USA",
      address: "Peachtree St NE, Atlanta, GA 30309",
      coords: [33.7490, -84.3880]
    },
    currentCourierPos: [25.7617, -80.1918],
    stopsRemaining: 5,
    signatureRequired: "No Signature Required",
    courier: {
      name: "Miami Postal Unit #14",
      rating: "4.7",
      role: "Origin Facility Staff",
      vehicle: "USPS LLV Mail Truck",
      phone: "+1 (800) 275-8777",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80"
    },
    steps: [
      { key: "ordered", label: "Electronic Info Received", date: "Oct 16, 06:30 AM", state: "current" },
      { key: "shipped", label: "USPS Acceptance", date: "Pending", state: "upcoming" },
      { key: "in_transit", label: "In Transit", date: "Pending", state: "upcoming" },
      { key: "out_for_delivery", label: "Out for Delivery", date: "Pending", state: "upcoming" },
      { key: "delivered", label: "Delivered", date: "Pending", state: "upcoming" }
    ],
    timeline: [
      {
        time: "Today, 06:30 AM",
        location: "Miami, FL",
        title: "Shipping Label Created (Pre-Shipment)",
        detail: "Merchant printed electronic USPS tracking label. Package awaiting scheduled courier handoff.",
        icon: "file-text",
        color: "blue"
      }
    ]
  }
};

// 2. Global State
let currentPackage = null;
let leafletMap = null;
let mapMarkers = [];
let routePolyline = null;
let courierMarker = null;
let simulationInterval = null;
let isSimulating = false;

// 3. Dynamic Generator for Custom Tracking Numbers (Deterministic hash-based)
function generateDynamicPackage(trackingId) {
  const cleanId = trackingId.toUpperCase().trim();
  let hash = 0;
  for (let i = 0; i < cleanId.length; i++) {
    hash = (hash << 5) - hash + cleanId.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  const carriers = ["DHL Express", "FedEx Express", "UPS Worldwide", "USPS Priority", "Royal Mail Global"];
  const cities = [
    { name: "New York, NY", coords: [40.7128, -74.0060] },
    { name: "Chicago, IL", coords: [41.8781, -87.6298] },
    { name: "Dallas, TX", coords: [32.7767, -96.7970] },
    { name: "Phoenix, AZ", coords: [33.4484, -112.0740] },
    { name: "San Francisco, CA", coords: [37.7749, -122.4194] },
    { name: "London, UK", coords: [51.5074, -0.1278] },
    { name: "Frankfurt, DE", coords: [50.1109, 8.6821] }
  ];

  const originIndex = positiveHash % cities.length;
  const destIndex = (positiveHash + 3) % cities.length;
  const originCity = cities[originIndex];
  const destCity = cities[destIndex];
  const carrier = carriers[positiveHash % carriers.length];

  // Midpoint coordinate for courier
  const midLat = (originCity.coords[0] + destCity.coords[0]) / 2;
  const midLng = (originCity.coords[1] + destCity.coords[1]) / 2;

  return {
    trackingNumber: cleanId,
    carrier: carrier,
    serviceLevel: "Priority Tracked Service",
    weight: `${((positiveHash % 60) / 10 + 0.8).toFixed(1)} kg`,
    dimensions: "28 x 20 x 12 cm",
    status: "in_transit",
    statusTitle: "In Transit — Hub Scan Verified",
    statusDescription: `Package is securely in transit with ${carrier} moving from ${originCity.name} towards ${destCity.name}.`,
    statusBadgeColor: "blue",
    estimatedDate: "In 2 business days",
    estimatedWindow: "9:00 AM – 7:00 PM",
    origin: {
      name: originCity.name,
      hub: `${originCity.name} Central Gateway`,
      coords: originCity.coords
    },
    destination: {
      name: destCity.name,
      address: `1200 Center Way, ${destCity.name}`,
      coords: destCity.coords
    },
    currentCourierPos: [midLat, midLng],
    stopsRemaining: 2,
    signatureRequired: "Standard Verified Delivery",
    courier: {
      name: "Jordan Lee",
      rating: "4.9",
      role: `${carrier} Logistics Courier`,
      vehicle: "Express Delivery Unit",
      phone: "+1 (800) 555-0144",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&h=160&q=80"
    },
    steps: [
      { key: "ordered", label: "Order Created", date: "2 days ago", state: "completed" },
      { key: "shipped", label: "Shipped", date: "Yesterday", state: "completed" },
      { key: "in_transit", label: "In Transit", date: "Today", state: "current" },
      { key: "out_for_delivery", label: "Out for Delivery", date: "Tomorrow", state: "upcoming" },
      { key: "delivered", label: "Delivered", date: "Pending", state: "upcoming" }
    ],
    timeline: [
      {
        time: "Today, 10:15 AM",
        location: "Regional Transit Hub",
        title: "Automated Sort Facility Scan",
        detail: "Package scanned and queued for connecting transport.",
        icon: "truck",
        color: "blue"
      },
      {
        time: "Yesterday, 04:00 PM",
        location: originCity.name,
        title: "Origin Facility Acceptance",
        detail: `Package received at ${carrier} origin station.`,
        icon: "box",
        color: "slate"
      }
    ]
  };
}

// 4. Initialize Application
window.addEventListener("DOMContentLoaded", () => {
  // Load default demo package
  loadPreset("TRK-892341");

  // Input listener for clear button
  const inputEl = document.getElementById("trackingInput");
  const clearBtn = document.getElementById("clearBtn");
  inputEl.addEventListener("input", (e) => {
    if (e.target.value.trim().length > 0) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }
  });

  // Set default min date for reschedule picker
  const today = new Date().toISOString().split("T")[0];
  const reschedulePicker = document.getElementById("rescheduleDateInput");
  if (reschedulePicker) {
    reschedulePicker.min = today;
    reschedulePicker.value = today;
  }
});

// 5. Presets & Tracking Action Handler
function loadPreset(trackingNumber) {
  const pkg = PACKAGES_DB[trackingNumber];
  if (pkg) {
    currentPackage = JSON.parse(JSON.stringify(pkg)); // Deep clone
    document.getElementById("trackingInput").value = trackingNumber;
    document.getElementById("clearBtn").classList.remove("hidden");
    renderDashboard(currentPackage);
    showToast(`Loaded scenario: ${pkg.statusTitle}`);
  }
}

function resetToSample(trackingNumber) {
  loadPreset(trackingNumber);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleTrack(event) {
  event.preventDefault();
  const input = document.getElementById("trackingInput").value.trim();
  if (!input) return;

  const upperInput = input.toUpperCase();
  if (PACKAGES_DB[upperInput]) {
    currentPackage = JSON.parse(JSON.stringify(PACKAGES_DB[upperInput]));
  } else {
    // Generate realistic dynamic record for custom tracking ID
    currentPackage = generateDynamicPackage(upperInput);
  }

  renderDashboard(currentPackage);
  showToast(`Tracking ${currentPackage.trackingNumber}`);

  // Scroll smoothly to tracking details
  const section = document.getElementById("trackingSection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function clearInput() {
  const inputEl = document.getElementById("trackingInput");
  inputEl.value = "";
  document.getElementById("clearBtn").classList.add("hidden");
  inputEl.focus();
}

// 6. Dashboard Renderer
function renderDashboard(pkg) {
  // Check localStorage for saved delivery note
  const savedNote = localStorage.getItem(`note_${pkg.trackingNumber}`);

  // Basic Details
  document.getElementById("displayTrackingNumber").innerText = pkg.trackingNumber;
  document.getElementById("carrierTag").innerText = pkg.carrier;
  document.getElementById("currentStatusTitle").innerHTML = `
    ${getStatusIconSvg(pkg.status)}
    <span>${pkg.statusTitle}</span>
  `;
  document.getElementById("currentStatusDescription").innerText = pkg.statusDescription;
  document.getElementById("estimatedDate").innerText = pkg.estimatedDate;
  document.getElementById("estimatedWindow").innerText = pkg.estimatedWindow;

  // Origin & Destination
  document.getElementById("originLocation").innerText = pkg.origin.name;
  document.getElementById("originHub").innerText = pkg.origin.hub;
  document.getElementById("destinationLocation").innerText = pkg.destination.name;
  document.getElementById("destinationAddress").innerText = pkg.destination.address;
  document.getElementById("serviceLevel").innerText = pkg.serviceLevel;
  document.getElementById("packageWeight").innerText = pkg.weight;
  document.getElementById("signatureRequired").innerText = pkg.signatureRequired;

  // Render Stepper
  renderStepper(pkg.steps);

  // Render Courier Info Card
  renderCourierCard(pkg, savedNote);

  // Render Activity Timeline
  renderTimeline(pkg.timeline);

  // Render Interactive Leaflet Map
  initOrUpdateMap(pkg);

  // Re-run Lucide icons renderer
  if (window.lucide) {
    lucide.createIcons();
  }
}

// 7. Stepper Renderer
function renderStepper(steps) {
  const container = document.getElementById("stepperContainer");
  let html = `<div class="flex items-center justify-between relative">`;

  steps.forEach((step, idx) => {
    const isCompleted = step.state === "completed";
    const isCurrent = step.state === "current";
    const isException = step.state === "exception";
    const hasNext = idx < steps.length - 1;

    let stateClass = "stepper-upcoming";
    let iconHtml = `${idx + 1}`;

    if (isCompleted) {
      stateClass = "stepper-completed";
      iconHtml = `<i data-lucide="check" class="w-4 h-4"></i>`;
    } else if (isCurrent) {
      stateClass = "stepper-current";
      iconHtml = `<i data-lucide="compass" class="w-4 h-4"></i>`;
    } else if (isException) {
      stateClass = "stepper-exception";
      iconHtml = `<i data-lucide="alert-triangle" class="w-4 h-4"></i>`;
    }

    html += `
      <div class="stepper-item ${stateClass}">
        <div class="stepper-circle">
          ${iconHtml}
        </div>
        <div class="mt-2 text-center">
          <span class="block text-xs font-bold text-slate-900">${step.label}</span>
          <span class="block text-[11px] text-slate-400">${step.date}</span>
        </div>
        ${hasNext ? `<div class="stepper-line ${isCompleted ? 'completed' : ''}"></div>` : ''}
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// 8. Courier / Proof Card Renderer
function renderCourierCard(pkg, savedNote) {
  const driverCard = document.getElementById("driverOrProofCard");

  if (pkg.status === "delivered") {
    // Show proof of delivery snippet
    driverCard.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl">
          <i data-lucide="shield-check" class="w-6 h-6"></i>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900 text-sm sm:text-base">Delivered & Digitally Verified</span>
            <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Proof on file</span>
          </div>
          <p class="text-xs text-slate-500">Delivered by driver ${pkg.courier.name} • Contactless Porch Drop</p>
        </div>
      </div>
      <button onclick="openProofModal()" class="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 font-semibold text-xs flex items-center gap-1.5 shadow transition">
        <i data-lucide="image" class="w-4 h-4"></i>
        <span>View Delivery Photo Proof</span>
      </button>
    `;
  } else {
    // Show courier driver details
    driverCard.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${pkg.courier.avatar}" alt="Courier Driver" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900 text-sm sm:text-base">${pkg.courier.name}</span>
            <span class="inline-flex items-center text-xs text-amber-500 font-semibold">★ ${pkg.courier.rating}</span>
          </div>
          <p class="text-xs text-slate-500">${pkg.courier.role}</p>
          <p class="text-[11px] text-slate-400">${pkg.courier.vehicle}</p>
          ${savedNote ? `<p class="text-[11px] text-blue-600 font-medium mt-1">📌 Note for driver: "${savedNote}"</p>` : ''}
        </div>
      </div>

      <div class="flex items-center gap-2 w-full sm:w-auto">
        <button onclick="openModal('instructionsModal')" class="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs flex items-center justify-center gap-1.5 transition">
          <i data-lucide="message-square" class="w-3.5 h-3.5 text-slate-500"></i>
          <span>${savedNote ? 'Edit Note' : 'Delivery Note'}</span>
        </button>
        <button onclick="openModal('callDriverModal')" class="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition shadow-sm">
          <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
          <span>Call Courier</span>
        </button>
      </div>
    `;
  }
}

// 9. Activity Timeline Renderer
function renderTimeline(timeline) {
  const container = document.getElementById("timelineContainer");
  document.getElementById("eventsCount").innerText = `${timeline.length} checkpoints`;

  let html = "";
  timeline.forEach((item, index) => {
    const isFirst = index === 0;
    const badgeBg = isFirst ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" : "bg-slate-100 text-slate-600 border border-slate-200";

    html += `
      <div class="relative pl-6">
        <div class="absolute -left-[35px] top-0 w-8 h-8 rounded-full ${badgeBg} flex items-center justify-center text-xs">
          <i data-lucide="${item.icon}" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="flex items-baseline justify-between gap-2">
            <span class="text-xs font-semibold text-slate-400">${item.time}</span>
            <span class="text-[11px] text-slate-500 font-medium bg-slate-50 px-2 py-0.5 rounded border border-slate-100">${item.location}</span>
          </div>
          <h4 class="text-sm font-bold text-slate-900 mt-0.5">${item.title}</h4>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">${item.detail}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 10. Interactive Leaflet Map Controller
function initOrUpdateMap(pkg) {
  const mapElement = document.getElementById("leafletMap");
  if (!mapElement) return;

  const originCoords = pkg.origin.coords;
  const destCoords = pkg.destination.coords;
  const courierCoords = pkg.currentCourierPos || originCoords;

  // Initialize map if not yet created
  if (!leafletMap) {
    leafletMap = L.map('leafletMap', {
      zoomControl: true,
      scrollWheelZoom: false
    }).setView(courierCoords, 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(leafletMap);
  }

  // Clear previous markers and polyline
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];
  if (routePolyline) {
    leafletMap.removeLayer(routePolyline);
  }
  if (courierMarker) {
    leafletMap.removeLayer(courierMarker);
  }

  // Custom marker icons
  const originIcon = L.divIcon({
    className: 'custom-map-icon',
    html: `<div class="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white">O</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });

  const destIcon = L.divIcon({
    className: 'custom-map-icon',
    html: `<div class="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white">D</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });

  const vanIcon = L.divIcon({
    className: 'custom-courier-marker',
    html: `<div class="courier-pulse">🚚</div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22]
  });

  // Create markers
  const mOrigin = L.marker(originCoords, { icon: originIcon }).addTo(leafletMap);
  mOrigin.bindPopup(`<b>Origin:</b> ${pkg.origin.name}<br>${pkg.origin.hub}`);

  const mDest = L.marker(destCoords, { icon: destIcon }).addTo(leafletMap);
  mDest.bindPopup(`<b>Destination:</b> ${pkg.destination.name}<br>${pkg.destination.address}`);

  courierMarker = L.marker(courierCoords, { icon: vanIcon }).addTo(leafletMap);
  courierMarker.bindPopup(`<b>Courier:</b> ${pkg.courier.name}<br>Currently En Route`);

  mapMarkers.push(mOrigin, mDest);

  // Draw route polyline with route points
  const routePoints = [originCoords, courierCoords, destCoords];
  routePolyline = L.polyline(routePoints, {
    color: '#2563eb',
    weight: 4,
    opacity: 0.8,
    dashArray: '8, 8'
  }).addTo(leafletMap);

  // Fit bounds nicely
  const bounds = L.latLngBounds(routePoints);
  leafletMap.fitBounds(bounds, { padding: [50, 50] });

  // Update overlay info
  document.getElementById("currentStopName").innerText = pkg.status === "delivered" 
    ? "Delivered at Destination" 
    : `${pkg.destination.name} Sector`;
  document.getElementById("stopsRemaining").innerText = pkg.status === "delivered"
    ? "Completed"
    : `${pkg.stopsRemaining} stops remaining`;
}

function resetMapView() {
  if (leafletMap && currentPackage) {
    const routePoints = [currentPackage.origin.coords, currentPackage.currentCourierPos, currentPackage.destination.coords];
    leafletMap.fitBounds(L.latLngBounds(routePoints), { padding: [50, 50] });
    showToast("Map view centered");
  }
}

// 11. Live Courier Movement Simulation
function toggleSimulation() {
  const badge = document.getElementById("simStatusBadge");
  if (isSimulating) {
    clearInterval(simulationInterval);
    isSimulating = false;
    badge.innerText = "OFF";
    badge.className = "font-bold text-amber-400";
    showToast("Live simulation paused");
  } else {
    isSimulating = true;
    badge.innerText = "LIVE (Active)";
    badge.className = "font-bold text-emerald-400 animate-pulse";
    showToast("Live simulation started: Driver GPS updating every 3s");

    simulationInterval = setInterval(() => {
      simulateStep();
    }, 3000);
  }
}

function simulateStep() {
  if (!currentPackage || !courierMarker || !leafletMap) return;

  if (currentPackage.status === "delivered") {
    showToast("Package has already been delivered!");
    toggleSimulation();
    return;
  }

  // Move courier position 15% closer to destination
  const dest = currentPackage.destination.coords;
  const current = currentPackage.currentCourierPos;

  const newLat = current[0] + (dest[0] - current[0]) * 0.25;
  const newLng = current[1] + (dest[1] - current[1]) * 0.25;

  currentPackage.currentCourierPos = [newLat, newLng];
  courierMarker.setLatLng([newLat, newLng]);

  // Decrease stops if > 1
  if (currentPackage.stopsRemaining > 1) {
    currentPackage.stopsRemaining--;
    document.getElementById("stopsRemaining").innerText = `${currentPackage.stopsRemaining} stops away`;
    showToast(`Driver GPS ping: Now ${currentPackage.stopsRemaining} stops away`);
  } else if (currentPackage.stopsRemaining === 1) {
    // Deliver!
    currentPackage.stopsRemaining = 0;
    currentPackage.status = "delivered";
    currentPackage.statusTitle = "Delivered (Live Just Now)";
    currentPackage.statusDescription = "Package has just arrived at destination address. Driver handed parcel over.";
    currentPackage.estimatedDate = "Delivered Today";
    currentPackage.estimatedWindow = "Delivered Just Now";

    // Update steps
    currentPackage.steps.forEach(s => s.state = "completed");

    // Prepend new timeline item
    currentPackage.timeline.unshift({
      time: "Just now",
      location: currentPackage.destination.name,
      title: "Package Delivered & Completed",
      detail: "Handed over by courier. Live GPS confirmed at destination doorstep.",
      icon: "check-circle",
      color: "emerald"
    });

    renderDashboard(currentPackage);
    showToast("🎉 Package has arrived! Status: DELIVERED");
    toggleSimulation();
  }
}

// 12. Modals Management
function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.add("active");
    el.classList.remove("hidden");
  }
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.remove("active");
    el.classList.add("hidden");
  }
}

function openProofModal() {
  openModal('proofModal');
  if (currentPackage && currentPackage.courier) {
    document.getElementById("proofAgent").innerText = `${currentPackage.courier.name} (Verified)`;
  }
}

// 13. Form Submissions Handlers
function handleSaveDriverNote(e) {
  e.preventDefault();
  const note = document.getElementById("driverNoteInput").value.trim();
  if (note && currentPackage) {
    localStorage.setItem(`note_${currentPackage.trackingNumber}`, note);
    closeModal('instructionsModal');
    renderCourierCard(currentPackage, note);
    showToast("Driver instruction sent to courier terminal!");
  } else {
    closeModal('instructionsModal');
  }
}

function handleReschedule(e) {
  e.preventDefault();
  const dateVal = document.getElementById("rescheduleDateInput").value;
  if (dateVal && currentPackage) {
    currentPackage.estimatedDate = `Rescheduled: ${dateVal}`;
    currentPackage.estimatedWindow = "9:00 AM – 1:00 PM Window";
    
    // Add timeline event
    currentPackage.timeline.unshift({
      time: "Just now",
      location: "Customer Portal",
      title: "Delivery Date Rescheduled by Recipient",
      detail: `Recipient requested rescheduled delivery for ${dateVal}.`,
      icon: "calendar-clock",
      color: "blue"
    });

    renderDashboard(currentPackage);
    closeModal('rescheduleModal');
    showToast(`Delivery rescheduled to ${dateVal}`);
  }
}

function handleHoldPickup() {
  if (currentPackage) {
    currentPackage.estimatedDate = "Hold at Smart Locker Hub";
    currentPackage.estimatedWindow = "Ready for 24/7 pickup";
    
    currentPackage.timeline.unshift({
      time: "Just now",
      location: "Local Hub",
      title: "Rerouted to Downtown Smart Locker",
      detail: "Recipient selected 24/7 smart pickup locker. Pickup code will be dispatched via SMS.",
      icon: "store",
      color: "indigo"
    });

    renderDashboard(currentPackage);
    closeModal('holdPickupModal');
    showToast("Rerouted to Downtown 24/7 Smart Locker!");
  }
}

function handleSubscribeAlerts(e) {
  e.preventDefault();
  closeModal('notificationModal');
  showToast("Notifications enabled for this tracking code!");
}

function simulateCall() {
  closeModal('callDriverModal');
  showToast("Connecting masked call to driver Alex Mercer...");
}

function copyTrackingNumber() {
  if (!currentPackage) return;
  navigator.clipboard.writeText(currentPackage.trackingNumber).then(() => {
    const toast = document.getElementById("copyToast");
    toast.classList.remove("opacity-0");
    setTimeout(() => {
      toast.classList.add("opacity-0");
    }, 2000);
  });
}

// 14. Toast Notification System
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
  }, 3200);
}

// 15. Helper Icons
function getStatusIconSvg(status) {
  switch (status) {
    case "delivered":
      return `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400"><i data-lucide="check-circle-2" class="w-6 h-6"></i></span>`;
    case "out_for_delivery":
      return `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400"><i data-lucide="truck" class="w-6 h-6"></i></span>`;
    case "exception":
      return `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400"><i data-lucide="alert-triangle" class="w-6 h-6"></i></span>`;
    case "in_transit":
      return `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400"><i data-lucide="plane" class="w-6 h-6"></i></span>`;
    default:
      return `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-500/20 text-slate-400"><i data-lucide="box" class="w-6 h-6"></i></span>`;
  }
}
