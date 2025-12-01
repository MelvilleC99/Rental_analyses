"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AirbnbPriceCard({ data }) {
  const { tableData, averagePrice } = useMemo(() => {
    const rows = data.by_suburb.map((suburb) => {
      const aug = suburb.price.august_2024.average
      const sep = suburb.price.september_2025.average
      const change = suburb.price.change_percent

      return {
        name: suburb.name,
        august: aug,
        september: sep,
        change,
      }
    })

    const avgAug = Math.round(rows.reduce((sum, row) => sum + row.august, 0) / rows.length)
    const avgSep = Math.round(rows.reduce((sum, row) => sum + row.september, 0) / rows.length)
    const avgChange = avgAug ? Math.round(((avgSep - avgAug) / avgAug) * 100) : 0

    return {
      tableData: rows,
      averagePrice: {
        august: avgAug,
        september: avgSep,
        change: avgChange,
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
        <CardTitle>Airbnb Average Nightly Rates</CardTitle>
        <CardDescription>Average price per night by suburb</CardDescription>
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
                  <TableCell className="text-right">
                    R{row.august.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </TableCell>
                  <TableCell className="text-right">
                    R{row.september.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </TableCell>
                  <TableCell className={`text-right font-medium ${row.change < 0 ? "text-green-600" : "text-red-600"}`}>
                    {formatChange(row.change)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="font-semibold bg-muted/50">
                <TableCell>Average</TableCell>
                <TableCell className="text-right">R{averagePrice.august.toLocaleString()}</TableCell>
                <TableCell className="text-right">R{averagePrice.september.toLocaleString()}</TableCell>
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
