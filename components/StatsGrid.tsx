import { Users, Calendar, TrendingUp, Clock } from "lucide-react"

const statsData = [
  {
    label: "Total Clients",
    value: "120",
    icon: Users,
    color: "#10b981",
  },
  {
    label: "Today's Lessons",
    value: "8",
    icon: Calendar,
    color: "#3b82f6",
  },
  {
    label: "Monthly Revenue",
    value: "$4,250",
    icon: TrendingUp,
    color: "#f59e0b",
  },
  {
    label: "Pending Bookings",
    value: "15",
    icon: Clock,
    color: "#ef4444",
  },
]

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      {statsData.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-32 flex flex-col justify-between hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            <div className="flex justify-between items-start h-full">
              <div className="flex flex-col justify-between h-full">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm font-medium leading-tight">
                  {stat.label}
                </p>
                <p className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl font-bold">
                  {stat.value}
                </p>
              </div>
              <div
                className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-2.5 rounded-lg flex-shrink-0"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <Icon
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-5 xl:h-5"
                  style={{ color: stat.color }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
