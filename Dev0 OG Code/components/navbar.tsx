"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
  children?: { name: string; href: string; description?: string }[]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation: NavItem[] = [
    {
      name: "Why Berlin",
      href: "/why-berlin",
      children: [
        { name: "FinTech Ecosystem", href: "/fintech-map", description: "Explore Berlin's thriving FinTech landscape" },
        { name: "Success Stories", href: "/success-stories", description: "Learn from entrepreneurs who made it" },
      ],
    },
    {
      name: "Getting Started",
      href: "/getting-started",
      children: [
        {
          name: "Company Registration",
          href: "/company-registration",
          description: "Step-by-step registration process",
        },
        { name: "EU Blue Card", href: "/blue-card", description: "Personal relocation and work permits" },
        { name: "Living in Berlin", href: "/living-berlin", description: "Housing, integration, and daily life" },
      ],
    },
    {
      name: "Business Growth",
      href: "/business-growth",
      children: [
        { name: "Funding & Financing", href: "/funding", description: "Access capital and investment" },
        { name: "Go-To-Market", href: "/go-to-market", description: "Launch your business in Germany" },
        { name: "Legal & Compliance", href: "/legal-compliance", description: "Navigate German regulations" },
      ],
    },
    {
      name: "Support",
      href: "/support",
      children: [
        { name: "Scale-Up Academy", href: "/scale-up-academy", description: "Accelerate your business growth" },
        { name: "Network & Events", href: "/events", description: "Connect with the Berlin ecosystem" },
        { name: "Resources", href: "/resources", description: "Templates, guides, and tools" },
      ],
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div
              className={cn(
                "p-2 rounded-xl transition-colors",
                scrolled ? "bg-blue-600" : "bg-white/20 backdrop-blur-sm",
              )}
            >
              <Image
                src="/images/hoft-logo-clean.png"
                alt="House of Finance & Tech Berlin"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </div>
            <div className={scrolled ? "text-gray-900" : "text-white"}>
              <div className="text-lg font-bold">House of Finance & Tech</div>
              <div className="text-sm font-medium opacity-80">Berlin</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={cn(
                    "flex items-center transition-colors font-medium",
                    scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200",
                  )}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {item.children && (
                  <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="p-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{child.name}</div>
                          {child.description && <div className="text-sm text-gray-500">{child.description}</div>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/join-network">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                Join Network
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-gray-900" : "text-white"}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-xl">
            <div className="flex flex-col space-y-1 px-4">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 transition-colors font-medium py-2"
                  >
                    {item.name}
                    <ChevronRight
                      className={cn("h-4 w-4 transition-transform", activeDropdown === item.name ? "rotate-90" : "")}
                    />
                  </button>

                  {activeDropdown === item.name && item.children && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/join-network" onClick={() => setIsOpen(false)}>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold w-full py-3 rounded-lg mt-4">
                  Join Network
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
