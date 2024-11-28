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
    <div className="w-full">
      <div className="min-h-dvh lg:min-h-screen px-4 sm:px-6 md:px-8 lg:px-[70px] pt-16 sm:pt-20 lg:pt-[100px] excelence">
        <div className="flex justify-center">
          <Box sx={{ width: { xs: "90%", sm: "80%", md: "70%" } }} className="text-center">
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              Over a decade of excellence
            </GradientHeading>
            <div>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "25px", lg: "30px" },
                  fontWeight: 400,
                  mb: { xs: 1.5, sm: 2 },
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
        <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mt-12 sm:mt-16 xl:mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-[31px] ${
                index === 1 || index === 3 ? "sm:top-[20%]" : ""
              }`}
            >
              <div className="bg-[#282D4063] py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-9 w-full h-full rounded-[31px] relative border border-[#273F67]">
                <div className="p-5 sm:p-6 lg:p-7 bg-[#397EF5] rounded-xl flex items-center justify-center mb-4 absolute top-[-12%] sm:top-[-14%] lg:top-[-16%]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px]"
                  />
                </div>
                <div className="mb-5 sm:mb-6 lg:mb-7">
                  <button className="text-white70 hover:text-white transition-colors flex items-center gap-2 text-[14px] sm:text-[15px] float-end">
                    View more
                    <Image
                      src="/images/gray-arrow-right.svg"
                      alt="arrow"
                      width={14}
                      height={14}
                      className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                    />
                  </button>
                </div>

                <div className="mt-[40px] sm:mt-[48px] lg:mt-[54px]">
                  <GradientHeading
                    variant="subtitle1"
                    fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                    fontWeight={700}
                  >
                    {service.title}
                  </GradientHeading>
                </div>

                <Typography
                  variant="subtitle1"
                  className="text-white70 mt-2 sm:mt-[10px]"
                  sx={{ 
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    lineHeight: { xs: "24px", sm: "26px", md: "28px" }
                  }}
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