"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [direction, setDirection] = useState("ltr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setMounted(true);
    
    // Load saved language from localStorage (only on client)
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguage(savedLanguage);
      setDirection(savedLanguage === "ar" ? "rtl" : "ltr");
      
      // Update document direction and lang attribute
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLanguage;
      
      // Update font class based on language
      if (savedLanguage === "ar") {
        document.body.classList.add("font-cairo");
        document.body.classList.remove("font-inter");
      } else {
        document.body.classList.add("font-inter");
        document.body.classList.remove("font-cairo");
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    const dir = lang === "ar" ? "rtl" : "ltr";
    setDirection(dir);
    localStorage.setItem("language", lang);
    
    // Update document direction and lang attribute
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    
      // Update font class based on language
      if (lang === "ar") {
        document.body.classList.add("font-cairo");
        document.body.classList.remove("font-inter");
      } else {
        document.body.classList.add("font-inter");
        document.body.classList.remove("font-cairo");
      }
  };

  return (
    <LanguageContext.Provider value={{ language, direction, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default values if context is not available (during SSR or before provider mounts)
    return {
      language: "en",
      direction: "ltr",
      changeLanguage: () => {},
    };
  }
  return context;
}

