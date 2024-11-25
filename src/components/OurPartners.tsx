"use client";

import Image from "next/image";
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";

const OurPartners = () => {
  const partners = [
    {
      url: "",

      logo: "/images/next-sense-logo.svg",
    },
    {
      url: "",
      logo: "/images/ipers-logo.svg",
    },
    {
      url: "",
      logo: "/images/Zubr-Curio.svg",
    },
    {
      url: "",
      logo: "/images/alyamama.svg",
    },
    {
      url: "",
      logo: "/images/mds-arabia.svg",
    },
  ];

  return (
    <div className="our-clients mt-[100px] px-[70px]">
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

      {/* Clients Grid */}
      <div className=" mt-[100px]">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-0">
          {partners.map((client, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full md:w-1/5"
            >
              {index !== partners.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32">
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #0B0920 6.69%, #FFFFFF 55.61%, #0B0920 96.46%)",
                    }}
                  />
                </div>
              )}

              {/* Client Logo and Text */}
              <div className="flex flex-col items-center p-6">
                <div className="w-[200px] h-[200px] mb-5 relative">
                  <Image
                    src={client.logo}
                    alt={client.url}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* <GradientHeading
                  variant="subtitle1"
                  fontSize={{ xs: "16px", md: "20px" }}
                  gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                  fontWeight={600}
                >
                  {client.name}
                </GradientHeading>
                <Typography
                  variant="subtitle1"
                  className="text-white"
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: 600,
                  }}
                >
                  {client.nameAr}
                </Typography> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
