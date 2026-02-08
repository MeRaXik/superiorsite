import { featuresData } from "@/app/constants/features";
import { ScrollIndicator } from "@/components/home/scroll/ScrollIndicator";
import { JoinServer } from "@/components/home/joinserver/JoinServer";
import { FeaturesCard } from "@/components/cards/featurescard/FeaturesCard";

export function HomeContent() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-transparent">
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Tło serwera"
            src="/img/homepage/tlo.jpg"
            className="w-full h-full object-cover scale-105 opacity-100"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-black/70" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.25)_0%,rgba(0,0,0,0.8)_90%)]" />

        <div className="relative z-20 flex flex-col items-center gap-10 px-4 text-center animate-appearance-in">
          <div className="hover:scale-105 transition-transform duration-500">
            <img
              width={450}
              alt="Logo Serwera"
              src="/img/homepage/logo.png"
              className="object-contain drop-shadow-lg"
            />
          </div>

          <JoinServer />
        </div>

        <ScrollIndicator />
      </section>

      <section
        id="info-section"
        className="w-full bg-transparent py-24 px-4 flex flex-col items-center gap-24"
      >
        <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8 animate-appearance-in">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">
              Witamy na <span className="text-red-600">Superior Studios</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.3em] font-bold">
              dołącz i zostań z nami na dłużej
            </p>
          </div>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent opacity-80 rounded-full" />
          <p className="text-lg md:text-xl text-gray-300 leading-loose font-light max-w-3xl">
            Szukasz serwera, gdzie liczy się{" "}
            <strong className="text-white font-semibold">kreatywność</strong> i{" "}
            <strong className="text-white font-semibold">dobra zabawa</strong>?
            Trafiłeś idealnie!{" "}
            <span className="text-red-500 font-medium">Superior Studios</span>{" "}
            to społeczność graczy, którzy cenią sobie dobry gameplay, stabilne
            serwery i unikalne tryby rozgrywki.
          </p>
        </div>

        <FeaturesCard features={featuresData} />
      </section>
    </main>
  );
}
