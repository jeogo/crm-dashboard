"use client"

import { Search, Bell, User, Menu } from "lucide-react"

interface TopbarProps {
  onMenuClick: () => void
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-6 shadow-sm z-30">
      {/* Mobile Menu Button */}
      <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
        <Menu className="w-5 h-5 text-slate-600" />
      </button>

      {/* Page Title - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block">
        <h2 className="text-lg font-semibold text-slate-900">Dashboard</h2>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-slate-100 relative transition-colors">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <User className="w-5 h-5 text-slate-600" />
        </button>
      </div>
    </header>
  )
}
