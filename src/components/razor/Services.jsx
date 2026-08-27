import React, { useState } from "react";
import { Plus, Minus, Clock, Tag } from "lucide-react";

// Prawdziwe zdjęcie wnętrza salonu — galeria naszemiasto (otwarcie 2016)
const TOOLS_IMG =
  "https://d-art.ppstatic.pl/kadry/k/r/6d/ce/57e3970b471c9_o_xlarge.jpg";

const services = [
  {
    no: "01",
    name: "Strzyżenie — Maszynka",
    price: "od 45 zł",
    duration: "30 min",
    desc: "Szybkie, precyzyjne strzyżenie maszynką. Czyste linie, jednolita długość, klasyczny efekt bez kompromisów.",
    includes: ["Konsultacja", "Strzyżenie maszynką", "Linia karku", "Stylizacja na gotowo"],
  },
  {
    no: "02",
    name: "Strzyżenie Klasyczne",
    price: "od 50 zł",
    duration: "45 min",
    desc: "Strzyżenie nożyczkami i maszynką dopasowane do kształtu twarzy i struktury włosów. Precyzja w każdym detalu.",
    includes: ["Konsultacja", "Mycie", "Strzyżenie nożyczkami + maszynka", "Stylizacja"],
  },
  {
    no: "03",
    name: "Strzyżenie Barberskie",
    price: "od 60 zł",
    duration: "60 min",
    desc: "Pełny rytuał barberski — strzyżenie, modelowanie, gorący ręcznik i wykończenie brzytwą. Doświadczenie, nie usługa.",
    includes: ["Konsultacja", "Strzyżenie + modelowanie", "Gorący ręcznik", "Wykończenie brzytwą", "Stylizacja"],
  },
  {
    no: "04",
    name: "Strzyżenie + Zarost",
    price: "od 45 zł",
    duration: "60 min",
    desc: "Kompleks — strzyżenie połączone z modelowaniem zarostu. Spójna linia od włosów po brodę.",
    includes: ["Strzyżenie", "Modelowanie zarostu", "Linia policzków", "Stylizacja"],
  },
  {
    no: "05",
    name: "Strzyżenie + Broda",
    price: "od 55 zł",
    duration: "75 min",
    desc: "Strzyżenie i pełny rytuał brody — gorący ręcznik, olejki, golenie brzytwą konturu. Klasyka męskiego rzemiosła.",
    includes: ["Strzyżenie", "Gorący ręcznik", "Golenie konturu brzytwą", "Olejki i balsam", "Stylizacja"],
  },
  {
    no: "06",
    name: "Rytuał Brody",
    price: "od 50 zł",
    duration: "45 min",
    desc: "Sam rytuał brody — od gorącego ręcznika po golenie brzytwą i pielęgnację. Czas tylko dla Ciebie.",
    includes: ["Gorący ręcznik", "Golenie brzytwą", "Pielęgnacja olejkami", "Modelowanie"],
  },
];

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative bg-[#0F0F0F] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[11px] tracking-mega uppercase">/ 02</span>
              <span className="h-px w-16 bg-white/20" />
            </div>
            <h2 className="font-heading font-800 uppercase text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Menu<br />Usług
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-end">
            <p className="text-white/55 text-base md:text-lg leading-relaxed font-light max-w-xl">
              Każda pozycja to specyfikacja techniczna — nie lista cen. Wybierz rytuał,
              który odpowiada Twojej definicji precyzji.
            </p>
          </div>
        </div>

        {/* Spec sheets */}
        <div className="border-t border-white/10">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={s.no} className="border-b border-white/10">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full grid grid-cols-12 items-center gap-4 py-6 md:py-8 text-left group"
                >
                  <span className="col-span-2 md:col-span-1 font-heading text-gold text-xl md:text-2xl">
                    {s.no}
                  </span>
                  <span className="col-span-10 md:col-span-6 font-heading font-600 uppercase text-white text-2xl md:text-4xl leading-none group-hover:text-gold transition-colors duration-300">
                    {s.name}
                  </span>
                  <span className="hidden md:flex col-span-3 items-center gap-2 text-white/40 text-sm">
                    <Clock size={14} /> {s.duration}
                  </span>
                  <span className="hidden md:block col-span-1 text-right text-white/70 font-medium">
                    {s.price}
                  </span>
                  <span className="col-span-12 md:col-span-1 flex justify-end text-gold">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>

                {/* Expand */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="grid md:grid-cols-12 gap-6 pb-10 pt-2">
                    <div className="md:col-span-1" />
                    <div className="md:col-span-5">
                      <p className="text-white/60 leading-relaxed">{s.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.includes.map((inc) => (
                          <span
                            key={inc}
                            className="text-[10px] uppercase tracking-ultra px-3 py-1.5 border border-white/15 text-white/55"
                          >
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-3 flex flex-col gap-1 justify-center">
                      <span className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-ultra">
                        <Tag size={12} /> {s.price}
                      </span>
                      <span className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-ultra">
                        <Clock size={12} /> {s.duration}
                      </span>
                    </div>
                    <div className="md:col-span-3 flex items-end">
                      <a
                        href="#booking"
                        className="w-full text-center text-[11px] uppercase tracking-ultra px-5 py-3.5 bg-gold text-black font-semibold hover:bg-white transition-colors duration-300"
                      >
                        Umów tę usługę
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real photo strip — wnętrze salonu */}
        <div className="mt-16 md:mt-24 relative overflow-hidden">
          <img
            src={TOOLS_IMG}
            alt="Wnętrze RAZOR Barber Shop — otwarcie pierwszego barber shopu w Mysłowicach"
            className="w-full h-[260px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="text-[10px] uppercase tracking-mega text-white/70">
              Mikołowska 4 · Mysłowice · Od 2016
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---