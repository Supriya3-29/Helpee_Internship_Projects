"use client"
import { useRouter } from "next/navigation"

export default function About() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>About Us</h1>
      <button onClick={() => router.push("/")}>Go home</button>
    </div>
  )
}
