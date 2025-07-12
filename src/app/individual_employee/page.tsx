"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const employees = [
  { id: "emp001", name: "Ramesh Gupta", image: "/faces/male.jpg", department: "Security" },
  { id: "emp002", name: "Priya Sharma", image: "/faces/female.jpg", department: "HR" },
]   

type PerformanceData = { date: string; timeIn: number }[]

const dummyData: Record<string, PerformanceData> = {
  emp001: [
    { date: "2025-06-24", timeIn: 9 },
    { date: "2025-06-25", timeIn: 9.5 },
    { date: "2025-06-26", timeIn: 8.8 },
    { date: "2025-06-27", timeIn: 9.1 },
    { date: "2025-06-28", timeIn: 9.0 },
  ],
  emp002: [
    { date: "2025-06-24", timeIn: 10 },
    { date: "2025-06-25", timeIn: 9.4 },
    { date: "2025-06-26", timeIn: 8.6 },
    { date: "2025-06-27", timeIn: 9.2 },
    { date: "2025-06-28", timeIn: 9.5 },
  ],
}


export default function EmployeePerformance() {
  const [selected, setSelected] = useState(employees[0])
  const data = dummyData[selected.id]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Performance</h1>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Select Employee</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            {employees.map((emp) => (
              <div
                key={emp.id}
                onClick={() => setSelected(emp)}
                className="flex items-center gap-3 p-2 hover:bg-muted rounded cursor-pointer"
              >
                <Avatar>
                  <AvatarImage src={emp.image} />
                  <AvatarFallback>{emp.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{emp.name}</p>
                  <p className="text-sm text-muted-foreground">{emp.department}</p>
                </div>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>

      {/* Profile Card */}
      <Card className="max-w-md">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={selected.image} />
            <AvatarFallback>{selected.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{selected.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{selected.department}</p>
          </div>
        </CardHeader>
      </Card>

      {/* Attendance Graph */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance This Week</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[8, 10]} unit=" AM" />
              <Tooltip />
              <Line type="monotone" dataKey="timeIn" stroke="#0ea5e9" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
