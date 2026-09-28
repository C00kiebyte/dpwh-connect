"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { BellIcon, HashIcon, HomeIcon, MapIcon, SettingsIcon, UserIcon } from "lucide-react";
import { cn } from "cn";

const BUTTON_STYLE = "text-lg px-4 py-7 w-full justify-start rounded-xl gap-5 font-light";

const routes = [
  { label: "Feed", route: "/", icon: <HomeIcon className="size-5" /> },
  { label: "Map Explore", route: "/map", icon: <MapIcon className="size-5" /> },
  { label: "Notifications", route: "/notifications", icon: <BellIcon className="size-5" /> },
  { label: "Projects", route: "/projects", icon: <HashIcon className="size-5" /> },
  { label: "Profile", route: "/profile", icon: <UserIcon className="size-5" /> },
  { label: "Settings", route: "/settings", icon: <SettingsIcon className="size-5" /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex lg:flex-col gap-1 max-lg:justify-around w-full">
      {routes.map((route) => (
        <Link href={route.route} key={route.route}>
          <Button
            variant={pathname === route.route ? "outline" : "ghost"}
            className={cn(pathname === route.route && "shadow text-indigo-950 hover:bg-background", BUTTON_STYLE)}
          >
            {route.icon}
            <div className="max-lg:hidden">{route.label}</div>
          </Button>
        </Link>
      ))}
    </nav>
  );
}
