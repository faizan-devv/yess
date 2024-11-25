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
} from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <OurVision />
      <Projects />
      <Services />
      <OurClients />
      <OurPartners />
      <ExcellenceSection />
      <RegistrationForm />
      <Footer />
    </MainLayout>
  );
}
