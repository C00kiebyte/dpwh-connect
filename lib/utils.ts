import { Children, isValidElement, ReactNode } from "react";

export { cn } from "cn";

export const getChild = (children: ReactNode, slotName: string) => {
  const childrenArray = Children.toArray(children);
  return childrenArray.find((child) => isValidElement(child) && (child as any).props["data-slot"] === slotName);
};
