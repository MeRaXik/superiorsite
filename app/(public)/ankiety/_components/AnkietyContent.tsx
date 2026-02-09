"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Link,
} from "@heroui/react";
import { pollsData } from "@/app/constants/polls";

export function AnkietyContent() {
  const [completedPolls, setCompletedPolls] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ttt_completed_polls");

      if (saved) {
        try {
          const parsedHistory: string[] = JSON.parse(saved);

          const currentPollIds = pollsData.map((p) => p.id);

          const validHistory = parsedHistory.filter((id) =>
            currentPollIds.includes(id),
          );

          if (validHistory.length !== parsedHistory.length) {
            console.log("Wyczyszczono stare ankiety z pamięci przeglądarki.");
            localStorage.setItem(
              "ttt_completed_polls",
              JSON.stringify(validHistory),
            );
          }

          setCompletedPolls(validHistory);
        } catch (e) {
          console.error("Błąd odczytu localStorage", e);
          localStorage.removeItem("ttt_completed_polls");
        }
      }
    }
  }, []);

  const handlePollClick = (pollId: string) => {
    if (completedPolls.includes(pollId)) return;

    const newCompletedList = [...completedPolls, pollId];
    setCompletedPolls(newCompletedList);

    localStorage.setItem(
      "ttt_completed_polls",
      JSON.stringify(newCompletedList),
    );
  };

  const activePolls = pollsData
    .filter((poll) => poll.isActive === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const isSinglePoll = activePolls.length === 1;

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-5xl">
        {activePolls.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center animate-appearance-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-4">
              Brak aktywnych ankiet 📭
            </h2>
            <p className="text-gray-500 text-lg max-w-md">
              Aktualnie nie prowadzimy żadnych głosowań. Wpadnij później!
            </p>
          </div>
        ) : (
          <div className="animate-appearance-in w-full">
            <div className="w-full flex flex-col items-center text-center gap-6 py-12 mb-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl md:text-7xl font-black text-red-600 tracking-tight drop-shadow-[0_0_25px_rgba(220,38,38,0.4)] uppercase">
                  Centrum Ankiet
                </h1>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.3em] font-bold">
                  Twój głos ma znaczenie
                </p>
              </div>

              {/* Ozdobna Linia */}
              <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent opacity-80 rounded-full" />

              {/* Tekst Opisowy */}
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                Pomóż nam podejmować decyzje dotyczące przyszłości serwera.
                Każda opinia jest dla nas cenna i wpływa na rozwój{" "}
                <span className="text-gray-200 font-medium">
                  Superior Studios
                </span>
                .
              </p>
            </div>

            <div
              className={
                isSinglePoll
                  ? "flex justify-center w-full"
                  : "grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
              }
            >
              {activePolls.map((poll, index) => {
                const isLastAndOdd =
                  activePolls.length % 2 !== 0 &&
                  index === activePolls.length - 1;

                const isCompleted = completedPolls.includes(poll.id);

                return (
                  <Card
                    key={poll.id}
                    className={`
                      p-4 border backdrop-blur-md transition-all duration-300 shadow-xl
                      ${isSinglePoll ? "w-full max-w-2xl" : "w-full"}
                      ${isLastAndOdd ? "md:col-span-2" : ""}
                      ${
                        isCompleted
                          ? "border-gray-700/50 bg-default-50/10 opacity-80"
                          : "border-white/10 bg-default-50/20 hover:scale-[1.02] hover:border-primary/50"
                      }
                    `}
                  >
                    <CardHeader className="flex flex-col items-start gap-2 pb-2">
                      <div className="flex justify-between w-full items-center">
                        <span className="text-tiny text-gray-400 uppercase font-bold tracking-wider">
                          Data: {poll.date}
                        </span>

                        {isCompleted ? (
                          <Chip
                            size="sm"
                            color="default"
                            variant="flat"
                            className="h-6 text-gray-400"
                          >
                            ✓ Wypełniona
                          </Chip>
                        ) : (
                          <Chip
                            size="sm"
                            color="success"
                            variant="flat"
                            className="h-6 text-success-300 bg-success/20"
                          >
                            Aktywna
                          </Chip>
                        )}
                      </div>

                      <h3
                        className={`text-2xl font-bold leading-tight mt-1 ${
                          isCompleted ? "text-gray-400" : "text-white"
                        }`}
                      >
                        {poll.title}
                      </h3>
                    </CardHeader>

                    <CardBody className="py-4">
                      <p className="text-gray-300 text-base leading-relaxed">
                        {poll.description}
                      </p>
                    </CardBody>

                    <CardFooter className="pt-2">
                      <Button
                        as={Link}
                        href={poll.link}
                        isExternal
                        onPress={() => handlePollClick(poll.id)}
                        showAnchorIcon={!isCompleted}
                        color={isCompleted ? "default" : "primary"}
                        variant={isCompleted ? "bordered" : "shadow"}
                        className={`w-full font-bold text-md ${
                          isCompleted ? "text-gray-400 border-gray-600" : ""
                        }`}
                        size="lg"
                      >
                        {isCompleted ? "Wypełnij ponownie" : "Wypełnij ankietę"}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
