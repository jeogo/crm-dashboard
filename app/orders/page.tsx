import Layout from "@/components/Layout"
import { Package, Clock, Truck, Calendar } from "lucide-react"

export default function Orders() {
  return (
    <Layout currentPage="Orders">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-6">
              <Package className="w-12 h-12 text-blue-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Orders Management
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Track and manage all your moving orders in one place. This powerful feature is coming soon to help you 
              streamline your order workflow and improve customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Package className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Order Tracking</h3>
                <p className="text-sm text-slate-600">Real-time order status updates and progress tracking</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Clock className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Schedule Management</h3>
                <p className="text-sm text-slate-600">Efficient scheduling and timeline management</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Truck className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Logistics Coordination</h3>
                <p className="text-sm text-slate-600">Seamless coordination with transport teams</p>
              </div>
            </div>
            
            <div className="mt-8 px-6 py-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 font-medium">🚀 Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
