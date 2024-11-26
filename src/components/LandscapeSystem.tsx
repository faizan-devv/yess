/* import Image from "next/image"; */
import { Typography, Box, Stack } from "@mui/material";
import GradientHeading from "./GradientHeading";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegistrationForm from "./RegistrationForm";

const LandscapeSystem = () => {
  return (
    <div className="">
      <div className="land-scape">
        <NavBar />
        <div className="flex justify-center pt-[114px] pb-[290px]">
          <Box sx={{ width: "60%" }} className="text-center">
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              Smart Solutions
            </GradientHeading>
            <div className="">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  fontWeight: 400,
                  mb: 2,
                }}
                className="text-white80"
              >
                Intelligent digital solutions for secure environments through
                automation & smart controls
              </Typography>
            </div>
          </Box>
        </div>
      </div>
      <Stack className=" px-[70px]" py={8} spacing={3}>
        <Typography fontWeight={400} fontSize="30px" color="#FFFFFFCC">
          Yamama is part of a visionary initiative for smart solutions that
          offers an immersive, informative, and interactive experience to the
          end user consuming services across multiple environments, whether it's
          smart city services or green projects like smart parks. The smart
          solutions outline the creation of a network for sharing vital
          environmental data across smart cities, parks, etc., establishing a
          strong community bond focused on sustainable practices.
        </Typography>
        <Typography fontWeight={400} fontSize="30px" color="#FFFFFFCC">
          The initiative of smart solutions is to provide a seamless technology
          experience to visitors in the environment. They will connect with the
          intuitive features provided through a mobile app, digital touch
          points, smart glasses, and binoculars, adding Augmented Reality & AI
          on top. The initiative is part of the smart solutions strategy of the
          Green Riyadh project, one of the most ambitious urban afforestation
          projects in the world, which involves planting 7.5 million trees
          across the capital. The current parks lack interactivity and fail to
          fully capitalize on the potential for environmental education and
          awareness. Visitors often miss out on understanding the ecosystem's
          intricacies and their role in environmental preservation. The need for
          a cohesive and innovative solution to bridge this gap has become
          evident. Therefore, Yamama focuses on an engaging and informative
          experience that complements the natural surroundings. Visitors will be
          able to seamlessly interact with the environment, access valuable
          information, and have the opportunity to contribute to environmental
          conservation efforts.
        </Typography>

        <Typography fontWeight={400} fontSize="30px" color="#FFFFFFCC">
          Yamama Engineering is a technology-based leading service integrator
          providing comprehensive smart solutions committed to delivering
          innovative IT and smart IoT solutions to cities, municipalities, and
          private organizations. With a focus on transforming urban spaces into
          smart, sustainable, and connected communities, our services encompass
          various smart solutions for cities, parks, and buildings. The
          company's mission centers on enhancing the quality of life for
          residents while optimizing city administrators' operational efficiency
          through a full range of smart solutions. With a vision to empower and
          enrich lifestyles through a strong digital ecosystem, Al-Yamamah
          enables the cities of KSA to embrace technology integration and
          collaborate closely with citizens for inclusive urban development.
        </Typography>
      </Stack>
      <RegistrationForm />
      <Footer />
    </div>
  );
};
export default LandscapeSystem;
