import React from "react";

// Prawdziwe zdjęcie wnętrza — galeria naszemiasto
const INTERIOR_IMG =
  "https://d-art.ppstatic.pl/kadry/k/r/6d/ce/57e3970b471c9_o_xlarge.jpg";

const stats = [
  { value: "2 100+", label: "Polubień na Facebooku" },
  { value: "Od 2016", label: "Pierwszy barber w mieście" },
  { value: "100%", label: "Męskie rzemiosło" },
];

export default function About() {
  return (
    <section className="relative bg-[#0F0F0F] py-24 md:py-32 grain">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-7 relative overflow-hidden order-2 lg:order-1">
            <img
              src={INTERIOR_IMG}
              alt="Wnętrze RAZOR Barber Shop — Mikołowska 4, Mysłowice"
              className="w-full h-[320px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F]/60 to-transparent" />
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-mega text-white/70">
              Mikołowska 4 · Mysłowice
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[11px] tracking-mega uppercase">/ 05</span>
              <span className="h-px w-16 bg-white/20" />
            </div>
            <h2 className="font-heading font-800 uppercase text-white leading-none mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Laboratorium<br />Męskiej Tożsamości
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-light mb-6">
              RAZOR Barber Shop to nie miejsce na „strzyżenie". To pierwszy barber shop
              w Mysłowicach, otwarty we wrześniu 2016 roku przy ulicy Mikołowskiej 4.
              Przestrzeń, w której mężczyzna definiuje siebie na nowo — od konsultacji,
              przez precyzję cięcia, po wykończenie brzytwą.
            </p>
            <p className="text-white/50 leading-relaxed mb-10">
              Stal, skóra, cisza i chirurgiczne światło. Barberzy z szerokim doświadczeniem
              — od tradycyjnych strzyżeń po specjalistyczną stylizację zarostu i rytuały brody.
              Tu precyzja jest standardem, a nie opcją.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-700 text-gold text-3xl md:text-4xl leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-ultra text-white/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---