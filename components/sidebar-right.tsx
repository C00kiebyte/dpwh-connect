import { SearchIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import TrendingTagsWidget from "./trending-tags-widget";
import { NationalStatusWidget } from "./NationalStatusWidget";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SidebarRight() {
  return (
    <aside className="sticky top-0 w-80 h-dvh pr-10 py-5 space-y-8 shrink-0 max-xl:hidden overflow-scroll">
      <InputGroup className="bg-white shadow rounded-full px-1 py-5 focus-within:border-indigo-900 focus-within:border">
        <InputGroupInput placeholder="Search projects, locations, people" />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <TrendingTagsWidget />
      <NationalStatusWidget />

      <div className="flex flex-wrap gap-x-2">
        <Button variant="link" className="p-0 text-zinc-500 text-xs">
          Terms of Service
        </Button>
        <Button variant="link" className="p-0 text-zinc-500 text-xs">
          Privacy Policy
        </Button>
        <Link href="https://www.dpwh.gov.ph/dpwh/" target="_blank">
          <Button variant="link" className="p-0 text-zinc-500 text-xs">
            DPWH
          </Button>
        </Link>
        <Link href="https://bettergov.ph/" target="_blank">
          <Button variant="link" className="p-0 text-zinc-500 text-xs">
            BetterGov
          </Button>
        </Link>
      </div>
    </aside>
  );
}
