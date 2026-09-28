import { cn } from "cn";

type Props = {
  label: string;
  className?: string;
};

export default function RouteHeader({ label, className }: Props) {
  return (
    <div className={cn(className, "sticky top-0 w-full bg-zinc-100/80 p-5 backdrop-blur-xl z-10")}>
      <h1 className="text-xl font-bold">{label}</h1>
    </div>
  );
}
