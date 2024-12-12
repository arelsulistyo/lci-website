"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Anomaly Detection with YOLO and CNN",
    href: "#features",
    description:
      "Xypher uses YOLO and CNN AI models for fast, accurate anomaly detection.",
  },
  {
    title: "Equipped with Edge Computing",
    href: "#features",
    description:
      "Xypher uses edge computing for real-time, on-site anomaly detection, reducing latency and improving efficiency.",
  },
  {
    title: "1TB of Cloud Storage",
    href: "#features",
    description:
      "Xypher offers 1TB of cloud storage for easy data management and access.",
  },
  {
    title: "4K 640x512 PX Camera",
    href: "#features",
    description:
      "The 640x512px 4K camera captures clear, detailed images for precise monitoring.",
  },
  {
    title: "45 Min Max Flight Time",
    href: "#features",
    description:
      "Xypher provides up to 45 minutes of flight time for extended coverage.",
  },
  {
    title: "Data Security with AES-256",
    href: "#features",
    description:
      "AES-256 encryption ensures all data is securely protected from unauthorized access.",
  },
];

export function Navbar() {
  return (
    <nav className="flex sticky top-0 z-[10000] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-12 items-center mx-auto">
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex md:items-center md:justify-between w-full">
      <div className="flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/xyper-black.svg"
            alt="Xypher Logo"
            width={160}
            height={80}
            className="dark:invert"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Get to Know Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Xypher
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Security Drone
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#background" title="Background">
                    Highlights the need for advanced, real-time anomaly
                    detection in various industries
                  </ListItem>
                  <ListItem href="#our-product" title="Our Product">
                    Discover the Powerful Capabilities of Xypher
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#documentation" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ThemeToggle />
    </div>
  );
}

function MobileNav() {
  return (
    <div className="p-4 flex flex-1 items-center justify-between space-x-2 md:justify-end md:hidden">
      <div className="w-full flex-1 md:w-auto md:flex-none">
        <Image
          src="/xyper-black.svg"
          alt="Xypher Logo"
          width={160}
          height={90}
          className="dark:invert"
        />
      </div>
      <nav className="flex items-center gap-4">
        <ThemeToggle />
        <Sheet>
          <SheetTitle></SheetTitle>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="font-bold">
                Home
              </Link>
              <Link href="#background" className="font-medium">
                Background
              </Link>
              <Link href="#our-product" className="font-medium">
                Our Product
              </Link>
              <Link href="#features" className="font-medium">
                Features
              </Link>
              <Link href="#documentation" className="font-medium">
                Documentation
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
