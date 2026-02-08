export interface ShopItem {
  id: string;
  name: string;
  price: number;
  image: string;
  workshopLink: string;
}

export const shopItems: ShopItem[] = [
  {
    id: "skin_aiden",
    name: "Aiden Katieverse",
    price: 50000,
    image:
      "https://images.steamusercontent.com/ugc/14628450867962239738/D6D1990798C10D8DAA729FF13E97BAFD825C0D2D/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", // Pamiętaj wrzucić zdjęcia do public/img/shop/
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3580685910",
  },
  {
    id: "cuban_mercenary",
    name: "Kubański Najemnik",
    price: 25000,
    image:
      "https://images.steamusercontent.com/ugc/433771855923473033/0E3AF06A980D81D87A1894B4C9E1B77A64C6FA0E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=222334482",
  },
  {
    id: "skin_boxman",
    name: "Boxman",
    price: 50000,
    image:
      "https://images.steamusercontent.com/ugc/576745934999373196/3260D123CC19A0B93700AFB90DD4F131DE249BD0/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=112233445",
  },
  {
    id: "skin_enderdragons",
    name: "Ender Dragony",
    price: 50000,
    image:
      "https://images.steamusercontent.com/ugc/321249742322508553/BE721ED66C5221935A36D8A4C1B3853007FAE0C7/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=631336969",
  },
  {
    id: "skin_scorpion",
    name: "Skorpion",
    price: 25000,
    image:
      "https://images.steamusercontent.com/ugc/824631518775442388/227D8DB86E42DA728F627BFCB8149D0F6CC16FDE/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=1717433883",
  },
  {
    id: "skin_enderdragon",
    name: "Nanosuit",
    price: 15000,
    image:
      "https://images.steamusercontent.com/ugc/704037262344205152/A559CE606A4F47867A71C0FF80C1753B6E276F55/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=490907525",
  },
  {
    id: "skin_banan",
    name: "Pan Banan",
    price: 25000,
    image:
      "https://images.steamusercontent.com/ugc/773993388959969351/BB6BEC35C0A6FE32E34EA76BBBB15BD4492544BA/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=1998016501",
  },
  {
    id: "skin_kermit",
    name: "Kermit",
    price: 25000,
    image:
      "https://images.steamusercontent.com/ugc/539647369808924080/C2D8F8856319076E31EF815289C2842A27A0FC74/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=433585044",
  },
  {
    id: "skin_dynia",
    name: "Dyniowy Król",
    price: 50000,
    image:
      "https://images.steamusercontent.com/ugc/52455076327334800/2910F6547131FCE54E25146DE515B62C4AF7D671/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=3416550284",
  },
  {
    id: "skin_tron",
    name: "Tron",
    price: 25000,
    image:
      "https://images.steamusercontent.com/ugc/3335220534508065300/8E313CB510CDB412EC9BB345E7347248C91343EC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=241187700",
  },
  {
    id: "skin_savitar",
    name: "Savitar",
    price: 50000,
    image:
      "https://images.steamusercontent.com/ugc/860605148058575329/BB0848EBFF61E01B1C3F2D1BB72C0EA1E7D4F7B5/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=1111962103",
  },
  {
    id: "skin_heli",
    name: "Śmigłowiec Mi-28",
    price: 50000,
    image:
      "https://images.steamusercontent.com/ugc/263850569426456303/29093F15ABB367D157B47D14EC376A46B3C12886/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    workshopLink:
      "https://steamcommunity.com/sharedfiles/filedetails/?id=780957556",
  },
];
