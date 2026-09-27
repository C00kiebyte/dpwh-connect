import { cn } from "cn";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <div>
      <div
        className={cn(
          className,
          "w-12 h-12 bg-linear-to-br from-[#002868] to-blue-800 rounded-xl flex items-center justify-center shadow-md border border-blue-700/30 group-hover:shadow-lg group-hover:scale-105 transition-all",
        )}
      >
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 bg-[#FCD116] rounded-full scale-50 -translate-y-1"></div>
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-white rounded-sm"></div>
          <div className="absolute top-1 left-1.5 right-1.5 h-1.5 bg-[#FCD116]"></div>
        </div>
      </div>
    </div>
  );
}
