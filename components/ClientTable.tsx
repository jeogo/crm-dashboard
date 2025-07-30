"use client"

import { Edit, Phone } from "lucide-react"

interface Client {
  name: string
  phone: string
  status: string
  statusColor: string
}

interface ClientTableProps {
  clients: Client[]
}

export default function ClientTable({ clients }: ClientTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {clients.map((client, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-slate-900">{client.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-600">{client.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${client.statusColor}`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-slate-200">
        {clients.map((client, index) => (
          <div key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-900">{client.name}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${client.statusColor}`}>
                {client.status}
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">{client.phone}</p>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-900 text-sm">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="flex items-center gap-1 text-green-600 hover:text-green-900 text-sm">
                <Phone className="w-4 h-4" />
                Call
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
            <span className="font-medium">5</span> results
          </div>
          <div className="flex gap-1">
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">1</button>
            <button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded">2</button>
            <button className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded">3</button>
          </div>
        </div>
      </div>
    </div>
  )
}
