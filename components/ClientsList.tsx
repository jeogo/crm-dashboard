import { Eye, Edit, Trash2 } from "lucide-react"

const clientsData = [
  {
    name: "Oussama G.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "oussama@email.com",
    phone: "+1 (555) 123-4567",
  },
  {
    name: "Sarah M.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "sarah@email.com",
    phone: "+1 (555) 234-5678",
  },
  {
    name: "David L.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "david@email.com",
    phone: "+1 (555) 345-6789",
  },
  {
    name: "Emma R.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "emma@email.com",
    phone: "+1 (555) 456-7890",
  },
  {
    name: "Michael K.",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "michael@email.com",
    phone: "+1 (555) 567-8901",
  },
  {
    name: "Lisa Chen",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "lisa@email.com",
    phone: "+1 (555) 678-9012",
  },
  {
    name: "Robert Smith",
    avatar: "/placeholder.svg?height=50&width=50",
    contact: "robert@email.com",
    phone: "+1 (555) 789-0123",
  },
]

export default function ClientsList() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {clientsData.map((client, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-md transition-all duration-200 min-h-[80px] flex items-center hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between w-full gap-3 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
              <img
                src={client.avatar || "/placeholder.svg"}
                alt={client.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl truncate">
                  {client.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 truncate">{client.contact}</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 truncate">{client.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
              <button className="p-1.5 sm:p-2 lg:p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors hover:scale-105">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" />
              </button>
              <button className="p-1.5 sm:p-2 lg:p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors hover:scale-105">
                <Edit className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-600" />
              </button>
              <button className="p-1.5 sm:p-2 lg:p-2.5 border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors hover:scale-105">
                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
