"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
  Link,
} from "@heroui/react";
import { ShopItem } from "@/app/constants/skins";

interface ShopGridProps {
  items: ShopItem[];
}

export function ShopCard({ items }: ShopGridProps) {
  return (
    <div className="w-full max-w-7xl flex flex-wrap justify-center gap-8">
      {items.map((item) => (
        <Card
          key={item.id}
          isPressable
          className="
            w-full sm:w-80
            bg-black/40 border border-white/5 shadow-xl 
            hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300
          "
        >
          <CardHeader className="flex flex-col items-center pt-6 pb-2 px-4 text-center">
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">
              {item.name}
            </h3>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-sm font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                {item.price.toLocaleString()} PKT
              </span>
            </div>
          </CardHeader>

          <CardBody className="overflow-visible py-2 flex justify-center items-center">
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-xl border border-white/5 bg-linear-to-b from-transparent to-black/50">
              <Image
                removeWrapper
                alt={item.name}
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                src={item.image}
              />
            </div>
          </CardBody>

          <CardFooter className="pb-6 pt-2 px-4">
            <Button
              as={Link}
              href={item.workshopLink}
              isExternal
              showAnchorIcon
              className="w-full font-bold uppercase tracking-wider shadow-lg"
              color="danger"
              variant="shadow"
            >
              Warsztat Steam
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
