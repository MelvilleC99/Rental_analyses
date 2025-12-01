"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { airbnbGlobalData } from "@/lib/airbnb-global-data"

const METRICS = [
  { value: "airbnb_count", label: "Airbnb Count", format: "number" },
  { value: "airbnb_per_km2", label: "Airbnb per km²", format: "decimal" },
  { value: "annual_bed_per_tourist", label: "Annual Beds per Tourist", format: "decimal" },
  { value: "airbnb_penetration", label: "Airbnb Penetration", format: "percent" },
  { value: "airbnb_per_long_term_rental", label: "Airbnb per Long-term Rental", format: "decimal" },
]

export function GlobalCitiesChart() {
  const [selectedMetric, setSelectedMetric] = useState("airbnb_count")

  const { chartData, metricInfo } = useMemo(() => {
    const metric = METRICS.find(m => m.value === selectedMetric)
    
    const data = airbnbGlobalData.cities
      .map(city => ({
        city: city.city,
        value: city[selectedMetric],
        isCapeTown: city.city === "Cape Town",
      }))
      .sort((a, b) => b.value - a.value)
      .map((item, index) => ({
        ...item,
        rank: index + 1,
        displayName: `${index + 1}. ${item.city}`,
      }))

    return { chartData: data, metricInfo: metric }
  }, [selectedMetric])

  const formatTooltipValue = (value: number) => {
    if (!metricInfo) return value
    switch (metricInfo.format) {
      case "percent":
        return `${(value * 100).toFixed(1)}%`
      case "decimal":
        return value.toFixed(2)
      default:
        return value.toLocaleString()
    }
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>Global Cities Comparison</CardTitle>
            <CardDescription>{airbnbGlobalData.metadata.period}</CardDescription>
          </div>
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              {METRICS.map((metric) => (
                <SelectItem key={metric.value} value={metric.value}>
                  {metric.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pl-0 pr-4">
        <div className="h-[580px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis 
                type="number" 
                tickFormatter={(value) => {
                  if (metricInfo?.format === "percent") return `${(value * 100).toFixed(0)}%`
                  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                  return value.toString()
                }}
              />
              <YAxis 
                type="category" 
                dataKey="displayName" 
                width={140}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                formatter={(value: number) => [formatTooltipValue(value), metricInfo?.label]}
                labelFormatter={(label) => label.replace(/^\d+\.\s/, '')}
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.isCapeTown ? "#f97316" : "#6366f1"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: "#6366f1" }}></span>
            Other Cities
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: "#f97316" }}></span>
            Cape Town
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
