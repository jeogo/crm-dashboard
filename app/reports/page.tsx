import Layout from "@/components/Layout"
import { BarChart, TrendingUp, PieChart, FileText } from "lucide-react"

export default function Reports() {
  return (
    <Layout currentPage="Reports">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="p-4 bg-indigo-100 rounded-full mb-6">
              <BarChart className="w-12 h-12 text-indigo-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Reports & Analytics
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Generate comprehensive reports, analyze business performance, and gain valuable insights. 
              Our advanced analytics platform is being built to help you make data-driven decisions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Performance Analytics</h3>
                <p className="text-sm text-slate-600">Track business metrics and performance trends</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <PieChart className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Revenue Analysis</h3>
                <p className="text-sm text-slate-600">Analyze revenue streams and profitability</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <FileText className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Custom Reports</h3>
                <p className="text-sm text-slate-600">Generate customized reports for stakeholders</p>
              </div>
            </div>
            
            <div className="mt-8 px-6 py-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-indigo-800 font-medium">📊 Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
