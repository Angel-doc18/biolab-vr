import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Home from './components/Home.jsx'
import TopicPage from './components/TopicPage.jsx'
import AskAI from './components/AskAI.jsx'
import { useProgress } from './hooks/useProgress.js'

export default function App() {
  const progress = useProgress()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // Sidebar is a static column on larger screens (tablet/desktop/VR-capable
  // laptop), and a toggleable drawer on phones — VR headsets and phones are
  // meant to be equally first-class, but a fixed-width rail eats too much
  // of a phone screen to leave room for the 3D viewer.
  return (
    <div className="h-full lg:grid lg:grid-cols-[240px_1fr]">
      <div className="hidden h-full lg:block">
        <Sidebar progress={progress} />
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-30 flex lg:hidden">
          <div className="w-64 max-w-[80vw]">
            <Sidebar progress={progress} onNavigate={() => setDrawerOpen(false)} />
          </div>
          <button
            aria-label="Close menu"
            className="flex-1 bg-black/50"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
      )}

      <div className="flex h-full flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-tray-line px-4 py-3 lg:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open topics menu"
            className="rounded-sm border border-tray-line px-2.5 py-1.5 text-tag"
          >
            ☰
          </button>
          <span className="font-display text-sm text-tag">BioLab VR</span>
        </div>

        <main className="min-h-0 flex-1 overflow-hidden" key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home progress={progress} />} />
            <Route path="/topic/:topicId" element={<TopicPage progress={progress} />} />
            <Route path="/ask" element={<AskAI />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
