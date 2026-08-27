import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Prawdziwe zdjęcie witryny salonu — Booksy
const HERO_IMG =
  "https://d375139ucebi94.cloudfront.net/pl/images/8192/biz_photo_151194686524.jpg?size=640x427";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="ritual"
      className="relative min-h-screen w-full overflow-hidden bg-[#0F0F0F] grain"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `scale(${1 + scrollY * 0.0004}) translateY(${scrollY * 0.25}px)` }}
      >
        <img
          src={HERO_IMG}
          alt="RAZOR Barber Shop — witryna salonu, Mikołowska 4, Mysłowice"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/60" />
      </div>

      {/* Vertical hairlines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-[15%] w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 left-[85%] w-px bg-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-between mx-auto max-w-[1400px] px-5 md:px-[7vw] pt-28 pb-10">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-mega text-gold">
            Mysłowice · Pierwszy Barber Shop w Mieście
          </span>
        </div>

        <div
          className="max-w-4xl"
          style={{ transform: `translateY(${scrollY * -0.12}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
        >
          <h1 className="font-heading font-900 leading-[0.85] text-white text-shadow-blade uppercase"
              style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)" }}>
            Precyzja<br />
            <span className="text-gold">Jest Trwała</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-white/65 leading-relaxed font-light">
            Męski barbershop w sercu Mysłowic. Strzyżenie, broda i rytuał golenia
            brzytwą — wykonane z chirurgiczną precyzją. Tu nie tniesz włosów.
            Definiujesz siebie.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-black text-[11px] uppercase tracking-ultra font-semibold hover:bg-white transition-all duration-300"
            >
              Zarezerwuj rytuał
              <span className="w-4 h-px bg-black group-hover:w-8 transition-all" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white text-[11px] uppercase tracking-ultra hover:border-gold hover:text-gold transition-all duration-300"
            >
              Zobacz cennik
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="hidden md:flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-mega text-white/40">Mikołowska 4</span>
            <span className="text-[10px] uppercase tracking-mega text-white/40">41-400 Mysłowice</span>
          </div>
          <a href="#services" className="flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors mx-auto md:mx-0">
            <span className="text-[10px] uppercase tracking-mega">Przewiń</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
          <div className="hidden md:flex flex-col gap-1 text-right">
            <span className="text-[10px] uppercase tracking-mega text-white/40">Pon–Sob</span>
            <span className="text-[10px] uppercase tracking-mega text-white/40">10:00 — 18:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---