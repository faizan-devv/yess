import React from "react";
import { Typography, Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import GradientHeading from "./GradientHeading";

const AboutUsOurVisionBanner = () => {
  const cardStyle = {
    background: "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
    maxWidth: "395px",
    width: "100%",
    height: "325px",
    borderRadius: "31px",
  };

  const innerCardStyle = {
    backgroundColor: "#0A081F",
    maxWidth: "391px",
    width: "100%",
    height: "321px",
    borderRadius: "31px",
  };

  const overlayCardStyle = {
    backgroundColor: "#282D4063",
    maxWidth: "391px",
    width: "100%",
    height: "321px",
    borderRadius: "31px",
    paddingInline: "25px",
  };

  const iconBoxStyle = {
    backgroundColor: "#397EF5",
    maxWidth: "120px",
    width: "100%",
    height: "120px",
    borderRadius: "31px",
    border: "1px solid #397EF5",
  };

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1472px", padding:"0" }}>
      <Box sx={{ px: { xs: "20px", md: "0px" } }}>
        <Stack 
          direction={{ xs: "column", sm: "row" }}
          spacing={0}
          sx={{ 
            pb: "95px",
            pt: "40px",
            position: "relative"
          }}
        >
          {/* Left Column */}
          <Box 
            sx={{
              flex: 1,
              borderRight: { xs: "none", sm: "1px solid #454545" },
              position: "relative"
            }}
          >
            <Box>
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
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: { sm: "90%" }
                }}
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
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: { sm: "90%" }
                }}
              >
                Our mission is to set new benchmarks for efficiency and
                competitiveness across all sectors, while implementing smart
                solutions that enhance the quality of life for citizens and drive
                the adoption of advanced technologies in cities throughout the
                Kingdom of Saudi Arabia.
              </Typography>
            </Box>

            {/* First Card */}
            <Box sx={{ mt: "140px", position: "relative" }}>
              <Box sx={cardStyle} display="flex" justifyContent="center" alignItems="center" position="relative">
                <Box position="absolute" sx={innerCardStyle}>
                  <Box display="flex" alignItems="center" sx={overlayCardStyle}>
                    <GradientHeading
                      gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                      fontSize={{ xs: "20px", md: "25px" }}
                      sx={{ width: "89%" }}
                    >
                      Our mission is to understand and address the unique challenges
                    </GradientHeading>
                  </Box>
                </Box>
                {/* Icon Box */}
                <Box
                  position="absolute"
                  sx={{
                    ...iconBoxStyle,
                    top: -60,
                    left: "6%",
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src="/images/buildings-2.svg"
                    alt="buildings"
                    width={40}
                    height={40}
                  />
                </Box>
                {/* Shadow Card */}
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
                      ...cardStyle,
                      maxWidth: "388px",
                      height: "365px",
                      opacity: 0.2,
                    }}
                  >
                    <Box
                      position="absolute"
                      sx={{
                        ...innerCardStyle,
                        maxWidth: "384px",
                        height: "362px",
                      }}
                    >
                      <Box
                        sx={{
                          ...overlayCardStyle,
                          maxWidth: "386px",
                          height: "363px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Second Card */}
            <Box>
              <Box
                display="flex"
                alignItems="center"
                position="relative"
                sx={{
                  ...cardStyle,
                  background: "linear-gradient(222deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                  left: { xs: "0%", xl: "37%" },
                  bottom: { xs: "0px", xl: "167px" }
                }}
              >
                <Box position="absolute" sx={innerCardStyle}>
                  <Box display="flex" alignItems="center" sx={overlayCardStyle}>
                    <GradientHeading
                      gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                      fontSize={{ xs: "20px", md: "25px" }}
                      sx={{ width: "89%" }}
                    >
                      New market opportunities to help you achieve your goals
                    </GradientHeading>
                  </Box>
                </Box>
                {/* Icon Box */}
                <Box
                  position="absolute"
                  sx={{
                    ...iconBoxStyle,
                    top: -60,
                    right: "6%",
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src="/images/trend-up.svg"
                    alt="trend"
                    width={40}
                    height={40}
                  />
                </Box>
                {/* Shadow Card */}
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
                      ...cardStyle,
                      background: "linear-gradient(222deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                      maxWidth: "388px",
                      height: "365px",
                      opacity: 0.2,
                    }}
                  >
                    <Box
                      position="absolute"
                      sx={{
                        ...innerCardStyle,
                        maxWidth: "384px",
                        height: "362px",
                      }}
                    >
                      <Box
                        sx={{
                          ...overlayCardStyle,
                          maxWidth: "386px",
                          height: "363px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Column */}
          <Box sx={{ flex: 1 }}>
            <Box display="flex" justifyContent="center">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
                sx={{
                  ...cardStyle,
                  mb: "140px"
                }}
              >
                <Box position="absolute" sx={innerCardStyle}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={overlayCardStyle}
                  >
                    <GradientHeading
                      gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                      fontSize={{ xs: "20px", md: "25px" }}
                      sx={{ width: "89%", textAlign: "center" }}
                    >
                      Innovative technologies transforming cities across the KSA
                    </GradientHeading>
                  </Box>
                </Box>
                {/* Icon Box */}
                <Box
                  position="absolute"
                  sx={{
                    ...iconBoxStyle,
                    top: -60,
                    left: 132,
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src="/images/buliding.svg"
                    alt="building-icon"
                    width={40}
                    height={40}
                  />
                </Box>
                {/* Shadow Card */}
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
                      ...cardStyle,
                      maxWidth: "388px",
                      height: "365px",
                      opacity: 0.2,
                    }}
                  >
                    <Box
                      position="absolute"
                      sx={{
                        ...innerCardStyle,
                        maxWidth: "384px",
                        height: "362px",
                      }}
                    >
                      <Box
                        sx={{
                          ...overlayCardStyle,
                          maxWidth: "386px",
                          height: "363px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ pl: { sm: "70px" } }}>
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
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "90%"
                }}
              >
                Our mission is to deeply understand the unique challenges and
                opportunities of local businesses, enabling us to deliver truly
                customized solutions that are effective, sustainable, and
                scalable. Our solutions are fully adaptable, vendor-neutral, and
                specifically tailored to meet customer needs. We aim to streamline
                processes, enhance security, and open new market opportunities to
                help you achieve your goals
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutUsOurVisionBanner;