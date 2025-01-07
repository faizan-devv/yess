"use client";
import { useState, useEffect } from 'react';
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
  NavBar
} from "@/components";
import { useTheme, useMediaQuery } from '@mui/material';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <MainLayout>
      <div className="fullpage-container">
        <div className="banner">
          <section className="fullpage-section">
            <div 
              style={{
                position: 'relative',
                top: isMenuOpen ? (isMobile ? '30.5%' : '5.5%') : '5.5%',
                transition: 'top 0.3s ease',
                zIndex:"10"
              }}
            >
              <NavBar onMenuStateChange={setIsMenuOpen} />
            </div>
            <Banner />
          </section>
        </div>

        <section className="fullpage-section">
          <OurVision />
        </section>

        <section id="services" className="fullpage-section overflow-hidden z-10">
          <Services />
        </section>

        <div className="normal-scroll-sections">
          <Projects />
          <OurClients />
        </div>

        <section className="fullpage-section custom-section overflow-hidden">
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