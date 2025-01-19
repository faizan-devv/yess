// app/page.js
"use client";
import {
  MainLayout,
  BannerAR,
  OurVisionAR,
  ProjectsAR,
  ServicesAR,
  OurClientsAR,
  ExcellenceSectionAR,
  RegistrationFormAR,
  FooterAR,
  OurPartnersAR,
  NavbarAr,
} from "@/components";

export default function Home() {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   // Handle initial hash navigation if any
  //   if (window.location.hash) {
  //     const id = window.location.hash.substring(1);
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []);

  return (
    <MainLayout>
      <div className="fullpage-container">
        {/* Full-page snap sections */}
        <div className="banner">
          <section className="fullpage-section">
            <div className="relative top-[5.5%]">
              <NavbarAr />
            </div>
            <BannerAR />
          </section>
        </div>

        <section className="fullpage-section">
          <OurVisionAR />
        </section>

        <section
          id="services"
          className="fullpage-section overflow-hidden z-10"
        >
          <ServicesAR />
        </section>

        <div className="normal-scroll-sections">
          <ProjectsAR />
          <OurClientsAR />
        </div>

        <section className="fullpage-section overflow-hidden">
          <ExcellenceSectionAR />
        </section>
        <div className="normal-scroll-sections">
          <OurPartnersAR />
        </div>
        <section id="contact" className="fullpage-section">
          <RegistrationFormAR />
        </section>

        <div className="normal-scroll-sections">
          <FooterAR />
        </div>
      </div>
    </MainLayout>
  );
}
