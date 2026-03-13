import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Cpu, FolderKanban, Rocket, Target } from "lucide-react";

const stages = [
  {
    icon: Lightbulb,
    label: "Idea",
    color: "#22d3ee",
    bg: "#0e7490",
    description:
      "Every breakthrough begins with a spark. We capture raw ideas from any source — teams, users, or the market — and nurture them into something worth building.",
    tag: "Capture & Refine",
  },
  {
    icon: Cpu,
    label: "Prototype",
    color: "#3b82f6",
    bg: "#1d4ed8",
    description:
      "Ideas meet reality. We rapidly build testable models to validate assumptions, expose unknowns, and gather early feedback before committing resources.",
    tag: "Build & Validate",
  },
  {
    icon: FolderKanban,
    label: "Project",
    color: "#22c55e",
    bg: "#15803d",
    description:
      "Validated prototypes evolve into structured initiatives with clear ownership, milestones, and cross-functional teams aligned to a shared outcome.",
    tag: "Plan & Execute",
  },
  {
    icon: Rocket,
    label: "Innovation",
    color: "#eab308",
    bg: "#a16207",
    description:
      "This is where transformation happens. New approaches are deployed, adoption is driven, and we measure what actually changed in the real world.",
    tag: "Deploy & Measure",
  },
  {
    icon: Target,
    label: "Impact",
    color: "#ef4444",
    bg: "#b91c1c",
    description:
      "Impact is the finish line and the new starting point. We quantify outcomes, share learnings, and feed insights back into the next wave of ideas.",
    tag: "Scale & Learn",
  },
];

// ─── Desktop: hover-reveal pipeline ─────────────────────────────────────────

function DesktopPipeline() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="hidden md:flex items-start justify-center w-full">
      {stages.map((stage, i) => {
        const isHovered = hovered === i;
        const Icon = stage.icon;

        return (
          <div key={i} className="flex items-start" style={{ flex: 1, minWidth: 0 }}>
            {/* Stage node */}
            <div className="flex flex-col items-center" style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
              >
                {/* Icon box */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.12 : 1,
                    boxShadow: isHovered
                      ? `0 0 32px ${stage.color}55, 0 0 8px ${stage.color}33`
                      : "0 0 0px transparent",
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 16,
                    background: `${stage.bg}cc`,
                    border: `1.5px solid ${stage.color}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Icon size={28} style={{ color: stage.color }} strokeWidth={1.8} />
                </motion.div>

                {/* Label */}
                <motion.span
                  animate={{ color: isHovered ? stage.color : "rgba(255,255,255,0.85)" }}
                  transition={{ duration: 0.2 }}
                  style={{ marginTop: 12, fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}
                >
                  {stage.label}
                </motion.span>

                {/* Description card */}
                <div style={{ height: 160, display: "flex", alignItems: "flex-start", marginTop: 10 }}>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.97 }}
                        transition={{ duration: 0.22 }}
                        style={{
                          background: "rgba(10,18,30,0.92)",
                          border: `1px solid ${stage.color}33`,
                          borderRadius: 12,
                          padding: "12px 14px",
                          maxWidth: 170,
                          boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${stage.color}18`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: stage.color,
                            marginBottom: 6,
                          }}
                        >
                          {stage.tag}
                        </div>
                        <p style={{ margin: 0, color: "rgba(255,255,255,0.65)", fontSize: 12, lineHeight: 1.6 }}>
                          {stage.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Connector line */}
            {i < stages.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.25 }}
                style={{
                  width: 48,
                  height: 1.5,
                  marginTop: 33,
                  background: `linear-gradient(to right, ${stage.color}80, ${stages[i + 1].color}80)`,
                  boxShadow: `0 0 8px ${stage.color}40`,
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Mobile: tap-to-expand accordion ────────────────────────────────────────

function MobilePipeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="flex md:hidden flex-col w-full">
      {stages.map((stage, i) => {
        const Icon = stage.icon;
        const isOpen = openIndex === i;

        return (
          <div key={i}>
            {/* Vertical connector between cards */}
            {i > 0 && (
              <div
                style={{
                  width: 1.5,
                  height: 20,
                  marginLeft: 25,
                  background: `linear-gradient(to bottom, ${stages[i - 1].color}80, ${stage.color}80)`,
                }}
              />
            )}

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => toggle(i)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                cursor: "pointer",
                padding: "14px 0",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${stage.bg}cc`,
                  border: `1.5px solid ${stage.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "box-shadow 0.2s",
                  boxShadow: isOpen ? `0 0 20px ${stage.color}44` : "none",
                }}
              >
                <Icon size={22} style={{ color: stage.color }} strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: isOpen ? stage.color : "rgba(255,255,255,0.9)",
                      transition: "color 0.2s",
                    }}
                  >
                    {stage.label}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: stage.color,
                        opacity: 0.85,
                      }}
                    >
                      {stage.tag}
                    </span>
                    {/* Chevron */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke={stage.color}
                      strokeWidth="2"
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.3s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M3 6l5 5 5-5" />
                    </svg>
                  </div>
                </div>

                {/* Expandable description */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      key="desc"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.28 }}
                      style={{
                        margin: 0,
                        fontSize: 13,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.6)",
                        overflow: "hidden",
                      }}
                    >
                      {stage.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Star field (canvas-based for performance) ───────────────────────────────

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const colors = ["#ffffff", "#22d3ee", "#3b82f6", "#22c55e", "#eab308", "#ef4444", "#f97316"];

    type Star = {
      x: number;
      y: number;
      r: number;
      color: string;
      baseAlpha: number;
      phase: number;
      speed: number;
    };

    let stars: Star[] = [];
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.4,
      }));
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;
      stars.forEach((s) => {
        const alpha = s.baseAlpha * (0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase)));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function InnovationEcosystem() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full overflow-hidden"
      style={{ minHeight: "100vh",  fontFamily: "'DM Sans', sans-serif" }}
    >
      <StarField />

      <div
        className="relative z-10 flex flex-col items-center w-full px-5 sm:px-8"
        style={{ maxWidth: 1100 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            border: "1px solid rgba(34,211,238,0.3)",
            borderRadius: 999,
            padding: "4px 16px",
            color: "#22d3ee",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 24,
            background: "rgba(34,211,238,0.06)",
          }}
        >
          The Process
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          Innovation{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22d3ee, #22c55e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ecosystem
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            color: "rgba(255,255,255,0.45)",
            marginTop: 14,
            marginBottom: 56,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          From spark to impact — our innovation pipeline.
        </motion.p>

        {/* Layouts */}
        <DesktopPipeline />
        <MobilePipeline />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </div>
  );
}