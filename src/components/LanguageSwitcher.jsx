"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "fixed top-4 left-2.5 xs:left-4 z-50",
        "custom-bg rounded-full p-2.5 xs:p-3",
        "hover:shadow-glass-sm transition-all",
        "flex items-center justify-center gap-1.5 xs:gap-2",
        "w-10 h-10 xs:w-12 xs:h-12",
        "border border-accent/20 hover:border-accent/40",
        "group"
      )}
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
      title={language === "en" ? "التبديل إلى العربية" : "Switch to English"}
    >
      <Languages className="w-4 h-4 xs:w-5 xs:h-5 text-accent group-hover:text-accent/80 transition-colors" />
      <span className="text-foreground font-bold text-xs xs:text-sm min-w-[20px] text-center">
        {language === "en" ? "AR" : "EN"}
      </span>
    </motion.button>
  );
}

