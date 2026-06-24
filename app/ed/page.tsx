import { EdHero } from "./components/EdHero";
import { SymptomsGrid } from "./components/SymptomsGrid";
import { UnderstandingED } from "./components/UnderstandingED";
import { Pathway } from "./components/Pathway";
import { ConfidentialityBand } from "./components/ConfidentialityBand";
import { Testimonials } from "./components/Testimonials";
import { FaqAccordion } from "./components/FaqAccordion";
import { ClosingCta } from "./components/ClosingCta";

export default function EdPage() {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <EdHero />
      <SymptomsGrid />
      <UnderstandingED />
      <Pathway />
      <ConfidentialityBand />
      <Testimonials />
      <FaqAccordion />
      <ClosingCta />
    </div>
  );
}
