import { ShieldCheck } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand" aria-label="Privacy Buddy">
      <span className="brand__mark" aria-hidden="true">
        <ShieldCheck size={compact ? 17 : 20} strokeWidth={2.4} />
      </span>
      <span className={compact ? "brand__text brand__text--compact" : "brand__text"}>
        Privacy <span>Buddy</span>
      </span>
    </div>
  );
}
