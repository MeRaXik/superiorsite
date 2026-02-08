"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";
import { controls } from "@/app/constants/info"; // Import danych

export function InfoControls() {
  return (
    <Table
      aria-label="Tabela sterowania"
      classNames={{ wrapper: "bg-default-50/20 border border-white/10" }}
    >
      <TableHeader>
        <TableColumn>KLAWISZ</TableColumn>
        <TableColumn>FUNKCJA</TableColumn>
        <TableColumn>OPIS</TableColumn>
      </TableHeader>
      <TableBody>
        {controls.map((row) => (
          <TableRow key={row.key}>
            <TableCell>
              <Chip size="sm" variant="flat" className="text-white bg-white/10">
                {row.key}
              </Chip>
            </TableCell>
            <TableCell className="font-bold text-white">{row.func}</TableCell>
            <TableCell className="text-gray-400">{row.desc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
