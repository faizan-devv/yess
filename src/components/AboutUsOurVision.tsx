import React from "react";
import { Stack, Typography, Grid2 as Grid, Box } from "@mui/material";

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
            className="gradient-border"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            sx={{
              backgroundColor: "#282D4063",
              maxWidth: "24.375rem",
              width: "100%",
              height: "19.25rem",
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
        </Grid>
        <Grid size={6}>
          <div>size=4</div>
        </Grid>
        <Grid size={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography fontSize="3.125rem" fontWeight={700} color="##FFFFFF">
              Our Vision
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
