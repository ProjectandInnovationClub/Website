import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ActivityCard from "@/components/ActivityCard";
import EventCard from "@/components/EventCards";

import {
  Zap,
  BookOpen,
  Award,
  Presentation,
  Mic,
  Lightbulb,
  FileText,
  Users,
  Trophy,
  Calendar,
  Clock,
} from "lucide-react";

const activities = [
  {
    icon: Lightbulb,
    title: "Poster Presentation Competition",
    description:
      "During the club inauguration in 2024, students presented innovative ideas and research concepts through poster presentations.",
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
  },
  {
    icon: BookOpen,
    title: "LaTeX Technical Workshop",
    description:
      "A hands-on workshop conducted in 2025 teaching students how to prepare professional research papers and technical reports using LaTeX.",
    gradient: "linear-gradient(135deg, #3b82f6, #22c55e)",
  },
  {
    icon: FileText,
    title: "Research Paper Guidance",
    description:
      "Guidance sessions where students learned how to structure, write and publish research papers for journals and conferences.",
    gradient: "linear-gradient(135deg, #22c55e, #eab308)",
  },
  {
    icon: Users,
    title: "Project Mentorship",
    description:
      "Faculty and senior students mentor members to help them convert ideas into real working prototypes and technical projects.",
    gradient: "linear-gradient(135deg, #eab308, #f97316)",
  },
  {
    icon: Trophy,
    title: "National Level Project Competition",
    description:
      "A national-level innovation competition organized by the club where students present their technical projects and compete for recognition.",
    gradient: "linear-gradient(135deg, #f97316, #ef4444)",
  },
  {
    icon: Mic,
    title: "Technical Talks",
    description:
      "Invited speakers and faculty experts share insights on emerging technologies, innovation and research trends.",
    gradient: "linear-gradient(135deg, #ef4444, #22d3ee)",
  },
];



const pastEvents = [
  {
    title: "Club Inauguration & Poster Presentation",
    description:
      "The Project & Innovation Club was inaugurated in 2024 with a poster presentation competition where students showcased innovative ideas and research concepts.",
    images: [
      "/Poster/1.jpeg",
      "/Poster/2.jpeg",
      "/Poster/3.jpeg",
    ],
  },
  {
    title: "LaTeX Workshop 2025",
    description:
      "A hands-on technical workshop where students learned to prepare professional research papers using LaTeX.",
    images: [
      "/Latex/1.jpg",
      "/Latex/2.jpg",
      "/Latex/3.jpg",
    ],
  },
  {
    title: "Research Paper Guidance Session",
    description:
      "Guidance sessions helping students understand how to structure and publish research papers.",
    images: [
      "/Research/ss1.png",
      "/Research/ss2.png",
      "/Research/ss3.png",
    ],
  },
];

const upcomingEvent = {
  title: "National Level Project Competition 2026",
  date: "28 March 2026",
  registrationLink: "https://forms.gle/EzecYCSXqEsVUxHy8  ",
  poster: "/project-competition-poster.jpeg",
  description:
    "The Project & Innovation Club is organizing a National Level Project Competition where students from various institutions will showcase innovative projects in technology, research, and engineering.",
  highlights: [
    "National Participation",
    "Innovative Student Projects",
    "Expert Evaluation Panel",
    "Awards & Recognition",
    "Networking Opportunities",
  ],
};

const Activities = () => {
  return (
    <div className="relative z-10 pt-24">

      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Activities</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover the events, workshops, and competitions organized by the
              Project & Innovation Club to encourage creativity, research, and
              technological innovation among students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Event */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <SectionHeading
            badge="Coming Soon"
            title="Featured"
            gradientTitle="Event"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto glass-hover rounded-2xl p-6 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Poster Image */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img
                  src={upcomingEvent.poster}
                  alt={upcomingEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-primary" />
                  <span className="text-primary font-semibold text-sm">
                    {upcomingEvent.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  {upcomingEvent.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {upcomingEvent.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {upcomingEvent.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Register Button */}
                <a
                  href={upcomingEvent.registrationLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
                >
                  Register Now
                  <Calendar size={18} />
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <SectionHeading
            badge="Programs"
            title="What We"
            gradientTitle="Organize"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <ActivityCard
                key={i}
                index={i}
                icon={a.icon}
                title={a.title}
                description={a.description}
                gradient={a.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events — images auto-rotate via EventCard */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            badge="Gallery"
            title="Past"
            gradientTitle="Events"
          />
          {pastEvents.map((event, i) => (
            <EventCard
              key={i}
              event={event}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      

    </div>
  );
};

export default Activities;