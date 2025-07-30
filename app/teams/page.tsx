import Layout from "@/components/Layout"
import { UserCog, Users, Shield, Settings } from "lucide-react"

export default function Teams() {
  return (
    <Layout currentPage="Teams">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="p-4 bg-green-100 rounded-full mb-6">
              <UserCog className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Team Management
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Organize your moving teams, manage roles and permissions, and track performance. 
              This comprehensive team management system is being crafted to enhance your operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Team Organization</h3>
                <p className="text-sm text-slate-600">Create and manage teams with specific roles</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Role Permissions</h3>
                <p className="text-sm text-slate-600">Control access levels and permissions</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Settings className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Performance Tracking</h3>
                <p className="text-sm text-slate-600">Monitor team performance and productivity</p>
              </div>
            </div>
            
            <div className="mt-8 px-6 py-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">👥 Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
