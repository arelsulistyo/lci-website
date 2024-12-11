"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-filter backdrop-blur-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Logo</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-4"
              aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-background transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <div className="fixed inset-y-0 right-0 w-screen bg-background shadow-lg">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <span className="text-2xl font-bold text-primary">Logo</span>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Close main menu</span>
              <X className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-4">
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
