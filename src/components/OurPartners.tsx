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
    <div className="our-clients partners-section mt-[180px] sm:mt-[100px] px-4 sm:px-6 md:px-8 lg:px-[70px]">
      <div className="flex justify-center">
        <Box 
          sx={{ 
            width: { 
              xs: "90%", 
              sm: "80%", 
              md: "70%", 
              lg: "60%" 
            } 
          }} 
          className="text-center"
        >
          <GradientHeading>Our Partners</GradientHeading>
          <Typography
            variant="h1"
            sx={{
              fontSize: { 
                xs: "16px", 
                sm: "18px", 
                md: "25px", 
                lg: "30px" 
              },
              fontWeight: 400,
              mb: { xs: 1.5, sm: 2 },
              lineHeight: { 
                xs: 1.4, 
                sm: 1.5, 
                md: 1.6 
              },
            }}
            className="text-white80"
          >
            Saudi Vision 2030 empowers us to drive innovation and shape the
            future of technology in the Kingdom
          </Typography>
        </Box>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] relative w-full overflow-hidden">
        <div className="partners-slider">
          {/* Original partners */}
          {partners.map((partner, index) => (
            <div
              key={`original-${index}`}
              className="partner-item w-[50%] sm:w-[33.33%] md:w-[25%] lg:w-[20%] flex-shrink-0 px-2 sm:px-3 md:px-4"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] relative">
                  <Image
                    src={partner.logo}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
                    priority={index < 4} // Prioritize loading first 4 images
                  />
                </div>
              </div>
            </div>
          ))}
          {/* Duplicated partners for infinite scroll */}
          {partners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="partner-item w-[50%] sm:w-[33.33%] md:w-[25%] lg:w-[20%] flex-shrink-0 px-2 sm:px-3 md:px-4"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] relative">
                  <Image
                    src={partner.logo}
                    alt={`Partner ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
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