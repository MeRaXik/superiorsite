// app/components/info/InfoRules.tsx
import { rules } from "@/app/constants/info";

export function InfoRules() {
  return (
    <div className="border-l-4 border-red-500 bg-red-900/10 p-6 rounded-r-xl shadow-lg">
      <h2 className="text-2xl font-bold text-red-500 mb-2">
        🚨 Najważniejsze Zasady
      </h2>
      <p className="text-gray-400 mb-4">
        Przestrzeganie tych kilku reguł zapewni przyjemną rozgrywkę Tobie i
        innym.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {rules.map((rule, index) => (
          <li key={index}>
            <strong className="text-white">{rule.title}:</strong>{" "}
            {rule.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
