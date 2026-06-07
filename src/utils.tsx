import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "master":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "expert":
      return "bg-purple-100 text-purple-700 border-purple-200";
    case "contributor":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};