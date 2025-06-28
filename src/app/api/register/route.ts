import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, password, name } = await req.json()

  if (!email || !password) {
    return new Response("Missing fields", { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) return new Response("User already exists", { status: 400 })

  const hashed = await hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashed,
    },
  })

  return new Response("User created", { status: 201 })
}
