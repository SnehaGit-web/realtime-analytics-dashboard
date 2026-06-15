# 📊 Real-Time Analytics Dashboard

A production-grade analytics dashboard built with React, Redux Toolkit, and WebSockets — featuring live data streaming, interactive charts, and a fully responsive UI.

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?logo=redux)
![WebSocket](https://img.shields.io/badge/WebSocket-Live_Data-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🚀 Live Demo

> [View on Vercel →](https://realtime-analytics-dashboard-two.vercel.app/)

---

## ✨ Features

- **Live data streaming** via WebSocket with automatic reconnection
- **Interactive charts** — line, bar, and pie charts using Recharts
- **Global state management** with Redux Toolkit
- **Custom React hooks** for WebSocket handling and data fetching
- **Responsive layout** — works on mobile, tablet, and desktop
- **Cross-browser compatible** (Chrome, Firefox, Safari, Edge)
- **Performance optimized** — memoized selectors, lazy-loaded routes, code splitting
- **Error boundaries** and graceful fallback UI
- **Dark/light mode** toggle

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| UI Library | React 18 |
| State Management | Redux Toolkit + React-Redux |
| Charts | Recharts |
| Routing | React Router v6 |
| Styling | CSS Modules + CSS Variables |
| Build Tool | Webpack 5 (custom config) |
| Testing | Jest + React Testing Library + Enzyme |
| Real-time | WebSocket API |
| Deployment | Vercel |

---

## 📁 Project Structure

```
realtime-analytics-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── charts/          # Reusable chart components
│   │   │   ├── LineChart.jsx
│   │   │   ├── BarChart.jsx
│   │   │   └── PieChart.jsx
│   │   ├── layout/          # App shell components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Layout.jsx
│   │   └── ui/              # Generic UI primitives
│   │       ├── MetricCard.jsx
│   │       ├── Spinner.jsx
│   │       └── ErrorBoundary.jsx
│   ├── hooks/
│   │   ├── useWebSocket.js  # WebSocket connection hook
│   │   └── useMetrics.js    # Selector + data hook
│   ├── store/
│   │   ├── index.js         # Redux store config
│   │   └── slices/
│   │       ├── metricsSlice.js
│   │       └── uiSlice.js
│   ├── services/
│   │   └── mockWebSocket.js # Simulated WS server for demo
│   ├── utils/
│   │   └── formatters.js    # Number/date formatters
│   ├── pages/
│   │   ├── Overview.jsx
│   │   └── Details.jsx
│   ├── App.jsx
│   └── index.js
├── webpack.config.js
├── jest.config.js
├── .babelrc
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 16.x
- npm >= 8.x

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/realtime-analytics-dashboard.git
cd realtime-analytics-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

---

## 🧪 Testing

```bash
npm test                  # Run all tests
npm run test:coverage     # Coverage report
```

Tests cover:
- Redux slice reducers
- Custom hooks (via React Testing Library)
- Chart component rendering (via Enzyme)

---

## 📸 Screenshots

> *(Add screenshots here after your first deploy)*

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

[MIT](LICENSE)
