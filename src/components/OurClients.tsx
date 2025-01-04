"use client";
import Image from "next/image";
import { Typography, Box, Container, Stack } from "@mui/material";
import GradientHeading from "./GradientHeading";
import { motion } from "framer-motion";

const OurClients = () => {
  const clients = [
    {
      name: "Ministry of Defence",
      nameAr: "وزارة الدفاع",
      logo: "/images/mod-logo.svg",
    },
    {
      name: "Ministry of Interior",
      nameAr: "وزارة الداخلية",
      logo: "/images/moi-logo.svg",
    },
    {
      name: "GIP",
      nameAr: "رئاسة الاستخبارات العامة",
      logo: "/images/gip-logo.svg",
    },
    {
      name: "PSS/GID",
      nameAr: "المنصة الوطنية الموحدة",
      logo: "/images/pss-logo.svg",
    },
    {
      name: "Royal Guards",
      nameAr: "الحرس الملكي",
      logo: "/images/rg-logo.svg",
    },
  ];

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

  const fadeIn = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.5 
      }
    }
  };

  const MotionBox = motion.create(Box);
  const MotionStack = motion(Stack);
  const MotionTypography = motion(Typography);

  return (
    <Box 
      id="clients" 
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      sx={{
        minHeight: '100dvh',
        mt: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="our-clients clients-section blue-circle"
    >
      <Container 
        maxWidth={false}
        sx={{
          maxWidth: '1472px !important'
        }}
      >
        <MotionStack
          alignItems="center"
          variants={fadeInDown}
          sx={{
            mb: '15px',
            pt: '100px',
            position: 'relative',
          }}
          className="custom blue-circle"
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
              <GradientHeading>Our Clients</GradientHeading>
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
                We take pride in partnering with forward-thinking organizations and supporting clients who trust us to bring their visions to life. Our journey is built on collaboration, innovation, and shared success
              </MotionTypography>
            </Box>
          </MotionBox>
        </MotionStack>
        
        <MotionBox
          variants={fadeIn}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="stretch"
            sx={{
              mx: -2,
              gap: { xs: 2, sm: 3, md: 4, lg: 0 }
            }}
          >
            {clients.map((client, index) => (
              <Box
                key={client.name}
                sx={{
                  position: "relative",
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 24px)",
                    md: "calc(33.333% - 32px)",
                    lg: "20%"
                  },
                  px: 2
                }}
              >
                {index !== clients.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: "none", lg: "block" },
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "1px",
                      height: "128px",
                      "& > div": {
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(180deg, #0B0920 6.69%, #FFFFFF 55.61%, #0B0920 96.46%)"
                      }
                    }}
                  >
                    <Box />
                  </Box>
                )}

                <Stack
                  alignItems="center"
                  sx={{
                    height: "100%",
                    p: { xs: 2, sm: 2.5, md: 3 }
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: { xs: "150px", sm: "175px", md: "200px" },
                      aspectRatio: "1/1",
                      position: "relative",
                      mb: { xs: 1.5, sm: 2, md: 2.5 }
                    }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <GradientHeading
                    variant="subtitle1"
                    fontSize={{ xs: "14px", sm: "16px", md: "18px", lg: "20px" }}
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                    fontWeight={600}
                  >
                    {client.name}
                  </GradientHeading>
                  <Typography
                    variant="subtitle1"
                    className="text-white"
                    sx={{
                      fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                      fontWeight: 600
                    }}
                  >
                    {client.nameAr}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default OurClients;