"use client"

import { useState } from "react"
import { Bell, X, CheckCircle, AlertCircle, Info, User } from "lucide-react"

const notificationsData = [
  {
    id: 1,
    type: "success",
    title: "New client registered",
    message: "Sarah M. has successfully registered as a new client",
    time: "2 minutes ago",
    unread: true
  },
  {
    id: 2,
    type: "warning",
    title: "Upcoming appointment",
    message: "You have a moving appointment with David L. in 30 minutes",
    time: "25 minutes ago",
    unread: true
  },
  {
    id: 3,
    type: "info",
    title: "Payment received",
    message: "Payment of $350 received from Emma R.",
    time: "1 hour ago",
    unread: false
  },
  {
    id: 4,
    type: "info",
    title: "Quote request",
    message: "New quote request from Michael K. for apartment moving",
    time: "2 hours ago",
    unread: false
  }
]

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState(notificationsData)
  
  const unreadCount = notifications.filter(n => n.unread).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-amber-500" />
      case 'info':
        return <Info className="w-4 h-4 text-blue-500" />
      default:
        return <User className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <Bell className="w-5 h-5 text-slate-600" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-lg border border-slate-200 z-50 max-h-96 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-900">Notifications</h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Mark all read
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-100 rounded"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-slate-500">
                  <Bell className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={`p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors ${
                      notification.unread ? 'bg-blue-50/50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-slate-900 text-sm">
                            {notification.title}
                          </p>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-slate-600 text-xs mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-slate-400 text-xs mt-2">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium py-1">
                View all notifications
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
