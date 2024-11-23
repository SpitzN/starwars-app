import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  minHeight?: string;
  className?: string;
}

export const LoadingSpinner = ({ size = "md", minHeight, className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 border-2",
    md: "h-12 w-12 border-3",
    lg: "h-16 w-16 border-4",
  };

  return (
    <div className={cn("flex justify-center items-center p-4", minHeight, className)}>
      <div
        className={cn(
          sizeClasses[size],
          "rounded-full border-theme-primary border-t-transparent animate-spin"
        )}
      />
    </div>
  );
};
