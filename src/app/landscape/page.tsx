import {
  MainLayout,
  LandscapeSystem,
  NavBar,
  RegistrationForm,
  Footer,
  Initative,
  GreenProject,
  SmartSolutions
} from "@/components";

export default function Landscape() {
  return (
    <MainLayout>
      <div className="fullpage-container">
        {/* Full-page snap sections */}
        <div className="land-scape">
          <section className="fullpage-section">
            <NavBar />
            <LandscapeSystem />
          </section>
        </div>
        <section className="fullpage-section overflow-hidden Initative pt-[113px]">
          <Initative />
        </section>
        <section className="fullpage-section overflow-hidden green pt-[113px]">
          <GreenProject />
        </section>
        <div className="fullpage-section">
          <SmartSolutions />
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
