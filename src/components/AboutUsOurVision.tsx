import React from "react";
import { Stack, Typography, Grid2 as Grid, Box } from "@mui/material";
import Image from "next/image";

const AboutUsOurVisionBanner = () => {
  return (
    <Box className="px-[70px] pb-[95px]">
      <Grid rowSpacing={12} container>
        <Grid size={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography fontSize="3.125rem" fontWeight={700} color="##FFFFFF">
              Our Vision
            </Typography>
            <Typography
              pb="4rem"
              fontSize="1.563rem"
              fontWeight={400}
              color="#FFFFFFCC"
              maxWidth="638px"
              letterSpacing={-1}
            >
              Empowered by Vision 2030, we aim to become a leading national hub
              for knowledge transfer in emerging technologies such as artificial
              intelligence, blockchain, the Internet of Things, and big data
              analytics.
            </Typography>
            <Typography
              fontSize="1.563rem"
              fontWeight={400}
              color="#FFFFFFCC"
              maxWidth="638px"
              letterSpacing={-1}
            >
              Our mission is to set new benchmarks for efficiency and
              competitiveness across all sectors, while implementing smart
              solutions that enhance the quality of life for citizens and drive
              the adoption of advanced technologies in cities throughout the
              Kingdom of Saudi Arabia.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              sx={{
                background:
                  "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                maxWidth: "395px",
                width: "100%",
                height: "325px",
                borderRadius: "31px",
              }}
            >
              <Box
                position="absolute"
                sx={{
                  top: 2,
                  left: 2,
                  backgroundColor: "#0A081F",
                  maxWidth: "391px",
                  width: "100%",
                  height: "321px",
                  borderRadius: "31px",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor: "#282D4063",
                    maxWidth: "391px",
                    width: "100%",
                    height: "321px",
                    borderRadius: "31px",
                  }}
                >
                  <Typography
                    textAlign="center"
                    fontSize="1.563rem"
                    fontWeight={700}
                    color="#FFFFFF"
                  >
                    Innovative technologies transforming cities across the KSA
                  </Typography>
                </Box>
              </Box>
              <Box
                position="absolute"
                sx={{
                  top: -60,
                  left: 132,
                  backgroundColor: "#397EF5",
                  maxWidth: "120px",
                  width: "100%",
                  height: "120px",
                  borderRadius: "31px",
                  border: "1px solid #397EF5",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={"/images/buliding.svg"}
                  alt={"building-icon"}
                  width={40}
                  height={40}
                />
              </Box>
              <Box
                position="absolute"
                zIndex="-1"
                sx={{
                  top: -20,
                  left: 24,
                  maxWidth: "388px",
                  width: "100%",
                  height: "365px",
                }}
              >
                <Box
                  position="relative"
                  sx={{
                    top: 0,
                    left: 0,
                    background:
                      "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                    maxWidth: "388px",
                    width: "100%",
                    height: "365px",
                    borderRadius: "31px",
                  }}
                >
                  <Box
                    position="absolute"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      top: 2,
                      left: 2,
                      backgroundColor: "#0A081F",
                      maxWidth: "384px",
                      width: "100%",
                      height: "362px",
                      borderRadius: "31px",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        top: 2,
                        left: 2,
                        backgroundColor: "#282D4063",
                        maxWidth: "386px",
                        width: "100%",
                        height: "363px",
                        borderRadius: "31px",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={6}>
          <Stack>
            <Stack>
              <Box
                display="flex"
                justifyContent="start"
                alignItems="center"
                height="100%"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                  sx={{
                    background:
                      "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                    maxWidth: "395px",
                    width: "100%",
                    height: "325px",
                    borderRadius: "31px",
                  }}
                >
                  <Box
                    position="absolute"
                    sx={{
                      top: 2,
                      left: 2,
                      backgroundColor: "#0A081F",
                      maxWidth: "391px",
                      width: "100%",
                      height: "321px",
                      borderRadius: "31px",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        backgroundColor: "#282D4063",
                        maxWidth: "391px",
                        width: "100%",
                        height: "321px",
                        borderRadius: "31px",
                      }}
                    >
                      <Typography
                        textAlign="center"
                        fontSize="1.563rem"
                        fontWeight={700}
                        color="#FFFFFF"
                      >
                        Our mission is to understand and address the unique
                        challenges
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    position="absolute"
                    sx={{
                      top: -60,
                      left: 132,
                      backgroundColor: "#397EF5",
                      maxWidth: "120px",
                      width: "100%",
                      height: "120px",
                      borderRadius: "31px",
                      border: "1px solid #397EF5",
                    }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={"/images/buildings-2.svg"}
                      alt={"jdsk"}
                      width={40}
                      height={40}
                    />
                  </Box>
                  <Box
                    position="absolute"
                    zIndex="-1"
                    sx={{
                      top: -20,
                      left: 24,
                      maxWidth: "388px",
                      width: "100%",
                      height: "365px",
                    }}
                  >
                    <Box
                      position="relative"
                      sx={{
                        top: 0,
                        left: 0,
                        background:
                          "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                        maxWidth: "388px",
                        width: "100%",
                        height: "365px",
                        borderRadius: "31px",
                      }}
                    >
                      <Box
                        position="absolute"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                          top: 2,
                          left: 2,
                          backgroundColor: "#0A081F",
                          maxWidth: "384px",
                          width: "100%",
                          height: "362px",
                          borderRadius: "31px",
                        }}
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            top: 2,
                            left: 2,
                            backgroundColor: "#282D4063",
                            maxWidth: "386px",
                            width: "100%",
                            height: "363px",
                            borderRadius: "31px",
                          }}
                        ></Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography fontSize="3.125rem" fontWeight={700} color="##FFFFFF">
              Our Mission
            </Typography>
            <Typography
              fontSize="1.563rem"
              fontWeight={400}
              color="#FFFFFFCC"
              maxWidth="638px"
              letterSpacing={-1}
            >
              Our mission is to deeply understand the unique challenges and
              opportunities of local businesses, enabling us to deliver truly
              customized solutions that are effective, sustainable, and
              scalable. Our solutions are fully adaptable, vendor-neutral, and
              specifically tailored to meet customer needs. We aim to streamline
              processes, enhance security, and open new market opportunities to
              help you achieve your goals
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsOurVisionBanner;
