import React from "react";
import NavHeader from "./NavbarAR";
import { Stack, Typography, Box, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";

const AboutUsBannerAR = () => {
  return (
    <Box>
      <Box className="about-us-banner">
        <NavHeader />
        <Container
          maxWidth={false}
          sx={{
            px: "0px",
            maxWidth: "1472px",
          }}
        >
          <Stack
            sx={{
              height: "calc(100vh - 164px)",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              من نحن
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "30px",
                },
                fontWeight: 400,
                mb: 2,
                color: "rgba(255, 255, 255, 0.8)",
                width: {
                  sm: "75%",
                  xs: "100%",
                },
              }}
            >
              شركة YES Solutions (أنظمة اليمامة لحلول الهندسة) هي شركة سعودية
              تنمو بسرعة في مجال حلول تقنية المعلومات من خلال اتباع مسار متخصص.
              توفر YES Solutions خدمات التصميم والتنفيذ للمشاريع غير التقليدية
              المتعلقة بالاتصالات، وتقنية المعلومات، والاتصالات اللاسلكية، وأمن
              الإشارات.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUsBannerAR;
