import { cn } from "cn";
import { Children, isValidElement, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

export function DataCard({ children, className }: Props) {
  const childrenArray = Children.toArray(children);

  const getChild = (displayName: string) => {
    return childrenArray.find((child) => isValidElement(child) && (child.type as any).displayName === displayName);
  };

  const icon = getChild("DataCardIcon");
  const label = getChild("DataCardLabel");
  const value = getChild("DataCardValue");

  return (
    <div className={cn(className, "flex items-center bg-white p-5 shadow-sm rounded-lg gap-4 w-full")}>
      {icon}
      <div>
        {label}
        {value}
      </div>
    </div>
  );
}

export function DataCardIcon({ children, className }: Props) {
  return <div className={cn(className, "p-2 rounded-md ")}>{children}</div>;
}
DataCardIcon.displayName = "DataCardIcon";

export function DataCardLabel({ children, className }: Props) {
  return <small className={cn(className, "text-zinc-500")}>{children}</small>;
}
DataCardLabel.displayName = "DataCardLabel";

export function DataCardValue({ children, className }: Props) {
  return <p className={cn(className, "text-lg font-semibold")}>{children}</p>;
}
DataCardValue.displayName = "DataCardValue";
