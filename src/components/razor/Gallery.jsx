import React from "react";

// Prawdziwe zdjęcia z galerii naszemiasto — otwarcie pierwszego barber shopu w Mysłowicach (2016)
const shots = [
  { url: "https://d-art.ppstatic.pl/kadry/k/r/af/a0/57e3970edf76e_o_large.jpg", caption: "Wnętrze salonu" },
  { url: "https://d-art.ppstatic.pl/kadry/k/r/6d/ce/57e3970bcb2f9_o_xlarge.jpg", caption: "Stanowisko barberskie" },
  { url: "https://d-art.ppstatic.pl/kadry/k/r/f5/c7/57e3970ca2674_o_xlarge.jpg", caption: "Detal wnętrza" },
  { url: "https://d-art.ppstatic.pl/kadry/k/r/41/f7/57e3970d69cf1_o_large.jpg", caption: "Strefa klienta" },
  { url: "https://d-art.ppstatic.pl/kadry/k/r/af/a0/57e3970e2f307_o_xlarge.jpg", caption: "Atmosfera salonu" },
  { url: "https://d-art.ppstatic.pl/kadry/k/r/c1/ae/57e3970f8c159_o_xlarge.jpg", caption: "Rzemiosło" },
  { url: "https://d-art.ppstatic.pl/kadry/k/r/b5/71/57e39710ed46b_o_xlarge.jpg", caption: "Otwarcie 2016" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0F0F0F] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw] mb-12 md:mb-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[11px] tracking-mega uppercase">/ 04</span>
              <span className="h-px w-16 bg-white/20" />
            </div>
            <h2 className="font-heading font-800 uppercase text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Galeria<br />Salonu
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="text-white/55 text-base md:text-lg leading-relaxed font-light">
              Autentyczne kadry z otwarcia pierwszego barber shopu w Mysłowicach.
              To nie portfolio — to archiwum miejsca, w którym precyzja jest standardem.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal runway */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-[7vw] pb-6 snap-x snap-mandatory">
        {shots.map((s, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[78vw] sm:w-[55vw] md:w-[34vw] lg:w-[26vw] aspect-[3/4] snap-start group overflow-hidden"
          >
            <img
              src={s.url}
              alt={`RAZOR Barber Shop Mysłowice — ${s.caption}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-px bg-gold" />
                <span className="text-[9px] uppercase tracking-mega text-gold">RAZOR</span>
              </div>
              <h3 className="font-heading font-600 uppercase text-white text-xl md:text-2xl leading-none">
                {s.caption}
              </h3>
            </div>
            <span className="absolute top-4 right-4 font-heading text-white/30 text-2xl">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw] mt-8">
        <a
          href="https://www.instagram.com/razorbarbershopmce/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-ultra text-white/60 hover:text-gold transition-colors"
        >
          <span className="w-8 h-px bg-gold" /> Więcej zdjęć na @razorbarbershopmce
        </a>
      </div>
    </section>
  );
}
```

---