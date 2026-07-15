import { useEffect, useState, type ReactElement } from "react";

type Lang = "cs" | "en" | "de";

function FlagCZ() {
  return (
    <svg viewBox="0 0 60 40" className="block h-4 w-6 rounded-[2px] shadow-sm ring-1 ring-black/10" aria-hidden>
      <rect width="60" height="20" fill="#fff" />
      <rect y="20" width="60" height="20" fill="#d7141a" />
      <polygon points="0,0 30,20 0,40" fill="#11457e" />
    </svg>
  );
}
function FlagEN() {
  return (
    <svg viewBox="0 0 60 30" className="block h-4 w-6 rounded-[2px] shadow-sm ring-1 ring-black/10" aria-hidden>
      <clipPath id="uk-c"><rect width="60" height="30" /></clipPath>
      <g clipPath="url(#uk-c)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
function FlagDE() {
  return (
    <svg viewBox="0 0 60 36" className="block h-4 w-6 rounded-[2px] shadow-sm ring-1 ring-black/10" aria-hidden>
      <rect width="60" height="12" y="0" fill="#000" />
      <rect width="60" height="12" y="12" fill="#dd0000" />
      <rect width="60" height="12" y="24" fill="#ffce00" />
    </svg>
  );
}

const flags: Record<Lang, { label: string; title: string; Flag: () => JSX.Element }> = {
  cs: { label: "CZ", title: "Čeština", Flag: FlagCZ },
  en: { label: "EN", title: "English", Flag: FlagEN },
  de: { label: "DE", title: "Deutsch", Flag: FlagDE },
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
    <div className="flex items-center gap-1" translate="no">
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
            className={`flex items-center gap-1 rounded-md px-1.5 py-1 text-xs font-semibold transition-all ${
              active
                ? "bg-gold/15 text-gold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="text-base leading-none">{f.emoji}</span>
            <span className="hidden lg:inline">{f.label}</span>
          </button>
        );
      })}
    </div>
  );
}
