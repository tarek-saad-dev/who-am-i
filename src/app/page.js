import Image from "next/image";
import bg from "../../public/background/bg4_1.jpg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Model = dynamic(() =>
    import ("@/components/models/Model"), {
        ssr: false,
    });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative">
            <Image 
                priority 
                sizes="100vw"
                src={bg}
                alt="background-image"
                fill 
                className="-z-50 w-full h-full object-cover object-center opacity-50"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            <div className="w-full h-screen flex items-center justify-center">
                <Navigation />
                <RenderModel>
                    <Model />
                </RenderModel>
            </div>
        </main>
    );
}