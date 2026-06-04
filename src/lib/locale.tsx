"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Locale } from "@/locales/types";
import { en } from "@/locales/en";
import { th } from "@/locales/th";

type Lang = "en" | "th";

interface LocaleContextValue {
  lang: Lang;
  t: Locale;
  setLang: (lang: Lang) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  lang: "en",
  t: en,
  setLang: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("hearo-lang") as Lang | null;
    if (stored === "en" || stored === "th") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("hearo-lang", l);
  };

  const t = lang === "th" ? th : en;

  return (
    <LocaleContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
