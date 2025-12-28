import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  client?: string;
}

export default function PortfolioItem({ title, category, image, client }: PortfolioItemProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <Badge className="w-fit mb-2 bg-secondary hover:bg-secondary text-white border-none">{category}</Badge>
        <h3 className="text-white font-bold text-xl font-heading mb-1">{title}</h3>
        {client && <p className="text-white/80 text-sm">{client}</p>}
      </div>
    </motion.div>
  );
}
