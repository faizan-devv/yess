"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MainLayout,
  LandscapeSystemAR,
  NavBarAR,
  RegistrationFormAR,
  FooterAR,
  InitativeAR,
  GreenProjectAR,
  SmartSolutionsAR,
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
      <div className="fullpage-container" dir="rtl">
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
                <NavBarAR onMenuStateChange={setIsMenuOpen} />
              </div>
              <LandscapeSystemAR />
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
                اليمامة هي جزء من المبادرة المستقبلية لنظام المناظر الطبيعية الرقمية
                الذي يقدم تجربة غامرة ومعلوماتية وتفاعلية للمستخدم النهائي الذي يستهلك
                الخدمات لبيئات متعددة سواء كانت خدمات المدينة الذكية أو المشاريع
                الخضراء مثل الحديقة الذكية. يحدد المشهد الرقمي إنشاء شبكة لمشاركة
                البيانات البيئية الحيوية عبر المدن الذكية والحدائق وما إلى ذلك،
                مما يؤسس رابطة مجتمعية قوية تركز على الممارسات المستدامة.
              </MotionTypography>
            </Box>
          </section>
        </div>
        <section className="fullpage-section overflow-hidden Initative">
          <InitativeAR />
        </section>
        <section className="fullpage-section overflow-hidden green">
          <GreenProjectAR />
        </section>
        <div className="fullpage-section smart">
          <SmartSolutionsAR />
        </div>
        <section id="contact" className="fullpage-section">
          <RegistrationFormAR />
        </section>

        <div className="normal-scroll-sections">
          <FooterAR />
        </div>
      </div>
    </MainLayout>
  );
}