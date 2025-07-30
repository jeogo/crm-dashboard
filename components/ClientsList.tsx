"use client"

import { useState, useMemo } from "react"
import { Eye, Edit, Trash2, Plus } from "lucide-react"

const initialClientsData = [
  {
    id: 1,
    name: "Oussama G.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "oussama@email.com",
    phone: "+1 (555) 123-4567",
    status: "active"
  },
  {
    id: 2,
    name: "Sarah M.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "sarah@email.com",
    phone: "+1 (555) 234-5678",
    status: "recent"
  },
  {
    id: 3,
    name: "David L.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "david@email.com",
    phone: "+1 (555) 345-6789",
    status: "active"
  },
  {
    id: 4,
    name: "Emma R.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "emma@email.com",
    phone: "+1 (555) 456-7890",
    status: "pending"
  },
  {
    id: 5,
    name: "Michael K.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "michael@email.com",
    phone: "+1 (555) 567-8901",
    status: "active"
  },
  {
    id: 6,
    name: "Lisa Chen",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "lisa@email.com",
    phone: "+1 (555) 678-9012",
    status: "recent"
  },
  {
    id: 7,
    name: "Robert Smith",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "robert@email.com",
    phone: "+1 (555) 789-0123",
    status: "pending"
  },
]

interface ClientsListProps {
  searchTerm: string
  sortBy: string
  filterBy: string
  onAddClient: (client: any) => void
}

export default function ClientsList({ searchTerm, sortBy, filterBy, onAddClient }: ClientsListProps) {
  const [clients, setClients] = useState(initialClientsData)

  const filteredAndSortedClients = useMemo(() => {
    let filtered = [...clients]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm)
      )
    }

    // Apply status filter
    if (filterBy !== "all") {
      filtered = filtered.filter(client => client.status === filterBy)
    }

    // Apply sorting
    if (sortBy) {
      const [field, order] = sortBy.split('-')
      filtered.sort((a, b) => {
        let valueA = a[field as keyof typeof a]
        let valueB = b[field as keyof typeof b]
        
        if (typeof valueA === 'string') valueA = valueA.toLowerCase()
        if (typeof valueB === 'string') valueB = valueB.toLowerCase()
        
        if (order === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0
        }
      })
    }

    return filtered
  }, [clients, searchTerm, sortBy, filterBy])

  const handleAddClient = (newClient: any) => {
    const clientWithId = {
      ...newClient,
      id: Math.max(...clients.map(c => c.id)) + 1,
      status: 'recent'
    }
    setClients([clientWithId, ...clients])
    onAddClient(clientWithId)
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { bg: "bg-green-100", text: "text-green-700", label: "Active" },
      recent: { bg: "bg-blue-100", text: "text-blue-700", label: "Recent" },
      pending: { bg: "bg-amber-100", text: "text-amber-700", label: "Pending" }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  if (filteredAndSortedClients.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
          <Plus className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">
          {searchTerm ? "No clients found" : "No clients yet"}
        </h3>
        <p className="text-slate-500 mb-4">
          {searchTerm 
            ? `No clients match your search for "${searchTerm}"`
            : "Get started by adding your first client"
          }
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {filteredAndSortedClients.map((client) => (
        <div
          key={client.id}
          className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 lg:p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 min-h-[80px] flex items-center group"
        >
          <div className="flex items-center justify-between w-full gap-4 lg:gap-6">
            <div className="flex items-center gap-4 lg:gap-6 flex-1 min-w-0">
              <div className="relative">
                <img
                  src={client.avatar || "/placeholder.svg"}
                  alt={client.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-slate-100"
                />
                <div className="absolute -bottom-1 -right-1">
                  {getStatusBadge(client.status)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg truncate">
                  {client.name}
                </h3>
                <p className="text-sm lg:text-base text-slate-600 truncate flex items-center gap-2">
                  <span>{client.contact}</span>
                </p>
                <p className="text-sm lg:text-base text-slate-600 truncate">
                  {client.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
              <button 
                className="p-2.5 border border-slate-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all hover:scale-105 group"
                title="View details"
              >
                <Eye className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
              </button>
              <button 
                className="p-2.5 border border-slate-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all hover:scale-105 group"
                title="Edit client"
              >
                <Edit className="w-4 h-4 text-slate-600 group-hover:text-emerald-600" />
              </button>
              <button 
                className="p-2.5 border border-slate-200 rounded-lg hover:bg-red-50 hover:border-red-300 transition-all hover:scale-105 group"
                title="Delete client"
              >
                <Trash2 className="w-4 h-4 text-slate-600 group-hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Show count */}
      <div className="text-center py-4">
        <p className="text-sm text-slate-500">
          Showing {filteredAndSortedClients.length} of {clients.length} clients
        </p>
      </div>
    </div>
  )
}
