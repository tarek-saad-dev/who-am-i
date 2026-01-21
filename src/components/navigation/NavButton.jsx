import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
  PenTool,
  Camera,
  Server,
  GraduationCap,
  Info,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon: string) => {
  switch (icon) {
    case "penTool":
      return <PenTool className="w-full h-auto" strokeWidth={1.5} />;
    case "camera":
      return <Camera className="w-full h-auto" strokeWidth={1.5} />;
    case "server":
      return <Server className="w-full h-auto" strokeWidth={1.5} />;
    case "graduationCap":
      return <GraduationCap className="w-full h-auto" strokeWidth={1.5} />;
    case "info":
      return <Info className="w-full h-auto" strokeWidth={1.5} />;
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const MotionLink = motion(Link);
const MotionA = motion.a;

const isExternalLink = (url?: string) => !!url && /^https?:\/\//i.test(url);

type Props = {
  x: string | number;
  y: string | number;
  label: string;
  link: string;
  icon: string;
  newTab?: boolean;
  disabled?: boolean;
  labelDirection?: "left" | "right";
};

export default function NavButton({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  disabled,
  labelDirection = "right",
}: Props) {
  const external = isExternalLink(link);
  const openInNewTab = newTab || external;

  const commonClass =
    "text-foreground rounded-full flex items-center justify-center custom-bg";

  const content = (big: boolean) => (
    <span
      className={clsx(
        "relative hover:text-accent",
        big
          ? "w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause"
          : "w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4",
        disabled && "opacity-50 cursor-not-allowed hover:text-foreground"
      )}
    >
      {getIcon(icon)}

      <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

      <span
        className={clsx(
          "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
          labelDirection === "left" ? "right-full left-auto" : ""
        )}
      >
        {label}
      </span>
    </span>
  );

  return (
    <ResponsiveComponent>
      {({ size }) => {
        const big = !!size && size >= 480;

        const Wrapper = (
          children: React.ReactNode,
          extraProps: any = {}
        ) => {
          if (disabled) {
            return (
              <motion.button
                variants={item}
                disabled
                className={clsx(commonClass, "cursor-not-allowed")}
                aria-label={label}
                name={label}
                type="button"
                {...extraProps}
              >
                {children}
              </motion.button>
            );
          }

          if (external) {
            return (
              <MotionA
                variants={item}
                href={link}
                target={openInNewTab ? "_blank" : "_self"}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                className={commonClass}
                aria-label={label}
                {...extraProps}
              >
                {children}
              </MotionA>
            );
          }

          return (
            <MotionLink
              variants={item}
              href={link}
              target={openInNewTab ? "_blank" : "_self"}
              rel={openInNewTab ? "noopener noreferrer" : undefined}
              className={commonClass}
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
              {...extraProps}
            >
              {children}
            </MotionLink>
          );
        };

        return big ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            {Wrapper(content(true))}
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">{Wrapper(content(false))}</div>
        );
      }}
    </ResponsiveComponent>
  );
}
