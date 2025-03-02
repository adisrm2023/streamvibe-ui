"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Home, Search, Bookmark, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BottomNavigation() {
  const pathname = usePathname()

  // Hide on welcome and auth pages
  if (pathname === "/" || pathname.startsWith("/auth")) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
      <div className="grid h-full grid-cols-4">
        <NavItem href="/home" icon={<Home className="w-6 h-6" />} label="Home" isActive={pathname === "/home"} />
        <NavItem
          href="/search"
          icon={<Search className="w-6 h-6" />}
          label="Search"
          isActive={pathname === "/search"}
        />
        <NavItem
          href="/watchlist"
          icon={<Bookmark className="w-6 h-6" />}
          label="Watchlist"
          isActive={pathname === "/watchlist"}
        />
        <NavItem
          href="/profile"
          icon={<User className="w-6 h-6" />}
          label="Profile"
          isActive={pathname === "/profile"}
        />
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
}

function NavItem({ href, icon, label, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn("flex flex-col items-center justify-center", isActive ? "text-primary" : "text-muted-foreground")}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  )
}

