"use client";

import Image from "next/image";
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";

const OurClients = () => {
  const clients = [
    {
      name: "Ministry of Defence",
      nameAr: "وزارة الدفاع",
      logo: "/images/mod-logo.svg",
    },
    {
      name: "Ministry of Interior",
      nameAr: "وزارة الداخلية",
      logo: "/images/moi-logo.svg",
    },
    {
      name: "GIP",
      nameAr: "رئاسة الاستخبارات العامة",
      logo: "/images/gip-logo.svg",
    },
    {
      name: "PSS/GID",
      nameAr: "المنصة الوطنية الموحدة",
      logo: "/images/pss-logo.svg",
    },
    {
      name: "Royal Guards",
      nameAr: "الحرس الملكي",
      logo: "/images/rg-logo.svg",
    },
  ];

  return (
    <div id="clients" className="our-clients clients-section mt-[100px] px-[70px]">
      <div className="flex justify-center">
        <Box sx={{ width: "60%" }} className="text-center">
          <GradientHeading>Our Clients</GradientHeading>
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
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="relative flex flex-col items-center w-full md:w-1/5"
            >
              {index !== clients.length - 1 && (
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
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <GradientHeading
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
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
