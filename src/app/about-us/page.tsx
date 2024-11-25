import {
  AboutUsBanner,
  AboutUsOurVision,
  CEOMessage,
  Footer,
  RegistrationForm,
} from "@/components";
import { Box } from "@mui/material"; 
export default function AboutUs() {
  return (
    <Box>
      <AboutUsBanner />
      <AboutUsOurVision />
      <CEOMessage />
      <RegistrationForm />
      <Footer />
    </Box>
  );
}
