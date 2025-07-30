import Layout from "@/components/Layout"
import { Truck, Route, Package, Clock } from "lucide-react"

export default function Transport() {
  return (
    <Layout currentPage="Transport">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="p-4 bg-orange-100 rounded-full mb-6">
              <Truck className="w-12 h-12 text-orange-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transport & Logistics
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Manage your fleet, track vehicle locations, and optimize delivery routes. 
              Our transport management system is being developed to revolutionize your logistics operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Truck className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Fleet Management</h3>
                <p className="text-sm text-slate-600">Track and manage your moving vehicles</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Route className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Route Optimization</h3>
                <p className="text-sm text-slate-600">Optimize routes for efficiency and cost savings</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Package className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Cargo Tracking</h3>
                <p className="text-sm text-slate-600">Real-time tracking of cargo and deliveries</p>
              </div>
            </div>
            
            <div className="mt-8 px-6 py-3 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-orange-800 font-medium">🚛 Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
