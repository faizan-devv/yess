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
        
        ياماما للهندسة هي شركة رائدة تعتمد على التكنولوجيا وتقدم نظام
        المناظر الرقمية بالكامل، ملتزمة بتقديم حلول تكنولوجيا المعلومات
        وحلول الإنترنت الذكي (IoT) للمدن والبلديات والمنظمات الخاصة. مع التركيز
        على تحويل المساحات الحضرية إلى مجتمعات ذكية ومستدامة ومتصلّة، تشمل
        خدماتنا الشاملة حلولاً ذكية للمدن والحدائق والمباني. تتمحور مهمة
        الشركة حول تعزيز جودة الحياة للسكان مع تحسين الكفاءة التشغيلية
        لإداريي المدن من خلال نظام المناظر الرقمية الكامل. برؤية تهدف إلى
        تمكين وتغذية أسلوب الحياة من خلال نظام رقمي قوي، تُمكّن اليمامة مدن
        المملكة العربية السعودية من دمج التكنولوجيا والتعاون الوثيق مع
        المواطنين من أجل تطوير حضري شامل.
      </MotionTypography>
    </Container>
  );
};

export default SmartSolutions;