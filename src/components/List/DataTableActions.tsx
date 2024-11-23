import { useEntityStore } from "@/store/entityStore";
import EntityForm from "@/components/EntityForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DataTableActionsProps } from "@/types";

function DataTableActions({ entity, entityType }: DataTableActionsProps) {
  const [open, setOpen] = useState(false);
  const removeEntity = useEntityStore((state) => state.removeEntity);

  const baseButtonStyles = cn(
    "relative",
    "active:scale-95",
    "transition-all duration-200 ease-out",
    "after:absolute after:inset-0 after:rounded-md",
    "after:opacity-0 hover:after:opacity-100",
    "after:transition-opacity"
  );

  const editButtonStyles = cn(
    baseButtonStyles,
    "text-lightSaber-blue hover:text-lightSaber-blue/80",
    "hover:bg-lightSaber-blue/10",
    "after:shadow-[0_0_15px_rgba(0,191,255,0.3)]"
  );

  const deleteButtonStyles = cn(
    baseButtonStyles,
    "text-lightSaber-red hover:text-lightSaber-red/80",
    "hover:bg-lightSaber-red/10",
    "after:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
  );

  return (
    <div className="flex items-center justify-end gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="sm" variant="ghost" className={editButtonStyles}>
            <Pencil className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <EntityForm entityType={entityType} entity={entity} isEditing={true} onClose={setOpen} />
      </Dialog>

      <Button
        size="sm"
        variant="ghost"
        onClick={() => removeEntity(entity.uuid)}
        className={deleteButtonStyles}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default DataTableActions;
