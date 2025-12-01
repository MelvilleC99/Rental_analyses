"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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

export function RentalPriceTable({ data, selectedPropertyType, onPropertyTypeChange }) {
  const { tableData, averagePrice } = useMemo(() => {
    const rows = Object.entries(data.suburbs).map(([suburb, periods]) => {
      const aug = periods.august_2024
      const mar = periods.march_2025
      const nov = periods.november_2025

      const getPrice = (period, propType) => {
        if (propType === "all") {
          let totalPrice = 0
          let totalCount = 0
          Object.values(period.properties).forEach((prop) => {
            totalPrice += (prop.avg_price || 0) * (prop.count || 0)
            totalCount += prop.count || 0
          })
          return totalCount > 0 ? Math.round(totalPrice / totalCount) : 0
        }
        return period.properties[propType]?.avg_price || 0
      }

      const augPrice = getPrice(aug, selectedPropertyType)
      const marPrice = getPrice(mar, selectedPropertyType)
      const novPrice = getPrice(nov, selectedPropertyType)

      const changeAugToNov = augPrice ? Math.round(((novPrice - augPrice) / augPrice) * 100) : 0

      return {
        suburb,
        august: augPrice,
        march: marPrice,
        november: novPrice,
        change: changeAugToNov,
      }
    })

    const avgAug = Math.round(rows.reduce((sum, row) => sum + row.august, 0) / rows.length)
    const avgMar = Math.round(rows.reduce((sum, row) => sum + row.march, 0) / rows.length)
    const avgNov = Math.round(rows.reduce((sum, row) => sum + row.november, 0) / rows.length)
    const avgChangeAugToNov = avgAug ? Math.round(((avgNov - avgAug) / avgAug) * 100) : 0

    return {
      tableData: rows,
      averagePrice: {
        august: avgAug,
        march: avgMar,
        november: avgNov,
        change: avgChangeAugToNov,
      },
    }
  }, [data, selectedPropertyType])

  const formatChange = (change) => {
    const sign = change > 0 ? "+" : ""
    return `${sign}${change}%`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Rental Prices</CardTitle>
        <CardDescription>Monthly average prices by suburb across periods</CardDescription>
        <div className="mt-4 w-full">
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
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Suburb</TableHead>
                <TableHead className="text-right">Aug 2024</TableHead>
                <TableHead className="text-right">Mar 2025</TableHead>
                <TableHead className="text-right">Nov 2025</TableHead>
                <TableHead className="text-right">Change %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.suburb}>
                  <TableCell className="font-medium">{row.suburb}</TableCell>
                  <TableCell className="text-right">R{row.august.toLocaleString()}</TableCell>
                  <TableCell className="text-right">R{row.march.toLocaleString()}</TableCell>
                  <TableCell className="text-right">R{row.november.toLocaleString()}</TableCell>
                  <TableCell className={`text-right font-medium ${row.change < 0 ? "text-green-600" : "text-red-600"}`}>
                    {formatChange(row.change)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="font-semibold bg-muted/50">
                <TableCell>Average</TableCell>
                <TableCell className="text-right">R{averagePrice.august.toLocaleString()}</TableCell>
                <TableCell className="text-right">R{averagePrice.march.toLocaleString()}</TableCell>
                <TableCell className="text-right">R{averagePrice.november.toLocaleString()}</TableCell>
                <TableCell className={`text-right ${averagePrice.change < 0 ? "text-green-600" : "text-red-600"}`}>
                  {formatChange(averagePrice.change)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
