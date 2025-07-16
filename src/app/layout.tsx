import "./globals.css"
import { Sidebar } from "@/components/ui/sidebar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getServerSession } from "next-auth"
import {authOptions} from "@/lib/auth"
import { AuthSessionProvider } from "@/components/ui/session-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Attendance App",
  description: "Built with Next.js, pnpm, and shadcn",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-100"}>
        <AuthSessionProvider session={session}>
          <Sidebar />
          <main className="md:ml-64 p-4">{children}</main>
        </AuthSessionProvider>
      </body>
    </html>
  )
}
