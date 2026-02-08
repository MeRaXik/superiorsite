"use client";

import { Card, CardBody } from "@heroui/react";

export function InfoCard() {
  return (
    <Card className="bg-[#000000] border border-red-600 p-4">
      <CardBody className="gap-4 text-gray-300">
        <p>
          <strong className="text-white">Cel gry:</strong> Przeżyć lub
          wyeliminować przeciwników w zależności od przydzielonej roli. Gra
          toczy się w rundach (zazwyczaj 10 minut).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="bg-[#101010] p-4 rounded-xl">
            <h4 className="font-bold text-white mb-2">1. Faza Przygotowań</h4>
            <p className="text-sm">
              Wszyscy gracze pojawiają się na mapie. Nikt nie ma broni, nikt nie
              może nikogo zabić.
            </p>
          </div>
          <div className="bg-[#101010] p-4 rounded-xl">
            <h4 className="font-bold text-white mb-2">2. Rozgrywka</h4>
            <p className="text-sm">
              Gracze otrzymują bronie i role. Niewinni szukają Zdrajców, a
              Zdrajcy planują ciche zabójstwa.
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
