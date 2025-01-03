"use client";
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";
import { motion } from "framer-motion";

const OurVision = () => {
  const fadeInDown = {
    hidden: { 
      opacity: 0, 
      y: -50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.3 
      }
    }
  };

  // Create motion components
  const MotionBox = motion(Box);
  const MotionTypography = motion(Typography);

  return (
    <Box 
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="our-vsion px-[70px] min-h-dvh lg:min-h-screen flex items-center justify-center text-center"
      sx={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      <MotionBox
        variants={fadeInDown}
        sx={{
          width: {
            sm: "100%",
            md: "80%",
            lg: "60%"
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0.2
            }
          }}
          viewport={{ once: true }}
        >
          <GradientHeading
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "50px", lg: "80px" },
              mb: 3
            }}
          >
            Saudi Vision 2030
          </GradientHeading>
        </motion.div>
        
        <MotionTypography
          variant="h1"
          variants={fadeInUp}
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "30px" },
            fontWeight: 400,
            mb: 2,
            opacity: 0.8
          }}
          className="text-white80"
        >
          empowers us to drive innovation and shape the future
          of technology in the Kingdom
        </MotionTypography>
      </MotionBox>
    </Box>
  );
};

export default OurVision;