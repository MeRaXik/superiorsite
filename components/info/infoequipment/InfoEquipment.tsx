"use client";

import { Tabs, Tab, Card, CardBody } from "@heroui/react";

export function InfoEquipment() {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Opcje ekwipunku"
        color="danger"
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-red-500",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-red-500",
        }}
      >
        <Tab key="zdrajca" title="⚔️ Sklep Zdrajcy">
          <Card className="mt-4 bg-[#351111]">
            <CardBody className="gap-4">
              {/* Item 1 */}
              <div className="flex items-start gap-4 p-2 border-b border-white/10 pb-4">
                <div className="bg-red-500/20 p-2 rounded text-red-500 font-bold">
                  C4
                </div>
                <div>
                  <h4 className="font-bold text-red-500">Bomba z zegarem</h4>
                  <p className="text-sm text-gray-400">
                    Potężny wybuch. Detektyw może spróbować ją rozbroić.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start gap-4 p-2 border-b border-white/10 pb-4">
                <div className="bg-red-500/20 p-2 rounded text-red-500 font-bold">
                  Nóż
                </div>
                <div>
                  <h4 className="font-bold text-red-500">Ciche zabójstwo</h4>
                  <p className="text-sm text-gray-400">
                    Zabija natychmiastowo przy ataku od tyłu. Jednorazowy.
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-start gap-4 p-2">
                <div className="bg-red-500/20 p-2 rounded text-red-500 font-bold">
                  Disguiser
                </div>
                <div>
                  <h4 className="font-bold text-red-500">Przebranie</h4>
                  <p className="text-sm text-gray-400">
                    Ukrywa Twój nick, gdy ktoś na Ciebie patrzy.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="detektyw" title="🛡️ Sklep Detektywa">
          <Card className="mt-4 bg-[#151135]">
            <CardBody className="gap-4">
              {/* Item 1 */}
              <div className="flex items-start gap-4 p-2 border-b border-white/10 pb-4">
                <div className="bg-blue-500/20 p-2 rounded text-blue-500 font-bold">
                  Stacja
                </div>
                <div>
                  <h4 className="font-bold text-blue-500">Stacja Lecząca</h4>
                  <p className="text-sm text-gray-400">
                    Mikrofala, która leczy każdego w pobliżu.
                  </p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-start gap-4 p-2">
                <div className="bg-blue-500/20 p-2 rounded text-blue-500 font-bold">
                  Teleporter
                </div>
                <div>
                  <h4 className="font-bold text-blue-500">Teleporter</h4>
                  <p className="text-sm text-gray-400">
                    Pozwala zapisać miejsce i przenieść się tam w razie
                    zagrożenia.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
