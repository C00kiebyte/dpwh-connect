import { MapIcon } from "lucide-react";

export function NationalStatusWidget() {
  return (
    <div className="w-full rounded-xl bg-linear-to-br from-indigo-900 to-indigo-800 p-5 text-white shadow space-y-5">
      <section className="flex justify-between items-center gap-5">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">National Status</h3>
          <p className="text-indigo-100 text-sm">Updated this week</p>
        </div>
        <MapIcon className="scale-200 mr-5 opacity-50" />
      </section>

      <section className="flex items-center">
        <div className="border-r mr-3 pr-3 border-white/20">
          <h1 className="text-3xl font-extrabold text-yellow-300">561</h1>
          <p className="text-indigo-50 text-sm font-light">COMPLETED</p>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold">436</h1>
          <p className="text-indigo-50 text-sm font-light">ONGOING</p>
        </div>
      </section>
    </div>
  );
}
