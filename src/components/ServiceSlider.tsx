"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const ServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const services = [
    {
      title: "Custom Software Development",
      icon: "/images/simcard.svg",
    },
    {
      title: "SaaS Development",
      icon: "/images/programming-arrow.svg",
    },
    {
      title: "DevOps Services",
      icon: "/images/message-programming.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#090921]">
      <div className="max-w-[90%] h-[571px] mx-auto relative">
        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-[60px] h-[60px] rounded-full  border border-[#397EF5] flex items-center justify-center hover:bg-gray-900 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-[60px] h-[60px] rounded-full  border border-[#397EF5] flex items-center justify-center hover:bg-gray-900 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Cards Container */}
        <div className="relative h-full flex items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute w-[390px] h-[390px] transition-all duration-500 ${
                index === currentSlide
                  ? "opacity-100 z-20 scale-110"
                  : index ===
                    (currentSlide - 1 + services.length) % services.length
                  ? "opacity-50 -translate-x-[100%] -rotate-12 z-10 top-[35%]"
                  : "opacity-50 translate-x-[100%] rotate-12 z-10 top-[35%]"
              }`}
            >
              <div className="relative w-full h-full rounded-2xl p-[1px] bg-gradient-to-r from-[#29313F] via-[#397EF5] to-[#29313F]">
                <div className="w-full h-full bg-darkBlue backdrop-blur-[30px] rounded-2xl p-10  flex flex-col items-center transform transition-transform hover:scale-105">
                  <div className="p-10 rounded-[31px] bg-[#397EF5] flex items-center justify-center absolute top-[-16%]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-[25px] font-bold text-white80 text-center mt-10 w-[70%]">
                    {service.title}
                  </h3>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
                    opacity: "0.1",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
