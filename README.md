# 🚚 SupplyChain Dashboard

A modern, responsive dashboard for monitoring supply chain KPIs, inventory metrics, and order performance. Built with React, TypeScript, and Vite — no backend required thanks to MSW mock APIs.

---

## 🧱 Architecture

- **Feature-first folder structure** for scalability
- **React Router** for page navigation (`/dashboard`, `/orders`)
- **TanStack Query (React Query v5)** for server-state management
- **MSW (Mock Service Worker)** simulates realistic API responses
- **Recharts** for interactive data visualizations
- **Styled-components** for clean, maintainable styling

---

## 📊 Features

### ✅ Dashboard Page (`/dashboard`)
- KPI cards: On-time Delivery, Inventory Turnover, Open Orders, Stockout Risk
- Trend chart: Orders vs. Shipments over time
- Alerts panel: Late shipments, stockout risks
- Inventory snapshot: SKU-level stock and reorder levels

### ✅ Orders Page (`/orders`)
- Orders table with sortable columns
- Row click opens a drawer with order details
- Filter bar with date, region, and search — synced to URL

---

## 🧪 Testing

- Basic unit tests with Vitest + React Testing Library
- Example: KPI card renders correctly, table sorts by promised date

---

## 🖥️ Demo Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/supplychain-dashboard.git
cd supplychain-dashboard

### 2. Install dependencies

```bash
npm install

### 3. Start the dev server

```bash
npm run dev
Visit http://localhost:5173/dashboard

🚀 Tech Stack
Tool               Purpose
------------------ --------------------------------------
React + TypeScript UI and type safety
Vite               Fast dev/build tooling
React Router       Routing between pages
TanStack Query     Data fetching and caching
MSW                Mock API responses
Recharts           Data visualizations
Styled-components  CSS-in-JS styling


📦 Mock API Endpoints
GET /kpis?from&to&region

GET /orders?status&region&search&page

GET /inventory?site&risk

Responses are randomized for realism using MSW.

🎨 Design Notes
Consistent spacing (8px scale), rounded cards, soft shadows

Accessible buttons with ARIA labels

Skeleton loaders while fetching

Empty states with “Clear Filters” action

Color-coded badges for risk and status

🧠 Future Enhancements
Region map or site list

Export to CSV/PDF

Authentication and user roles

Real backend integration

Virtualized tables for large datasets







