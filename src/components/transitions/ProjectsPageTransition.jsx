"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTransition } from "@/contexts/TransitionContext";

const ProjectsPageTransition = ({ children }) => {
  const { completeTransition, isTransitioning } = useTransition();
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Check if we're coming from a transition
    if (typeof window !== "undefined") {
      const wasTransitioning = sessionStorage.getItem("wasTransitioning");
      if (wasTransitioning === "true") {
        setShowTransition(true);
        sessionStorage.removeItem("wasTransitioning");
        // Continue visual language for 1-2 seconds
        setTimeout(() => {
          setShowTransition(false);
          completeTransition();
        }, 2000);
      } else {
        completeTransition();
      }
    }
  }, [completeTransition]);

  if (!showTransition) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Continue the transition visual language */}
      <motion.div
        className="fixed inset-0 z-[9998] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm">
          {/* Abstract Design Visuals - Fading out */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Grid Pattern */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(254, 254, 91, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(254, 254, 91, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
              animate={{ opacity: [0.2, 0.1, 0] }}
              transition={{ duration: 2 }}
            />

            {/* Fading color blocks */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-lg"
              animate={{
                opacity: [0.2, 0.1, 0],
                scale: [1, 1.2, 1.5],
              }}
              transition={{ duration: 2 }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/15 rounded-full"
              animate={{
                opacity: [0.15, 0.08, 0],
                scale: [1, 1.3, 1.6],
              }}
              transition={{ duration: 2, delay: 0.2 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Page content with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProjectsPageTransition;


