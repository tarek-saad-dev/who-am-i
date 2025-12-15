"use client";
import { createContext, useContext, useState, useCallback } from "react";

const TransitionContext = createContext(null);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
};

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [targetRoute, setTargetRoute] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const startTransition = useCallback((route, mobile = false) => {
    setIsMobile(mobile);
    setTargetRoute(route);
    setIsTransitioning(true);
    setTransitionProgress(0);
  }, []);

  const updateProgress = useCallback((progress) => {
    setTransitionProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  const completeTransition = useCallback(() => {
    setIsTransitioning(false);
    setTransitionProgress(0);
    setTargetRoute(null);
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        transitionProgress,
        targetRoute,
        isMobile,
        startTransition,
        updateProgress,
        completeTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};


