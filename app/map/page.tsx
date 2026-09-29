import RouteHeader from "@/components/route-header";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPinIcon } from "lucide-react";

export default function MapExplorePage() {
  return (
    <div className="relative w-full h-full border-x space-y-4">
      <RouteHeader label="Regional Heatmap" className="max-lg:hidden" />
      <div className="w-full shadow border p-5 rounded-lg space-y-1">
        <div className="flex items-center gap-2">
          <MapPinIcon className="text-indigo-900" />
          <h6 className="font-semibold">Live Infrastructure Map</h6>
        </div>
        <small className="text-zinc-500">Heat intensity indicates budget allocation density.</small>
      </div>
      <div className="w-full h-150 p-3 rounded-lg border shadow">
        <Skeleton className="w-full h-full bg-zinc-300 rounded-md" />
      </div>
    </div>
  );
}
