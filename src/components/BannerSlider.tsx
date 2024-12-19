import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import NavHeader from "./NavBar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const sliderContent = [
  {
    title: "Custom Software Development",
    description:
      "We develop high-performance, tailor-made software solutions for businesses that require more than standard applications. Our bespoke software services provide robust, scalable solutions designed to boost operational efficiency and drive growth.",
    image: "/images/service1.svg",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Comprehensive enterprise solutions that streamline operations, enhance productivity, and drive digital transformation across your organization.",
    image: "/images/service2.svg",
  },
  {
    title: "Over a decade of excellence",
    description:
      "Developing a multi-layered software platform that includes a geographic information system, highly advanced data analysis tools for security purposes, and integration between multiple situational awareness sensors and their various means of communication that have been used for over 13 years in Kingdom.",
    image: "/images/service3.svg",
  },
  {
    title: "AR and VR Solutions",
    description:
      " Our AR and VR solutions create immersive environments for training, marketing, and entertainment, revolutionizing user experiences.",
    image: "/images/service4.svg",
  },
  {
    title: "Cloud Services",
    description:
      "Scalable and secure cloud solutions that enable business agility, reduce costs, and improve collaboration across teams.",
    image: "/images/cloud.svg",
  },
  {
    title: " In-House Software Development",
    description:
      "We focus on creating open architecture systems with customized solutions. Our proprietary multi layer software delivers precise, localized support, enabling clients to achieve fast and flexible results.",
    image: "/images/service6.svg",
  },
  {
    title: "Migration Services",
    description:
      "Our specialized migration services ensure seamless data and application transitions to new platforms, minimizing downtime and maintaining data integrity.",
    image: "/images/service7.svg",
  },
];

const CustomSlider = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box sx={{ position: "relative", height: "576px", bgcolor: "#0A081F" }}>
       <Box
        sx={{
          position: "absolute",
          zIndex: "20",
          width: "100%",
          top: 0,
        }}
      >
        <NavHeader />
      </Box>
      <Swiper
        modules={[Navigation]}
        speed={1000}
        loop={true}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        onSwiper={setSwiper as any}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {sliderContent.map((slide, index) => (
          <SwiperSlide key={index} className="h-[576px]">
            <Container
              maxWidth={false}
              sx={{
                maxWidth: "100%",
                px: { xs: 0 },
                pl: { xs: 0 },
                height: "100%",
                position: "relative",
              }}
              disableGutters
            >
              {/* <Box
                sx={{
                  position: "absolute",
                  zIndex: "10",
                  width: "100%",
                }}
              >
                <NavHeader />
              </Box> */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  height: "100%",
                }}
              >
                {/* Content Column */}
                <Box
                  sx={{
                    padding: "48px",
                    display: "flex",
                    alignItems: "center",
                    order: index % 2 === 1 ? 2 : 1,
                  }}
                  className={`${
                    index % 2 === 1 ? "justify-self-end pr-[70px]" : "pl-[70px]"
                  }`}
                >
                  <Box sx={{ maxWidth: "645px", py: "100px" }}>
                    <Box
                      component="h2"
                      sx={{
                        fontSize: "50px",
                        fontWeight: 700,
                        lineHeight: "72px",
                        letterSpacing: "-0.01em",
                        color: "#fff",
                        marginBottom: "24px",
                        transition: "all 0.7s",
                        transform:
                          index === activeIndex
                            ? "translateY(0)"
                            : "translateY(2rem)",
                        opacity: index === activeIndex ? 1 : 0,
                      }}
                    >
                      {slide.title}
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        fontSize: "25px",
                        fontWeight: 400,
                        lineHeight: "39px",
                        letterSpacing: "-0.01em",
                        color: "#E5E7EB",
                        transition: "all 0.7s",
                        transform:
                          index === activeIndex
                            ? "translateY(0)"
                            : "translateY(2rem)",
                        opacity: index === activeIndex ? 1 : 0,
                      }}
                    >
                      {slide.description}
                    </Box>
                  </Box>
                </Box>

                {/* Image Column */}
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    order: index % 2 === 1 ? 1 : 2,
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="relative w-[30%] h-full">
                    <Image
                      src="/images/shade.svg"
                      alt={slide.title}
                      fill
                      className={`absolute w-full h-full object-cover ${
                        index % 2 === 1 ? "shade-image-odd" : "shade-image-even"
                      }`}
                    />
                  </div>
                </Box>
              </Box>
            </Container>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <Box
          className="custom-prev-button swiper-button-prev"
          aria-label="Previous slide"
          sx={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
            padding: "8px",
            borderRadius: "9999px",
            transition: "all",
            height: "80px",
            width: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Box>
        <Box
          className="custom-next-button swiper-button-next"
          aria-label="Next slide"
          sx={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
            padding: "8px",
            borderRadius: "9999px",
            transition: "all",
            height: "80px",
            width: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Box>

        {/* Custom Pagination */}
        <Box
          sx={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            display: "flex",
            gap: "8px",
          }}
        >
          {sliderContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                swiper?.slideTo(index + 1);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </Box>
      </Swiper>
    </Box>
  );
};

export default CustomSlider;
