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
    title: "Ankieta dotycząca serwera TTT.",
    description:
      "Chcę poznać Waszą opinię na temat serwera TTT, jego funkcjonalności oraz zawartości!",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdZlBbmciDKIgrx8-4vPxWaSMUoW7f_jejiKYMezkY0EJNjuw/viewform?usp=dialog",
    date: "2026-02-09",
    isActive: true,
  },
  {
    id: "2",
    title: "Ankieta dotycząca strony internetowej",
    description:
      "Czy masz jakieś propozycje lub uwagi co do strony internetowej? Wypełnij tą ankietę i daj znać!",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeLAm0MGb336Ckl-roVZDCVO2FOHJTVlR_Dsj5XbAbS_4nOiA/viewform?usp=dialog",
    date: "2026-02-09",
    isActive: true,
  },
];
