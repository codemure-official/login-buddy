"use client";

import { AmbientBackground } from "./ambient-background";
import { HeroCopy } from "./hero-copy";
import { Navigation } from "./navigation";
import { LoginCard } from "@/components/login/login-card";
import { MascotStage } from "@/components/mascot/mascot-stage";

export function PrivacyBuddyExperience() {
  return (
    <main className="experience" id="experience">
      <AmbientBackground />
      <Navigation />
      <div className="experience__layout">
        <HeroCopy />
        <MascotStage />
        <LoginCard />
      </div>
      <div className="experience__bottom-glow" aria-hidden="true" />
    </main>
  );
}
