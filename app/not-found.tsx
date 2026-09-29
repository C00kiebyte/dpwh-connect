import { GhostIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-full max-lg:pt-50 max-lg:px-5">
      <div className="flex items-center justify-center gap-3 -mt-20">
        <GhostIcon className="size-12" />
        <div>
          <h1 className="text-2xl font-bold">404 Not Found</h1>
          <p>The page you are trying to access could not be found.</p>
        </div>
      </div>
    </div>
  );
}
