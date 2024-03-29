"use client"
import { Button } from "@nextui-org/react"
import Link from "next/link"

const Toolbar = () => {
  return (
    <>
    <Button color = "primary" className = "text-lg">
        Start Trial
    </Button>

    <Link href={"/sign-in"}> Login</Link>
    </>
  )
}

export default Toolbar
