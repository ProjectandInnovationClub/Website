import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    title: "Club Foundation & Inauguration",
    description: "Project & Innovation Club was officially founded with 15 passionate students and inaugurated with a Poster Competition in the college."
  },
  {
    year: "2025",
    title: "LaTeX Workshop",
    description: "Organized a technical workshop on LaTeX to help students prepare professional research documents and academic reports."
  },
  {
    year: "2025",
    title: "Research Paper Guidance",
    description: "Conducted mentoring sessions guiding students on writing and publishing research papers."
  },
  {
    year: "2026",
    title: "National Level Project Competition",
    description: "Organizing a national-level project competition scheduled for 28th March 2026 to showcase innovative student projects."
  }
];

const InnovationTimeline = () => {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-cyan via-glow-blue to-glow-green" />

      {milestones.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-row`}
        >
          {/* Node */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)] z-10" />

          <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
            <div className="glass rounded-xl p-5">
              <span className="text-primary font-display font-bold text-sm">{m.year}</span>
              <h4 className="font-display font-semibold text-foreground mt-1">{m.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">{m.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InnovationTimeline;
