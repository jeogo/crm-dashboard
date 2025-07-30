"use client"

import { useState } from "react"
import Layout from "@/components/Layout"
import ClientFilter from "@/components/ClientFilter"
import ClientsList from "@/components/ClientsList"
import AddClientDialog from "@/components/AddClientDialog"
import { Button } from "@/components/ui/button"
import { Plus, Users } from "lucide-react"

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name-asc")
  const [filterBy, setFilterBy] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const handleAddClient = (client: any) => {
    // This will be handled by the ClientsList component
    console.log("New client added:", client)
  }

  return (
    <Layout currentPage="Clients">
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="w-full max-w-none p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                  Clients
                </h1>
                <p className="text-slate-600 text-sm mt-1">
                  Manage and organize your client relationships
                </p>
              </div>
            </div>
            
            <Button 
              onClick={() => setIsAddDialogOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 shadow-sm"
              size="lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </div>

          {/* Filter Section */}
          <ClientFilter
            onSearchChange={setSearchTerm}
            onSortChange={setSortBy}
            onFilterChange={setFilterBy}
          />

          {/* Clients List */}
          <ClientsList
            searchTerm={searchTerm}
            sortBy={sortBy}
            filterBy={filterBy}
            onAddClient={handleAddClient}
          />
        </div>
      </div>

      {/* Add Client Dialog */}
      <AddClientDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAddClient={handleAddClient}
      />
    </Layout>
  )
}
