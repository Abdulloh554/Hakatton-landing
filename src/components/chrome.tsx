import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

export function CtaBand({ atlasUrl }: { atlasUrl: string }) {
  return (
    <section className="cta-band">
      <p className="eyebrow">
        <span /> hozir boshlang
      </p>
      <h2>Qayerda boshlashim kerak?</h2>
      <p>
        Atlasta o‘ting, Yerning Mars va Oydagi hayratli joylarini 3D globusda ko‘ring va
        o‘xshashlik chegaralarini o‘zing tekshiring.
      </p>
      <a className="primary-button" href={atlasUrl}>
        Atlasta o‘tish <ArrowRight size={18} />
      </a>
    </section>
  );
}

export function SiteFooter({ year }: { year: number }) {
  return (
    <footer>
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
      <p>Yer geologiyasi orqali Oy va Marsni tushunishga yordam beruvchi ochiq o‘quv loyihasi.</p>
      <span>NASA Space Apps Challenge · {year}</span>
    </footer>
  );
}