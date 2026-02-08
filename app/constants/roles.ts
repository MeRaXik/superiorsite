export interface Role {
  name: string;
  color: "blue" | "green" | "red";
  image: string;
  desc: string;
}

export const ROLES: Role[] = [
  {
    name: "Detektyw",
    color: "blue",
    image: "/img/informacje/detektyw.png", // Pamiętaj, żeby dodać te pliki do public/images
    desc: "Lider Niewinnych. Posiada dostęp do specjalnego sprzętu DNA i radarów. Jego zadaniem jest odnalezienie ciał i wskazanie zdrajców.",
  },
  {
    name: "Niewinny",
    color: "green",
    image: "/img/informacje/niewinny.png",
    desc: "Stanowią większość. Muszą przetrwać i wyeliminować Zdrajców, ale nie wiedzą, komu ufać. Złe zabójstwo (RDM) kończy się karą.",
  },
  {
    name: "Zdrajca",
    color: "red",
    image: "/img/informacje/zdrajca.png",
    desc: "Mniejszość, która musi wyeliminować wszystkich Niewinnych. Mają dostęp do C4, snajperek i pułapek. Działają z ukrycia.",
  },
];
