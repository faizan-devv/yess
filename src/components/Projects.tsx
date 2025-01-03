"use client";
import { Typography, Box, Button } from "@mui/material";
import GradientHeading from "./GradientHeading";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedBox = ({ children, direction = "left" }: {
  children: any;
  direction: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ x: direction === "left" ? -100 : 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="projects projects-section min-h-dvh lg:min-h-screen mt-[100px] overflow-hidden">
      <div className="flex justify-center lg:border-l border-customGray mx-5 md:mx-[172px]">
        <Box
          sx={{
            width: {
              sm: "100%",
              lg: "60%",
            },
          }}
          className="projects-header py-[90px] text-center relative"
        >
          <GradientHeading>Projects</GradientHeading>
          <div className="">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "30px" },
                fontWeight: 400,
                mb: 2,
              }}
              className="text-white80"
            >
              empowers us to drive innovation and shape the future of technology
              in the Kingdom
            </Typography>
          </div>
        </Box>
      </div>
      <div className="all-projects hidden lg:inline-block">
        <div className="left-section px-[47px] flex items-center">
          <Typography className="text-white font-bold text-2xl pl-[19px] pr-20">
            01
          </Typography>
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Section */}
            <Box className="relative border-l border-customGray lg:col-span-1">
              <Box className="space-y-6 ">
                <div className="detail-card px-[30px]  bg-darkBlue relative blue-circle py-20">
                  <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    className="text-white"
                  >
                    Our journey towards digital transformation
                  </Typography>

                  <Button variant="outlined">View More</Button>
                </div>
              </Box>
            </Box>

            {/* Right Section */}
            <Box className="space-y-8 p-8 lg:col-span-2 pl-[170px]">
              <AnimatedBox direction="right">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  YES IT Solutions is a leading provider of digital transformation
                  services specializing in cutting-edge technologies.
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="right">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  Our expertise in cybersecurity, artificial intelligence, machine
                  learning, cloud services, and the Internet of Things (IoT)
                  enables us to offer innovative solutions to meet the business
                  needs of our clients.
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="right">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  Embracing digital transformation and aligning our strategies
                  with Saudi Vision 2030 will enable us to drive innovation and
                  shape the future of technology in Saudi Arabia.
                </Typography>
              </AnimatedBox>
            </Box>
          </Box>
        </div>
        <div className="right-section px-[47px] flex items-center border-t border-b border-customGray">
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Section */}
            <Box className="space-y-8 p-8 lg:col-span-2 pl-[210px]">
              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  At YES Solutions are committed to providing our clients with
                  top-tier technological and sustainable solutions
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  Our business strategy is based on developing our own
                  capabilities and forming strategic partnerships with companies
                  worldwideOur business strategy is based on developing our own
                  capabilities and forming strategic partnerships with companies
                  worldwide
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  Our approach allows us to leverage cutting-edge technologies
                  while maintaining our technical independence as a systems
                  integrator, ensuring credibility and trust with our clients.
                </Typography>
              </AnimatedBox>
            </Box>
            {/* Right Section */}
            <Box className="relative border-r border-customGray lg:col-span-1">
              <Box className="space-y-6 ">
                <div className="detail-card px-[30px]  bg-darkBlue relative blue-circle py-20">
                  <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    className="text-white w-3/4"
                  >
                    Our specifications and Portfolio
                  </Typography>

                  <Button variant="outlined">View More</Button>
                </div>
              </Box>
            </Box>
          </Box>
          <Typography className="text-white font-bold text-2xl pr-[19px] pl-20">
            02
          </Typography>
        </div>
        <div className="left-section px-[47px] flex items-center border-b border-customGray">
          <Typography className="text-white font-bold text-2xl pl-[19px] pr-20">
            03
          </Typography>
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Section */}

            <Box className="relative border-l border-customGray lg:col-span-1">
              <Box className="space-y-6 ">
                <div className="detail-card px-[30px]  bg-darkBlue relative blue-circle py-20">
                  <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "30px", md: "48px" },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    className="text-white"
                  >
                    Key areas of expertise Commitment to Excellence
                  </Typography>

                  <Button variant="outlined">View More</Button>
                </div>
              </Box>
            </Box>

            {/* Right Section */}
            <Box className="space-y-8 p-8 lg:col-span-2 px-[160px]">
              <AnimatedBox direction="right">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  Our successful projects with clients such as the Ministry of
                  Defense, Ministry of Interior, GID, Royal Guards, and Saudi
                  Customs & Borders underscore our ability to deliver secure and
                  customized web portals. These portals feature advanced security
                  measures to protect sensitive data while offering intuitive
                  interfaces and functionalities tailored to each client's needs
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="right">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  They enhance transparency, streamline processes, and improve
                  service delivery
                </Typography>
              </AnimatedBox>
            </Box>
          </Box>
        </div>
      </div>
      <div className="all-projects inline-block lg:hidden">
        <div className="mb-section px-[47px]">
          <Box className="">
            <div className="detail-card bg-darkBlue relative blue-circle py-10">
              <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                  fontWeight: 700,
                }}
                className="text-white"
              >
                Our journey towards digital transformation
              </Typography>
            </div>
          </Box>

          {/* Right Section */}
          <Box>
            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium">
                YES IT Solutions is a leading provider of digital transformation
                services specializing in cutting-edge technologies.
              </Typography>
            </AnimatedBox>

            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium">
                Our expertise in cybersecurity, artificial intelligence, machine
                learning, cloud services, and the Internet of Things (IoT)
                enables us to offer innovative solutions to meet the business
                needs of our clients.
              </Typography>
            </AnimatedBox>

            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium" sx={{mb: 2}}>
                Embracing digital transformation and aligning our strategies
                with Saudi Vision 2030 will enable us to drive innovation and
                shape the future of technology in Saudi Arabia.
              </Typography>
            </AnimatedBox>
            <Button variant="outlined" sx={{mb: 2}}>View More</Button>
          </Box>
        </div>

        <div className="mb-section px-[47px] border-t border-b border-customGray">
          <Box className="">
            <div className="detail-card bg-darkBlue relative blue-circle py-10">
              <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                  fontWeight: 700,
                }}
                className="text-white"
              >
                Our specifications and Portfolio
              </Typography>
            </div>
          </Box>

          {/* Right Section */}
          <Box>
            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium">
                At YES Solutions are committed to providing our clients with top-tier technological and sustainable solutions
              </Typography>
            </AnimatedBox>

            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium">
                Our business strategy is based on developing our own capabilities and forming strategic partnerships with companies worldwideOur business strategy is based on developing our own capabilities and forming strategic partnerships with companies worldwide
              </Typography>
            </AnimatedBox>

            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium" sx={{mb: 2}}>
                Our approach allows us to leverage cutting-edge technologies while maintaining our technical independence as a systems integrator, ensuring credibility and trust with our clients.
              </Typography>
            </AnimatedBox>
            <Button variant="outlined" sx={{mb: 2}}>View More</Button>
          </Box>
        </div>

        <div className="mb-section px-[47px]">
          <Box className="">
            <div className="detail-card bg-darkBlue relative blue-circle py-10">
              <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                  fontWeight: 700,
                }}
                className="text-white"
              >
                Key areas of
                expertise Commitment to Excellence
              </Typography>
            </div>
          </Box>

          {/* Right Section */}
          <Box>
            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium">
                Our successful projects with clients such as the Ministry of Defense, Ministry of Interior, GID, Royal Guards, and Saudi Customs & Borders underscore our ability to deliver secure and customized web portals. These portals feature advanced security measures to protect sensitive data while offering intuitive interfaces and functionalities tailored to each client's needs
              </Typography>
            </AnimatedBox>

            <AnimatedBox direction="right">
              <Typography className="text-white70 text-base font-medium" sx={{mb: 2}}>
                They enhance transparency, streamline processes, and improve service delivery
              </Typography>
            </AnimatedBox>
            <Button variant="outlined" sx={{mb: 2}}>View More</Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Projects;