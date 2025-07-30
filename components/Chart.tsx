"use client"

interface ChartProps {
  data: {
    months: string[]
    values: number[]
  }
}

export default function Chart({ data }: ChartProps) {
  const maxValue = Math.max(...data.values)
  const minValue = Math.min(...data.values)
  const range = maxValue - minValue

  return (
    <div className="w-full h-60">
      <svg className="w-full h-full" viewBox="0 0 800 240">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="60" y1={40 + i * 40} x2="760" y2={40 + i * 40} stroke="#e2e8f0" strokeWidth="1" />
        ))}

        {/* Y-axis labels */}
        {[0, 1, 2, 3, 4].map((i) => (
          <text key={i} x="50" y={45 + i * 40} textAnchor="end" className="text-xs fill-slate-500">
            {Math.round(maxValue - (i * range) / 4)}
          </text>
        ))}

        {/* Chart line */}
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={data.values
            .map((value, index) => {
              const x = 60 + index * (700 / (data.values.length - 1))
              const y = 200 - ((value - minValue) / range) * 160
              return `${x},${y}`
            })
            .join(" ")}
        />

        {/* Data points */}
        {data.values.map((value, index) => {
          const x = 60 + index * (700 / (data.values.length - 1))
          const y = 200 - ((value - minValue) / range) * 160
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="4"
              fill="#3b82f6"
              className="hover:r-6 transition-all cursor-pointer"
            />
          )
        })}

        {/* X-axis labels */}
        {data.months.map((month, index) => {
          const x = 60 + index * (700 / (data.months.length - 1))
          return (
            <text key={index} x={x} y="230" textAnchor="middle" className="text-xs fill-slate-500">
              {month}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
