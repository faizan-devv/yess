"use client";

import { Typography, Box, Container, Stack, Button } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";
import { motion } from "framer-motion";

const ExcellenceSection = () => {
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
        ease: "easeOut",
      },
    },
  };

  // Create motion components
  const MotionBox = motion.create(Box);
  const services = [
    {
      icon: "/images/presention-chart.svg",
      title: "أنظمة هندسة وتحليل الإشارة",
      description:
        "نقوم بتطوير وتنفيذ أنظمة متقدمة لتحليل وإدارة الإشارات. تعزز هذه الأنظمة الأداء والأمان والكفاءة التشغيلية...",
      position: "top-0 left-0",
    },
    {
      icon: "/images/wifi.svg",
      title: "أنظمة التشويش على الإشارات",
      description:
        "فريقنا متخصص في تصميم وتنفيذ منصات تحمي المعلومات الحساسة، سواء كانت على الإنترنت أو على التطبيقات. حلولنا تضمن الأمان...",
      position: "top-32 left-1/3",
    },
    {
      icon: "/images/security-safe.svg",
      title: "أنظمة أمان الإشارة",
      description:
        "نقوم بتطوير وتنفيذ أنظمة متقدمة لتحليل وإدارة الإشارات. تعزز هذه الأنظمة الأداء والأمان والكفاءة التشغيلية عن طريق توفير حلول موثوقة...",
      position: "top-0 right-1/3",
    },
    {
      icon: "/images/user-octagon.svg",
      title: "أنظمة الوعي الموقعي",
      description:
        "نقدم أنظمة الوعي الموقعي التي تقدم بيانات ورؤى في الوقت الفعلي، مما يمكّن من اتخاذ قرارات مستنيرة وتخطيط استراتيجي. في هذه الأنظمة...",
      position: "top-32 right-0",
    },
  ];

  return (
    <Box
      className="excelence-container"
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      sx={{ width: "100%", overflow: "hidden", direction: "rtl" }}  // RTL Support
    >
      <Container
        maxWidth={false}
        sx={{
          minHeight: { xs: "100dvh", lg: "100vh" },
          px: { xs: 2, sm: 0 },
          pt: { xs: "64px", sm: "80px", lg: "100px" },
          maxWidth: "1472px",
          className: "excelence",
        }}
      >
        <Stack alignItems="center" className="blue-circle">
          <MotionBox
            variants={fadeInDown}
            sx={{
              width: {
                xs: "90%",
                md: "80%",
                lg: "70%",
              },
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
                أكثر من عقد من التميز
              </GradientHeading>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "20px",
                    lg: "25px",
                    xl: "30",
                  },
                  fontWeight: 400,
                  mb: { xs: 1.5, sm: 2 },
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                تطوير منصة برمجية متعددة الطبقات تشمل نظام معلومات جغرافي، وأدوات تحليل بيانات متقدمة للأغراض الأمنية، ودمج بين أجهزة الاستشعار المتعددة للوعي الموقعي ووسائل الاتصال المختلفة التي تم استخدامها لأكثر من 13 عامًا في المملكة.
              </Typography>
            </motion.div>
          </MotionBox>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 4, sm: 6, lg: 8 },
            mt: { xs: 6, sm: 8, xl: 10 },
            position: "relative",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                borderRadius: "31px",
                ...(index === 1 || index === 3
                  ? {
                      top: { sm: "20%" },
                    }
                  : {}),
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(40, 45, 64, 0.39)",
                  py: { xs: 2, sm: 2.5, lg: 3 },
                  px: { xs: 3, sm: 3.5, lg: 4.5 },
                  width: "100%",
                  height: "100%",
                  borderRadius: "31px",
                  position: "relative",
                  border: "1px solid #273F67",
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2.5, sm: 3, lg: 3.5 },
                    bgcolor: "#397EF5",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    position: "absolute",
                    top: { xs: "-12%", sm: "-14%", lg: "-16%" },
                  }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                  />
                </Box>

                <Box sx={{ mb: { xs: 2.5, sm: 3, lg: 3.5 } }}>
                  <Button
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      "&:hover": { color: "white" },
                      transition: "colors",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: { xs: "14px", sm: "15px" },
                      float: "left",  // Adjust button to the left for RTL
                    }}
                  >
                    عرض المزيد
                    <Image
                      src="/images/gray-arrow-right.svg"
                      alt="arrow"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    />
                  </Button>
                </Box>

                <Box sx={{ mt: { xs: "40px", sm: "48px", lg: "54px" } }}>
                  <GradientHeading
                    variant="subtitle1"
                    sx={{
                      fontSize: { xs: "13px", sm: "14px", md: "20px" },
                      fontWeight: 700,
                    }}
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                  >
                    {service.title}
                  </GradientHeading>
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    mt: { xs: 1, sm: 1.25 },
                    fontSize: { xs: "12px", sm: "13px", md: "16px" },
                    lineHeight: { xs: "24px", sm: "26px", md: "28px" },
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExcellenceSection;
