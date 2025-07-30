import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  subtitle: string
  note?: string
  icon: LucideIcon
  bgColor: string
  textColor: string
  iconColor: string
}

export default function StatCard({ title, subtitle, note, icon: Icon, bgColor, textColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-2xl font-bold text-slate-900">{title}</p>
          <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
          {note && <p className="text-xs text-green-600 mt-2">{note}</p>}
        </div>
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  )
}
