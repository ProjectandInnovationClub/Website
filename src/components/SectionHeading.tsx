import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
}

const SectionHeading = ({ badge, title, gradientTitle, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-display mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-display font-bold">
      <span className="text-foreground">{title} </span>
      {gradientTitle && <span className="gradient-text">{gradientTitle}</span>}
    </h2>
    {description && (
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
