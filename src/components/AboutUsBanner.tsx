import React from "react";
import NavHeader from "./NavBar";
import { Stack, Typography } from "@mui/material";

const AboutUsBanner = () => {
  return (
    <div>
      {" "}
      <div className="about-us-banner px-[70px]">
        <NavHeader />
        <Stack
          height="calc(100vh - 164px)"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Typography fontSize="3.75rem" fontWeight={700} color="#FFFFFF">
            About Us
          </Typography>
          <Typography
            fontSize="1.875rem"
            fontWeight={400}
            color="#FFFFFFCC"
            maxWidth="1300px"
            textAlign="center"
            letterSpacing={-1}
          >
            YES Solutions (Al Yamamah Engineering Systems Solutions) is a Saudi
            company that has been growing rapidly in IT solutions by following a
            specialized path. YES Solutions provides design and implementation
            services for non-standard projects relating to communications,
            information technology, wireless communications, and signal
            security.
          </Typography>
        </Stack>
      </div>
    </div>
  );
};

export default AboutUsBanner;
