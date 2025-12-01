"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function AirbnbRentalComparisonChart({ rentalData, airbnbData }) {
  const chartData = useMemo(() => {
    // Get matching suburbs between rental and airbnb data
    const rentalSuburbs = Object.keys(rentalData.suburbs)

    return rentalSuburbs
      .map((suburb) => {
        // Get rental count for August 2024
        const rentalAug = rentalData.suburbs[suburb].august_2024.total_listings || 0

        // Find airbnb data for this suburb
        const airbnbSuburb = airbnbData.by_suburb.find((s) => s.name.toLowerCase() === suburb.toLowerCase())

        if (!airbnbSuburb) return null

        const airbnbAug = airbnbSuburb.listings.august_2024

        return {
          name: suburb,
          "Rentals 2024": rentalAug,
          "Airbnb 2024": airbnbAug,
        }
      })
      .filter(Boolean)
  }, [rentalData, airbnbData])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rentals vs Airbnb Count by Suburb (August 2024)</CardTitle>
        <CardDescription>Comparison of long-term rental listings and Airbnb listings</CardDescription>
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
            <YAxis label={{ value: "Count", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="Rentals 2024" fill="#3b82f6" />
            <Bar dataKey="Airbnb 2024" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
