import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

const ActivityCard = ({ icon: Icon, title, description, gradient, index }: ActivityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Gradient background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: gradient }}
      />

      <div className="glass-hover rounded-xl p-6 h-full relative">
        <Icon size={32} className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>

        {/* Bottom glow line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: gradient }}
        />
      </div>
    </motion.div>
  );
};

export default ActivityCard;
