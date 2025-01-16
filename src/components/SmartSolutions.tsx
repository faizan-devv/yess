"use client";
import { Typography, Container } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionTypography = motion(Typography);

const SmartSolutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px"
  });

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1472px",
        height: "100dvh",
        marginTop: "117px",
      }}
      className=""
    >
      <Image
        src="/images/blue-blur.svg"
        alt="blue overlay"
        fill
        style={{ left: "-15%", zIndex: "-1" }}
      />
      <MotionTypography
        ref={ref}
        variant="h1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
          fontWeight: 400,
          mb: { xs: 1.5, sm: 2 },
          color: "#FFFFFFDB",
          lineHeight: { xs: "25px", sm: "39px" },
          width: {
            xs: "95%",
            sm: "75%",
          },
        }}
      >
        Yamama Engineering is a technology based leading service integrator
        providing the full digital landscape system committed to delivering
        innovative IT and smart IoT solutions to cities, municipalities, and
        private organizations. With a focus on transforming urban spaces into
        smart, sustainable, and connected communities, our comprehensive
        services encompass various smart solutions for cities, parks, and
        buildings. The company's mission centers on enhancing the quality of
        life for residents while optimizing city administrators' operational
        efficiency encompassing full Digital Landscape system. With a vision to
        empower and enrich lifestyles through a strong digital ecosystem,
        Al-Yamamah enables the cities of KSA to embrace technology integration
        and collaborate closely with citizens for inclusive urban development.
      </MotionTypography>
    </Container>
  );
};

export default SmartSolutions;