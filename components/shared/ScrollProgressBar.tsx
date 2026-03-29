"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";
export function ScrollProgressBar() {
  const p = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[2px] transition-all duration-75"
      style={{ width: `${p}%`, background: "var(--gold)" }}
    />
  );
}
