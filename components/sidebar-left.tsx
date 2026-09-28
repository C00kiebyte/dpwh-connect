import Logo from "./logo";
import Navbar from "./navbar";
import { Button } from "./ui/button";

export default function SidebarLeft() {
  return (
    <aside className="sticky top-0 h-dvh pl-10 py-5 space-y-8 shrink-0">
      <header className="flex items-center gap-2">
        <Logo className="scale-80" />
        <h2 className="text-xl font-bold text-indigo-950">DPWH Connect</h2>
      </header>
      <Navbar />
      <Button className="text-lg font-semibold w-full p-6 rounded-full bg-indigo-900 shadow">Post Update</Button>
    </aside>
  );
}
