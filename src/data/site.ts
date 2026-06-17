import fleetMan from "@/assets/fleet-man.jpg";
import fleetIsuzu from "@/assets/fleet-isuzu.jpg";
import fleetIveco from "@/assets/fleet-iveco.jpg";
import fleetIrisbus from "@/assets/fleet-irisbus.jpg";
import fleetSprinter from "@/assets/fleet-sprinter.jpg";
import fleetBova from "@/assets/fleet-bova.jpg";

export type Vehicle = {
  slug: string;
  name: string;
  tagline: string;
  seats: string;
  image: string;
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
