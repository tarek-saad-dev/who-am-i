import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import { TransitionProvider } from "@/contexts/TransitionContext";
import GraphicTransitionOverlay from "@/components/transitions/GraphicTransitionOverlay";
import LanguageProviderWrapper from "@/components/providers/LanguageProviderWrapper";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const cairo = localFont({
    src: [
        {
            path: "../../public/fonts/static/Cairo-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/static/Cairo-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/static/Cairo-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/static/Cairo-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-cairo",
    display: "swap",
});

export const metadata = {
    title: {
        template: "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | CodeBucks",
        default: "Next.js Portfolio Created with Three.js and Tailwind CSS by CodeBucks",
    },
    description: "A unique creative portfolio designed by CodeBucks with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.variable,
                    cairo.variable,
                    "bg-background text-foreground font-inter"
                )}
            >
                <LanguageProviderWrapper>
                    <TransitionProvider>
                        {children}
                        <GraphicTransitionOverlay />
                    </TransitionProvider>
                    <FireFliesBackground />
                    <Sound />
                    <div id="my-modal" />
                </LanguageProviderWrapper>
            </body>
        </html>
    );
}