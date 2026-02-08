"use client";

import { Image } from "@heroui/react";
import { Feature } from "@/app/constants/features";

interface FeaturesCardProps {
  features: Feature[];
}

export function FeaturesCard({ features }: FeaturesCardProps) {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-16">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={feature.id}
            className={`
              flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} 
              w-full bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl
              group hover:border-red-500/20 transition-colors duration-500
            `}
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10" />
              <Image
                removeWrapper
                alt={feature.title}
                src={feature.image}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 will-change-transform"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center gap-4">
              <h4 className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                {feature.smallHeader}
              </h4>
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
