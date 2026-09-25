import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter, not BrowserRouter: with a service worker + "Add to Home
// Screen" PWA install, hash-based routes need zero server-side rewrite
// rules to keep working offline. One less thing to get wrong when this
// is opened as a static file:// or from a bare static host.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
