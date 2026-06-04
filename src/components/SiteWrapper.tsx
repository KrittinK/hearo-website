"use client";

import { LocaleProvider } from "@/lib/locale";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { LogoStrip } from "./LogoStrip";
import { FeatureGrid } from "./FeatureGrid";
import { Pipeline } from "./Pipeline";
import { Channels } from "./Channels";
import { SpecSheet } from "./SpecSheet";
import { PilotStory } from "./PilotStory";
import { Team } from "./Team";
import { Awards } from "./Awards";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function SiteWrapper() {
  return (
    <LocaleProvider>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <FeatureGrid />
        <Pipeline />
        <Channels />
        <SpecSheet />
        <PilotStory />
        <Team />
        <Awards />
        <FinalCTA />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
