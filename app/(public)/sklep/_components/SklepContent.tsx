import { shopItems } from "@/app/constants/skins";
import { ShopCard } from "@/components/cards/shopcard/Shopcard";

export function SklepContent() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-8">
      <div className="w-full flex flex-col items-center text-center gap-6 py-12 mb-8 animate-appearance-in">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl md:text-7xl font-black text-red-600 tracking-tight drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] uppercase">
            Sklep PointShop
          </h1>
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.3em] font-bold">
            Wyróżnij się z tłumu
          </p>
        </div>

        <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent opacity-80 rounded-full" />

        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
          Poniższe skiny możesz zakupić w grze za{" "}
          <span className="text-gray-200 font-medium">punkty</span> zdobyte
          podczas rund. Kliknij przycisk, aby zobaczyć szczegółowy podgląd
          modelu w{" "}
          <span className="text-gray-200 font-medium">Warsztacie Steam</span>.
        </p>
      </div>

      <ShopCard items={shopItems} />
    </div>
  );
}
