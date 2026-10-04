import type { Location } from "@hakaton/shared";

export interface SourceEntry {
  title: string;
  url: string;
  agencies: string[];
  usedIn: number;
}

const agencyOf = (source: { title: string }) => {
  if (/nasa/i.test(source.title)) return "NASA";
  if (/esa/i.test(source.title)) return "ESA";
  if (/usgs/i.test(source.title)) return "USGS";
  if (/jpl/i.test(source.title)) return "JPL";
  return "Ilmiy nashr";
};

/** Collects the distinct publications behind every catalog entry, newest agency grouping first. */
export function collectSources(catalog: Location[]): SourceEntry[] {
  const map = new Map<string, SourceEntry>();
  for (const location of catalog) {
    for (const source of location.sources) {
      const existing = map.get(source.url);
      const agency = agencyOf(source);
      if (existing) {
        existing.usedIn += 1;
        if (!existing.agencies.includes(agency)) existing.agencies.push(agency);
      } else {
        map.set(source.url, { title: source.title, url: source.url, agencies: [agency], usedIn: 1 });
      }
    }
  }
  return [...map.values()].sort((a, b) => b.usedIn - a.usedIn || a.title.localeCompare(b.title));
}

export function SourcesSection({ sources }: { sources: SourceEntry[] }) {
  return (
    <section className="sources-section" id="manbalar">
      <div className="section-title">
        <div>
          <p className="eyebrow">
            <span /> manbalar
          </p>
          <h2>
            Har bir fakt
            <br />
            <em>tekshirilgan.</em>
          </h2>
        </div>
        <p>
          Barcha hududlar NASA, ESA va USGS ma’lumotlari asosida tanlangan. Havolalar orqali
          asosiy nashrga o‘tishingiz mumkin.
        </p>
      </div>
      <ul className="sources-list">
        {sources.map((source) => (
          <li key={source.url}>
            <b>{source.agencies.join(" / ")}</b>
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}