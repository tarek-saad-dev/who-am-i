"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTransition } from "@/contexts/TransitionContext";

const GraphicTransitionOverlay = () => {
  const {
    isTransitioning,
    transitionProgress,
    isMobile,
    updateProgress,
  } = useTransition();
  const controls = useAnimation();
  const progressRef = useRef(0);

  useEffect(() => {
    if (isTransitioning) {
      // Animate progress from 0 to 100 over 1.2 seconds
      const duration = isMobile ? 0.8 : 1.2;
      
      // Start the animation
      controls.start({
        scale: isMobile ? [1, 1.5, 3, 6] : [1, 1.2, 2, 4, 8, 15],
        opacity: [0, 0.3, 0.6, 0.8, 0.95, 1],
        transition: {
          duration,
          ease: [0.4, 0, 0.2, 1], // Custom easing for smooth acceleration
        },
      });

      // Update progress
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(100, (elapsed / duration) * 100);
        progressRef.current = progress;
        updateProgress(progress);
      }, 16); // ~60fps

      return () => clearInterval(interval);
    } else {
      controls.start({
        scale: 1,
        opacity: 0,
      });
      progressRef.current = 0;
    }
  }, [isTransitioning, isMobile, controls, updateProgress]);

  if (!isTransitioning) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={controls}
      style={{
        transformOrigin: isMobile ? "center" : "20% 50%",
      }}
    >
      {/* Portal/Door Effect - Camera move toward left side */}
      <motion.div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        initial={false}
        animate={
          !isMobile
            ? {
                clipPath: [
                  "circle(0% at 20% 50%)",
                  "circle(15% at 20% 50%)",
                  "circle(40% at 20% 50%)",
                  "circle(70% at 20% 50%)",
                  "circle(100% at 20% 50%)",
                  "inset(0%)",
                ],
              }
            : {
                opacity: [0, 0.4, 0.7, 0.9, 1],
              }
        }
        transition={{
          duration: isMobile ? 0.8 : 1.2,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* Abstract Design Visuals */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(254, 254, 91, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(254, 254, 91, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Color Blocks */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-lg"
            animate={{
              x: [0, 50, -30, 20],
              y: [0, -30, 40, -20],
              rotate: [0, 45, -30, 15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/15 rounded-full"
            animate={{
              x: [0, -40, 30, -20],
              y: [0, 40, -30, 20],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-40 h-20 bg-accent/10 rounded-lg"
            animate={{
              x: [0, 60, -40, 30],
              y: [0, -50, 30, -25],
              rotate: [0, -45, 30, -15],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Vector Paths - SVG Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <motion.path
              d="M 100 200 Q 300 100 500 200 T 900 200"
              stroke="rgb(254, 254, 91)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M 200 400 Q 400 300 600 400 T 1000 400"
              stroke="rgb(254, 254, 91)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.path
              d="M 50 300 L 300 100 L 550 300 L 800 100 L 1050 300"
              stroke="rgb(254, 254, 91)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </svg>

          {/* Layers Effect - Multiple overlapping shapes */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-accent/30 rounded-lg"
            style={{ transform: "translate(-50%, -50%)" }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-accent/20 rounded-lg"
            style={{ transform: "translate(-50%, -50%)" }}
            animate={{
              rotate: [360, 270, 180, 90, 0],
              scale: [1, 0.9, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-accent/40 rounded-lg"
            style={{ transform: "translate(-50%, -50%)" }}
            animate={{
              rotate: [0, -90, -180, -270, -360],
              scale: [1, 1.2, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GraphicTransitionOverlay;

