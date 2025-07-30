const lessonsData = [
  {
    clientName: "Oussama G.",
    clientAvatar: "/placeholder.svg?height=40&width=40",
    instructor: "Ahmed B.",
    time: "10:00 - 11:30",
    status: {
      text: "Confirmed",
      color: "#10b981",
    },
  },
  {
    clientName: "Sarah M.",
    clientAvatar: "/placeholder.svg?height=40&width=40",
    instructor: "Lisa K.",
    time: "14:00 - 15:30",
    status: {
      text: "Pending",
      color: "#f59e0b",
    },
  },
  {
    clientName: "David L.",
    clientAvatar: "/placeholder.svg?height=40&width=40",
    instructor: "John D.",
    time: "16:00 - 17:30",
    status: {
      text: "Cancelled",
      color: "#ef4444",
    },
  },
  {
    clientName: "Emma R.",
    clientAvatar: "/placeholder.svg?height=40&width=40",
    instructor: "Maria S.",
    time: "18:00 - 19:30",
    status: {
      text: "Confirmed",
      color: "#10b981",
    },
  },
  {
    clientName: "Alex Johnson",
    clientAvatar: "/placeholder.svg?height=40&width=40",
    instructor: "Tom Wilson",
    time: "20:00 - 21:30",
    status: {
      text: "Confirmed",
      color: "#10b981",
    },
  },
]

export default function LessonsTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-b border-gray-200">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Today's Lessons</h2>
      </div>

      {/* Desktop Table - Hidden on mobile and small tablets */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Client
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Instructor
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Time
              </th>
              <th className="px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {lessonsData.map((lesson, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={lesson.clientAvatar || "/placeholder.svg"}
                      alt={lesson.clientName}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <span className="font-medium text-gray-900 text-sm sm:text-base">{lesson.clientName}</span>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-4 text-gray-600 text-sm sm:text-base">{lesson.instructor}</td>
                <td className="px-4 md:px-6 py-4 text-gray-600 text-sm sm:text-base">{lesson.time}</td>
                <td className="px-4 md:px-6 py-4">
                  <span
                    className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white whitespace-nowrap"
                    style={{ backgroundColor: lesson.status.color }}
                  >
                    {lesson.status.text}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet Cards - Visible on smaller screens */}
      <div className="lg:hidden divide-y divide-gray-200">
        {lessonsData.map((lesson, index) => (
          <div key={index} className="p-3 sm:p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3 mb-2">
              <img
                src={lesson.clientAvatar || "/placeholder.svg"}
                alt={lesson.clientName}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{lesson.clientName}</p>
                  <span
                    className="px-2 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap flex-shrink-0"
                    style={{ backgroundColor: lesson.status.color }}
                  >
                    {lesson.status.text}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Instructor: {lesson.instructor}</p>
                <p className="text-xs sm:text-sm text-gray-600">{lesson.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
