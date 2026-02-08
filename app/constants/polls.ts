export interface Poll {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  isActive: boolean;
}

export const pollsData: Poll[] = [
  {
    id: "1",
    title: "Feedback dotyczący balansu broni",
    description:
      "Chcemy poznać Waszą opinię na temat ostatnich zmian w obrażeniach snajperek i shotgunów. Czy zmiany poszły w dobrą stronę?",
    link: "https://docs.google.com/forms/u/0/",
    date: "2023-11-15",
    isActive: true,
  },
  {
    id: "2",
    title: "Nowa mapa na serwerze",
    description:
      "Głosowanie na nową mapę, którą dodamy w przyszłym miesiącu. Wybierzcie mądrze!",
    link: "https://docs.google.com/forms/u/0/",
    date: "2024-01-20",
    isActive: true,
  },
  {
    id: "3",
    title: "Nowa mapa na serwerze",
    description:
      "Głosowanie na nową mapę, którą dodamy w przyszłym miesiącu. Wybierzcie mądrze!",
    link: "https://docs.google.com/forms/u/0/",
    date: "2025-01-20",
    isActive: true,
  },
];
