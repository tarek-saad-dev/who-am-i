"use client";
import Image from "next/image";
import bg from "../../../../public/background/bg4_1.jpg";
import RenderModel from "@/components/RenderModel";
import ProjectsPageTransition from "@/components/transitions/ProjectsPageTransition";
import dynamic from "next/dynamic";
import { projectsContent } from "./content";
import ProjectStory from "@/components/projects/ProjectStory";
import { useLanguage } from "@/contexts/LanguageContext";
import clsx from "clsx";

const Staff = dynamic(() =>
    import ("@/components/models/Staff"), {
        ssr: false,
    });

export default function ProjectsPage() {
    const { language, direction } = useLanguage();
    // Ensure we always have a valid language (default to "en" for SSR safety)
    const safeLanguage = language || "en";
    const safeDirection = direction || "ltr";
    const content = projectsContent[safeLanguage] || projectsContent.en;
    const { hero, process, projects, designTypes, whyWorkWithMe, cta } = content;

    return ( <
        ProjectsPageTransition >
        <
        Image src = { bg }
        alt = "Graphic Design Projects page background image"
        className = "-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority sizes = "100vw" /
        >

        { /* 3D Model - Optional decorative element */ } <
        div className = "flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen" >
        <
        RenderModel >
        <
        Staff / >
        <
        /RenderModel> < /
        div >

        { /* Main Content Container */ } <
        div className = "relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" > { /* Hero Section */ } <
        section className = "min-h-screen flex flex-col items-center justify-center text-center mb-24 lg:mb-32 relative" >
        <
        div className = "max-w-4xl mx-auto px-4 sm:px-6" >
        <
        h1 className = "font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8 leading-[2] tracking-tight px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm inline-block" > { hero.headline.part1 } <
        br className = "hidden sm:block" / > { hero.headline.part2 } <
        /h1> <
        p className = "font-light text-foreground/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4 py-2 rounded-lg bg-background/70 backdrop-blur-sm inline-block" > { hero.subheadline } <
        /p> < /
        div >

        { /* Clean Visual Space - Subtle decorative element */ } <
        div className = "absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-accent/30 to-transparent hidden lg:block" > < /div> < /
        section >

        { /* How I Work (Process) Section */ } <
        section className = "mb-24 lg:mb-32" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-16 text-center px-6 py-3 rounded-lg bg-background/80 backdrop-blur-sm inline-block" > { process.title } <
        /h2>

        <
        div className = "max-w-6xl mx-auto space-y-12 lg:space-y-16" > { /* Step 1: Understanding */ } <
        div className = "custom-bg rounded-lg p-8 lg:p-10" >
        <
        div className = {
            clsx(
                "flex items-start gap-6",
                safeDirection === "rtl" ? "flex-row-reverse" : ""
            )
        } >
        <
        div className = "flex-shrink-0" >
        <
        div className = "w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center" >
        <
        span className = "text-2xl font-bold text-accent" > 1 < /span> < /
        div > <
        /div> <
        div className = "flex-1" >
        <
        h3 className = "text-2xl sm:text-3xl font-bold text-accent mb-4 px-3 py-2 rounded-lg bg-background/70 backdrop-blur-sm inline-block" > { process.step1.title } <
        /h3> <
        p className = "text-foreground text-lg mb-4 leading-relaxed px-3 py-2 rounded-lg bg-background/60 backdrop-blur-sm" > { process.step1.description } <
        /p> <
        ul className = {
            clsx(
                "flex flex-wrap gap-3",
                safeDirection === "rtl" ? "flex-row-reverse" : ""
            )
        } > {
            process.step1.details.map((detail, index) => ( <
                li key = { index }
                className = "text-foreground/90 text-sm px-3 py-1.5 rounded-lg bg-background/60 backdrop-blur-sm inline-block" >
                <
                span className = "text-accent" > • < /span> {detail} < /
                li >
            ))
        } <
        /ul> < /
        div > <
        /div> < /
        div >

        { /* Step 2: Designing */ } <
        div className = "custom-bg rounded-lg p-8 lg:p-10" >
        <
        div className = {
            clsx(
                "flex items-start gap-6",
                safeDirection === "rtl" ? "flex-row-reverse" : ""
            )
        } >
        <
        div className = "flex-shrink-0" >
        <
        div className = "w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center" >
        <
        span className = "text-2xl font-bold text-accent" > 2 < /span> < /
        div > <
        /div> <
        div className = "flex-1" >
        <
        h3 className = "text-2xl sm:text-3xl font-bold text-accent mb-4 px-3 py-2 rounded-lg bg-background/70 backdrop-blur-sm inline-block" > { process.step2.title } <
        /h3> <
        p className = "text-foreground text-lg mb-4 leading-relaxed px-3 py-2 rounded-lg bg-background/60 backdrop-blur-sm" > { process.step2.description } <
        /p> <
        ul className = {
            clsx(
                "flex flex-wrap gap-3",
                safeDirection === "rtl" ? "flex-row-reverse" : ""
            )
        } > {
            process.step2.details.map((detail, index) => ( <
                li key = { index }
                className = "text-foreground/90 text-sm px-3 py-1.5 rounded-lg bg-background/60 backdrop-blur-sm inline-block" >
                <
                span className = "text-accent" > • < /span> {detail} < /
                li >
            ))
        } <
        /ul> < /
        div > <
        /div> < /
        div >

        { /* Step 3: Delivering */ } <
        div className = "custom-bg rounded-lg p-8 lg:p-10" >
        <
        div className = {
            clsx(
                "flex items-start gap-6",
                safeDirection === "rtl" ? "flex-row-reverse" : ""
            )
        } >
        <
        div className = "flex-shrink-0" >
        <
        div className = "w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center" >
        <
        span className = "text-2xl font-bold text-accent" > 3 < /span> < /
        div > <
        /div> <
        div className = "flex-1" >
        <
        h3 className = "text-2xl sm:text-3xl font-bold text-accent mb-4 px-3 py-2 rounded-lg bg-background/70 backdrop-blur-sm inline-block" > { process.step3.title } <
        /h3> <
        p className = "text-foreground text-lg mb-4 leading-relaxed px-3 py-2 rounded-lg bg-background/60 backdrop-blur-sm" > { process.step3.description } <
        /p> <
        ul className = {
            clsx(
                "flex flex-wrap gap-3",
                safeDirection === "rtl" ? "flex-row-reverse" : ""
            )
        } > {
            process.step3.details.map((detail, index) => ( <
                li key = { index }
                className = "text-foreground/90 text-sm px-3 py-1.5 rounded-lg bg-background/60 backdrop-blur-sm inline-block" >
                <
                span className = "text-accent" > • < /span> {detail} < /
                li >
            ))
        } <
        /ul> < /
        div > <
        /div> < /
        div > <
        /div> < /
        section >

        { /* Projects (Story-based) Section */ } <
        section className = "mb-24 lg:mb-32 scroll-smooth"
        id = "projects" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-20 lg:mb-24 text-center px-6 py-3 rounded-lg bg-background/80 backdrop-blur-sm inline-block" > { projects.title } <
        /h2>

        <
        div className = "space-y-32 lg:space-y-40" > {
            projects.items && projects.items.map((project, index) => ( <
                ProjectStory key = { `project-${index}` }
                project = { project }
                index = { index }
                />
            ))
        } <
        /div> < /
        section >

        { /* Design Types Section */ } <
        section className = "mb-24 lg:mb-32" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-12 text-center px-6 py-3 rounded-lg bg-background/80 backdrop-blur-sm inline-block" > { designTypes.title } <
        /h2> <
        div className = "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3 px-2 py-1 rounded-lg bg-background/70 backdrop-blur-sm inline-block" >
        Brand Identity <
        /h3> <
        p className = "text-foreground/90 text-sm leading-relaxed px-2 py-1 rounded-lg bg-background/60 backdrop-blur-sm" > [Description placeholder
            for this design type
        ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" >
        Print Design <
        /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" >
        Digital Design <
        /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" >
        Packaging <
        /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" >
        Illustration <
        /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" >
        Typography <
        /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> < /
        div > <
        /div> < /
        section >

        { /* Why Work With Me Section */ } <
        section className = "mb-24 lg:mb-32" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-12 text-center px-6 py-3 rounded-lg bg-background/80 backdrop-blur-sm inline-block" > { whyWorkWithMe.title } <
        /h2> <
        div className = "max-w-4xl mx-auto" >
        <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-8" >
        <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4 px-3 py-2 rounded-lg bg-background/70 backdrop-blur-sm inline-block" >
        Strategic Thinking <
        /h3> <
        p className = "text-foreground leading-relaxed px-3 py-2 rounded-lg bg-background/60 backdrop-blur-sm" > [Description placeholder - What makes your approach unique ? ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4" >
        Problem Solving <
        /h3> <
        p className = "text-foreground leading-relaxed" > [Description placeholder - How do you solve complex design
            challenges ?
        ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4" >
        Value Creation <
        /h3> <
        p className = "text-foreground leading-relaxed" > [Description placeholder - What value do you bring to
            projects ?
        ] <
        /p> < /
        div > <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4" >
        Collaboration <
        /h3> <
        p className = "text-foreground leading-relaxed" > [Description placeholder - How do you work with clients ? ] <
        /p> < /
        div > <
        /div> < /
        div > <
        /section>

        { /* Soft Call To Action Section */ } <
        section className = "mb-16" >
        <
        div className = "max-w-3xl mx-auto text-center" >
        <
        div className = "custom-bg rounded-lg p-12 lg:p-16" >
        <
        h2 className = "text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm inline-block" > { cta.title } <
        /h2> <
        p className = "text-foreground text-lg mb-8 leading-relaxed px-4 py-2 rounded-lg bg-background/70 backdrop-blur-sm inline-block" > { cta.description } <
        /p> <
        a href = "/contact"
        className = "inline-block px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors" > { cta.button } <
        /a> < /
        div > <
        /div> < /
        section > <
        /div> < /
        ProjectsPageTransition >
    );
}