import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EventCard = ({ event, reversed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const AUTO_INTERVAL = 3500; // ms between auto-transitions

  const goTo = useCallback(
    (index, dir = 1) => {
      setDirection(dir);
      setCurrentIndex(index);
    },
    []
  );

  const next = useCallback(() => {
    const nextIndex = (currentIndex + 1) % event.images.length;
    goTo(nextIndex, 1);
  }, [currentIndex, event.images.length, goTo]);

  const prev = useCallback(() => {
    const prevIndex =
      (currentIndex - 1 + event.images.length) % event.images.length;
    goTo(prevIndex, -1);
  }, [currentIndex, event.images.length, goTo]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-16 items-center`}
      style={{ minHeight: "100vh", paddingBottom: "5rem" }}
    >
      {/* Image Carousel */}
      <div
        className="w-full md:w-1/2 relative rounded-xl overflow-hidden border border-white/10 bg-black/20 group"
        style={{ height: "60vh" }}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.img
            key={currentIndex}
            src={event.images[currentIndex]}
            alt={`${event.title} image ${currentIndex + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Prev / Next buttons */}
        {event.images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {event.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {event.images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "bg-white w-5 h-2"
                    : "bg-white/40 w-2 h-2 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}


      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
          {event.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};

export default EventCard;