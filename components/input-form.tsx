"use client"
import * as React from "react"
import { z } from "zod"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Schema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
})

export default function InputForm() {
  const [username, setUsername] = React.useState("")
  function handleBlur() {
    const result = Schema.safeParse({ username })
    if (!result.success) {
      toast.error(result.error.errors[0].message)
    } else {
      // show a small success toast to indicate validity; no button required
      toast.success("Username looks good")
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={handleBlur}
        placeholder="shadcn"
      />
    </div>
  )
}
