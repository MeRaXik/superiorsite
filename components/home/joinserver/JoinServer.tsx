"use client";

import { Button } from "@heroui/react";

export function JoinServer() {
  const serverIp = "83.168.107.5:27015";
  const steamLink = `steam://connect/${serverIp}`;

  return (
    <div className="flex flex-col gap-3 items-center">
      <Button
        as="a"
        href={steamLink}
        size="lg"
        color="danger"
        variant="shadow"
        className="font-bold text-xl px-12 py-8 uppercase tracking-widest border border-red-500/40 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-110 transition-transform"
        endContent={<span className="text-2xl">🎮</span>}
      >
        Dołącz do Gry
      </Button>
      <div className="bg-black/50 px-4 py-1 rounded-full border border-white/5">
        <span className="text-gray-300 text-sm tracking-wider font-mono">
          IP: {serverIp}
        </span>
      </div>
    </div>
  );
}
