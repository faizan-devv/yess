"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import GradientHeading from "./GradientHeading";
import { Typography, Box } from "@mui/material";
import RegistrationForm from "./RegistrationForm";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

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
const ServiceCard = ({ image, title, bgColor }) => (
  <div
    className={`p-6 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer flex flex-col items-center gap-4 ${bgColor}`}
  >
    <Image src={image} alt={title} width={30} height={30} />
    <GradientHeading
      gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
      fontSize={{ xs: "14px", md: "20px" }}
      fontWeight={500}
    >
      {title}
    </GradientHeading>
  </div>
);

const ArSolutions = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <div className="ar-solutions">
        <div className="ar-banner ">
          <NavBar />
          <div className="py-[250px] px-[70px]">
            <Box
              sx={{
                width: {
                  sm: "100%",
                  md: "70%",
                  lg: "50%",
                },
              }}
              className=""
            >
              <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              AR/VR Solution
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
                  Intelligent digitalsolutionsfor secure envorinmenst through automation &smart controls
                </Typography>
              </div>
            </Box>
          </div>
        </div>
        <div className="px-[70px] py-[100px]">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
              mb: "30px",
              lineHeight: "39px",
            }}
            className="text-white80"
          >
            Augmented Reality (AR) and Virtual Reality (VR) are immersive
            technologies that enhance or create experiences by blending or
            replacing the physical world with digital elements. These
            technologies are revolutionizing industries, from entertainment to
            education, Smart Cities healthcare, and retail. YESS is proposing
            Zubr Curio: a leading augmented and virtual reality studio
            specializing in digital interpretation for museums, galleries,
            libraries, heritage sites, academics and creative
            practitioners. We’re passionate about working with enthusiastic
            storytellers with exciting ideas to develop and deliver innovative
            AR and VR, high quality, audience-centred digital content and unique
            immersive experiences.
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
              mb: "30px",
              lineHeight: "39px",
            }}
            className="text-white80"
          >
            Our services cover everything from project conception through to app
            store submissions or in-venue installations, including scripting, 3D
            scanning, 3D modelling, app development, real-world calibration and
            analytics
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
              lineHeight: "39px",
            }}
            className="text-white80"
          >
            We develop everything from museum interactives and performance art
            installations to augmented social media filters or education
            tools, AR binoculars, 3D historically and geographically-accurate
            models, apps and even virtual events
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-[100px]">
            {services.map((service, index) => {
              const bgColor =
                width < 768
                  ? index % 2 === 1
                    ? "bg-[#282D4063]"
                    : "bg-transparent"
                  : [0, 2, 5, 7, 8, 10].includes(index)
                  ? "bg-[#282D4063]"
                  : "bg-transparent";

              return (
                <ServiceCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  bgColor={bgColor}
                />
              );
            })}
          </div>
        </div>
      </div>
      <RegistrationForm />
      <Footer />
    </div>
  );
};
export default ArSolutions;
