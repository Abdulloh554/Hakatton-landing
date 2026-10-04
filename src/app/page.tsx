import { locations } from "@hakaton/shared";
import { CtaBand, SiteFooter } from "../components/chrome";
import { BotSection, MethodSection } from "../components/sections";
import { ShowcaseSection } from "../components/showcase";
import { collectSources, SourcesSection } from "../components/sources";
import { Hero, Topbar } from "../components/topbar";

const ATLAS_URL = process.env.NEXT_PUBLIC_ATLAS_URL || "http://localhost:3000";

function botUsername() {
  const raw = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME;
  return raw && /^[A-Za-z0-9_]{5,32}$/.test(raw) ? raw : undefined;
}

/** Locations with the richest scientific explanation lead the showcase. */
const featured = [...locations]
  .sort((a, b) => b.explanation.length - a.explanation.length)
  .slice(0, 3);

const targets = new Set(locations.map((location) => location.target).filter((t) => t !== "Ikkalasi"))
  .size;

export default function LandingPage() {
  return (
    <>
      <a className="skip-link" href="#home">
        Asosiy kontentga o‘tish
      </a>
      <Topbar atlasUrl={ATLAS_URL} botUsername={botUsername()} />
      <main>
        <Hero locationCount={locations.length} targetCount={targets} atlasUrl={ATLAS_URL} />
        <ShowcaseSection items={featured} atlasUrl={ATLAS_URL} />
        <MethodSection />
        <BotSection botUsername={botUsername()} />
        <SourcesSection sources={collectSources(locations)} />
        <CtaBand atlasUrl={ATLAS_URL} />
      </main>
      <SiteFooter year={new Date().getFullYear()} />
    </>
  );
}