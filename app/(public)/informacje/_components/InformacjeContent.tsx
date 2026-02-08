import { RolesSection } from "./RolesSection";
import { InfoCard } from "@/components/cards/infocard/InfoCard";
import { MechanicsCard } from "@/components/cards/mechanicscard/MechanicsCard";
import { InfoEquipment } from "@/components/info/infoequipment/InfoEquipment";
import { InfoControls } from "@/components/info/infocontrols/InfoControls";
import { InfoGlossary } from "@/components/info/infoglossary/InfoGlossary";
import { InfoRules } from "@/components/info/inforules/InfoRules";

export function InformacjeContent() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* --- NOWY NAGŁÓWEK (Zastąpił zdjęcie) --- */}
      <div className="w-full flex flex-col items-center text-center gap-6 py-12 animate-appearance-in">
        {/* Tytuł i Subheader */}
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl md:text-7xl font-black text-red-600 tracking-tight drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] uppercase">
            Informacje
          </h1>
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.3em] font-bold">
            kompendium wiedzy o serwerze
          </p>
        </div>

        {/* Ozdobna Linia */}
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent opacity-80 rounded-full" />

        {/* Tekst Opisowy */}
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
          Tutaj znajdziesz najpotrzebniejsze informacje niezbędne do gry.
          Zapoznaj się z{" "}
          <span className="text-gray-200 font-medium">zasadami</span>, sprawdź
          dostępne <span className="text-gray-200 font-medium">role</span> i
          naucz się wykorzystywać{" "}
          <span className="text-gray-200 font-medium">mechanikę</span> na swoją
          korzyść.
        </p>
      </div>

      {/* --- RESZTA TREŚCI (Bez zmian) --- */}
      <div className="flex flex-col gap-16 w-full">
        {/* SEKCJA 1: WSTĘP */}
        <section>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
            <span className="bg-yellow-500/20 text-yellow-500 p-2 rounded-lg">
              👋
            </span>
            Wprowadzenie do TTT
          </h2>
          <p className="text-gray-400 mb-6 ml-1">
            Poznaj podstawowe zasady rozgrywki i dowiedz się, na czym polega
            gra.
          </p>
          <InfoCard />
        </section>

        {/* SEKCJA 2: ROLE */}
        <section>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
            <span className="bg-blue-500/20 text-blue-500 p-2 rounded-lg">
              🎭
            </span>
            Role na serwerze
          </h2>
          <p className="text-gray-400 mb-6 ml-1">
            Każda runda przydziela Ci inne zadanie. Sprawdź, co musisz robić
            jako Niewinny, Zdrajca lub Detektyw.
          </p>
          <div className="flex flex-wrap justify-center gap-8 w-full">
            <RolesSection />
          </div>
        </section>

        {/* SEKCJA 3: MECHANIKA */}
        <section>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
            <span className="bg-purple-500/20 text-purple-500 p-2 rounded-lg">
              ⚙️
            </span>
            Mechanika Gry
          </h2>
          <p className="text-gray-400 mb-6 ml-1">
            Kluczowe systemy i narzędzia, które pomogą Ci przetrwać lub
            zidentyfikować wroga.
          </p>
          <MechanicsCard />
        </section>

        {/* SEKCJA 4: EKWIPUNEK */}
        <section>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
            <span className="bg-red-500/20 text-red-500 p-2 rounded-lg">
              🎒
            </span>
            Wyposażenie Specjalne
          </h2>
          <p className="text-gray-400 mb-6 ml-1">
            Przegląd unikalnych przedmiotów dostępnych w sklepie (pod klawiszem
            C) dla ról specjalnych.
          </p>
          <InfoEquipment />
        </section>

        {/* SEKCJA 5: STEROWANIE */}
        <section>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
            <span className="bg-gray-500/20 p-2 rounded-lg">⌨️</span>
            Klawiszologia
          </h2>
          <p className="text-gray-400 mb-6 ml-1">
            Spis najważniejszych skrótów klawiszowych, które ułatwią Ci grę.
          </p>
          <InfoControls />
        </section>

        {/* SEKCJA 6: SŁOWNIK */}
        <section>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
            <span className="bg-pink-500/20 text-pink-500 p-2 rounded-lg">
              📖
            </span>
            Slang TTT
          </h2>
          <p className="text-gray-400 mb-6 ml-1">
            Nie wiesz co znaczy "RDM" lub "KOS"? Tutaj znajdziesz wyjaśnienia
            najczęstszych pojęć.
          </p>
          <InfoGlossary />
        </section>

        {/* SEKCJA 7: ZASADY */}
        <section className="mb-20">
          <InfoRules />
        </section>
      </div>
    </div>
  );
}
