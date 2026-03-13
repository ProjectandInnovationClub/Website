import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DomainCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

const DomainCard = ({ icon: Icon, title, description, gradient, index }: DomainCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden"
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]"
        style={{ background: gradient }}
      >
        <div className="w-full h-full rounded-xl bg-card" />
      </div>

      <div className="relative glass-hover rounded-xl p-6 h-full">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: gradient }}
        >
          <Icon size={24} className="text-background" />
        </div>
        <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default DomainCard;
