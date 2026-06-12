import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = React.ComponentProps<"div"> & {
  variant?: "text" | "circle" | "rectangle";
  lines?: number;
};

function Skeleton({
  className,
  variant = "rectangle",
  lines = 1,
  ...props
}: SkeletonProps) {
  // specify for text variant
  if (variant === "text") {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-11 w-full animate-pulse rounded-md bg-muted",
              className,
            )}
            {...props}
          />
        ))}
      </div>
    );
  }

  // specify for circle variant
  if (variant === "circle") {
    return (
      <div
        className={cn(
          "h-10 w-10 animate-pulse rounded-full bg-muted",
          className,
        )}
        {...props}
      />
    );
  }

  // specify for default style
  return (
    <div
      className={cn("h-4 w-full animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
