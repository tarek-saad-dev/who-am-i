"use client";
import Image from "next/image";
import bg from "../../public/background/bg4_1.jpg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
const Model = dynamic(() =>
    import ("@/components/models/Model"), {
        ssr: false,
    });

// Hero Text Content (Replaceable)
const heroContent = {
    kicker: "أهــلا",
    title: "أنا البشمــــهندس طارق",
    subtitle: "A Passion-Driven Software Engineer, Entrepreneur, and Content Creator building ideas into products"
};

export default function Home() {
    return (
        <main className="hero relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
            {/* Hero Background Layer - Scene Image */}
            <div className="hero__bg absolute inset-0 z-[1]">
                <Image 
                    priority 
                    sizes="100vw"
                    src={bg}
                    alt="background-image"
                    fill 
                    className="w-full h-full object-cover object-center opacity-50"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
            </div>

            {/* Hero Scene Layer */}
            <div className="hero__scene absolute inset-0 z-[1]">
                {/* Navigation is part of the scene */}
                <div className="w-full h-screen flex items-center justify-center">
                    <Navigation />
                </div>
            </div>

            {/* Hero Headline Layer - Behind Character */}
            <div className="hero__headlineLayer" aria-label="Hero introduction">
                <motion.p 
                    className="hero__kicker" 
                    dir="rtl"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="hero__emoji">👋</span>
                    <span className="hero__dots">...</span>
                    <span className="hero__hello">{heroContent.kicker}</span>
                </motion.p>

                <motion.h1 
                    className="hero__title" 
                    dir="rtl"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <span className="hero__titleMain">{heroContent.title}</span>
                </motion.h1>

                <motion.p 
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    {heroContent.subtitle}
                </motion.p>
            </div>

            {/* Hero Character Layer - Above Text */}
            <div className="hero__characterLayer absolute inset-0 z-[3] pointer-events-none">
                <div className="w-full h-screen flex items-center justify-center">
                    <RenderModel>
                        <Model />
                    </RenderModel>
                </div>
            </div>
        </main>
    );
}