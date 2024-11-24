import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  message: string;
  variant?: "default" | "bordered";
  className?: string;
}

export function ErrorMessage({ message, variant = "default", className }: ErrorMessageProps) {
  const variants = {
    default: "text-destructive bg-destructive/10 rounded-lg",
    bordered: "bg-destructive/10 text-destructive border border-destructive/20 rounded-lg",
  };

  return (
    <div className="p-4 text-center">
      <div className={cn("p-4 font-orbitron", variants[variant], className)}>{message}</div>
    </div>
  );
}
