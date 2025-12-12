"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import clsx from "clsx";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ProjectStory = ({ project, index }) => {
  const { direction, language } = useLanguage();
  
  const labels = {
    en: {
      problem: "The Problem",
      solution: "The Solution",
      result: "The Result",
    },
    ar: {
      problem: "المشكلة",
      solution: "الحل",
      result: "النتيجة",
    },
  };
  
  // Ensure we always have a valid language (default to "en" for SSR safety)
  const safeLanguage = language || "en";
  const safeDirection = direction || "ltr";
  
  const currentLabels = labels[safeLanguage === "ar" ? "ar" : "en"];
  const isRTL = safeDirection === "rtl";

  return (
    <article className={clsx(
      "max-w-6xl mx-auto scroll-mt-24 mb-32 lg:mb-40",
      "group"
    )}>
      {/* Project Cover - Hero Visual */}
      <div className="relative mb-12 lg:mb-16">
        <div className={clsx(
          "relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden",
          "bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent",
          "border border-accent/20",
          "shadow-2xl"
        )}>
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.imageAlt || project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority={index === 0}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-transparent">
              <div className="text-center px-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-3xl">🎨</span>
                </div>
                <p className="text-foreground/40 text-sm font-medium">
                  {project.title}
                </p>
              </div>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          
          {/* Project Title Overlay */}
          <div className={clsx(
            "absolute bottom-0 left-0 right-0 p-6 lg:p-10",
            isRTL ? "text-right" : "text-left"
          )}>
            <h3 className={clsx(
              "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2",
              "drop-shadow-lg"
            )}>
              {project.title}
            </h3>
            {project.category && (
              <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                {project.category}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="space-y-16 lg:space-y-20">
        
        {/* The Problem */}
        <section className={clsx(
          "relative",
          isRTL ? "text-right" : "text-left"
        )}>
          <div className="flex items-start gap-6 lg:gap-8">
            {/* Section Number */}
            <div className="flex-shrink-0">
              <div className={clsx(
                "w-12 h-12 lg:w-14 lg:h-14 rounded-full",
                "bg-red-500/20 border-2 border-red-500/40",
                "flex items-center justify-center",
                "font-bold text-xl text-red-400"
              )}>
                1
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="mb-4">
                <p className={clsx(
                  "text-red-400 text-xs font-bold uppercase tracking-widest mb-3",
                  "flex items-center gap-2"
                )}>
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  {currentLabels.problem}
                </p>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {project.problemTitle || "What Needed to Be Solved"}
                </h4>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground/90 text-lg sm:text-xl leading-relaxed mb-4">
                  {project.problem || project.challenge}
                </p>
                
                {/* Problem Points */}
                {project.problemPoints && (
                  <ul className="space-y-3 mt-6">
                    {project.problemPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">✗</span>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Separator */}
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            <ArrowRight className={clsx(
              "w-6 h-6 text-accent/50 transition-transform",
              isRTL && "rotate-180"
            )} />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
          </div>
        </div>

        {/* The Solution */}
        <section className={clsx(
          "relative",
          isRTL ? "text-right" : "text-left"
        )}>
          <div className="flex items-start gap-6 lg:gap-8">
            {/* Section Number */}
            <div className="flex-shrink-0">
              <div className={clsx(
                "w-12 h-12 lg:w-14 lg:h-14 rounded-full",
                "bg-accent/20 border-2 border-accent/40",
                "flex items-center justify-center",
                "font-bold text-xl text-accent"
              )}>
                2
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="mb-4">
                <p className={clsx(
                  "text-accent text-xs font-bold uppercase tracking-widest mb-3",
                  "flex items-center gap-2"
                )}>
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  {currentLabels.solution}
                </p>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {project.solutionTitle || "How Design Solved It"}
                </h4>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground/90 text-lg sm:text-xl leading-relaxed mb-6">
                  {project.solution || project.approach || project.challenge}
                </p>
                
                {/* Solution Highlights */}
                {project.solutionHighlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {project.solutionHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Solution Visual/Mockup */}
              {project.solutionImage && (
                <div className="mt-8 rounded-xl overflow-hidden border border-accent/20 shadow-xl">
                  <Image
                    src={project.solutionImage}
                    alt={`${project.title} - Solution`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Visual Separator */}
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            <ArrowRight className={clsx(
              "w-6 h-6 text-accent/50 transition-transform",
              isRTL && "rotate-180"
            )} />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
          </div>
        </div>

        {/* The Result */}
        <section className={clsx(
          "relative",
          isRTL ? "text-right" : "text-left"
        )}>
          <div className="flex items-start gap-6 lg:gap-8">
            {/* Section Number */}
            <div className="flex-shrink-0">
              <div className={clsx(
                "w-12 h-12 lg:w-14 lg:h-14 rounded-full",
                "bg-green-500/20 border-2 border-green-500/40",
                "flex items-center justify-center",
                "font-bold text-xl text-green-400"
              )}>
                3
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="mb-4">
                <p className={clsx(
                  "text-green-400 text-xs font-bold uppercase tracking-widest mb-3",
                  "flex items-center gap-2"
                )}>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  {currentLabels.result}
                </p>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {project.resultTitle || "Visual + Impact"}
                </h4>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground/90 text-lg sm:text-xl leading-relaxed mb-6">
                  {project.impact || project.result || project.impact}
                </p>
                
                {/* Impact Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-foreground/70 uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Result Visual */}
              {project.resultImage && (
                <div className="mt-8 rounded-xl overflow-hidden border border-green-500/20 shadow-xl">
                  <Image
                    src={project.resultImage}
                    alt={`${project.title} - Result`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
    </article>
  );
};

export default ProjectStory;
