import React, { useState } from "react";
import { Calendar, Clock, Check, Phone } from "lucide-react";

const BOOKSY_URL = "https://booksy.com/pl-pl/39011_razor-barber-shop_barber-shop_12300_myslowice";
const PHONE = "516 740 010";

// INSTRUKCJA: Wejdź na https://formspree.io, załóż darmowe konto,
// stwórz nowy formularz i wklej poniżej swój unikalny endpoint.
// Przykład: "https://formspree.io/f/xnqkvnzp"
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

function getDays() {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const weekday = d.getDay();
    const closed = weekday === 0;
    days.push({
      key: i,
      date: d,
      day: d.toLocaleDateString("pl-PL", { weekday: "short" }).replace(".", ""),
      num: d.getDate(),
      month: d.toLocaleDateString("pl-PL", { month: "short" }).replace(".", ""),
      closed,
    });
  }
  return days;
}

const SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function Booking() {
  const [days] = useState(getDays);
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [confirmed, setConfirmed] = useState(false);
  const [sending, setSending] = useState(false);

  const day = days[selectedDay];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSlot) return;

    if (FORMSPREE_URL.includes("YOUR_FORM_ID")) {
      alert("UWAGA: Wpisz swój Formspree ID w pliku src/components/razor/Booking.jsx (linia: const FORMSPREE_URL = ...)");
      return;
    }

    setSending(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.service,
          date: `${day.day} ${day.num} ${day.month}`,
          time: selectedSlot,
          _subject: `Nowa rezerwacja: ${form.name} — ${form.service}`,
        }),
      });

      if (response.ok) {
        setConfirmed(true);
        setForm({ name: "", phone: "", service: "" });
      } else {
        alert("Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń: " + PHONE);
      }
    } catch (error) {
      alert("Wystąpił błąd połączenia. Sprawdź internet lub zadzwoń: " + PHONE);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="booking" className="relative bg-[#1A1A1A] py-24 md:py-32 border-y border-white/5">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[7vw]">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold text-[11px] tracking-mega uppercase">/ 03</span>
              <span className="h-px w-16 bg-white/20" />
            </div>
            <h2 className="font-heading font-800 uppercase text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Laboratorium<br />Kalendarza
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p className="text-white/55 text-base md:text-lg leading-relaxed font-light">
              Wybierz dzień i godzinę. Rezerwacja potwierdzana telefonicznie.
              Pełną dostępność i natychmiastowe potwierdzenie znajdziesz w Booksy.
            </p>
          </div>
        </div>

        {confirmed ? (
          <div className="border border-gold/40 bg-[#0F0F0F] p-10 md:p-16 text-center">
            <div className="mx-auto w-16 h-16 border border-gold rounded-full flex items-center justify-center mb-6">
              <Check className="text-gold" size={28} />
            </div>
            <h3 className="font-heading font-700 uppercase text-white text-3xl md:text-4xl mb-3">
              Zgłoszenie przyjęte
            </h3>
            <p className="text-white/60 max-w-md mx-auto mb-8">
              Dziękujemy, {form.name || "Kliencie"}. Zadzwonimy pod {form.phone || "podany numer"},
              aby potwierdzić wizytę: {day.day} {day.num} {day.month}, godz. {selectedSlot}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gold text-black text-[11px] uppercase tracking-ultra font-semibold hover:bg-white transition-colors"
              >
                Potwierdź od razu w Booksy
              </a>
              <button
                onClick={() => { setConfirmed(false); setSelectedSlot(null); setForm({ name: "", phone: "", service: "" }); }}
                className="px-6 py-3 border border-white/20 text-white text-[11px] uppercase tracking-ultra hover:border-gold hover:text-gold transition-colors"
              >
                Nowa rezerwacja
              </button>
            </div>
          </div>
        ) : (
          <div className={`grid lg:grid-cols-12 gap-8 transition-all duration-500 ${selectedSlot ? "lg:gap-4" : ""}`}>
            <div className={`lg:col-span-7 transition-all duration-500 ${selectedSlot ? "lg:opacity-40" : "opacity-100"}`}>
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={16} className="text-gold" />
                <span className="text-[11px] uppercase tracking-ultra text-white/60">Wybierz termin</span>
                <span className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-mega text-gold">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Dostępność na żywo
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 md:gap-2 mb-6">
                {days.map((d, i) => (
                  <button
                    key={d.key}
                    disabled={d.closed}
                    onClick={() => { setSelectedDay(i); setSelectedSlot(null); }}
                    className={`flex flex-col items-center py-3 md:py-4 border transition-all duration-200 ${
                      d.closed
                        ? "border-white/5 text-white/20 cursor-not-allowed"
                        : selectedDay === i
                        ? "border-gold bg-gold text-black"
                        : "border-white/10 text-white hover:border-gold hover:text-gold"
                    }`}
                  >
                    <span className="text-[9px] md:text-[10px] uppercase tracking-ultra">{d.day}</span>
                    <span className="font-heading text-xl md:text-2xl font-700 leading-none mt-1">{d.num}</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-ultra opacity-60 mt-0.5">{d.month}</span>
                  </button>
                ))}
              </div>

              {!day.closed && (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={16} className="text-gold" />
                    <span className="text-[11px] uppercase tracking-ultra text-white/60">
                      Godziny — {day.day} {day.num} {day.month}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5 md:gap-2">
                    {SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 text-sm font-medium border transition-all duration-200 ${
                          selectedSlot === slot
                            ? "border-gold bg-gold text-black"
                            : "border-white/10 text-white/70 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {day.closed && (
                <div className="border border-white/10 p-8 text-center text-white/40 text-sm uppercase tracking-ultra">
                  Niedziela — dzień zamknięty. Zapraszamy pon–sob.
                </div>
              )}
            </div>

            <div className={`lg:col-span-5 transition-all duration-500 ${selectedSlot ? "opacity-100" : "lg:opacity-40"}`}>
              <div className="border border-white/10 bg-[#0F0F0F] p-6 md:p-8 h-full flex flex-col">
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-mega text-gold">Potwierdzenie</span>
                  <h3 className="font-heading font-700 uppercase text-white text-2xl mt-1">
                    {selectedSlot ? `${day.day} ${day.num} ${day.month} · ${selectedSlot}` : "Wybierz godzinę"}
                  </h3>
                </div>

                {selectedSlot ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                    <div>
                      <label className="block text-[10px] uppercase tracking-ultra text-white/40 mb-2">Imię</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold outline-none transition-colors"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-ultra text-white/40 mb-2">Telefon</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold outline-none transition-colors"
                        placeholder="600 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-ultra text-white/40 mb-2">Usługa</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#0F0F0F] border-b border-white/20 py-2 text-white focus:border-gold outline-none transition-colors"
                      >
                        <option value="">— wybierz —</option>
                        <option>Strzyżenie — Maszynka</option>
                        <option>Strzyżenie Klasyczne</option>
                        <option>Strzyżenie Barberskie</option>
                        <option>Strzyżenie + Zarost</option>
                        <option>Strzyżenie + Broda</option>
                        <option>Rytuał Brody</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="mt-auto w-full py-4 bg-gold text-black text-[11px] uppercase tracking-ultra font-semibold hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sending ? "Wysyłanie..." : "Zarezerwuj wizytę"}
                    </button>
                  </form>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-10">
                    <Clock className="text-white/20" size={32} />
                    <p className="text-white/40 text-sm">Wybierz godzinę z siatki obok, aby kontynuować.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 border border-white/10 hover:border-gold transition-colors group"
          >
            <span className="text-sm text-white/70 group-hover:text-gold">Pełna dostępność w Booksy</span>
            <span className="text-[10px] uppercase tracking-ultra text-gold">Otwórz →</span>
          </a>
          <a
            href={`tel:+48516740010`}
            className="flex items-center justify-between p-5 border border-white/10 hover:border-gold transition-colors group"
          >
            <span className="flex items-center gap-3 text-sm text-white/70 group-hover:text-gold">
              <Phone size={14} /> Zadzwoń: {PHONE}
            </span>
            <span className="text-[10px] uppercase tracking-ultra text-gold">Połącz →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
