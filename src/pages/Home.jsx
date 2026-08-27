import React from "react";
import Navbar from "@/components/razor/Navbar";
import Hero from "@/components/razor/Hero";
import Services from "@/components/razor/Services";
import Reviews from "@/components/razor/Reviews";
import Booking from "@/components/razor/Booking";
import Gallery from "@/components/razor/Gallery";
import About from "@/components/razor/About";
import Footer from "@/components/razor/Footer";

export default function Home() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Booking />
        <Gallery />
        <About />
        <Footer />
      </main>
    </div>
  );
}
```

---