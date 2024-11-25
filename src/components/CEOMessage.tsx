import React from "react";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
const CEOMessage = () => {
  return (
    <Box className="px-[70px] py-[95px]">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack>
            <Typography
              fontSize="60px"
              fontWeight={700}
              letterSpacing={-1}
              color="#FFFFFF"
            >
              CEO Message
            </Typography>
            <Typography
              fontSize="50px"
              fontWeight={700}
              letterSpacing={-1}
              color="#FFFFFF"
            >
              Digital Saudia
            </Typography>
            <Typography
              fontSize="25px"
              fontWeight={400}
              letterSpacing={-1}
              color="#FFFFFFCC"
              maxWidth="762px"
            >
              Our mission at YES Solutions in today’s digital world is to
              rethink business models, transform organizations, and
              revolutionize how businesses are run With our in-house
              capabilities and partnerships with specialized companies
              worldwide, we provide technology and sustainability solutions of
              the highest quality. Our systems integrator approach ensures
              credibility and trust with our clients by developing our own
              databases and software.By focusing on technology localization, we
              have created a level of support that is unmatched in the industry,
              allowing us to offer tailored solutions that meet the specific and
              true needs of our clients.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box position="relative">
            <Image
              src="/images/ceo.svg"
              height="414"
              width={484}
              alt="ceo-img"
            />
            <Box sx={{ bottom: 50, right: -24 }} position="absolute">
              <Image
                src="/images/ceo-name.svg"
                height="67"
                width={302}
                alt="ceo-img"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CEOMessage;
