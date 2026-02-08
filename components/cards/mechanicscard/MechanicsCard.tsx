"use client";

import { Card, CardBody } from "@heroui/react";

export function MechanicsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-purple-900/10 border-purple-500/30">
        <CardBody>
          <h4 className="text-xl font-bold text-purple-400 mb-2">
            🧬 Skaner DNA
          </h4>
          <p className="text-sm text-gray-400">
            Jako detektyw masz dostęp do specjalnego skanera DNA. Za jego pomocą
            możesz pobrać DNA zabójcy i go namierzyć!
          </p>
        </CardBody>
      </Card>

      <Card className="bg-yellow-900/10 border-yellow-500/30">
        <CardBody>
          <h4 className="text-xl font-bold text-yellow-400 mb-2">⚖️ Karma</h4>
          <p className="text-sm text-gray-400">
            Zabijanie sojuszników obniża karmę. Niska karma = mniejsze obrażenia
            broni i ryzyko bana.
          </p>
        </CardBody>
      </Card>

      <Card className="bg-green-900/10 border-green-500/30">
        <CardBody>
          <h4 className="text-xl font-bold text-green-400 mb-2">💰 Kredyty</h4>
          <p className="text-sm text-gray-400">
            Waluta dla Zdrajców i Detektywów. Kupuj za nie C4, radary i
            specjalne bronie pod klawiszem <strong>C</strong>.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
