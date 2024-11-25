"use client";

import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";

const ExcellenceSection = () => {
  const services = [
    {
      icon: "/images/presention-chart.svg",
      title: "Signal Engineering and Analysis Systems",
      description:
        "We develop and implement advanced systems for analyzing and managing signals. These systems enhance performance, security, and operational...",
      position: "top-0 left-0",
    },
    {
      icon: "/images/wifi.svg",
      title: "Signal Jamming Systems",
      description:
        "Our team specializes in designing and implementing platforms that protect sensitive information, whether they are based on the internet or on applications. Our solutions ensure secure...",
      position: "top-32 left-1/3",
    },
    {
      icon: "/images/security-safe.svg",
      title: "Signal Security Systems",
      description:
        "We develop and implement advanced systems for analyzing and managing signals. These systems enhance performance, security, and operational efficiency by providing reliable and...",
      position: "top-0 right-1/3",
    },
    {
      icon: "/images/user-octagon.svg",
      title: "Situational Awareness Systems",
      description:
        "We provide situational awareness systems that deliver real-time data and insights, enabling informed decision-making and strategic planning. In these systems...",
      position: "top-32 right-0",
    },
  ];

  return (
    <div className="">
      <div className="min-h-screen pt-[100px] px-[70px] excelence">
        <div className="flex justify-center">
          <Box sx={{ width: "70%" }} className="text-center">
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              Over a decade of excellence
            </GradientHeading>
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

        {/* Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-[31px] ${
                index === 1 || index === 3 ? "top-[20%]" : ""
              }`}
            >
              <div className="bg-[#282D4063] py-6 px-9 w-full h-full rounded-[31px] relative border border-[#273F67]">
                <div className="p-7 bg-[#397EF5] rounded-xl flex items-center justify-center mb-4 absolute top-[-16%]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mb-7">
                  <button className="text-white70 hover:text-white transition-colors flex items-center gap-2 text-[15px] float-end">
                    View more
                    <Image
                      src="/images/gray-arrow-right.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>

                <div className="mt-[54px]">
                  <GradientHeading
                    variant="subtitle1"
                    fontSize={{ xs: "16px", md: "20px" }}
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                    fontWeight={700}
                  >
                    {service.title}
                  </GradientHeading>
                </div>

                <Typography
                  variant="subtitle1"
                  className="text-white70 mt-[10px]"
                  sx={{ fontSize: "16px", lineHeight: "28px" }}
                >
                  {service.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExcellenceSection;
