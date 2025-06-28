import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ManagerDashboard() {
  const stats = {
    total: 150,
    present: 124,
    absent: 26,
    late: 9,
  }

  type Status = "Present" | "Late" | "Absent";

  const employeesToday: { name: string; time: string; status: Status }[] = [
    { name: "Ramesh Gupta", time: "09:01 AM", status: "Present" },
    { name: "Ravi Patel", time: "10:15 AM", status: "Late" },
    { name: "Arjun Verma", time: "-", status: "Absent" },
  ]

  const statusColor: Record<Status, string> = {
    Present: "bg-green-100 text-green-700",
    Late: "bg-yellow-100 text-yellow-700",
    Absent: "bg-red-100 text-red-700",
  }

  return (

    <div className="p-6 grid gap-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>Total Employees</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold">{stats.total}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Present Today</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold text-green-600">{stats.present}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Late Arrivals</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold text-yellow-600">{stats.late}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Absent Today</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold text-red-600">{stats.absent}</CardContent>
        </Card>
      </div>

      {/* Recent Attendance Table */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Today's Attendance</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Time In</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeesToday.map((emp, i) => (
              <TableRow key={i}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.time}</TableCell>
                <TableCell>
                  <span className={`rounded px-2 py-1 text-sm font-medium ${statusColor[emp.status]}`}>
                    {emp.status}
                  </span>
                </TableCell>
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </div>
    </div>
  )
}