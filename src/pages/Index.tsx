import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import DomainCard from "@/components/DomainCard";
import FeatureBlock from "@/components/FeatureBlock";
import InnovationTimeline from "@/components/InnovationTimeline";
import StatsCounter from "@/components/StatsCounter";
import InnovationEcosystem from "@/components/InnovationEcosystem";
import ActivityCard from "@/components/ActivityCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain, Cpu, Globe, Bot, Wifi, Shield, Database, Palette,
  Lightbulb, Wrench, Trophy, FlaskConical, Users,
  Zap, BookOpen, Award, Presentation, Mic,
  ArrowRight,
} from "lucide-react";

const domains = [
  { icon: Brain, title: "Artificial Intelligence", description: "Explore cutting-edge AI algorithms and applications.", gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)" },
  { icon: Cpu, title: "Machine Learning", description: "Build intelligent systems that learn from data.", gradient: "linear-gradient(135deg, #3b82f6, #22c55e)" },
  { icon: Globe, title: "Web Development", description: "Create modern, responsive web applications.", gradient: "linear-gradient(135deg, #22c55e, #eab308)" },
  { icon: Bot, title: "Robotics", description: "Design and program autonomous robots.", gradient: "linear-gradient(135deg, #eab308, #f97316)" },
  { icon: Wifi, title: "IoT", description: "Connect the physical world to the digital.", gradient: "linear-gradient(135deg, #f97316, #ef4444)" },
  { icon: Shield, title: "Cybersecurity", description: "Protect systems and data from threats.", gradient: "linear-gradient(135deg, #ef4444, #22d3ee)" },
  { icon: Database, title: "Data Science", description: "Extract insights from complex datasets.", gradient: "linear-gradient(135deg, #22d3ee, #22c55e)" },
  { icon: Palette, title: "UI/UX Design", description: "Craft beautiful, user-centered experiences.", gradient: "linear-gradient(135deg, #3b82f6, #eab308)" },
];

const features = [
  {
    icon: Lightbulb,
    title: "Poster Presentation Competition",
    description:
      "During the club inauguration in 2024, we organized a poster presentation competition where students showcased innovative ideas and research concepts.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
    accent: "hsl(192,91%,53%)",
    tag: "2024 · Inauguration",
  },
  {
    icon: Wrench,
    title: "LaTeX Technical Workshop",
    description:
      "A hands-on workshop conducted in 2025 to teach students how to create professional research papers, reports, and technical documents using LaTeX.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    accent: "hsl(217,91%,60%)",
    tag: "2025 · Workshop",
  },
  {
    icon: FlaskConical,
    title: "Research Paper Guidance Sessions",
    description:
      "Mentoring sessions where students learned how to structure, write, and publish research papers for conferences and journals.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
    accent: "hsl(142,71%,45%)",
    tag: "Ongoing · Mentorship",
  },
  {
    icon: Users,
    title: "Student Collaboration & Mentorship",
    description:
      "The club encourages students to collaborate on technical ideas, share knowledge, and support each other in building innovative projects.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    accent: "hsl(48,96%,47%)",
    tag: "Always · Open",
  },
];

const activities = [
  {
    icon: Zap,
    title: "Guidance Sessions",
    description: "Expert-led mentoring sessions focused on project development, innovation strategies, and technical problem solving.",
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)"
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Hands-on sessions on cutting-edge technologies.",
    gradient: "linear-gradient(135deg, #3b82f6, #22c55e)"
  },
  {
    icon: Award,
    title: "Innovation Challenges",
    description: "Compete to solve real-world problems creatively.",
    gradient: "linear-gradient(135deg, #22c55e, #eab308)"
  },
  {
    icon: Presentation,
    title: "Project Exhibitions",
    description: "Showcase your projects to industry and academia.",
    gradient: "linear-gradient(135deg, #eab308, #f97316)"
  },
  {
    icon: Mic,
    title: "Technical Talks",
    description: "Expert sessions on trending tech topics.",
    gradient: "linear-gradient(135deg, #f97316, #ef4444)"
  },
  {
    icon: Lightbulb,
    title: "Idea Incubation",
    description: "Support for transforming innovative ideas into real-world projects through mentoring, collaboration, and structured development.",
    gradient: "linear-gradient(135deg, #ef4444, #a855f7)"
  }
];

const Index = () => {
  return (
    <div className="relative">
      <ParticleBackground />

      {/* Hero */}
      <HeroSection />

      {/* Innovation Domains */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto">
          <SectionHeading
            badge="What We Explore"
            title="Innovation"
            gradientTitle="Domains"
            description="Dive into the technologies shaping the future."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((d, i) => (
              <DomainCard key={i} index={i} icon={d.icon} title={d.title} description={d.description} gradient={d.gradient} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}

      <section className="section-padding relative z-10">
        <div className="container mx-auto">
          <SectionHeading
            badge="How We Work"
            title="What We"
            gradientTitle="Build"
            description="From ideation to execution, we empower student innovation."
          />
          <div className="space-y-20">
            {features.map((f, i) => (
              <FeatureBlock
                key={i}
                index={i}
                icon={f.icon}
                title={f.title}
                description={f.description}
                image={f.image}
                accent={f.accent}
                tag={f.tag}
                reversed={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto">
          <SectionHeading
            badge="Our Journey"
            title="Innovation"
            gradientTitle="Timeline"
            description="Key milestones in our journey of innovation."
          />
          <InnovationTimeline />
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto">
          <SectionHeading
            title="Activities"
            gradientTitle="Highlight"
            description="Explore our range of innovation-driven activities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <ActivityCard key={i} index={i} icon={a.icon} title={a.title} description={a.description} gradient={a.gradient} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto">

          <StatsCounter />
        </div>
      </section>

      {/* Innovation Ecosystem */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto">

          <InnovationEcosystem />
        </div>
      </section>



      
    </div>
  );
};

export default Index;
