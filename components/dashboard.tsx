"use client"

import { useState } from "react"
import { rentalData } from "@/lib/rental-data"
import { airbnbData } from "@/lib/airbnb-data"
import { RentalPriceTable } from "./rental-price-table"
import { RentalCountTable } from "./rental-count-table"
import { AirbnbCountCard } from "./airbnb-count-card"
import { AirbnbPriceCard } from "./airbnb-price-card"
import { GlobalCitiesChart } from "./global-cities-chart"

export function Dashboard() {
  const [selectedPropertyType, setSelectedPropertyType] = useState("all")

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-balance">Cape Town Rental Market</h1>
          <p className="text-muted-foreground text-lg">
            Aug 2024 - Nov 2025 · Comprehensive analysis of residential rentals and Airbnb listings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RentalPriceTable
            data={rentalData}
            selectedPropertyType={selectedPropertyType}
            onPropertyTypeChange={setSelectedPropertyType}
          />
          <RentalCountTable
            data={rentalData}
            selectedPropertyType={selectedPropertyType}
            onPropertyTypeChange={setSelectedPropertyType}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AirbnbCountCard data={airbnbData} />
          <AirbnbPriceCard data={airbnbData} />
        </div>

        <GlobalCitiesChart />
      </div>
    </main>
  )
}
