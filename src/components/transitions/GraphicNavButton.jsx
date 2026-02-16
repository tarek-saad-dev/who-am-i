"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "@/contexts/TransitionContext";
import { motion } from "framer-motion";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { PenTool } from "lucide-react";

const GraphicNavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  const router = useRouter();
  const { startTransition, isTransitioning } = useTransition();
  const [isHovering, setIsHovering] = useState(false);
  const [isPrefetching, setIsPrefetching] = useState(false);
  const prefetchTimeoutRef = useRef(null);
  const navigationTimeoutRef = useRef(null);
  const size = useScreenSize();
  const isMobile = size < 768;

  const isExternalLink = newTab && link && /^https?:\/\//i.test(link);

  // Prefetch on hover (only for internal links)
  useEffect(() => {
    if (isHovering && !isPrefetching && !isExternalLink) {
      prefetchTimeoutRef.current = setTimeout(() => {
        setIsPrefetching(true);
        router.prefetch(link);
      }, 300);
    }

    return () => {
      if (prefetchTimeoutRef.current) {
        clearTimeout(prefetchTimeoutRef.current);
      }
    };
  }, [isHovering, link, router, isPrefetching, isExternalLink]);

  const handleClick = (e) => {
    if (isExternalLink) return;

    e.preventDefault();
    if (isTransitioning) return;

    if (typeof window !== "undefined") {
      sessionStorage.setItem("wasTransitioning", "true");
    }

    startTransition(link, isMobile);

    const delay = isMobile ? 700 : 1000;
    navigationTimeoutRef.current = setTimeout(() => {
      router.push(link);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const MotionElement = isExternalLink ? motion.a : motion.button;

  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <MotionElement
              variants={{
                hidden: { scale: 0 },
                show: { scale: 1 },
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={handleClick}
              href={isExternalLink ? link : undefined}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              disabled={!isExternalLink && isTransitioning}
              className="text-foreground rounded-full flex items-center justify-center custom-bg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                <PenTool className="w-full h-auto" strokeWidth={1.5} />

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </MotionElement>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <MotionElement
              variants={{
                hidden: { scale: 0 },
                show: { scale: 1 },
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={handleClick}
              href={isExternalLink ? link : undefined}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              disabled={!isExternalLink && isTransitioning}
              className="text-foreground rounded-full flex items-center justify-center custom-bg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={label}
              name={label}
            >
              <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                <PenTool className="w-full h-auto" strokeWidth={1.5} />

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : "",
                  )}
                >
                  {label}
                </span>
              </span>
            </MotionElement>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default GraphicNavButton;
