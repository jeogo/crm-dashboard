import Layout from "@/components/Layout"
import StatsGrid from "@/components/StatsGrid"
import OrderTrendsChart from "@/components/OrderTrendsChart"
import LessonsTable from "@/components/LessonsTable"

export default function Dashboard() {
  return (
    <Layout currentPage="Dashboard">
      <div className="min-h-screen w-full bg-white">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          {/* Welcome Message */}
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Thursday, April 14, 2025 • <span className="font-semibold text-gray-900">Welcome, Alexey</span>
            </p>
          </div>

          {/* Top Stats Grid */}
          <div className="mb-6 sm:mb-8">
            <StatsGrid />
          </div>

          {/* Order Trends Chart */}
          <div className="mb-6 sm:mb-8">
            <OrderTrendsChart />
          </div>

          {/* Bottom Table */}
          <LessonsTable />
        </div>
      </div>
    </Layout>
  )
}
