import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

const Initative = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      }}
      className="flex items-center"
    >
      <Stack>
        <MotionBox
          ref={ref}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          sx={{
            width: { xs: "90%" },
          }}
        >
          <Image
            src="/images/blue-blur.svg"
            alt="blue overlay"
            fill
            style={{ left: "-15%", zIndex: "-1" }}
          />
          <motion.div variants={itemVariants}>
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{xs: "20px", sm: "30px", md: "40px" }}
              fontWeight={700}
            >
            مبادرة النظام الرقمي للمشاهد الطبيعية
            </GradientHeading>
          </motion.div>
          
          <MotionTypography
            variants={itemVariants}
            variant="h1"
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
       
       تهدف المبادرة إلى توفير تجربة تكنولوجية سلسة للزوار في البيئة. حيث سيتم ربطهم بالميزات التفاعلية عبر التطبيق المحمول، ونقاط التفاعل الرقمية، والنظارات الذكية، والمناظير، إضافة إلى دمج الواقع المعزز والذكاء الاصطناعي. مبادرة النظام الرقمي للمشاهد الطبيعية.
        
          </MotionTypography>
        </MotionBox>
      </Stack>
    </Container>
  );
};

export default Initative;