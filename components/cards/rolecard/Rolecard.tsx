"use client";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";
import { Role } from "@/app/constants/roles";

interface RoleCardProps {
  role: Role;
}

const colorStyles = {
  blue: {
    wrapper: "bg-blue-900/20 border-blue-500/50 shadow-blue-500/20",
    title: "text-blue-400",
    chip: "bg-blue-500/20 text-blue-300",
  },
  green: {
    wrapper: "bg-green-900/20 border-green-500/50 shadow-green-500/20",
    title: "text-green-400",
    chip: "bg-green-500/20 text-green-300",
  },
  red: {
    wrapper: "bg-red-900/20 border-red-500/50 shadow-red-500/20",
    title: "text-red-500",
    chip: "bg-red-500/20 text-red-300",
  },
};

export const RoleCard = ({ role }: RoleCardProps) => {
  const styles = colorStyles[role.color];

  return (
    <Card
      className={`h-full w-full md:min-w-[300px] py-4 border backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] ${styles.wrapper}`}
    >
      <CardHeader className="min-h-[90px] pb-0 pt-2 px-6 flex-col items-start justify-start">
        <small
          className={`text-tiny font-bold uppercase tracking-wider mb-1 rounded-full px-2 py-1 ${styles.chip}`}
        >
          Rola
        </small>

        <h4 className={`font-bold text-3xl w-full text-center ${styles.title}`}>
          {role.name}
        </h4>
      </CardHeader>

      <CardBody className="overflow-visible py-4 flex justify-center items-center grow-0">
        {role.image ? (
          <Image
            alt={`Zdjęcie roli ${role.name}`}
            className="object-cover rounded-xl"
            src={role.image}
            width={180}
            height={180}
          />
        ) : (
          <div className="w-[180px] h-[180px] bg-black/30 rounded-xl flex items-center justify-center text-gray-500">
            Brak zdjęcia
          </div>
        )}
      </CardBody>

      <CardFooter className="px-6 pb-4 flex-1 items-start">
        <p className="text-gray-300 text-base leading-relaxed text-center w-full">
          {role.desc}
        </p>
      </CardFooter>
    </Card>
  );
};
