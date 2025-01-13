"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MainLayout,
  LandscapeSystem,
  NavBar,
  RegistrationForm,
  Footer,
  Initative,
  GreenProject,
  SmartSolutions,
} from "@/components";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";

const MotionTypography = motion(Typography);

export default function Landscape() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <MainLayout>
      <div className="fullpage-container">
        <div className="">
          <section className="fullpage-section">
            <div className="land-scape">
              <video autoPlay muted loop>
                <source src="/images/smart-sol.mp4" type="video/mp4" />
              </video>
              <div 
                style={{
                  position: 'relative',
                  top: isMenuOpen ? (isMobile ? '25.5%' : '3%') : '2%',
                  transition: 'top 0.3s ease',
                  zIndex: "10"
                }}
              >
                <NavBar onMenuStateChange={setIsMenuOpen} />
              </div>
              <LandscapeSystem />
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MotionTypography
                variant="h1"
                initial="hidden"
                animate="visible"
                variants={descriptionVariants}
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "20px" },
                  fontWeight: 400,
                  mb: 2,
                  color: "#FFFFFFDB",
                  lineHeight: { xs: "25px", sm: "39px" },
                  width: {
                    xs: "95%",
                    sm: "75%",
                  },
                  textAlign: "center",
                }}
              >
                Yamama is the part of visionary initiative for digital landscape
                system which offers an immersive, informative, and interactive
                experience to the end user who is consuming the services for
                multiple environments either its a smart city services or Green
                projects like smart park. The Digital Landscape outlines the
                creation of a network for sharing vital environmental data
                across the smart cities, parks etc establishing a strong
                community bond focused on sustainable practices.
              </MotionTypography>
            </Box>
          </section>
        </div>
        <section className="fullpage-section overflow-hidden Initative">
          <Initative />
        </section>
        <section className="fullpage-section overflow-hidden green">
          <GreenProject />
        </section>
        <div className="fullpage-section smart">
          <SmartSolutions />
        </div>
        <section id="contact" className="fullpage-section">
          <RegistrationForm />
        </section>

        <div className="normal-scroll-sections">
          <Footer />
        </div>
      </div>
    </MainLayout>
  );
}