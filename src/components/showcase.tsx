import type { Location } from "@hakaton/shared";
import { ArrowRight } from "lucide-react";

const targetLabels: Record<Location["target"], string> = {
  Mars: "Mars",
  Oy: "Oy",
  Ikkalasi: "Mars va Oy",
};

const targetClass: Record<Location["target"], string> = {
  Mars: "dot mars",
  Oy: "dot moon",
  Ikkalasi: "dot both",
};

const coord = (location: Location) =>
  `${Math.abs(location.lat).toFixed(2)}°${location.lat < 0 ? "S" : "N"} ${Math.abs(location.lng).toFixed(2)}°${
    location.lng < 0 ? "W" : "E"
  }`;

export function ShowcaseSection({ items, atlasUrl }: { items: Location[]; atlasUrl: string }) {
  return (
    <section className="showcase-section" id="joylar">
      <div className="section-title">
        <div>
          <p className="eyebrow">
            <span /> namunaviy hududlar
          </p>
          <h2>
            O‘xshashlik bor,
            <br />
            <em>chegara ham</em> bor.
          </h2>
        </div>
        <p>
          Har bir hududning o‘xshash geologik jarayoni, aniq koordinatalari va ilmiy cheklasi birga
          ko‘rsatiladi.
        </p>
      </div>
      <div className="showcase-grid">
        {items.map((location) => (
          <article className="showcase-card" key={location.id}>
            <h3>{location.name}</h3>
            <p>{location.summary}</p>
            <p className="limitation">
              <b>Chegara: </b>
              {location.limitation}
            </p>
            <div className="showcase-meta">
              <span className={targetClass[location.target]} aria-hidden="true" />
              <span>{targetLabels[location.target]}</span>
              <span>·</span>
              <span>{location.terrain}</span>
              <span className="showcase-coords">{coord(location)}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="section-title" style={{ marginTop: 34, marginBottom: 0 }}>
        <a className="primary-button" href={atlasUrl}>
          Barcha hududlarni atlasda ko‘rish <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}