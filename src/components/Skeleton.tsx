interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "h-3" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-neutral-700 rounded-sm mb-1 w-full ${className}`}
    ></div>
  );
}
