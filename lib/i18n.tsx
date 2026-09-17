"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";
export type Locale = "en" | "ne";
const Context = createContext({
  locale: "en" as Locale,
  setLocale: (_: Locale) => {},
});
const reverse = Object.fromEntries(
  Object.entries(translations).map(([a, b]) => [b, a]),
);
function applyLanguage(locale: Locale) {
  const get = (v: string) =>
    locale === "ne" ? translations[v] || v : reverse[v] || v;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text,
      value = node.nodeValue?.trim();
    if (
      value &&
      !node.parentElement?.closest("script,style,[data-no-translate]")
    ) {
      const next = get(value);
      if (next !== value)
        node.nodeValue = node.nodeValue?.replace(value, next) || next;
    }
  }
}
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setState] = useState<Locale>("en");
  useEffect(
    () => setState(localStorage.getItem("language") === "ne" ? "ne" : "en"),
    [],
  );
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
    applyLanguage(locale);
    const observer = new MutationObserver(() => applyLanguage(locale));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [locale]);
  const setLocale = (next: Locale) => {
    localStorage.setItem("language", next);
    setState(next);
  };
  return (
    <Context.Provider value={{ locale, setLocale }}>
      {children}
    </Context.Provider>
  );
}
export function LanguageSwitcher() {
  const { locale, setLocale } = useContext(Context);
  return (
    <div
      data-no-translate
      role="group"
      aria-label="Select language"
      className="inline-flex rounded border bg-white p-0.5"
    >
      {(["en", "ne"] as Locale[]).map((code) => (
        <button
          key={code}
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
          className={
            "rounded px-2 py-1 text-sm " +
            (locale === code ? "bg-blue-600 text-white" : "text-gray-700")
          }
        >
          {code === "en" ? "English" : "नेपाली"}
        </button>
      ))}
    </div>
  );
}
