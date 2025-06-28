"use client"

import { useState } from "react"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface Employee {
  id: string
  name: string
  department: string
  timeIn: string
  photoUrl: string
}

const employees: Employee[] = [
  {
    id: "1",
    name: "Ramesh Gupta",
    department: "Security",
    timeIn: "09:05 AM",
    photoUrl: "/faces/male.jpg",
  },
  {
    id: "2",
    name: "Priya Sharma",
    department: "Accounts",
    timeIn: "09:12 AM",
    photoUrl: "/faces/female.jpg",
  },
]

export default function ManageEmployees() {
  const [selected, setSelected] = useState<Employee | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {employees.map((emp) => (
        <Card key={emp.id}>
          <CardHeader className="flex items-center gap-4">
            <img src={emp.photoUrl} alt={emp.name} className="h-16 w-16 rounded-full object-cover border" />
            <div>
              <CardTitle>{emp.name}</CardTitle>
              <Badge variant="secondary">{emp.department}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Arrival: {emp.timeIn}</p>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setSelected(emp)}>
                  Edit Info
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit {selected?.name}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div>
                    <Label>Name</Label>
                    <Input defaultValue={selected?.name} />
                  </div>
                  <div>
                    <Label>Department</Label>
                    <Input defaultValue={selected?.department} />
                  </div>
                  <div>
                    <Label>Time In</Label>
                    <Input defaultValue={selected?.timeIn} />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
