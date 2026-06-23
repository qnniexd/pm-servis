import fleetMan from "@/assets/fleet-man.jpg";
import fleetMan2 from "@/assets/fleet-man-2.jpg";
import fleetMan3 from "@/assets/fleet-man-3.jpg";
import fleetMan4 from "@/assets/fleet-man-4.jpg";
import fleetIsuzu from "@/assets/fleet-isuzu.jpg";
import fleetIsuzu2 from "@/assets/fleet-isuzu-2.jpg";
import fleetIsuzu3 from "@/assets/fleet-isuzu-3.jpg";
import fleetIsuzu4 from "@/assets/fleet-isuzu-4.jpg";
import fleetIsuzu5 from "@/assets/fleet-isuzu-5.jpg";
import fleetIsuzu6 from "@/assets/fleet-isuzu-6.jpg";
import fleetIveco from "@/assets/fleet-iveco.jpg";
import fleetIveco2 from "@/assets/fleet-iveco-2.jpg";
import fleetIveco3 from "@/assets/fleet-iveco-3.jpg";
import fleetIveco4 from "@/assets/fleet-iveco-4.jpg";
import fleetIveco5 from "@/assets/fleet-iveco-5.jpg";
import fleetIrisbus from "@/assets/fleet-irisbus.jpg";
import fleetIrisbus3 from "@/assets/fleet-irisbus-3.jpg";
import fleetIrisbus4 from "@/assets/fleet-irisbus-4.jpg";
import fleetSprinter from "@/assets/fleet-sprinter.jpg";
import fleetSprinter2 from "@/assets/fleet-sprinter-2.jpg";
import fleetSprinter3 from "@/assets/fleet-sprinter-3.jpg";
import fleetSprinter4 from "@/assets/fleet-sprinter-4.jpg";
import fleetSprinter5 from "@/assets/fleet-sprinter-5.jpg";
import fleetSprinter6 from "@/assets/fleet-sprinter-6.jpg";
import fleetSprinter7 from "@/assets/fleet-sprinter-7.jpg";
import fleetBova from "@/assets/fleet-bova.jpg";
import fleetBova2 from "@/assets/fleet-bova-2.jpg";
import fleetBova3 from "@/assets/fleet-bova-3.jpg";
import fleetBova4 from "@/assets/fleet-bova-4.jpg";

export type Vehicle = {
  slug: string;
  name: string;
  tagline: string;
  seats: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
};

export const fleet: Vehicle[] = [
  {
    slug: "man-lions-coach",
    name: "MAN Lion´s Coach R08",
    tagline: "Vlajková loď flotily",
    seats: "57 + 1 + 1",
    image: fleetMan,
    images: [fleetMan, fleetMan2, fleetMan3, fleetMan4],
    description:
      "Reprezentativní dálkový autobus pro velké skupiny, zájezdy a firemní akce po celé Evropě.",
    features: [
      "Pásy na všech sedadlech",
      "Polohovatelné sedačky",
      "Plně klimatizovaný",
      "2 lednice a kávovar",
      "2 LCD monitory",
      "Velkoobjemové kufry",
    ],
  },
  {
    slug: "irisbus-evadys",
    name: "Irisbus Evadys",
    tagline: "Zájezdová verze",
    seats: "59 míst",
    image: fleetIrisbus,
    images: [fleetIrisbus, fleetIrisbus3, fleetIrisbus4],
    description:
      "Prostorný plně klimatizovaný autobus v zájezdové verzi s vysokými a prostornými kufry.",
    features: [
      "Pásy na všech sedadlech",
      "Polohovatelné sedačky",
      "Plně klimatizovaný",
      "Zájezdová verze",
      "Vysoké a prostorné kufry",
    ],
  },
  {
    slug: "bova-futura",
    name: "Bova Futura",
    tagline: "Komfortní dálková přeprava",
    seats: "49 + 1",
    image: fleetBova,
    images: [fleetBova, fleetBova2, fleetBova3, fleetBova4],
    description:
      "Elegantní dálkový autobus s vyhřívanými kufry a kompletní palubní výbavou pro dlouhé trasy.",
    features: [
      "Pásy na všech sedadlech",
      "Lednice a kávovar",
      "2 LCD monitory",
      "Vyhřívané velkoobjemové kufry",
    ],
  },
  {
    slug: "iveco-mago",
    name: "Iveco Mago 2",
    tagline: "Univerzální střední třída",
    seats: "36 + 1",
    image: fleetIveco,
    images: [fleetIveco, fleetIveco2, fleetIveco3, fleetIveco4, fleetIveco5],
    description:
      "Plně klimatizovaný autobus střední velikosti, ideální pro výlety a střední skupiny.",
    features: [
      "Pásy na všech sedadlech",
      "Polohovatelné sedačky",
      "Plně klimatizované",
      "Zavazadlový prostor",
      "LCD monitor",
    ],
  },
  {
    slug: "isuzu-turquoise",
    name: "Isuzu Turquoise",
    tagline: "Obratný midibus",
    seats: "28 + 1 + 1",
    image: fleetIsuzu,
    images: [fleetIsuzu, fleetIsuzu2, fleetIsuzu3, fleetIsuzu4, fleetIsuzu5, fleetIsuzu6],
    description:
      "Praktický midibus pro menší skupiny s tónovanými okny a zavazadlovým prostorem.",
    features: [
      "Pásy na všech sedadlech",
      "Polohovatelné sedačky",
      "Lednice a LCD TV",
      "Zavazadlový prostor",
      "Tónovaná boční okna",
    ],
  },
  {
    slug: "mercedes-sprinter",
    name: "Mercedes-Benz Sprinter",
    tagline: "VIP minibus",
    seats: "20 + 1",
    image: fleetSprinter,
    images: [fleetSprinter, fleetSprinter2, fleetSprinter3, fleetSprinter4, fleetSprinter5, fleetSprinter6, fleetSprinter7],
    description:
      "Komfortní minibus pro menší skupiny, firemní akce a transfery na letiště.",
    features: [
      "Pásy na všech sedadlech",
      "Polohovatelné sedačky",
      "Zavazadlový prostor za sedačkami",
      "Tónovaná boční okna",
    ],
  },
];

export const services = [
  {
    title: "Autobusová doprava",
    description:
      "Hlavní pilíř našich služeb. Zajišťujeme vnitrostátní i mezinárodní přepravu osob moderními autobusy a minibusy — zájezdy, školní výlety, firemní akce i transfery.",
  },
  {
    title: "Technická správa a údržba nemovitostí",
    description:
      "Komplexní technické zajištění objektů. Pravidelná údržba, drobné opravy a spolehlivý dohled nad vašimi nemovitostmi.",
  },
  {
    title: "Půjčovna pojízdného hliníkového lešení",
    description:
      "Pronájem pojízdného hliníkového lešení pro bezpečnou práci ve výškách. Snadná montáž a vysoká stabilita.",
  },
];

export const company = {
  name: "PM-servis Eva Morávková",
  phone: "+420 778 204 815",
  email: "servis.pm@seznam.cz",
  address: "Libňatov 182, 542 36",
};
