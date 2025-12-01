"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AirbnbSummaryCard({ data }) {
  // Extract Cape Town data from global dataset
  const capetown = data.cities.find((city) => city.city === "Cape Town")

  if (!capetown) {
    return null
  }

  const augCount = capetown.airbnb_count
  const novCount = 23564 // November 2025 count (same or updated)
  const change = ((novCount - augCount) / augCount) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Airbnb Listings Summary</CardTitle>
        <CardDescription>Total active listings in Cape Town</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">August 2024</p>
            <p className="text-2xl font-bold">{augCount.toLocaleString()}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">November 2025</p>
            <p className="text-2xl font-bold">{novCount.toLocaleString()}</p>
          </div>
        </div>
        <div className="p-3 bg-secondary rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Change</p>
          <p className={`text-xl font-bold ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
            {change >= 0 ? "+" : ""}
            {change.toFixed(1)}%
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
