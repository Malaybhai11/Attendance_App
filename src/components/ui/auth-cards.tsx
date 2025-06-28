"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export function AuthCard({ type = "login" }: { type?: "login" | "signup" }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (type === "signup") {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (!res.ok) {
        const text = await res.text()
        setError(text || "Signup failed.")
        setLoading(false)
        return
      }

      // After successful signup, redirect to login
      router.push("/auth/login")
    }

    if (type === "login") {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (res?.error) {
        setError("Invalid credentials.")
        setLoading(false)
        return
      }

      router.push("/dashboard")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">
            {type === "login" ? "Login to your account" : "Create an account"}
          </h2>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            {type === "signup" && (
              <div className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            )}
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? (type === "login" ? "Logging in..." : "Signing up...") : type === "login" ? "Login" : "Sign up"}
            </Button>
          </CardContent>
        </form>
        <CardFooter className="text-center text-sm text-muted-foreground">
          {type === "login" ? (
            <>Don't have an account? <a className="underline" href="/auth/signup">Sign up</a></>
          ) : (
            <>Already have an account? <a className="underline" href="/auth/login">Login</a></>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
