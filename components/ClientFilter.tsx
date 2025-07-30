"use client"

import { useState } from "react"
import { Search, Filter, SortAsc, SortDesc, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClientFilterProps {
  onSearchChange: (search: string) => void
  onSortChange: (sort: string) => void
  onFilterChange: (filter: string) => void
}

export default function ClientFilter({ onSearchChange, onSortChange, onFilterChange }: ClientFilterProps) {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")
  const [filter, setFilter] = useState("all")

  const handleSearchChange = (value: string) => {
    setSearch(value)
    onSearchChange(value)
  }

  const handleSortChange = (newSortBy: string) => {
    if (newSortBy === sortBy) {
      const newOrder = sortOrder === "asc" ? "desc" : "asc"
      setSortOrder(newOrder)
      onSortChange(`${newSortBy}-${newOrder}`)
    } else {
      setSortBy(newSortBy)
      setSortOrder("asc")
      onSortChange(`${newSortBy}-asc`)
    }
  }

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    onFilterChange(newFilter)
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Search Bar */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search clients by name, email, or phone..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm bg-slate-50/50"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [field, order] = e.target.value.split('-')
                setSortBy(field)
                setSortOrder(order)
                onSortChange(e.target.value)
              }}
              className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
            >
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="email-asc">Email A-Z</option>
              <option value="email-desc">Email Z-A</option>
              <option value="phone-asc">Phone A-Z</option>
              <option value="phone-desc">Phone Z-A</option>
            </select>
            {sortOrder === "asc" ? (
              <SortAsc className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            ) : (
              <SortDesc className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            )}
          </div>

          {/* Filter by Type */}
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px]"
            >
              <option value="all">All Clients</option>
              <option value="recent">Recent</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Clear Filters */}
          {(search || filter !== "all" || sortBy !== "name" || sortOrder !== "asc") && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearch("")
                setFilter("all")
                setSortBy("name")
                setSortOrder("asc")
                onSearchChange("")
                onFilterChange("all")
                onSortChange("name-asc")
              }}
              className="whitespace-nowrap"
            >
              Clear All
            </Button>
          )}
        </div>
      </div>

      {/* Filter Info */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Users className="w-4 h-4" />
          <span>
            {search ? `Search results for "${search}"` : 
             filter !== "all" ? `Showing ${filter} clients` : "All clients"}
          </span>
        </div>
        
        <div className="text-sm text-slate-500">
          Sort by {sortBy} ({sortOrder === "asc" ? "ascending" : "descending"})
        </div>
      </div>
    </div>
  )
}
