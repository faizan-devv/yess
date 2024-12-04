"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import GradientHeading from "./GradientHeading";
import { Typography, Box, Container, Stack, Grid, Paper } from "@mui/material";
import RegistrationForm from "./RegistrationForm";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const services = [
  { image: "/images/document-text.svg", title: "Calibrated AR" },
  { image: "/images/mobile.svg", title: "Unity Apps" },
  { image: "/images/vrtual.svg", title: "Virtual Reality" },
  { image: "/images/box.svg", title: "3D Modelling" },
  { image: "/images/wifi2.svg", title: "Narration and sound effects" },
  { image: "/images/profile-circle2.svg", title: "Animated Character" },
  { image: "/images/edit-2.svg", title: "Script and copywriting" },
  { image: "/images/programming-arrow2.svg", title: "AR Trails and Filters" },
  { image: "/images/instagram.svg", title: "Photogrammetry" },
  { image: "/images/monitor.svg", title: "Web AR" },
  { image: "/images/mirroring-screen.svg", title: "Info Hotspots" },
  { image: "/images/video-play.svg", title: "Promo Videos" },
];

const ServiceCard = ({
  image,
  title,
  bgColor,
}: {
  image: string;
  title: string;
  bgColor: string;
}) => (
  <Paper
    elevation={0}
    sx={{
      padding: 3,
      borderRadius: 2,
      transition: "all 0.3s",
      cursor: "pointer",
      backgroundColor: bgColor,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      "&:hover": {
        bgcolor: "grey.800",
      },
    }}
  >
    <Image src={image} alt={title} width={30} height={30} />
    <GradientHeading
      gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
      fontSize={{ xs: "14px", md: "20px" }}
      fontWeight={500}
    >
      {title}
    </GradientHeading>
  </Paper>
);

const ArSolutions = () => {
  const { width } = useWindowSize();

  return (
    <Box>
      <Box className="ar-solutions">
        <Box className="ar-banner">
          <NavBar />
          <Container
            maxWidth={false}
            sx={{
              maxWidth: "1472px",
            }}
          >
            <Box
              sx={{
                py: { xs: 15, md: 31.25 },
                px: { xs: 4, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "70%",
                    lg: "50%",
                  },
                }}
              >
                <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
                  AR/VR Solution
                </GradientHeading>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "30px",
                    },
                    fontWeight: 400,
                    mb: 2,
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: { xs: 1.4, md: 1.5 },
                  }}
                >
                  Intelligent digital solutions for secure environments through
                  automation & smart controls
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container
          maxWidth={false}
          sx={{ maxWidth: "1472px", py: 12.5, px: 8.75 }}
        >
          <Stack spacing={3.75}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 400,
                lineHeight: "39px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Augmented Reality (AR) and Virtual Reality (VR) are immersive
              technologies that enhance or create experiences by blending or
              replacing the physical world with digital elements. These
              technologies are revolutionizing industries, from entertainment to
              education, Smart Cities healthcare, and retail. YESS is proposing
              Zubr Curio: a leading augmented and virtual reality studio
              specializing in digital interpretation for museums, galleries,
              libraries, heritage sites, academics and creative practitioners.
              We're passionate about working with enthusiastic storytellers with
              exciting ideas to develop and deliver innovative AR and VR, high
              quality, audience-centred digital content and unique immersive
              experiences.
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 400,
                lineHeight: "39px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Our services cover everything from project conception through to
              app store submissions or in-venue installations, including
              scripting, 3D scanning, 3D modelling, app development, real-world
              calibration and analytics
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 400,
                lineHeight: "39px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              We develop everything from museum interactives and performance art
              installations to augmented social media filters or education
              tools, AR binoculars, 3D historically and geographically-accurate
              models, apps and even virtual events
            </Typography>

            <Grid container spacing={2} sx={{ pt: 12.5 }}>
              {services.map((service, index) => {
                const bgColor =
                  width < 768
                    ? index % 2 === 1
                      ? "rgba(40, 45, 64, 0.39)"
                      : "transparent"
                    : [0, 2, 5, 7, 8, 10].includes(index)
                    ? "rgba(40, 45, 64, 0.39)"
                    : "transparent";

                return (
                  <Grid item xs={12} md={6} lg={3} key={index}>
                    <ServiceCard
                      image={service.image}
                      title={service.title}
                      bgColor={bgColor}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Container>
      </Box>
      <RegistrationForm />
      <Footer />
    </Box>
  );
};

export default ArSolutions;
