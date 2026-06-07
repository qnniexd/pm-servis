import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Úvod" },
  { to: "/vozovy-park", label: "Vozový park" },
  { to: "/sluzby", label: "Služby" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="grid size-10 place-items-center rounded-lg bg-navy text-lg font-bold text-primary-foreground">
            PM
          </div>
          <span className="text-xl font-bold uppercase tracking-tight">Servis</span>
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

        <Link
          to="/kontakt"
          className="hidden rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-gold md:inline-block"
        >
          Nezávazná poptávka
        </Link>

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
          </div>
        </div>
      )}
    </nav>
  );
}
