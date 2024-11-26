"use client";

import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";

const OurPartners = () => {
  const partners = [
    { url: "", logo: "/images/next-sense-logo.svg" },
    { url: "", logo: "/images/IPeraLogo.svg" },
    { url: "", logo: "/images/Zubr-Curio.svg" },
    { url: "", logo: "/images/alyamama.svg" },
    { url: "", logo: "/images/mds-arabia.svg" },
    { url: "", logo: "/images/thep.svg" },
  ];

  return (
    <div className="our-clients partners-section mt-[100px] px-[70px]">
      <div className="flex justify-center">
        <Box sx={{ width: "60%" }} className="text-center">
          <GradientHeading>Our Partners</GradientHeading>
          <div className="">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "30px" },
                fontWeight: 400,
                mb: 2,
              }}
              className="text-white80"
            >
              Saudi Vision 2030 empowers us to drive innovation and shape the
              future of technology in the Kingdom
            </Typography>
          </div>
        </Box>
      </div>

      {/* Scrolling Partners */}
      <div className="mt-[100px] relative w-full overflow-hidden">
        <div className="partners-slider">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-item w-[20%] flex-shrink-0 px-2"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-[180px] h-[180px] relative">
                  <Image
                    src={partner.logo}
                    alt={partner.url}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate Items for Infinite Scrolling */}
          {partners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="partner-item w-[15%] flex-shrink-0 px-2"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-[180px] h-[180px] relative">
                  <Image
                    src={partner.logo}
                    alt={partner.url}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
