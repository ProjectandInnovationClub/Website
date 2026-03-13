import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute opacity-20 ${className}`}
    animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating shapes */}
      <FloatingShape
        className="w-20 h-20 border border-glow-cyan/30 rounded-lg top-1/4 left-[10%]"
        delay={0}
      />
      <FloatingShape
        className="w-16 h-16 border border-glow-blue/30 rounded-full top-1/3 right-[15%]"
        delay={1}
      />
      <FloatingShape
        className="w-12 h-12 border border-glow-green/30 rotate-45 bottom-1/3 left-[20%]"
        delay={2}
      />
      <FloatingShape
        className="w-24 h-24 border border-glow-orange/20 rounded-lg bottom-1/4 right-[10%]"
        delay={3}
      />
      <FloatingShape
        className="w-10 h-10 border border-glow-yellow/30 rounded-full top-[20%] right-[30%]"
        delay={1.5}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--glow-blue)/0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}

        

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Project &</span>
          <br />
          <span className="gradient-text">Innovation Club</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Where Curiosity Sparks Creation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/activities" className="btn-glow flex items-center gap-2">
            Explore Activities
            <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn-outline-glow">
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
