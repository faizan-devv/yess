import { MainLayout, Banner, OurVision, Projects, Services } from '@/components'; 

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <OurVision />
      <Projects />
      <Services />
    </MainLayout>
  );
}
