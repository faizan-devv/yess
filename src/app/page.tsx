// app/page.js
"use client";
import { useEffect, useRef } from "react";
import {
  MainLayout,
  Banner,
  OurVision,
  Projects,
  Services,
  OurClients,
  ExcellenceSection,
  RegistrationForm,
  Footer,
  OurPartners,
  NavBar,
} from "@/components";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Handle initial hash navigation if any
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <MainLayout>
      <div className="fullpage-container" ref={containerRef}>
        {/* Full-page snap sections */}
        <div className="banner">
          <section className="fullpage-section">
           <div className="relative top-[5.5%]"> <NavBar /></div>
            <Banner />
          </section>
        </div>

        <section className="fullpage-section">
          <OurVision />
        </section>

        <section id="services" className="fullpage-section overflow-hidden">
          <Services />
        </section>

        <div className="normal-scroll-sections">
          <Projects />
          <OurClients />
        </div>

        <section className="fullpage-section">
          <ExcellenceSection />
        </section>
        <div className="normal-scroll-sections">
          <OurPartners />
        </div>
        <section id="contact" className="fullpage-section">
          <RegistrationForm />
        </section>

        <div className="normal-scroll-sections">
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
}
