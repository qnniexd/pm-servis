import { Link } from "@tanstack/react-router";
import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row">
        <div className="max-w-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-md bg-gold text-lg font-bold text-gold-foreground">
              PM
            </div>
            <span className="text-lg font-bold uppercase tracking-tight">Servis</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {company.name} — váš spolehlivý partner pro autobusovou dopravu. Klademe
            důraz na kvalitní služby, individuální přístup a spolehlivost.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-gold">
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Rychlé odkazy
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/vozovy-park" className="hover:text-gold">
                  Vozový park
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="hover:text-gold">
                  Služby
                </Link>
              </li>
              <li>
                <Link to="/cenik" className="hover:text-gold">
                  Ceník
                </Link>
              </li>
              <li>
                <Link to="/kariera" className="hover:text-gold">
                  Kariéra
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-gold">
                  Poptávka
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl justify-between border-t border-border pt-8 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} {company.name} Všechna práva vyhrazena.</span>
        <span className="hidden italic md:inline">Cestujte s námi bezpečně a pohodlně.</span>
      </div>
    </footer>
  );
}
