import Layout from "@/components/Layout"
import SearchBar from "@/components/SearchBar"
import ClientsList from "@/components/ClientsList"

export default function Clients() {
  return (
    <Layout currentPage="Clients">
      <div className="min-h-screen w-full bg-white">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          {/* Page Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Clients</h1>

          {/* Search Bar */}
          <div className="mb-6 sm:mb-8">
            <SearchBar />
          </div>

          {/* Clients List */}
          <ClientsList />
        </div>
      </div>
    </Layout>
  )
}
