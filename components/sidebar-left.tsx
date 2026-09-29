import Logo from "./logo";
import Navbar from "./navbar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function SidebarLeft() {
  return (
    <>
      <div className="flex items-center justify-between fixed top-0 w-full p-2 space-y-8 shrink-0 lg:hidden bg-white shadow z-100">
        <header className="flex items-center gap-2 m-0">
          <Logo className="scale-80" />
          <h2 className="text-xl font-bold text-indigo-950">DPWH Connect</h2>
        </header>

        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex items-center justify-between fixed bottom-0 w-full p-2 space-y-8 shrink-0 lg:hidden bg-white shadow z-100">
        <Navbar />
      </div>

      <aside className="sticky top-0 w-80 h-dvh pl-10 py-5 space-y-8 shrink-0 max-lg:hidden overflow-scroll">
        <header className="flex items-center gap-2">
          <Logo className="scale-80" />
          <h2 className="text-xl font-bold text-indigo-950">DPWH Connect</h2>
        </header>
        <Navbar />
        <Button className="text-lg font-semibold w-full p-6 rounded-full bg-indigo-900 shadow hover:bg-indigo-800">
          Post Update
        </Button>
      </aside>
    </>
  );
}
