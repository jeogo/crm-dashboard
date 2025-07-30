import Layout from "@/components/Layout"
import { Settings, User, Shield, Bell, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <Layout currentPage="Settings">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="p-4 bg-gray-100 rounded-full mb-6">
              <Settings className="w-12 h-12 text-gray-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              System Settings
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Configure your CRM settings, manage user preferences, and customize your workspace. 
              Our comprehensive settings panel is being developed to give you full control over your system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <User className="w-8 h-8 text-gray-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">User Management</h3>
                <p className="text-sm text-slate-600">Manage user accounts and profiles</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Shield className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Security Settings</h3>
                <p className="text-sm text-slate-600">Configure security and access controls</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Bell className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Notifications</h3>
                <p className="text-sm text-slate-600">Customize notification preferences</p>
              </div>
            </div>
            
            <div className="mt-8 px-6 py-3 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-800 font-medium">⚙️ Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
