import { GraduationCap } from "lucide-react";

export default function Brand({ compact = false, titleLayout = false }) {
  return (
    <div className={`brand ${compact ? "brand-compact" : ""} ${titleLayout ? "brand-title-layout" : ""}`} aria-label="Campus Knowledge Repository">
      <GraduationCap className="brand-mark" size={compact ? 36 : 34} strokeWidth={1.8} />
      {!compact && (titleLayout
        ? <div className="brand-name"><strong>Campus Knowledge Repository</strong></div>
        : <div><strong>Campus Knowledge</strong><strong>Repository</strong></div>)}
    </div>
  );
}
