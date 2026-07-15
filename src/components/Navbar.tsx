import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";


const navItems = [
  { to: "/", label: "Úvod" },
  { to: "/vozovy-park", label: "Vozový park" },
  { to: "/sluzby", label: "Služby" },
  { to: "/cenik", label: "Ceník" },
  { to: "/kariera", label: "Kariéra" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="flex flex-col gap-0" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-gold">PM</span>
            <span className="text-2xl font-bold tracking-tight text-navy">SERVIS</span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
            professional management
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-gold [&.active]:text-gold"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Link
            to="/kontakt"
            className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold"
          >
            Nezávazná poptávka
          </Link>
        </div>


        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Otevřít menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-gold [&.active]:text-gold"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-6 py-2.5 text-center font-semibold text-primary-foreground"
            >
              Nezávazná poptávka
            </Link>
            <div className="mt-2 flex justify-center">
              <LanguageSwitcher />
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
