import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormFieldProps } from "@/types";

function FormField({ label, name, value, onChange, type = "text" }: FormFieldProps) {
  return (
    <div className="mb-6">
      <label className="block font-orbitron text-sm mb-2 text-primary">
        {label}
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            "mt-2 block w-full",
            "bg-card border-theme-accent/20",
            "focus:border-theme-primary focus:ring-theme-primary/20",
            "hover:border-theme-primary/50",
            "transition-all duration-200",
            "placeholder:text-muted-foreground",
            "font-dosis"
          )}
        />
      </label>
    </div>
  );
}

export default FormField;
