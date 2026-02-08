import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/footer/Footer";
import { Nav } from "@/components/nav/nav/Nav";

const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: {
    template: "%s | Superior Studios",
    default: "Superior | Najlepsze serwery GMOD w Polsce.",
  },
  description:
    "Superior Studios specjalizuje się w tworzeniu serwerów w najpopularniejszych trybach w grze Garry's Mod.",
  //metadataBase: new URL("https://superiostudios.pl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${quicksand.className} antialiased`}>
      <body className="bg-[#0f0f0f] text-[16px] text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
