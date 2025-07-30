"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample order trends data - in a real app this would come from your API
const orderTrendsData = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  values: [85, 120, 150, 135, 180, 210, 195, 250, 280, 320, 290, 350]
}

export default function OrderTrendsChart() {
  const maxValue = Math.max(...orderTrendsData.values)
  const minValue = Math.min(...orderTrendsData.values)
  const range = maxValue - minValue

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">Order Trends</CardTitle>
        <CardDescription className="text-sm text-slate-600">
          Monthly order volume over the past year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64">
          <svg className="w-full h-full" viewBox="0 0 800 256">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line 
                key={i} 
                x1="60" 
                y1={40 + i * 35} 
                x2="740" 
                y2={40 + i * 35} 
                stroke="#f1f5f9" 
                strokeWidth="1" 
              />
            ))}

            {/* Y-axis labels */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <text 
                key={i} 
                x="50" 
                y={45 + i * 35} 
                textAnchor="end" 
                className="text-xs fill-slate-500"
              >
                {Math.round(maxValue - (i * range) / 5)}
              </text>
            ))}

            {/* Chart line */}
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={orderTrendsData.values
                .map((value, index) => {
                  const x = 60 + index * (680 / (orderTrendsData.values.length - 1))
                  const y = 215 - ((value - minValue) / range) * 175
                  return `${x},${y}`
                })
                .join(" ")}
            />

            {/* Data points */}
            {orderTrendsData.values.map((value, index) => {
              const x = 60 + index * (680 / (orderTrendsData.values.length - 1))
              const y = 215 - ((value - minValue) / range) * 175
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#3b82f6"
                    className="hover:r-6 transition-all cursor-pointer"
                  />
                  {/* Tooltip on hover */}
                  <circle
                    cx={x}
                    cy={y}
                    r="12"
                    fill="transparent"
                    className="cursor-pointer"
                  >
                    <title>{`${orderTrendsData.months[index]}: ${value} orders`}</title>
                  </circle>
                </g>
              )
            })}

            {/* X-axis labels */}
            {orderTrendsData.months.map((month, index) => {
              const x = 60 + index * (680 / (orderTrendsData.months.length - 1))
              return (
                <text 
                  key={index} 
                  x={x} 
                  y="245" 
                  textAnchor="middle" 
                  className="text-xs fill-slate-500"
                >
                  {month}
                </text>
              )
            })}

            {/* Chart area fill (optional gradient) */}
            <defs>
              <linearGradient id="orderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            <polygon
              fill="url(#orderGradient)"
              points={`60,215 ${orderTrendsData.values
                .map((value, index) => {
                  const x = 60 + index * (680 / (orderTrendsData.values.length - 1))
                  const y = 215 - ((value - minValue) / range) * 175
                  return `${x},${y}`
                })
                .join(" ")} 740,215`}
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}
