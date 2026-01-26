import { Hero } from "@/components/hero/hero";
import { IntroDetails } from "@/components/hero/intro-details";
import { ParadigmShift } from "@/components/mov/paradigm-shift";
import { InvisibleProblem } from "@/components/mov/invisible-problem";
import { Methodology } from "@/components/mov/methodology";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Hero />
      <IntroDetails />
      <ParadigmShift />
      <InvisibleProblem />
      <Methodology />
    </main>
  );
}
