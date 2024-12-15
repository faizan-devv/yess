"use client";

import { Typography, Box, Container, Stack, Button } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";

const ExcellenceSection = () => {
  const services = [
    {
      icon: "/images/presention-chart.svg",
      title: "Signal Engineering and Analysis Systems",
      description:
        "We develop and implement advanced systems for analyzing and managing signals. These systems enhance performance, security, and operational...",
      position: "top-0 left-0",
    },
    {
      icon: "/images/wifi.svg",
      title: "Signal Jamming Systems",
      description:
        "Our team specializes in designing and implementing platforms that protect sensitive information, whether they are based on the internet or on applications. Our solutions ensure secure...",
      position: "top-32 left-1/3",
    },
    {
      icon: "/images/security-safe.svg",
      title: "Signal Security Systems",
      description:
        "We develop and implement advanced systems for analyzing and managing signals. These systems enhance performance, security, and operational efficiency by providing reliable and...",
      position: "top-0 right-1/3",
    },
    {
      icon: "/images/user-octagon.svg",
      title: "Situational Awareness Systems",
      description:
        "We provide situational awareness systems that deliver real-time data and insights, enabling informed decision-making and strategic planning. In these systems...",
      position: "top-32 right-0",
    },
  ];

  return (
    <Box
      className="excelence-container"
      sx={{ width: "100%", overflow: "hidden" }}
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
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", md: "70%" },
              textAlign: "center",
            }}
          >
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              Over a decade of excellence
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px", lg: "30px" },
                fontWeight: 400,
                mb: { xs: 1.5, sm: 2 },
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
             
Developing a multi-layered software platform that includes a geographic information system, highly advanced data analysis tools for security purposes, and integration between multiple situational awareness sensors and their various means of communication that have been used for over 13 years in Kingdom.
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
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
                      float: "right",
                    }}
                  >
                    View more
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
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
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
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
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
