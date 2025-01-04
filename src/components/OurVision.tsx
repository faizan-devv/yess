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

  // const fadeIn = {
  //   hidden: { 
  //     opacity: 0
  //   },
  //   visible: { 
  //     opacity: 1,
  //     transition: { 
  //       duration: 0.8,
  //       delay: 0.5 
  //     }
  //   }
  // };

  // Create motion components
  const MotionBox = motion.create(Box);
  const MotionTypography = motion(Typography);

  return (
    <Box 
      id="vision"
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      sx={{
        minHeight: '100dvh',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 4, md: "70px" }
      }}
      className="our-vsion px-[70px] min-h-dvh lg:min-h-screen flex items-center justify-center text-center"
    >
      <motion.div
        variants={fadeInDown}
        className="blue-circle flex items-center justify-center"
        style={{
          position: 'relative'
        }}
      >
        <MotionBox
          variants={fadeInDown}
          sx={{
            width: {
              xs: '100%',
              md: '80%',
              lg: '60%'
            },
            textAlign: "center"
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
                fontSize: { xs: "20px", sm: "30px", md: "50px", lg: "80px" }
              }}
            >
              Saudi Vision 2030
            </GradientHeading>
          </motion.div>
          
          <Box>
            <MotionTypography
              variant="h1"
              variants={fadeInUp}
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "30px" },
                fontWeight: 400,
                mb: 2,
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              empowers us to drive innovation and shape the future
              of technology in the Kingdom
            </MotionTypography>
          </Box>
        </MotionBox>
      </motion.div>
    </Box>
  );
};

export default OurVision;