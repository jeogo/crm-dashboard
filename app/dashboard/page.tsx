import Layout from "@/components/Layout"
import StatsGrid from "@/components/StatsGrid"
import OrderTrendsChart from "@/components/OrderTrendsChart"
import LessonsTable from "@/components/LessonsTable"

export default function Dashboard() {
  return (
    <Layout currentPage="Dashboard">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
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
