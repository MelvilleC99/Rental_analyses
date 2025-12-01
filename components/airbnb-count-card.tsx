"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AirbnbCountCard({ data }) {
  const { tableData, totalCount } = useMemo(() => {
    const rows = data.by_suburb.map((suburb) => {
      const aug = suburb.listings.august_2024
      const sep = suburb.listings.september_2025
      const change = suburb.listings.change_percent

      return {
        name: suburb.name,
        august: aug,
        september: sep,
        change,
      }
    })

    const totalAug = rows.reduce((sum, row) => sum + row.august, 0)
    const totalSep = rows.reduce((sum, row) => sum + row.september, 0)
    const totalChange = totalAug ? Math.round(((totalSep - totalAug) / totalAug) * 100) : 0

    return {
      tableData: rows,
      totalCount: {
        august: totalAug,
        september: totalSep,
        change: totalChange,
      },
    }
  }, [data])

  const formatChange = (change) => {
    const sign = change > 0 ? "+" : ""
    return `${sign}${change}%`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Airbnb Listing Counts</CardTitle>
        <CardDescription>Number of Airbnb listings by suburb</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Suburb</TableHead>
                <TableHead className="text-right">Aug 2024</TableHead>
                <TableHead className="text-right">Sep 2025</TableHead>
                <TableHead className="text-right">Change %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-right">{row.august}</TableCell>
                  <TableCell className="text-right">{row.september}</TableCell>
                  <TableCell className={`text-right font-medium ${row.change < 0 ? "text-green-600" : "text-red-600"}`}>
                    {formatChange(row.change)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="font-semibold bg-muted/50">
                <TableCell>Total</TableCell>
                <TableCell className="text-right">{totalCount.august}</TableCell>
                <TableCell className="text-right">{totalCount.september}</TableCell>
                <TableCell className={`text-right ${totalCount.change < 0 ? "text-green-600" : "text-red-600"}`}>
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
