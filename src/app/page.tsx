import Image from "next/image";
import { Button } from '@mui/material';
import { MainLayout, Banner, OurVision } from '@/components'; 

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <OurVision />
    </MainLayout>
  );
}
