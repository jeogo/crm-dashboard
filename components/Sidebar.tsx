"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Package,
  Calendar,
  UserCogIcon as UsersCog,
  Truck,
  BarChart,
  Settings,
  LogOut,
  X,
} from "lucide-react"

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Clients", icon: Users, href: "/clients" },
  { label: "Orders", icon: Package, href: "/orders" },
  { label: "Calendar", icon: Calendar, href: "/calendar" },
  { label: "Teams", icon: UsersCog, href: "/teams" },
  { label: "Transport", icon: Truck, href: "/transport" },
  { label: "Reports", icon: BarChart, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
]

interface SidebarProps {
  currentPage: string
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ currentPage, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar - Fixed position */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:z-50 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-xl">
        <div className="flex items-center justify-center h-16 bg-slate-900/90 border-b border-slate-700/50 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-white tracking-wide">Mover CRM</h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105" 
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white hover:scale-105"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}

          {/* Logout */}
          <div className="pt-4 mt-4 border-t border-slate-700/50">
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-slate-700/50 hover:text-red-300 transition-all duration-200 w-full hover:scale-105">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 bg-slate-900/90 px-4 border-b border-slate-700/50 backdrop-blur-sm">
          <h1 className="text-xl font-bold text-white">Mover CRM</h1>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}

          <div className="pt-4 mt-4 border-t border-slate-700/50">
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-slate-700/50 hover:text-red-300 transition-all duration-200 w-full">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
