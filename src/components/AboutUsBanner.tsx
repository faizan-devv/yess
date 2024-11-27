import React from "react";
import NavHeader from "./NavBar";
import { Stack, Typography } from "@mui/material";
import GradientHeading from "./GradientHeading";
const AboutUsBanner = () => {
  return (
    <div>
      {" "}
      <div className="about-us-banner">
        <NavHeader />
        <div className="px-[70px]">
          <Stack
            height="calc(100vh - 164px)"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              About Us
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "30px" },
                fontWeight: 400,
                mb: 2,
              }}
              className="text-white80 w-3/4"
            >
              YES Solutions (Al Yamamah Engineering Systems Solutions) is a
              Saudi company that has been growing rapidly in IT solutions by
              following a specialized path. YES Solutions provides design and
              implementation services for non-standard projects relating to
              communications, information technology, wireless communications,
              and signal security.
            </Typography>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
