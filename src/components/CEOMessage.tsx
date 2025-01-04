"use client";
import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GradientHeading from "./GradientHeading";
import { motion } from "framer-motion";

const CEOMessage = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: "easeOut" }
  //   }
  // };

  const MotionBox = motion.create(Box);
  const MotionTypography = motion(Typography);
  const MotionStack = motion(Stack);

  return (
    <Box
      sx={{
        px: { xs: 2, md: "0px" },
        py: { xs: 4, md: "95px" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1472px",
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <MotionStack
              spacing={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
                CEO Message
              </GradientHeading>
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "50px" },
                }}
              >
                Digital Saudia
              </GradientHeading>
              <MotionTypography
                variants={fadeInLeft}
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "25px"},
                  fontWeight: 400,
                  letterSpacing: -1,
                  color: "#FFFFFFCC",
                  maxWidth: "762px",
                }}
              >
                Our mission at YES Solutions in today's digital world is to
                rethink business models, transform organizations, and
                revolutionize how businesses are run With our in-house
                capabilities and partnerships with specialized companies
                worldwide, we provide technology and sustainability solutions of
                the highest quality. Our systems integrator approach ensures
                credibility and trust with our clients by developing our own
                databases and software. By focusing on technology localization,
                we have created a level of support that is unmatched in the
                industry, allowing us to offer tailored solutions that meet the
                specific and true needs of our clients.
              </MotionTypography>
            </MotionStack>
          </Grid>
          <Grid item xs={12} md={4}>
            <MotionBox
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  background:
                    "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                  maxWidth: "395px",
                  width: "100%",
                  height: "462px",
                  borderRadius: "31px",
                  mt: { xs: 4, md: "100px" },
                }}
              >
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  sx={{
                    position: "absolute",
                    bottom: 50,
                    right: -24,
                    zIndex: 10,
                    "& > div": {
                      position: "absolute",
                      bottom: -30,
                      right: {
                        xs:"0",
                        sm:"-90px",
                        md:"0",
                        xl:"-90px"
                      },
                      height: 67,
                      width: 302,
                    },
                  }}
                >
                  <Box>
                    <Image
                      src="/images/ceo-name2.svg"
                      height="67"
                      width={302}
                      alt="ceo-img"
                    />
                  </Box>
                </MotionBox>

                <MotionBox
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  sx={{
                    position: "absolute",
                    top: 2,
                    left: 2,
                    backgroundColor: "#282D40",
                    maxWidth: "391px",
                    width: "100%",
                    height: "460px",
                    borderRadius: "31px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#282D40",
                      maxWidth: "391px",
                      width: "100%",
                      height: "457px",
                      borderRadius: "31px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src="/images/ceo-img.svg"
                        alt="ceo-img"
                        layout="fill"
                        objectFit="cover"
                      />
                    </Box>
                  </Box>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  sx={{
                    position: "absolute",
                    zIndex: -1,
                    top: -20,
                    left: 24,
                    maxWidth: "388px",
                    width: "100%",
                    height: "457px",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      background:
                        "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                      maxWidth: "388px",
                      width: "100%",
                      height: "457px",
                      borderRadius: "31px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 2,
                        left: 2,
                        backgroundColor: "#0A081F",
                        maxWidth: "384px",
                        width: "100%",
                        height: "457px",
                        borderRadius: "31px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#282D4063",
                          maxWidth: "386px",
                          width: "100%",
                          height: "457px",
                          borderRadius: "31px",
                        }}
                      />
                    </Box>
                  </Box>
                </MotionBox>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CEOMessage;
