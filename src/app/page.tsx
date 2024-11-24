import { MainLayout, Banner, OurVision, Projects } from '@/components'; 

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <OurVision />
      <Projects />
    </MainLayout>
  );
}
