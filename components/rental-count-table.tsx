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

export function RentalCountTable({ data, selectedPropertyType, onPropertyTypeChange }) {
  const { tableData, totalCount } = useMemo(() => {
    const rows = Object.entries(data.suburbs).map(([suburb, periods]) => {
      const aug = periods.august_2024
      const mar = periods.march_2025
      const nov = periods.november_2025

      const getCount = (period, propType) => {
        if (propType === "all") {
          return period.total_listings || 0
        }
        return period.properties[propType]?.count || 0
      }

      const augCount = getCount(aug, selectedPropertyType)
      const marCount = getCount(mar, selectedPropertyType)
      const novCount = getCount(nov, selectedPropertyType)

      const changeAugToNov = augCount ? Math.round(((novCount - augCount) / augCount) * 100) : 0

      return {
        suburb,
        august: augCount,
        march: marCount,
        november: novCount,
        change: changeAugToNov,
      }
    })

    const totalAug = rows.reduce((sum, row) => sum + row.august, 0)
    const totalMar = rows.reduce((sum, row) => sum + row.march, 0)
    const totalNov = rows.reduce((sum, row) => sum + row.november, 0)
    const totalChangeAugToNov = totalAug ? Math.round(((totalNov - totalAug) / totalAug) * 100) : 0

    return {
      tableData: rows,
      totalCount: {
        august: totalAug,
        march: totalMar,
        november: totalNov,
        change: totalChangeAugToNov,
      },
    }
  }, [data, selectedPropertyType])

  const formatChange = (change) => {
    const color = change >= 0 ? "text-green-600" : "text-red-600"
    const sign = change > 0 ? "+" : ""
    return `${sign}${change}%`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Listing Counts</CardTitle>
        <CardDescription>Number of available listings by suburb across periods</CardDescription>
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
                  <TableCell className="text-right">{row.august}</TableCell>
                  <TableCell className="text-right">{row.march}</TableCell>
                  <TableCell className="text-right">{row.november}</TableCell>
                  <TableCell className={`text-right font-medium ${row.change <= 0 ? "text-red-600" : "text-green-600"}`}>
                    {formatChange(row.change)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="font-semibold bg-muted/50">
                <TableCell>Total</TableCell>
                <TableCell className="text-right">{totalCount.august}</TableCell>
                <TableCell className="text-right">{totalCount.march}</TableCell>
                <TableCell className="text-right">{totalCount.november}</TableCell>
                <TableCell className={`text-right ${totalCount.change <= 0 ? "text-red-600" : "text-green-600"}`}>
                  {formatChange(totalCount.change)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
