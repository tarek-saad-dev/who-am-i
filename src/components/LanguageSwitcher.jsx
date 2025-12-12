"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import clsx from "clsx";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={clsx(
        "fixed top-4 z-50 custom-bg rounded-lg p-3 hover:shadow-glass-sm transition-all flex items-center gap-2",
        language === "ar" ? "left-4" : "right-4"
      )}
      aria-label="Switch language"
    >
      <Languages className="w-5 h-5 text-accent" />
      <span className="text-foreground font-semibold text-sm">
        {language === "en" ? "AR" : "EN"}
      </span>
    </button>
  );
}

