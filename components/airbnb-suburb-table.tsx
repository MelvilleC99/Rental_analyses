"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AirbnbSuburbTable({ data }) {
  const tableData = data.by_suburb.map((suburb) => ({
    name: suburb.name,
    aug2024Count: suburb.listings.august_2024,
    sep2025Count: suburb.listings.september_2025,
    aug2024Price: suburb.price.august_2024.average,
    sep2025Price: suburb.price.september_2025.average,
    countChange: suburb.listings.change_percent,
    priceChange: suburb.price.change_percent,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Airbnb Listings by Suburb</CardTitle>
        <CardDescription>Listing counts and average nightly rates across suburbs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Suburb</TableHead>
                <TableHead className="text-right">Aug 2024 Count</TableHead>
                <TableHead className="text-right">Sep 2025 Count</TableHead>
                <TableHead className="text-right">Aug 2024 Price</TableHead>
                <TableHead className="text-right">Sep 2025 Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-right">{row.aug2024Count}</TableCell>
                  <TableCell className="text-right">{row.sep2025Count}</TableCell>
                  <TableCell className="text-right">
                    R{row.aug2024Price.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </TableCell>
                  <TableCell className="text-right">
                    R{row.sep2025Price.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
