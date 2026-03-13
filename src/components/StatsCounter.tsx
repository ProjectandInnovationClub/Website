import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const chapters = [
  {
    num: "01",
    tag: "Community",
    color: "#22d3ee",
    headline: "A handful of curious minds became a movement",
    body: "What started as a few people staying after class turned into an open space where ideas couldn't stop flowing. Every project sparked three more. Every failure taught ten people at once.",
    pull: "\"The club gave me my first real team.\"",
  },
  {
    num: "02",
    tag: "Workshops",
    color: "#3b82f6",
    headline: "Classroom theory finally had somewhere to land",
    body: "We ran sessions where you actually touched the tools — deploying, breaking things, fixing them. Members left not with notes, but with muscle memory.",
    pull: "\"I used what I learned the very next day.\"",
  },
  {
    num: "03",
    tag: "Projects",
    color: "#22c55e",
    headline: "Ideas stopped living in notebooks",
    body: "Semester-long concepts became live demos. Real users, real feedback, real deadlines. The club was where 'I want to build something' became 'I shipped something.'",
    pull: "\"We went from zero to deployed in eight weeks.\"",
  },
  {
    num: "04",
    tag: "Competitions",
    color: "#eab308",
    headline: "Pressure became the best teacher we ever had",
    body: "Hackathons forced decisions at 3 a.m. Tech fests taught pitching to strangers. Watching first-timers find their stride under the clock — that was the real prize.",
    pull: "\"Losing taught us more than winning did.\"",
  },
  {
    num: "05",
    tag: "Mentorship",
    color: "#f97316",
    headline: "Seniors who kept the door wide open",
    body: "The culture we're proudest of: every code review doubled as a career conversation. Juniors became seniors who gave back twice as much. The loop never broke.",
    pull: "\"Someone believed in me before I believed in myself.\"",
  },
];

/* ─── Typewriter hook ───────────────────────────────────────────────────── */
function useTypewriter(text: string, active: boolean, speed = 28) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) { setDisplayed(""); return; }
    let i = 0;
    setDisplayed("");
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);
  return displayed;
}

/* ─── Chapter row ───────────────────────────────────────────────────────── */
function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const contentOnLeft = index % 2 === 0;
  const headline = useTypewriter(chapter.headline, inView, 22);

  return (
    <div ref={ref} className="relative">

      {/* ── MOBILE layout: spine on left, content on right ── */}
      <div className="flex md:hidden items-start gap-4 py-8 px-4">

        {/* Mobile spine */}
        <div className="flex flex-col items-center self-stretch shrink-0">
          <div className="flex-1 w-px bg-white/10 min-h-[20px]" />
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-[#0a0a0f] z-10 shrink-0"
            style={{ boxShadow: inView ? `0 0 18px ${chapter.color}66` : "none" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: chapter.color }}
            />
          </motion.div>
          <div className="flex-1 w-px bg-white/10 min-h-[20px]" />
        </div>

        {/* Mobile content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 pb-2"
        >
          {/* Ghost number — top right on mobile */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="block text-right font-black leading-none mb-1 pointer-events-none select-none"
            style={{
              fontSize: "clamp(3rem, 18vw, 6rem)",
              color: `${chapter.color}30`,
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: `0 0 40px ${chapter.color}50`,
            }}
          >
            {chapter.num}
          </motion.span>

          <span
            className="text-[10px] font-bold tracking-[0.25em] uppercase mb-2 block"
            style={{ color: chapter.color }}
          >
            {chapter.tag}
          </span>

          <h3
            className="text-xl font-bold text-white leading-tight mb-3 min-h-[3rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {headline}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              className="inline-block w-0.5 h-5 ml-1 align-middle"
              style={{ background: chapter.color }}
            />
          </h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-slate-400 leading-relaxed mb-3"
          >
            {chapter.body}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-sm italic"
            style={{ color: `${chapter.color}cc` }}
          >
            {chapter.pull}
          </motion.blockquote>
        </motion.div>
      </div>

      {/* ── DESKTOP layout: original 3-col grid ── */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center min-h-[280px]">

        {/* Col 1: left slot */}
        <div className="py-12 px-8">
          {contentOnLeft && (
            <ChapterContent chapter={chapter} inView={inView} headline={headline} align="right" />
          )}
        </div>

        {/* Col 2: spine node */}
        <div className="flex flex-col items-center self-stretch">
          <div className="flex-1 w-px bg-white/10" />
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0a0a0f] z-10 shrink-0"
            style={{ boxShadow: inView ? `0 0 24px ${chapter.color}66` : "none" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="w-3 h-3 rounded-full"
              style={{ background: chapter.color }}
            />
          </motion.div>
          <div className="flex-1 w-px bg-white/10" />
        </div>

        {/* Col 3: right slot */}
        <div className="py-12 px-8">
          {!contentOnLeft && (
            <ChapterContent chapter={chapter} inView={inView} headline={headline} align="left" />
          )}
        </div>

        {/* Ghost chapter number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute pointer-events-none select-none font-black leading-none"
          style={{
            fontSize: "clamp(5rem, 16vw, 13rem)",
            color: `${chapter.color}40`,
            top: "50%",
            transform: "translateY(-50%)",
            ...(contentOnLeft
              ? { right: "3%", left: "auto" }
              : { left: "3%", right: "auto" }),
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "-0.02em",
            textShadow: `0 0 60px ${chapter.color}60`,
          }}
        >
          {chapter.num}
        </motion.span>
      </div>
    </div>
  );
}

/* ─── Chapter content block (desktop only) ──────────────────────────────── */
function ChapterContent({
  chapter,
  inView,
  headline,
  align,
}: {
  chapter: (typeof chapters)[0];
  inView: boolean;
  headline: string;
  align: "left" | "right";
}) {
  const isRight = align === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-md ${align === "right" ? "ml-auto text-right" : "text-left"}`}
    >
      <span
        className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3 block"
        style={{ color: chapter.color }}
      >
        {chapter.tag}
      </span>

      <h3
        className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 min-h-[4rem]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {headline}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="inline-block w-0.5 h-6 ml-1 align-middle"
          style={{ background: chapter.color }}
        />
      </h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-sm text-slate-400 leading-relaxed mb-5"
      >
        {chapter.body}
      </motion.p>

      <motion.blockquote
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-sm italic"
        style={{ color: `${chapter.color}cc` }}
      >
        {chapter.pull}
      </motion.blockquote>
    </motion.div>
  );
}

/* ─── Animated spine progress ───────────────────────────────────────────── */
function SpineProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="absolute inset-0 flex justify-center pointer-events-none md:flex hidden">
      <motion.div
        className="w-px origin-top"
        style={{ scaleY, background: "linear-gradient(to bottom, #22d3ee44, #f97316aa)" }}
      />
    </div>
  );
}

/* ─── Mobile spine progress (left-aligned) ──────────────────────────────── */
function MobileSpineProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="absolute inset-0 flex md:hidden pointer-events-none" style={{ paddingLeft: "2rem" }}>
      <motion.div
        className="w-px origin-top"
        style={{ scaleY, background: "linear-gradient(to bottom, #22d3ee44, #f97316aa)" }}
      />
    </div>
  );
}

/* ─── Root ───────────────────────────────────────────────────────────────── */
export default function ImpactNarrative() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        className="relative w-full py-24 overflow-hidden"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 px-6"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
            What we built together
          </p>
          <h2
            className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            The{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 40%, #f97316 100%)",
              }}
            >
              real impact
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            Five chapters. One community. Scroll to read the story.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto px-2 md:px-4">
          <SpineProgress />
          <MobileSpineProgress />
          {chapters.map((ch, i) => (
            <Chapter key={ch.num} chapter={ch} index={i} />
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-slate-600 text-xs tracking-widest uppercase mt-16 px-4"
        >
          — and the story is still being written
        </motion.p>
      </section>
    </>
  );
}