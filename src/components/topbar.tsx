import { ArrowRight, Compass, Send } from "lucide-react";
import Link from "next/link";

export function Topbar({ atlasUrl, botUsername }: { atlasUrl: string; botUsername?: string }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">
        <span className="brand-mark">
          <Compass size={19} />
        </span>
        <span>
          TERRA
          <br />
          <b>ANALOG</b>
        </span>
      </Link>
      <nav aria-label="Asosiy menyu">
        <a href="#joylar">Joylar</a>
        <a href="#method">Metod</a>
        <a href="#bot">Telegram bot</a>
      </nav>
      <div className="topbar-actions">
        <a className="text-link" href={atlasUrl}>
          Atlasta o‘tish <ArrowRight size={15} />
        </a>
        {botUsername ? (
          <a className="bot-link" href={`https://t.me/${botUsername}`} target="_blank" rel="noreferrer">
            <Send size={15} /> Telegram bot
          </a>
        ) : (
          <div className="bot-pending">
            <Send size={15} />
            <span>Bot hali ulanmagan</span>
          </div>
        )}
      </div>
    </header>
  );
}

export function Hero({
  locationCount,
  targetCount,
  atlasUrl,
}: {
  locationCount: number;
  targetCount: number;
  atlasUrl: string;
}) {
  return (
    <section className="hero" id="home">
      <div>
        <p className="eyebrow">
          <span /> Interaktiv geologik atlas
        </p>
        <h1>
          Yerni kuzating.
          <br />
          <em>Kosmosni</em> tushuning.
        </h1>
        <p className="lede">
          Mars va Oyga o‘xshash haqiqiy Yer hududlarini toping. Har bir karta ilmiy manba, o‘xshashlik va
          uning chegarasini birga ko‘rsatadi.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={atlasUrl}>
            3D atlasni ochish <ArrowRight size={18} />
          </a>
          <a className="text-button" href="#method">
            Qanday ishlaydi
          </a>
        </div>
        <div className="mini-stats">
          <span>
            <b>{locationCount}</b> real hudud
          </span>
          <span>
            <b>{String(targetCount).padStart(2, "0")}</b> kosmik manzil
          </span>
          <span>
            <b>0%</b> soxta fakt
          </span>
        </div>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <div className="orb orb-earth" />
        <div className="orb orb-mars" />
        <div className="orb orb-moon" />
        <i className="orbit o1" />
        <i className="orbit o2" />
        <p>YER</p>
        <p>MARS</p>
        <p>OY</p>
      </div>
    </section>
  );
}