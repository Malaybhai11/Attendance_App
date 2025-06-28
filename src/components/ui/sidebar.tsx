"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "@/lib/use-media-query"

export function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const navItems = [
    { name: "Dashboard", href: "/Dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "login or signup", href: "/auth/login" }, 
    { name: "Manage Employees", href: "/Manage_employees" },
    { name: "Manage Cameras", href: "/Manage_Cameras" },
    { name: "Manage Unknown Faces", href: "/Manage_Unknowns" },
    { name: "Monthly Attendance", href: "/Monthly" },
  ]

  const content = (
    <nav className="space-y-4 p-4">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="block text-lg hover:text-blue-500">
          {item.name}
        </Link>
      ))}
    </nav>
  )

  if (isDesktop) {
    return <aside className="w-64 min-h-screen bg-gray-900 text-white fixed">{content}</aside>
  }

  return (
    <Sheet>
      <SheetTrigger className="p-4">
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray-900 text-white w-64">
        {content}
      </SheetContent>
    </Sheet>
  )
}
