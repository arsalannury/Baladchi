import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = React.ComponentProps<"div"> & {
  lines?: number;
};

function Skeleton({
  className,
  lines = 1,
  ...props
}: SkeletonProps) {
 

  // specify for default style
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "animate-pulse rounded-md bg-muted",
            className,
          )}
          {...props}
        />
      ))}
    </div>
  );
}

export { Skeleton };
