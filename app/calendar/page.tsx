import Layout from "@/components/Layout"
import { Calendar, Clock, Users, MapPin } from "lucide-react"

export default function CalendarPage() {
  return (
    <Layout currentPage="Calendar">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="p-4 bg-purple-100 rounded-full mb-6">
              <Calendar className="w-12 h-12 text-purple-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Calendar & Scheduling
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Manage appointments, schedule moves, and coordinate your team's availability. 
              Our advanced calendar system is being developed to optimize your scheduling workflow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Clock className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Appointment Booking</h3>
                <p className="text-sm text-slate-600">Easy online booking and appointment management</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Team Coordination</h3>
                <p className="text-sm text-slate-600">Coordinate team schedules and availability</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <MapPin className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Route Planning</h3>
                <p className="text-sm text-slate-600">Optimize routes and schedule efficiency</p>
              </div>
            </div>
            
            <div className="mt-8 px-6 py-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-800 font-medium">📅 Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
