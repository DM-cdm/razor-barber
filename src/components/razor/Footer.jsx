import React from "react";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const BOOKSY_URL = "https://booksy.com/pl-pl/39011_razor-barber-shop_barber-shop_12300_myslowice";

const hours = [
  { day: "Poniedziałek", time: "10:00 — 18:00" },
  { day: "Wtorek", time: "10:00 — 18:00" },
  { day: "Środa", time: "10:00 — 18:00" },
  { day: "Czwartek", time: "10:00 — 18:00" },
  { day: "Piątek", time: "10:00 — 18:00" },
  { day: "Sobota", time: "10:00 — 16:00" },
  { day: "Niedziela", time: "Zamknięte" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0F0F0F] border-t border-white/10 pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        {/* CTA */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 pb-16 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[11px] tracking-mega uppercase">/ 06</span>
              <span className="h-px w-16 bg-white/20" />
            </div>
            <h2 className="font-heading font-800 uppercase text-white leading-[0.9]"
                style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}>
              Zarezerwuj<br /><span className="text-gold">Swoje Miejsce</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end gap-3">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-8 py-5 bg-gold text-black text-[11px] uppercase tracking-ultra font-semibold hover:bg-white transition-colors duration-300 group"
            >
              Rezerwuj w Booksy
              <span className="w-6 h-px bg-black group-hover:w-12 transition-all" />
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-between px-8 py-5 border border-white/20 text-white text-[11px] uppercase tracking-ultra hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Wybierz termin tutaj
              <span className="w-6 h-px bg-gold group-hover:w-12 transition-all" />
            </a>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading text-3xl font-900 tracking-ultra text-white">RAZOR</span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-[10px] tracking-mega uppercase text-white/50">Barber Shop</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Męski barbershop w Mysłowicach. Precyzja jest trwała. Rzemiosło bez kompromisów.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/razorbarbershopmce/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/razorbarbershopmce/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} className="text-gold" />
              <span className="text-[10px] uppercase tracking-mega text-white/50">Adres</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Mikołowska 4<br />
              41-400 Mysłowice<br />
              Śląskie, Polska
            </p>
            <a
              href="https://maps.google.com/?q=Mikołowska+4+Mysłowice"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[10px] uppercase tracking-ultra text-gold hover:text-white transition-colors"
            >
              Zobacz na mapie →
            </a>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Phone size={14} className="text-gold" />
              <span className="text-[10px] uppercase tracking-mega text-white/50">Kontakt</span>
            </div>
            <a href="tel:+48516740010" className="block text-white/70 hover:text-gold transition-colors">
              516 740 010
            </a>
            <a
              href="https://www.instagram.com/razorbarbershopmce/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-white/50 hover:text-gold transition-colors text-sm"
            >
              @razorbarbershopmce
            </a>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={14} className="text-gold" />
              <span className="text-[10px] uppercase tracking-mega text-white/50">Godziny</span>
            </div>
            <ul className="space-y-1.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-xs">
                  <span className="text-white/50">{h.day.slice(0, 3)}.</span>
                  <span className={h.time === "Zamknięte" ? "text-white/25" : "text-white/75"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <span className="text-[10px] uppercase tracking-ultra text-white/30">
            © {new Date().getFullYear()} RAZOR Barber Shop · Mysłowice
          </span>
          <span className="text-[10px] uppercase tracking-mega text-white/30">
            Precyzja Jest Trwała
          </span>
        </div>
      </div>
    </footer>
  );
}
```

---

To jest **cały kod** projektu — 11 plików, wszystkie prawdziwe zdjęcia (Booksy + naszemiasto.pl) i prawdziwe dane opinii (Orły Fryzjerstwa). Chcesz, żebym coś w nim zmienił?