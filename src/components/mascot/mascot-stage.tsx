"use client";

import dynamic from "next/dynamic";
import { Component, type ErrorInfo, type ReactNode } from "react";
import { Eye, LockKeyhole } from "lucide-react";
import { useInteractionStore } from "@/store/interaction-store";

const RobotCanvas = dynamic(
  () => import("./robot-canvas").then((module) => module.RobotCanvas),
  { ssr: false, loading: () => <StaticMascot label="Waking up…" /> },
);

export function MascotStage() {
  const focus = useInteractionStore((state) => state.focus);
  const passwordVisible = useInteractionStore((state) => state.passwordVisible);

  return (
    <section className="mascot-stage" aria-label="Interactive Privacy Buddy mascot">
      <div className="mascot-note mascot-note--top" aria-hidden="true">
        <Eye size={17} />
        <span><strong>Eyes follow you</strong><small>Try moving your cursor</small></span>
      </div>
      <div className={`mascot-note mascot-note--bottom ${focus === "password" ? "is-active" : ""}`} aria-hidden="true">
        <LockKeyhole size={16} />
        <span>
          <strong>{passwordVisible ? "A tiny peek" : "Privacy mode"}</strong>
          <small>{passwordVisible ? "Curiosity activated" : "Your secret is safe"}</small>
        </span>
      </div>
      <WebGLErrorBoundary fallback={<StaticMascot label="Privacy mode ready" />}>
        <RobotCanvas />
      </WebGLErrorBoundary>
      <div className="platform-rings" aria-hidden="true"><i /><i /><i /></div>
    </section>
  );
}

function StaticMascot({ label }: { label: string }) {
  return (
    <div className="static-mascot" role="img" aria-label={`Privacy Buddy. ${label}`}>
      <div className="static-mascot__antenna" />
      <div className="static-mascot__head"><span /><span /></div>
      <div className="static-mascot__body"><LockKeyhole size={26} /></div>
    </div>
  );
}

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (process.env.NODE_ENV === "development") console.warn("WebGL mascot unavailable", error, info);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
