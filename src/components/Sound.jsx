"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const hasInteractedRef = useRef(false);

  // Auto-play on first user interaction (required by browsers)
  const handleFirstUserInteraction = () => {
    if (!hasInteractedRef.current && audioRef.current) {
      hasInteractedRef.current = true;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }

    // Remove listeners after first interaction
    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  // Initialize audio and add first interaction listener
  useEffect(() => {
    if (audioRef.current) {
      // Set volume to a pleasant level (0.3 = 30%)
      audioRef.current.volume = 0.3;
      
      // Add event listeners for first user interaction
      ["click", "keydown", "touchstart"].forEach((event) =>
        document.addEventListener(event, handleFirstUserInteraction, { once: true })
      );
    }

    return () => {
      ["click", "keydown", "touchstart"].forEach((event) =>
        document.removeEventListener(event, handleFirstUserInteraction)
      );
    };
  }, []);

  // Handle visibility change (pause when tab is hidden, resume when visible)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        // Tab is hidden - pause music
        if (isPlaying && !audioRef.current.paused) {
          audioRef.current.pause();
        }
      } else {
        // Tab is visible - resume music if it was playing and user has interacted
        if (isPlaying && hasInteractedRef.current && audioRef.current.paused) {
          audioRef.current.play().catch((error) => {
            console.log("Resume prevented:", error);
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  // Handle page focus/blur (additional pause/resume)
  useEffect(() => {
    const handleFocus = () => {
      if (audioRef.current && isPlaying && hasInteractedRef.current && audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.log("Resume on focus prevented:", error);
        });
      }
    };

    const handleBlur = () => {
      if (audioRef.current && isPlaying && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, [isPlaying]);

  const toggle = () => {
    if (!audioRef.current) return;

    const newState = !isMuted;
    setIsMuted(newState);
    
    if (newState) {
      // Mute
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Unmute - only play if user has interacted
      if (hasInteractedRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log("Play prevented:", error);
        });
      }
    }
  };
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      <audio ref={audioRef} loop preload="auto">
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg hover:scale-110 transition-transform"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        title={isMuted ? "Click to unmute" : "Click to mute"}
      >
        {isMuted ? (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent transition-colors"
            strokeWidth={1.5}
          />
        ) : (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent transition-colors"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
