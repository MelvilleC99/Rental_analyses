"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const PROPERTY_TYPES = [
  "all",
  "Studio Apartment",
  "1 Bedroom Apartment",
  "2 Bedroom Apartment",
  "3 Bedroom Apartment",
  "1 Bedroom House",
  "2 Bedroom House",
  "3 Bedroom House",
]

const METRICS = [
  { value: "avg_price", label: "Average Price" },
  { value: "listing_count", label: "Listing Count" },
]

export function MetricChart({ rentalData, selectedPropertyType, onPropertyTypeChange }) {
  const [selectedMetric, setSelectedMetric] = useState("avg_price")

  const chartData = useMemo(() => {
    return Object.entries(rentalData.suburbs).map(([suburb, periods]) => {
      const getMetricValue = (period, metric, propType) => {
        if (propType === "all") {
          if (metric === "avg_price") {
            let totalPrice = 0
            let totalCount = 0
            Object.values(period.properties).forEach((prop) => {
              totalPrice += (prop.avg_price || 0) * (prop.count || 0)
              totalCount += prop.count || 0
            })
            return totalCount > 0 ? Math.round(totalPrice / totalCount) : 0
          } else {
            return period.total_listings || 0
          }
        } else {
          if (metric === "avg_price") {
            return period.properties[propType]?.avg_price || 0
          } else {
            return period.properties[propType]?.count || 0
          }
        }
      }

      const data = {
        name: suburb,
        "Aug 2024": getMetricValue(periods.august_2024, selectedMetric, selectedPropertyType),
        "Mar 2025": getMetricValue(periods.march_2025, selectedMetric, selectedPropertyType),
        "Nov 2025": getMetricValue(periods.november_2025, selectedMetric, selectedPropertyType),
      }

      return data
    })
  }, [rentalData, selectedMetric, selectedPropertyType])

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <CardTitle>Rental Market Trends by Suburb</CardTitle>
            <CardDescription>Compare metrics across time periods</CardDescription>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="w-full md:w-48">
              <label className="text-sm font-medium mb-2 block">Metric</label>
              <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                <SelectTrigger>
                  <SelectValue />
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
            <div className="w-full md:w-48">
              <label className="text-sm font-medium mb-2 block">Property Type</label>
              <Select value={selectedPropertyType} onValueChange={onPropertyTypeChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} interval={0} tick={{ fontSize: 12 }} />
            <YAxis
              label={{
                value: selectedMetric === "avg_price" ? "Price (R)" : "Count",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value) =>
                selectedMetric === "avg_price" ? `R${value.toLocaleString()}` : value.toLocaleString()
              }
            />
            <Legend />
            <Bar dataKey="Aug 2024" fill="#ef4444" />
            <Bar dataKey="Mar 2025" fill="#f97316" />
            <Bar dataKey="Nov 2025" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
