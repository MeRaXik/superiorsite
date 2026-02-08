"use client";

export function ScrollIndicator() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("info-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-10 z-20 animate-bounce">
      <button
        onClick={handleScrollDown}
        className="text-white/50 hover:text-red-500 transition-colors cursor-pointer flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
          Więcej
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}
