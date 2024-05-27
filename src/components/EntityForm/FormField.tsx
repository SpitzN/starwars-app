import { Input } from "@/components/ui/input";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </label>
    </div>
  );
}

export default FormField;
