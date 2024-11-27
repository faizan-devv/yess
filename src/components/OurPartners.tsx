"use client";
import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";

const OurPartners = () => {
  const partners = [
    { url: "", logo: "/images/partner-1.svg" },
    { url: "", logo: "/images/partner-2.svg" },
    { url: "", logo: "/images/partner-3.svg" },
    { url: "", logo: "/images/partner-4.svg" },
    { url: "", logo: "/images/partner-5.svg" },
    { url: "", logo: "/images/partner-6.svg" },
    { url: "", logo: "/images/partner-7.svg" },
    { url: "", logo: "/images/partner-8.svg" },
    { url: "", logo: "/images/partner-10.svg" },
  ];

  return (
    <div className="our-clients partners-section mt-[100px] px-[70px]">
      <div className="flex justify-center">
        <Box sx={{ width: "60%" }} className="text-center">
          <GradientHeading>Our Partners</GradientHeading>
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
        </Box>
      </div>
      
      <div className="mt-[100px] relative w-full overflow-hidden">
        <div className="partners-slider">
          {/* Original partners */}
          {partners.map((partner, index) => (
            <div
              key={`original-${index}`}
              className="partner-item w-[20%] flex-shrink-0 px-2"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-[180px] h-[180px] relative">
                  <Image
                    src={partner.logo}
                    alt={`Partner ${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
          {partners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="partner-item w-[20%] flex-shrink-0 px-2"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-[180px] h-[180px] relative">
                  <Image
                    src={partner.logo}
                    alt={`Partner ${index}`}
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