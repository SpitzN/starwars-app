import { Search } from "@/components/Search";
import { useBackground } from "@/hooks/useBackground";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const SearchPage = () => {
  const backgroundUrl = useBackground("galaxy");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("relative min-h-screen bg-cover bg-center bg-fixed bg-background")}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Gradient Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-b",
          "from-background/95",
          "via-background/75",
          "to-background/40",
          "pointer-events-none"
        )}
      />

      {/* Content */}
      <div className="relative container mx-auto p-4">
        <Search />
      </div>
    </motion.div>
  );
};

export default SearchPage;
