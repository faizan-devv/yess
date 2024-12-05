import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GradientHeading from "./GradientHeading";

const CEOMessage = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: "0px" },
        py: { xs: 4, md: "95px" },
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1472px",
          position: "relative"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
                CEO Message
              </GradientHeading>
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                sx={{
                  fontSize: { xs: "30px", md: "50px" }
                }}
              >
                Digital Saudia
              </GradientHeading>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "25px" },
                  fontWeight: 400,
                  letterSpacing: -1,
                  color: "#FFFFFFCC",
                  maxWidth: "762px"
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
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
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
                  mt: { xs: 4, md: "100px" }
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 50,
                    right: -24,
                    zIndex: 10,
                    "& > div": {
                      position: "absolute",
                      bottom: -30,
                      right: -90,
                      height: 67,
                      width: 302
                    }
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
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 2,
                    left: 2,
                    backgroundColor: "#282D40",
                    maxWidth: "391px",
                    width: "100%",
                    height: "460px",
                    borderRadius: "31px"
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
                      overflow: "hidden"
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
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
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: -1,
                    top: -20,
                    left: 24,
                    maxWidth: "388px",
                    width: "100%",
                    height: "457px"
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      top: 0,
                      left: 0,
                      background:
                        "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                      maxWidth: "388px",
                      width: "100%",
                      height: "457px",
                      borderRadius: "31px",
                      opacity: 0.2
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
                        borderRadius: "31px"
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          top: 2,
                          left: 2,
                          backgroundColor: "#282D4063",
                          maxWidth: "386px",
                          width: "100%",
                          height: "457px",
                          borderRadius: "31px"
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CEOMessage;