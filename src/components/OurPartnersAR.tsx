"use client";

import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";
import { motion } from "framer-motion";

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
  
  const MotionBox = motion.create(Box);
  
  const fadeInDown = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="our-clients partners-section mt-[180px] sm:mt-[100px] px-4 sm:px-6 md:px-8 lg:px-[70px]" style={{ direction: 'rtl' }}>
      <div className="flex justify-center">
        <MotionBox
          variants={fadeInDown}
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%"
            },
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <GradientHeading>شركاؤنا</GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { 
                  xs: "14px", 
                  sm: "16px", 
                  md: "20px", 
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
              نحن فخورون بالتعاون مع شركاء رائدين في الصناعة وتقديم خدماتنا لمجموعة متنوعة من العملاء القيمين. معًا، نقود الابتكار، ونحقق نتائج استثنائية، ونحقق النجاح.
            </Typography>
          </motion.div>
        </MotionBox>
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
