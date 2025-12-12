import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() =>
    import ("@/components/models/Staff"), {
        ssr: false,
    });

export const metadata = {
    title: "Graphic Design Projects",
};

export default function ProjectsPage() {
    return ( <
        >
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
        /RenderModel> <
        /div>

        { /* Main Content Container */ } <
        div className = "relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" >

        { /* Hero Section */ } <
        section className = "min-h-screen flex flex-col items-center justify-center text-center mb-24 lg:mb-32 relative" >
        <
        div className = "max-w-4xl mx-auto px-4 sm:px-6" >
        <
        h1 className = "font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-8 leading-tight tracking-tight" >
        Design is about problem solving, < br className = "hidden sm:block" / > not decoration. <
        /h1> <
        p className = "font-light text-foreground/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed" >
        Every project starts with understanding the challenge, not the aesthetic. <
        /p> <
        /div>

        { /* Clean Visual Space - Subtle decorative element */ } <
        div className = "absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-accent/30 to-transparent hidden lg:block" > < /div> <
        /section>

        { /* How I Think (Process) Section */ } <
        section className = "mb-24 lg:mb-32" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-8 text-center" >
        How I Think <
        /h2> <
        div className = "max-w-4xl mx-auto" >
        <
        p className = "text-foreground text-base sm:text-lg leading-relaxed mb-6" > [Process description placeholder - This section will explain your design thinking, problem - solving approach, and methodology] <
        /p> <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" >
        <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Step 1 < /h3> <
        p className = "text-foreground/80" > [Process step placeholder] < /p> <
        /div> <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Step 2 < /h3> <
        p className = "text-foreground/80" > [Process step placeholder] < /p> <
        /div> <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Step 3 < /h3> <
        p className = "text-foreground/80" > [Process step placeholder] < /p> <
        /div> <
        /div> <
        /div> <
        /section>

        { /* Projects (Story-based) Section */ } <
        section className = "mb-24 lg:mb-32" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-12 text-center" >
        Projects <
        /h2> <
        div className = "space-y-24 lg:space-y-32" > { /* Project Story 1 */ } <
        div className = "max-w-4xl mx-auto" >
        <
        div className = "custom-bg rounded-lg p-8 lg:p-12" >
        <
        h3 className = "text-2xl sm:text-3xl font-bold text-accent mb-4" >
        Project Title 1 <
        /h3> <
        div className = "mb-6" >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Challenge < /p> <
        p className = "text-foreground leading-relaxed mb-6" > [Challenge description placeholder - What problem needed to be solved ? ] <
        /p> <
        /div> <
        div className = "mb-6" >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Approach < /p> <
        p className = "text-foreground leading-relaxed mb-6" > [Approach description placeholder - How did you think through the solution ? ] <
        /p> <
        /div> <
        div className = "mb-6" >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Solution < /p> <
        p className = "text-foreground leading-relaxed mb-6" > [Solution description placeholder - What was the final design and why ? ] <
        /p> <
        /div> <
        div >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Impact < /p> <
        p className = "text-foreground leading-relaxed" > [Impact description placeholder - What value did this create ? ] <
        /p> <
        /div> { /* Image placeholder */ } <
        div className = "mt-8 w-full h-64 bg-foreground/10 rounded-lg flex items-center justify-center" >
        <
        p className = "text-foreground/40" > [Project Image Placeholder] < /p> <
        /div> <
        /div> <
        /div>

        { /* Project Story 2 */ } <
        div className = "max-w-4xl mx-auto" >
        <
        div className = "custom-bg rounded-lg p-8 lg:p-12" >
        <
        h3 className = "text-2xl sm:text-3xl font-bold text-accent mb-4" >
        Project Title 2 <
        /h3> <
        div className = "mb-6" >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Challenge < /p> <
        p className = "text-foreground leading-relaxed mb-6" > [Challenge description placeholder] <
        /p> <
        /div> <
        div className = "mb-6" >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Approach < /p> <
        p className = "text-foreground leading-relaxed mb-6" > [Approach description placeholder] <
        /p> <
        /div> <
        div className = "mb-6" >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Solution < /p> <
        p className = "text-foreground leading-relaxed mb-6" > [Solution description placeholder] <
        /p> <
        /div> <
        div >
        <
        p className = "text-foreground/60 text-sm mb-2" > The Impact < /p> <
        p className = "text-foreground leading-relaxed" > [Impact description placeholder] <
        /p> <
        /div> { /* Image placeholder */ } <
        div className = "mt-8 w-full h-64 bg-foreground/10 rounded-lg flex items-center justify-center" >
        <
        p className = "text-foreground/40" > [Project Image Placeholder] < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section>

        { /* Design Types Section */ } <
        section className = "mb-24 lg:mb-32" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-12 text-center" >
        Design Types <
        /h2> <
        div className = "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Brand Identity < /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Print Design < /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Digital Design < /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Packaging < /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Illustration < /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-6" >
        <
        h3 className = "text-xl font-semibold text-accent mb-3" > Typography < /h3> <
        p className = "text-foreground/80 text-sm leading-relaxed" > [Description placeholder
            for this design type
        ] <
        /p> <
        /div> <
        /div> <
        /section>

        { /* Why Work With Me Section */ } <
        section className = "mb-24 lg:mb-32" >
        <
        h2 className = "text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-12 text-center" >
        Why Work With Me <
        /h2> <
        div className = "max-w-4xl mx-auto" >
        <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-8" >
        <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4" > Strategic Thinking < /h3> <
        p className = "text-foreground leading-relaxed" > [Description placeholder - What makes your approach unique ? ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4" > Problem Solving < /h3> <
        p className = "text-foreground leading-relaxed" > [Description placeholder - How do you solve complex design challenges ? ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4" > Value Creation < /h3> <
        p className = "text-foreground leading-relaxed" > [Description placeholder - What value do you bring to projects ? ] <
        /p> <
        /div> <
        div className = "custom-bg rounded-lg p-8" >
        <
        h3 className = "text-xl font-semibold text-accent mb-4" > Collaboration < /h3> <
        p className = "text-foreground leading-relaxed" > [Description placeholder - How do you work with clients ? ] <
        /p> <
        /div> <
        /div> <
        /div> <
        /section>

        { /* Soft Call To Action Section */ } <
        section className = "mb-16" >
        <
        div className = "max-w-3xl mx-auto text-center" >
        <
        div className = "custom-bg rounded-lg p-12 lg:p-16" >
        <
        h2 className = "text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6" >
        Let 's Create Something Meaningful Together <
        /h2> <
        p className = "text-foreground text-lg mb-8 leading-relaxed" > [CTA description placeholder - Invite conversation about potential projects] <
        /p> <
        a href = "/contact"
        className = "inline-block px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors" >
        Get In Touch <
        /a> <
        /div> <
        /div> <
        /section>

        <
        /div> <
        />
    );
}