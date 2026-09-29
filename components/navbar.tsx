"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { BellIcon, HashIcon, HomeIcon, MapIcon, SettingsIcon, UserIcon } from "lucide-react";
import { cn } from "cn";

const BUTTON_STYLE =
  "text-lg px-4 py-7 w-full lg:justify-start rounded-xl gap-5 font-light max-lg:w-12 max-lg:h-12 max-lg:px-0 max-lg:py-0";

const routes = [
  {
    label: "Feed",
    route: "/",
    icon: (path: string) => (
      <HomeIcon className={cn("size-5 ", path === "/" && "max-lg:fill-indigo-900 max-lg:stroke-0")} />
    ),
  },
  {
    label: "Map Explore",
    route: "/map",
    icon: (path: string) => (
      <MapIcon className={cn("size-5 ", path === "/map" && "max-lg:fill-indigo-900 max-lg:stroke-0")} />
    ),
  },
  {
    label: "Projects",
    route: "/projects",
    icon: (path: string) => <HashIcon className={cn("size-5 ", path === "/projects" && "max-lg:stroke-indigo-900")} />,
  },
  {
    label: "Notifications",
    route: "/notifications",
    icon: (path: string) => (
      <BellIcon className={cn("size-5 ", path === "/notifications" && "max-lg:fill-indigo-900 max-lg:stroke-0")} />
    ),
  },
  {
    label: "Profile",
    route: "/profile",
    icon: (path: string) => (
      <UserIcon className={cn("size-5 ", path === "/profile" && "max-lg:fill-indigo-900 max-lg:stroke-0")} />
    ),
    hideMobile: true,
  },
  {
    label: "Settings",
    route: "/settings",
    icon: (path: string) => (
      <SettingsIcon className={cn("size-5 ", path === "/settings" && "max-lg:fill-indigo-900 max-lg:stroke-0")} />
    ),
    hideMobile: true,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex lg:flex-col gap-1 max-lg:justify-around w-full max-lg:px-10">
      {routes.map((route) => (
        <Link href={route.route} key={route.route} className={`max-lg:${route.hideMobile ? "hidden" : ""}`}>
          <Button
            variant={pathname === route.route ? "outline" : "ghost"}
            className={cn(
              pathname === route.route && "lg:shadow text-indigo-950 hover:bg-background max-lg:border-0 focus:ring-0",
              BUTTON_STYLE,
            )}
          >
            {route.icon(pathname)}
            <div className="max-lg:hidden">{route.label}</div>
          </Button>
        </Link>
      ))}
    </nav>
  );
}
