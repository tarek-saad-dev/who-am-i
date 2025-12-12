"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import clsx from "clsx";

const ProjectStory = ({ project, index }) => {
  const { direction } = useLanguage();
  
  // Section labels - these should be in content.js but for now we'll hardcode
  const labels = {
    en: {
      challenge: "The Challenge",
      approach: "The Approach",
      solution: "The Solution",
      impact: "The Impact",
    },
    ar: {
      challenge: "التحدي",
      approach: "النهج",
      solution: "الحل",
      impact: "التأثير",
    },
  };
  
  const currentLabels = labels[direction === "rtl" ? "ar" : "en"];

  return (
    <article className="max-w-4xl mx-auto scroll-mt-24">
      <div className="custom-bg rounded-lg p-8 lg:p-12">
        {/* Project Title */}
        <h3 className={clsx(
          "text-2xl sm:text-3xl font-bold text-accent mb-8",
          direction === "rtl" ? "text-right" : "text-left"
        )}>
          {project.title}
        </h3>

        {/* The Challenge */}
        <div className="mb-8">
          <p className={clsx(
            "text-foreground/60 text-sm font-semibold uppercase tracking-wider mb-3",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {currentLabels.challenge}
          </p>
          <p className={clsx(
            "text-foreground text-base sm:text-lg leading-relaxed",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {project.challenge}
          </p>
        </div>

        {/* The Approach */}
        <div className="mb-8">
          <p className={clsx(
            "text-foreground/60 text-sm font-semibold uppercase tracking-wider mb-3",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {currentLabels.approach}
          </p>
          <p className={clsx(
            "text-foreground text-base sm:text-lg leading-relaxed",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {project.approach}
          </p>
        </div>

        {/* The Solution */}
        <div className="mb-8">
          <p className={clsx(
            "text-foreground/60 text-sm font-semibold uppercase tracking-wider mb-3",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {currentLabels.solution}
          </p>
          <p className={clsx(
            "text-foreground text-base sm:text-lg leading-relaxed mb-4",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {project.solution}
          </p>
          {/* Image/Mockup */}
          {project.image && (
            <div className="mt-6 w-full rounded-lg overflow-hidden bg-foreground/5">
              <Image
                src={project.image}
                alt={project.imageAlt || project.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          {!project.image && (
            <div className="mt-6 w-full h-64 sm:h-80 lg:h-96 bg-foreground/10 rounded-lg flex items-center justify-center">
              <p className="text-foreground/40 text-sm">[Project Image Placeholder]</p>
            </div>
          )}
        </div>

        {/* The Impact */}
        <div className="pt-6 border-t border-foreground/10">
          <p className={clsx(
            "text-foreground/60 text-sm font-semibold uppercase tracking-wider mb-3",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {currentLabels.impact}
          </p>
          <p className={clsx(
            "text-foreground text-base sm:text-lg leading-relaxed",
            direction === "rtl" ? "text-right" : "text-left"
          )}>
            {project.impact}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectStory;
