import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  accent: string;
  tag: string;
  index: number;
  reversed?: boolean;
}

const FeatureBlock = ({
  icon: Icon,
  title,
  description,
  image,
  accent,
  tag,
  index,
  reversed,
}: FeatureBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col md:flex-row items-center gap-10 ${reversed ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* ── Text side ── */}
      <div className="flex-1 space-y-4">
        {/* Tag pill */}
        <span
          className="inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}33` }}
        >
          {tag}
        </span>

        {/* Icon + title row */}
        <div className="flex items-start gap-3">
          <div
            className="mt-1 w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `${accent}15` }}
          >
            <Icon size={20} style={{ color: accent }} />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground leading-snug">{title}</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed text-[15px]">{description}</p>

        {/* Animated accent underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          className="h-px w-16 origin-left rounded-full"
          style={{ background: accent }}
        />
      </div>

      {/* ── Image side ── */}
      <div className="flex-1 w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl overflow-hidden aspect-video group"
          style={{ boxShadow: `0 0 0 1px ${accent}22, 0 24px 60px -12px ${accent}30` }}
        >
          {/* Actual image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // fallback to a gradient if image fails
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Dark gradient overlay for polish */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${accent}22 0%, transparent 60%, rgba(0,0,0,0.5) 100%)`,
            }}
          />

          {/* Corner label */}
          <div className="absolute bottom-3 left-3">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full backdrop-blur-sm"
              style={{ background: `${accent}30`, color: accent, border: `1px solid ${accent}44` }}
            >
              {tag}
            </span>
          </div>

          {/* Hover shine sweep */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(105deg, transparent 40%, ${accent}18 50%, transparent 60%)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureBlock;