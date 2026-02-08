"use client";

import { useState } from "react";
import { NAV } from "@/app/constants/nav";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle, // Nowy import
  NavbarMenu, // Nowy import
  NavbarMenuItem, // Nowy import
} from "@heroui/navbar";
import { Image } from "@heroui/react"; // Upewnij się, że używasz Image z HeroUI lub Next.js (tutaj HeroUI wg Twojego kodu)
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <HeroUINavbar
      maxWidth="full"
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black border-b border-red-600"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          className="text-white"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
            <Image width={50} alt="Logo Serwera" src="/img/homepage/logo.png" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href={"/"}>
            <Image width={70} alt="Logo Serwera" src="/img/homepage/logo.png" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-9 font-medium"
        justify="center"
      >
        {NAV.map((nav) => {
          const isActive = pathname === nav.href;
          return (
            <NavbarItem key={nav.href} isActive={isActive}>
              <Link
                href={nav.href}
                className={`transition-colors pb-1 text-lg ${
                  isActive
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-white hover:text-red-500"
                }`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarMenu className="bg-black/95 pt-10">
        <div className="flex flex-col gap-6 items-center">
          {NAV.map((nav, index) => {
            const isActive = pathname === nav.href;
            return (
              <NavbarMenuItem key={`${nav.href}-${index}`}>
                <Link
                  className={`w-full text-2xl font-bold ${
                    isActive ? "text-red-500" : "text-white"
                  }`}
                  href={nav.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nav.title}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
