"use client";
import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionDiv = motion.div;
const MotionStack = motion(Stack);

const GreenProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        display: "flex",
        alignItems: "center"
      }}
    >
      <MotionStack
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        sx={{
          position: "relative",
          width: "100%"
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/images/blue-blur.svg"
            alt="blue overlay"
            fill
            style={{ left: "-15%", zIndex: -1 }}
            priority
          />
        </Box>

        <motion.div variants={itemVariants}>
          <GradientHeading
            gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
            fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
            fontWeight={700}
          >
            Strategy of the Green Riyadh project
          </GradientHeading>
        </motion.div>
        
        <MotionDiv variants={itemVariants}>
          <Typography
            paragraph
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 400,
              mb: { xs: 1.5, sm: 2 },
              color: "#FFFFFFDB",
              lineHeight: { xs: "25px", sm: "39px" },
              width: {
                xs: "95%",
                sm: "80%",
              },
            }}
          >
            which is one of the most ambitious urban afforestation projects in
            the world Planting 7.5 million trees across the capital. The current
            parks lack interactivity and fail to fully capitalize on the
            potential for environmental education and awareness. Visitors often
            miss out on understanding ...
          </Typography>
        </MotionDiv>

        <MotionDiv variants={itemVariants}>
          <Typography
            paragraph
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
              mt: 5,
            }}
          >
            strategy of the Green Riyadh project which is one of the most
            ambitious urban afforestation projects in the world Planting 7.5
            million trees across the capital. The current parks lack
            interactivity and fail to fully capitalize on the potential for
            environmental education and awareness. Visitors often miss out on
            understanding the ecosystem&apos;s intricacies and their role in
            environmental preservation. The need for a cohesive and innovative
            solution to bridge this gap has become evident. Therefore, Yamama
            focusing on an engaging and informative experience that complements
            the natural surroundings. The visitors would be able to seamlessly
            interact with the environment, have access to valuable information,
            and an opportunity to contribute to environmental conservation
            efforts.
          </Typography>
        </MotionDiv>
      </MotionStack>
    </Container>
  );
};

export default GreenProject;