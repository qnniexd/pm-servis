import { useEffect, useState } from "react";

type Lang = "cs" | "en" | "de";

const flags: Record<Lang, { title: string; src: string }> = {
  cs: { title: "Čeština", src: "https://flagcdn.com/w80/cz.png" },
  en: { title: "English", src: "https://flagcdn.com/w80/gb.png" },
  de: { title: "Deutsch", src: "https://flagcdn.com/w80/de.png" },
};



function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function writeCookie(name: string, value: string) {
  // Set on current host and on parent domain so Google Translate honors it
  document.cookie = `${name}=${value};path=/;max-age=31536000`;
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length > 1) {
    const domain = "." + parts.slice(-2).join(".");
    document.cookie = `${name}=${value};path=/;domain=${domain};max-age=31536000`;
  }
}

function currentLang(): Lang {
  const c = readCookie("googtrans");
  if (!c) return "cs";
  if (c.endsWith("/en")) return "en";
  if (c.endsWith("/de")) return "de";
  return "cs";
}

let scriptLoaded = false;
function ensureGoogleTranslate() {
  if (scriptLoaded || typeof window === "undefined") return;
  scriptLoaded = true;

  // Container required by Google Translate
  if (!document.getElementById("google_translate_element")) {
    const div = document.createElement("div");
    div.id = "google_translate_element";
    div.style.display = "none";
    document.body.appendChild(div);
  }

  (window as unknown as { googleTranslateElementInit: () => void }).googleTranslateElementInit =
    () => {
      const g = (window as unknown as { google?: { translate?: { TranslateElement?: new (opts: unknown, id: string) => void; TranslateElement_?: { InlineLayout?: { SIMPLE: number } } } } }).google;
      const TE = g?.translate?.TranslateElement as unknown as (new (opts: unknown, id: string) => void) & { InlineLayout: { SIMPLE: number } };
      if (TE) {
        new TE(
          {
            pageLanguage: "cs",
            includedLanguages: "cs,en,de",
            autoDisplay: false,
            layout: TE.InlineLayout.SIMPLE,
          },
          "google_translate_element",
        );
      }
    };

  const s = document.createElement("script");
  s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  s.async = true;
  document.body.appendChild(s);

  // Hide Google's banner if it appears
  const style = document.createElement("style");
  style.textContent = `
    .goog-te-banner-frame, .skiptranslate { display: none !important; }
    body { top: 0 !important; }
    .goog-tooltip, .goog-tooltip:hover { display: none !important; }
    .goog-text-highlight { background: none !important; box-shadow: none !important; }
  `;
  document.head.appendChild(style);
}

export function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>("cs");

  useEffect(() => {
    ensureGoogleTranslate();
    setLang(currentLang());
  }, []);

  const change = (next: Lang) => {
    if (next === lang) return;
    if (next === "cs") {
      writeCookie("googtrans", "");
      // also try to unset
      document.cookie = "googtrans=;path=/;max-age=0";
    } else {
      writeCookie("googtrans", `/cs/${next}`);
    }
    setLang(next);
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-0.5" translate="no">
      {(Object.keys(flags) as Lang[]).map((code) => {
        const f = flags[code];
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => change(code)}
            title={f.title}
            aria-label={f.title}
            className={`rounded-md p-0.5 transition-opacity ${
              active ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={f.src}
              alt={f.title}
              width={24}
              height={16}
              loading="lazy"
              className="block h-4 w-auto rounded-md"
            />
          </button>
        );
      })}
    </div>
  );
}
