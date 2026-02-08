"use client";
import { NAV } from "@/app/constants/nav";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Image } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <HeroUINavbar
        maxWidth="full"
        isBlurred
        className="bg-black border-b border-red-600"
      >
        <NavbarBrand>
          <Link href={"/"} className="text-white">
            <Image width={70} alt="Logo Serwera" src="/img/homepage/logo.png" />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center" className="gap-9 font-medium">
          {NAV.map((nav, index) => {
            const isActive = pathname === nav.href;

            return (
              <NavbarItem key={nav.href} isActive={isActive}>
                <Link
                  href={nav.href}
                  className={`transition-colors pb-1 ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500" // Styl AKTYWNY (czerwony tekst + kreska)
                      : "text-white hover:text-red-500" // Styl ZWYKŁY (biały + hover)
                  }`}
                >
                  {nav.title}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </HeroUINavbar>
    </>
  );
}
