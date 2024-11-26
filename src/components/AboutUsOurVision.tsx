import React from "react";
import {Typography, Box } from "@mui/material";
import Image from "next/image";
import GradientHeading from "./GradientHeading";

const AboutUsOurVisionBanner = () => {
  return (
    <Box className="px-[70px]">
      <div className="grid grid-cols-2 pb-[95px] pt-5 justify-center">
        <div className="border-r border-[#454545] relative">
          <div className="">
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "30px", md: "50px" }}
            >
              Our Vision
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 400,
                mb: 2,
              }}
              className="text-white80 max-w-[90%]"
            >
              Empowered by Vision 2030, we aim to become a leading national hub
              for knowledge transfer in emerging technologies such as artificial
              intelligence, blockchain, the Internet of Things, and big data
              analytics.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 400,
              }}
              className="text-white80 max-w-[90%]"
            >
              Our mission is to set new benchmarks for efficiency and
              competitiveness across all sectors, while implementing smart
              solutions that enhance the quality of life for citizens and drive
              the adoption of advanced technologies in cities throughout the
              Kingdom of Saudi Arabia.
            </Typography>
          </div>
          <Box>
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
                marginTop: "140px",
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
                  alignItems="center"
                  sx={{
                    backgroundColor: "#282D4063",
                    maxWidth: "391px",
                    width: "100%",
                    height: "321px",
                    borderRadius: "31px",
                    paddingInline: "25px",
                  }}
                >
                  <GradientHeading
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                    fontSize={{ xs: "320px", md: "25px" }}
                    sx={{ width: "89%" }}
                  >
                    Our mission is to understand and address the unique
                    challenges
                  </GradientHeading>
                </Box>
              </Box>
              <Box
                position="absolute"
                sx={{
                  top: -60,
                  left: "6%",
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
                  right: 24,
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
                    opacity: 0.2,
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

          <Box>
            <Box
              display="flex"
              alignItems="center"
              position="relative"
              sx={{
                background:
                  "linear-gradient(222deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                maxWidth: "395px",
                width: "100%",
                height: "325px",
                borderRadius: "31px",
                left: "37%",
                bottom: "167px",
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
                  alignItems="center"
                  sx={{
                    backgroundColor: "#282D4063",
                    maxWidth: "391px",
                    width: "100%",
                    height: "321px",
                    borderRadius: "31px",
                    paddingInline: "25px",
                  }}
                >
                  <GradientHeading
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                    fontSize={{ xs: "320px", md: "25px" }}
                    sx={{ width: "89%" }}
                  >
                    New market opportunities to help you achieve your goals
                  </GradientHeading>
                </Box>
              </Box>
              <Box
                position="absolute"
                sx={{
                  top: -60,
                  right: "6%",
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
                  src={"/images/trend-up.svg"}
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
                      "linear-gradient(222deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                    maxWidth: "388px",
                    width: "100%",
                    height: "365px",
                    borderRadius: "31px",
                    opacity: 0.2,
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
        </div>
        <div className="">
          <Box display="flex" justifyContent="center">
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
                marginBottom: "140px",
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
                  <GradientHeading
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                    fontSize={{ xs: "320px", md: "25px" }}
                    sx={{ width: "89%", textAlign:"center" }}
                  >
                    Innovative technologies transforming cities across the KSA
                  </GradientHeading>
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
                    opacity: 0.2,
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
          <div className="pl-[70px]">
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "30px", md: "50px" }}
            >
              Our Mission
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 400,
                mb: 2,
              }}
              className="text-white80 max-w-[90%]"
            >
              Our mission is to deeply understand the unique challenges and
              opportunities of local businesses, enabling us to deliver truly
              customized solutions that are effective, sustainable, and
              scalable. Our solutions are fully adaptable, vendor-neutral, and
              specifically tailored to meet customer needs. We aim to streamline
              processes, enhance security, and open new market opportunities to
              help you achieve your goals
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AboutUsOurVisionBanner;
