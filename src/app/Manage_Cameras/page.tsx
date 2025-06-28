"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface Camera {
  id: string
  name: string
  ip: string
  mode: "login" | "logout"
}

const initialCameras: Camera[] = [
  { id: "cam-001", name: "Main Entrance", ip: "192.168.0.10", mode: "login" },
  { id: "cam-002", name: "Back Exit", ip: "192.168.0.11", mode: "logout" },
]

export default function ManageCamerasPage() {
  const [cameras, setCameras] = useState(initialCameras)

  return (
    <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Camera Management</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Cameras</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Camera</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Camera</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div>
                <Label htmlFor="name">Camera Name</Label>
                <Input id="name" placeholder="e.g. Front Gate" />
              </div>
              <div>
                <Label htmlFor="ip">IP Address</Label>
                <Input id="ip" placeholder="e.g. 192.168.0.15" />
              </div>
              <div>
                <Label htmlFor="mode">Mode (login/logout)</Label>
                <Input id="mode" placeholder="login or logout" />
              </div>
              <Button type="submit">Save Camera</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((cam) => (
          <Card key={cam.id}>
            <CardHeader>
              <CardTitle>{cam.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>ID:</strong> {cam.id}</p>
              <p><strong>IP:</strong> {cam.ip}</p>
              <p><strong>Mode:</strong>{" "}
                <Badge variant={cam.mode === "login" ? "default" : "destructive"}>
                  {cam.mode.toUpperCase()}
                </Badge>
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Feed</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
