import { ROLES } from "@/app/constants/roles";
import { RoleCard } from "@/components/cards/rolecard/Rolecard";

export const RolesSection = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {ROLES.map((role) => (
            <RoleCard key={role.name} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};
