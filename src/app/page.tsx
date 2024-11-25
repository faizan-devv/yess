import { MainLayout, Banner, OurVision, Projects, Services, OurClients, ExcellenceSection, RegistrationForm, Footer } from '@/components'; 

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <OurVision />
      <Projects />
      <Services />
      <OurClients />
      <ExcellenceSection />
      <RegistrationForm />
      <Footer />
    </MainLayout>
  );
}
