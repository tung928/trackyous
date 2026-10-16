# TrackYourS 📦 — Package Tracking Demonstration Webpage

A modern, interactive package tracking demonstration web application built with **HTML5, Tailwind CSS, Leaflet.js, and Vanilla JavaScript**.

> **Note**: Designed to run **100% standalone without a database or backend server**. All demo data, live map telemetry, simulated driver movement, and realistic checkpoints are built-in.

---

## 🚀 How to Run

You have two easy options to view and run the project:

### Option 1: Direct in Browser (No Server Needed)
Simply double-click [`index.html`](file:///d:/Freelance/TrackYourS/index.html) or open it with Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Using Local HTTP Server
If you want to run it via local web server:

**Using Python:**
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

**Using Node.js:**
```bash
npx serve
```

---

## ✨ Features Demonstrated

1. **Realistic Tracking Scenarios**:
   - `TRK-892341`: **Out for Delivery** (DHL Express — courier van actively on route in Seattle with driver info).
   - `DHL-492104`: **In Transit** (Air Express flight — transpacific corridor Tokyo to Los Angeles with customs clearance).
   - `FDX-771920`: **Delivered** (FedEx Home Delivery — complete with photo proof of delivery and contactless signature).
   - `UPS-339218`: **Weather Exception** (UPS Ground — mountain blizzard advisory with automatic delay notification).
   - `USPS-110293`: **Order Processed** (USPS Priority — electronic pre-shipment label created).
   - **Any Custom Number**: Enter any custom tracking number (e.g. `MY-ORDER-1234`), and the system dynamically generates a realistic shipment path and timeline deterministically!

2. **Interactive Transit Route Map**:
   - Uses Leaflet.js & OpenStreetMap.
   - Shows origin hub, destination address, and the moving courier vehicle.
   - Interactive popups with facility details and addresses.

3. **Live Courier Simulation Mode**:
   - Click **"Live Courier Sim"** in the top bar.
   - Simulates GPS telemetry pings every 3 seconds: the courier vehicle moves on the map towards the destination, updates remaining stops, and eventually completes delivery with arrival notification.

4. **Visual Milestone Stepper**:
   - Step-by-step progress: *Order Placed → Picked Up → In Transit → Out for Delivery → Delivered*.
   - Visual state indicators (completed checkmarks, active glowing pulse, pending steps).

5. **Detailed Activity Checkpoint Timeline**:
   - Reverse-chronological timeline showing dates, timestamps, facility locations, and logistics scan events.

6. **Customer Delivery Management Actions**:
   - **Driver Delivery Note**: Save special drop-off instructions or gate code (stored in browser `localStorage`).
   - **Reschedule Delivery Date**: Pick a new delivery date and time window.
   - **Hold at Pickup Hub**: Reroute package to a 24/7 smart pickup locker.
   - **Proof of Delivery Modal**: Inspect official digital proof of delivery record with address verification.
   - **Print Friendly Proof**: Built-in print layout cleanly formats delivery receipts.

---

## 🔌 Connecting to a Real Database / Carrier API in Future

When you are ready to connect to a live backend database or logistics API, you can easily replace the `PACKAGES_DB` object in [`app.js`](file:///d:/Freelance/TrackYourS/app.js) with a standard API fetch request:

```javascript
async function fetchTrackingData(trackingNumber) {
  const response = await fetch(`/api/track/${trackingNumber}`);
  const data = await response.json();
  renderDashboard(data);
}
```

Popular logistics APIs to integrate:
- **EasyPost API** (multi-carrier tracking)
- **Shippo API**
- **AfterShip API**
- **FedEx / DHL / UPS Developer Portals**
