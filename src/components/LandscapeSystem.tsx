import React from 'react';
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionTypography = motion(Typography);

const LandscapeSystem = () => {
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: -50
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
    <Box
      sx={{
        height: "70dvh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "80%",
        }}
      >
        <MotionTypography
          variant="h1"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "60px", lg: "71px" },
            fontWeight: 800,
            color: "#FFFFFFFA",
            position: "relative",
            top: "10%",
          }}
        >
          Smart Solutions
        </MotionTypography>
      </Box>
    </Box>
  );
};

export default LandscapeSystem;