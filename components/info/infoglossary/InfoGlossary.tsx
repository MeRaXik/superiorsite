"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { glossaryItems } from "@/app/constants/info"; // Import danych

export function InfoGlossary() {
  return (
    <Accordion variant="splitted" selectionMode="multiple">
      {glossaryItems.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.title}
          title={item.title}
          className="bg-default-50/20"
          classNames={{
            title: "text-white font-bold",
          }}
        >
          <span className="text-gray-300">{item.content}</span>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
