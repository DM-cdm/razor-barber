import React from "react";
import { Star, Award, Trophy, ThumbsUp } from "lucide-react";

// Prawdziwe dane opinii — Orły Fryzjerstwa + Facebook
// Źródło: orlyfryzjerstwa.pl/profile-29417-razor-barber-shop + facebook.com/razorbarbershopmce
const awards = [
  { year: "2026", medal: "Laureat + Złoto" },
  { year: "2025", medal: "Laureat + Złoto" },
  { year: "2024", medal: "Laureat + Złoto" },
  { year: "2023", medal: "Laureat + Złoto" },
  { year: "2022", medal: "Laureat + Złoto" },
  { year: "2021", medal: "Laureat + Złoto" },
  { year: "2020", medal: "Laureat + Złoto" },
  { year: "2019", medal: "Laureat + Złoto" },
  { year: "2018", medal: "Laureat + Złoto" },
];

const ratingBlocks = [
  {
    icon: Star,
    value: "9,6 / 10",
    label: "Ocena Orły Fryzjerstwa",
    sub: "na podstawie 330 opinii",
  },
  {
    icon: Trophy,
    value: "8 lat",
    label: "Laureat plebiscytu",
    sub: "2018 — 2026, złoty medal co roku",
  },
  {
    icon: ThumbsUp,
    value: "2 100+",
    label: "Polubień na Facebooku",
    sub: "201 osób tu było",
  },
];

export default function Reviews() {
  return (
    <section id="opinie" className="relative bg-[#1A1A1A] py-24 md:py-32 border-y border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[11px] tracking-mega uppercase">/ 03</span>
              <span className="h-px w-16 bg-white/20" />
            </div>
            <h2 className="font-heading font-800 uppercase text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Uznany<br />Rzemiosłem
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="text-white/55 text-base md:text-lg leading-relaxed font-light">
              Nie my o tym mówimy — mówią o tym klienci i jury plebiscytu Orły Fryzjerstwa.
              Pozytywne recenzje podkreślają profesjonalizm, skuteczną obsługę
              oraz sympatyczny zespół.
            </p>
          </div>
        </div>

        {/* Rating blocks */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-16">
          {ratingBlocks.map((b) => (
            <div key={b.label} className="bg-[#1A1A1A] p-8 md:p-10 flex flex-col">
              <b.icon size={24} className="text-gold mb-5" />
              <div className="font-heading font-800 text-white text-5xl md:text-6xl leading-none mb-3">
                {b.value}
              </div>
              <div className="text-sm uppercase tracking-ultra text-white/70 font-medium">
                {b.label}
              </div>
              <div className="mt-1 text-xs text-white/40">{b.sub}</div>
            </div>
          ))}
        </div>

        {/* Awards timeline */}
        <div className="border border-white/10 bg-[#0F0F0F] p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Award size={18} className="text-gold" />
            <span className="text-[11px] uppercase tracking-ultra text-white/60">
              Plebiscyt Orły Fryzjerstwa — Laureat i Złoty Medal
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 md:gap-4">
            {awards.map((a) => (
              <div
                key={a.year}
                className="flex flex-col items-center text-center py-4 border border-gold/30 bg-gold/5 group hover:bg-gold hover:text-black transition-colors duration-300"
              >
                <span className="font-heading font-700 text-gold group-hover:text-black text-2xl leading-none">
                  {a.year}
                </span>
                <span className="mt-2 text-[8px] uppercase tracking-mega text-white/50 group-hover:text-black/70">
                  {a.medal}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-white/45 text-sm max-w-md">
              Osiem lat z rzędu na podium plebiscytu Orły Fryzjerstwa — w tym złoty medal
              każdego roku. To potwierdza silną pozycję RAZOR Barber Shop wśród lokalnych
              firm branży fryzjerskiej.
            </p>
            <a
              href="https://www.orlyfryzjerstwa.pl/profile-29417-razor-barber-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-[11px] uppercase tracking-ultra text-gold hover:text-white transition-colors"
            >
              Zobacz profil na Orłach →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---