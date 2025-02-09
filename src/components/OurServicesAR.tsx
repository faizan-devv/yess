"use client";
import React from "react";
import { Typography, Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import GradientHeading from "./GradientHeading";
import Services from "./Services";
import Footer from "./Footer";
import BannerSlider from "./BannerSliderAR";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedBox = ({
  children,
  direction = "left",
}: {
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

const OurService = () => {
  return (
    <Box id="our-services">
      <BannerSlider />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1472px",
          px: { xs: 8, md: "0px" },
          pt: { xs: 8, md: "57px" },
        }}
      >
        {/* First Section */}
        <Stack
          direction={{ xs: "column", lg: "row-reverse" }} // Changed to row-reverse
          spacing={{ xs: 6, md: 12 }}
          alignItems="center"
        >
          {/* Right Content (Reversed) */}
          <Stack spacing={{ xs: 4, md: 6 }} flex={1}>
            <AnimatedBox direction="right">
              <Typography
                sx={{
                  color: "#397EF5",
                  opacity: 0.1,
                  fontSize: { xs: "50px", md: "90px" },
                  fontWeight: 700,
                  lineHeight: { xs: 1.2, md: "72px" },
                  mb: { xs: 2, md: 4 },
                }}
              >
                01
              </Typography>
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
                fontWeight={700}
              >
                أنظمة تحليل وإدارة الإشارات
              </GradientHeading>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "25px" },
                  fontWeight: 400,
                  lineHeight: { xs: 1.5, md: "39px" },
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                نحن نطور وننفذ حلولًا متقدمة لتحليل وإدارة الإشارات. تعزز
                هذه الأنظمة الأداء والأمان والكفاءة التشغيلية من خلال توفير
                معالجة إشارات موثوقة ودقيقة.
              </Typography>
            </AnimatedBox>
          </Stack>

          {/* Left Image (Reversed) */}
          <AnimatedBox direction="left">
            <Box
              flex={1}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-end" },
                position: "relative",
                mt: { xs: 8, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  height: "486px",
                  width: "150px",
                  borderRight: "1px solid #397EF5",
                  position: "relative",
                  right: "-7%",
                  zIndex: 10,
                  background:
                    "linear-gradient(270deg, #397EF5 -554.05%, #0B081F 64.53%)",
                }}
              />
              <Box sx={{ position: "relative", display: "flex" }}>
                <Image
                  src="/images/social.svg"
                  alt="تصور هندسة الإشارة"
                  width={516}
                  height={426}
                  style={{ marginRight: "20px" }}
                />
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    height: "187px",
                    width: "187px",
                    borderRadius: "40px",
                    bgcolor: "#397EF5",
                    position: "absolute",
                    top: "10%",
                    right: 0,
                    zIndex: -1,
                  }}
                />
              </Box>
            </Box>
          </AnimatedBox>
        </Stack>

        {/* Second Section */}
        <Stack
          direction={{ xs: "column", lg: "row-reverse" }} // Changed to row-reverse
          spacing={{ xs: 6, md: 12 }}
          alignItems="center"
          marginTop="150px"
        >
          <AnimatedBox direction="right">
            <Box
              flex={1}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  height: "187px",
                  width: "187px",
                  borderRadius: "40px",
                  bgcolor: "#397EF5",
                  position: "absolute",
                  top: "10%",
                  zIndex: -1,
                }}
              />
              <Box sx={{ position: "relative", display: "flex" }}>
                <Image
                  src="/images/img33.svg"
                  alt="أنظمة التشويش على الإشارة"
                  width={516}
                  height={426}
                  style={{ marginLeft: "20px" }}
                />
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    height: "486px",
                    width: "150px",
                    borderLeft: "1px solid #397EF5",
                    position: "relative",
                    left: "-7%",
                    background:
                      "linear-gradient(90deg, #397EF5 -554.05%, #0B081F 64.53%)",
                  }}
                />
              </Box>
            </Box>
          </AnimatedBox>

          <Stack spacing={{ xs: 4, md: 6 }} flex={1}>
            <AnimatedBox direction="left">
              <Typography
                sx={{
                  color: "#397EF5",
                  opacity: 0.1,
                  fontSize: { xs: "50px", md: "90px" },
                  fontWeight: 700,
                  lineHeight: { xs: 1.2, md: "72px" },
                  mb: { xs: 2, md: 4 },
                }}
              >
                02
              </Typography>
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
                fontWeight={700}
              >
                أنظمة التشويش على الإشارة
              </GradientHeading>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "25px" },
                  fontWeight: 400,
                  lineHeight: { xs: 1.5, md: "39px" },
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                يتخصص فريقنا في تصميم وتنفيذ منصات تحمي المعلومات الحساسة،
                سواء كانت تعتمد على الإنترنت أو على التطبيقات. تضمن حلولنا
                الاتصال الآمن والمستمر للعمليات الحيوية من خلال منع الوصول
                غير المصرح به والتدخل.
              </Typography>
            </AnimatedBox>
          </Stack>
        </Stack>

        {/* Third Section */}
        <Stack
          direction={{ xs: "column", lg: "row-reverse" }} // Changed to row-reverse
          spacing={{ xs: 6, md: 12 }}
          alignItems="center"
          marginTop="150px"
        >
          {/* Right Content (Reversed) */}
          <Stack spacing={{ xs: 4, md: 6 }} flex={1}>
            <AnimatedBox direction="right">
              <Typography
                sx={{
                  color: "#397EF5",
                  opacity: 0.1,
                  fontSize: { xs: "50px", md: "90px" },
                  fontWeight: 700,
                  lineHeight: { xs: 1.2, md: "72px" },
                  mb: { xs: 2, md: 4 },
                }}
              >
                03
              </Typography>
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
                fontWeight={700}
              >
                أنظمة أمان الإشارة
              </GradientHeading>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "25px" },
                  fontWeight: 400,
                  lineHeight: { xs: 1.5, md: "39px" },
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                تقدم حلول أمان الإشارة لدينا حماية موثوقة ضد التهديدات
                المحتملة. نصمم أنظمتنا بحيث تكتشف وتمنع وتخفف من المخاطر،
                مما يسمح لعملائنا بالثقة في أن بنيتهم التحتية للاتصالات آمنة.
              </Typography>
            </AnimatedBox>
          </Stack>

          {/* Left Image (Reversed) */}
          <AnimatedBox direction="left">
            <Box
              flex={1}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-end" },
                position: "relative",
                mt: { xs: 8, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  height: "486px",
                  width: "150px",
                  borderRight: "1px solid #397EF5",
                  position: "relative",
                  right: "-7%",
                  zIndex: 10,
                  background:
                    "linear-gradient(270deg, #397EF5 -554.05%, #0B081F 64.53%)",
                }}
              />
              <Box sx={{ position: "relative", display: "flex" }}>
                <Image
                  src="/images/img2.svg"
                  alt="تصور هندسة الإشارة"
                  width={516}
                  height={426}
                  style={{ marginRight: "20px" }}
                />
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    height: "187px",
                    width: "187px",
                    borderRadius: "40px",
                    bgcolor: "#397EF5",
                    position: "absolute",
                    top: "10%",
                    right: 0,
                    zIndex: -1,
                  }}
                />
              </Box>
            </Box>
          </AnimatedBox>
        </Stack>

        {/* Fourth Section */}
        <Stack
          direction={{ xs: "column", lg: "row-reverse" }} // Changed to row-reverse
          spacing={{ xs: 6, md: 12 }}
          alignItems="center"
          marginTop="150px"
        >
          <AnimatedBox direction="right">
            <Box
              flex={1}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  height: "187px",
                  width: "187px",
                  borderRadius: "40px",
                  bgcolor: "#397EF5",
                  position: "absolute",
                  top: "10%",
                  zIndex: -1,
                }}
              />
              <Box sx={{ position: "relative", display: "flex" }}>
                <Image
                  src="/images/img4.svg"
                  alt="أنظمة أمان الإشارة"
                  width={516}
                  height={426}
                  style={{ marginLeft: "20px" }}
                />
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    height: "486px",
                    width: "150px",
                    borderLeft: "1px solid #397EF5",
                    position: "relative",
                    left: "-7%",
                    background:
                      "linear-gradient(90deg, #397EF5 -554.05%, #0B081F 64.53%)",
                  }}
                />
              </Box>
            </Box>
          </AnimatedBox>

          <Stack spacing={{ xs: 4, md: 6 }} flex={1}>
            <AnimatedBox direction="left">
              <Typography
                sx={{
                  color: "#397EF5",
                  opacity: 0.1,
                  fontSize: { xs: "50px", md: "90px" },
                  fontWeight: 700,
                  lineHeight: { xs: 1.2, md: "72px" },
                  mb: { xs: 2, md: 4 },
                }}
              >
                04
              </Typography>
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
                fontWeight={700}
              >
                أنظمة الوعي الموقعي
              </GradientHeading>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "25px" },
                  fontWeight: 400,
                  lineHeight: { xs: 1.5, md: "39px" },
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                نقدم أنظمة الوعي الموقعي التي تقدم بيانات ورؤى في الوقت
                الفعلي، مما يتيح اتخاذ قرارات مستنيرة وتخطيط استراتيجي. في هذه
                الأنظمة، يتم دمج مصادر بيانات متعددة لتوفير صورة شاملة
                للبيئة التشغيلية، مما يعزز الوعي الموقعي وقدرات الاستجابة.
              </Typography>
            </AnimatedBox>
          </Stack>
        </Stack>
      </Container>

      <Box sx={{ mb: "100px" }}>
        <Services />
      </Box>
      <Footer />
    </Box>
  );
};

export default OurService;
