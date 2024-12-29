import React from "react";

function SkeletonLoader({
  width,
  height,
  className,
}: {
  width: string;
  height: string;
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`}
      style={{ width, height }}
    ></div>
  );
}

export default SkeletonLoader;
