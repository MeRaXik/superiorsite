// app/constants/features.ts

export interface Feature {
  id: string;
  image: string;
  smallHeader: string;
  title: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    id: "players-first",
    image: "/img/homepage/card1.jpg",
    smallHeader: "Dla graczy",
    title: "Serwer od graczy - dla graczy",
    description:
      "Doskonale rozumiemy, jak frustrujący potrafi być RDM czy niesłuszny ban, dlatego stworzyliśmy Superior Studios. Nasza administracja wywodzi się z aktywnej społeczności TTT, dzięki czemu zasady są przejrzyste, a rozgrywka sprawiedliwa. Tutaj nie jesteś tylko kolejnym nickiem na liście – tworzymy to miejsce wspólnie z Wami, słuchając każdej sugestii.",
  },
  {
    id: "classic",
    image: "/img/homepage/card2.jpg",
    smallHeader: "Klasyka gatunku",
    title: "TTT Dla Koneserów – Bez Chaosu",
    description:
      "Tęsknisz za czasami, gdy w TTT liczyła się dedukcja i celne oko, a nie kto ma lepszego skina? My też. Stawiamy na zbalansowaną rozgrywkę typu Vanilla+. Ograniczyliśmy zbędne dodatki do minimum, aby zachować unikalny klimat Garry's Mod. Żadnych broni Pay-to-Win, żadnego chaosu na ekranie. Czysta strategia i kłamstwa.",
  },
  {
    id: "fairplay",
    image: "/img/homepage/card3.jpg",
    smallHeader: "Fair play & style",
    title: "Wyglądaj Dobrze, Graj Uczciwie",
    description:
      "Na naszym serwerze znajdziesz rozbudowany system PointShop, który pozwoli Ci wyróżnić się z tłumu. Zdobywaj kredyty za wygrane rundy i odblokowuj unikalne modele postaci oraz akcesoria. Co najważniejsze? Zero Pay-to-Win. Wszystkie przedmioty są czysto kosmetyczne. U nas wygrywa spryt i celność, a nie portfel.",
  },
];
