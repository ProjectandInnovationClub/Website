import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  Target,
  Eye,
  Lightbulb,
  Users,
  Rocket,
  BookOpen,
  FlaskConical,
  Globe,
  ArrowRight,
  Star,
  Zap,
  Trophy
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Target,
    title: "Our Vision",
    description:
      "Learn to transform innovative ideas into real-world projects while gaining valuable experience in applying for patents and publishing research papers. Engage with experienced faculty and industry mentors, enhance your project presentation and documentation skills, and get the opportunity to participate in national-level competitions.",
  },
  {
    icon: Eye,
    title: "Our Mission",
    description:
      "To build a dynamic community of innovators by providing students with the resources, guidance, and opportunities to excel in hands-on projects and cutting-edge research. We aim to inspire creativity, foster skill development, and facilitate connections with industry leaders.",
  },
  {
    icon: Lightbulb,
    title: "Why Innovation Matters",
    description:
      "Innovation helps solve problems, improve efficiency, and create new opportunities. It drives progress, supports economic growth, and allows individuals and organizations to develop better solutions for real-world challenges.",
  },
];



const pillars = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description:
      "Dive deep into cutting-edge domains — from AI/ML to IoT and beyond. Collaborate on research that gets published and patented.",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-400",
  },
  {
    icon: Globe,
    title: "Industry Connect",
    description:
      "Gain real-world exposure through partnerships with top companies, guest lectures, and live project collaborations.",
    color: "from-sky-500/20 to-cyan-500/10",
    accent: "text-sky-400",
  },
  {
    icon: Zap,
    title: "Skill Acceleration",
    description:
      "Hands-on workshops, hackathons, and peer mentoring — everything you need to level up, fast.",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "text-amber-400",
  },
  {
    icon: Star,
    title: "Recognition & Growth",
    description:
      "Compete at state and national levels. Get recognized for your work and build a portfolio that stands out.",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "text-emerald-400",
  },
];



// ─── Sub-components ──────────────────────────────────────────────────────────

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="flex flex-col items-center gap-2 p-6 glass rounded-xl text-center"
  >
    <stat.icon size={22} className="text-primary mb-1" />
    <span className="text-3xl font-display font-bold gradient-text">{stat.value}</span>
    <span className="text-muted-foreground text-sm">{stat.label}</span>
  </motion.div>
);




// ─── Page ────────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="relative z-10 pt-24">

      {/* ── Hero ── */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">The Club</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              The Project &amp; Innovation Club is a student-driven community dedicated to exploring emerging
              technologies, building real-world projects, and fostering a culture of innovation. We are a
              melting pot of creative thinkers, problem solvers, and tech enthusiasts united by one goal —
              to build things that matter.
            </p>
          </motion.div>
        </div>
      </section>
      

      {/* ── Vision / Mission / Why ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading badge="Foundation" title="Our" gradientTitle="Core Beliefs" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-hover rounded-xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading badge="What We Do" title="Our" gradientTitle="Four Pillars" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-xl p-7 bg-gradient-to-br ${p.color} border border-white/5`}
              >
                <p.icon size={28} className={`${p.accent} mb-4`} />
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Join CTA ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
              Be Part of Something Big
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Ready to <span className="gradient-text">Innovate</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-base">
              Join a community of driven students building the future — one project at a time. No experience
              required, just curiosity and the will to create.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;