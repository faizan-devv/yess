"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    {
      title: "Blockchain Solutions",
      icon: "/images/message-programming.svg",
    },
    {
      title: "Online Marketplace Development",
      icon: "/images/message-programming.svg",
    },
    {
      title: "PWA Development",
      icon: "/images/message-programming.svg",
    },
    {
      title: "Digitalization & Transformation",
      icon: "/images/message-programming.svg",
    },
    {
      title: "AI and Machine Learning Solutions",
      icon: "/images/message-programming.svg",
    },
    {
      title: "MVP Development",
      icon: "/images/message-programming.svg",
    },
    {
      title: "UI/UX Design",
      icon: "/images/message-programming.svg",
    },
    {
      title: "Oracle-Based Services",
      icon: "/images/message-programming.svg",
    },
    {
      title: "Edge Computing Solutions",
      icon: "/images/message-programming.svg",
    },
    {
      title: "Product Discovery",
      icon: "/images/message-programming.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const getSlideStyles = (index: number) => {
    // Calculate the relative position from current slide
    const position = (index - currentSlide + services.length) % services.length;
    
    // Base styles that will be applied to all slides
    const baseStyles = {
      transition: 'all 700ms ease-in-out',
      position: 'absolute',
      width: '350px',
      height: '350px',
    };

    // Position-specific styles
    if (position === 0) { // Current slide
      return {
        ...baseStyles,
        transform: 'translateX(0) scale(1.1)',
        opacity: 1,
        zIndex: 20,
      };
    } else if (position === 1 || position === -services.length + 1) { // Next slide
      return {
        ...baseStyles,
        transform: 'translateX(calc(100% + 1rem)) rotate(12deg) translateY(30%)',
        opacity: 0.5,
        zIndex: 10,
      };
    } else if (position === -1 || position === services.length - 1) { // Previous slide
      return {
        ...baseStyles,
        transform: 'translateX(calc(-100% - 1rem)) rotate(-12deg) translateY(30%)',
        opacity: 0.5,
        zIndex: 10,
      };
    } else { // Hidden slides
      return {
        ...baseStyles,
        transform: position > 0 
          ? 'translateX(calc(200% + 8rem)) scale(0.8)' 
          : 'translateX(calc(-200% - 8rem)) scale(0.8)',
        opacity: 0,
        zIndex: -1,
      };
    }
  };

  return (
    <section className="w-full">
      <div className="max-w-[95%] h-[390px] mx-auto relative">
        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-[60px] h-[60px] rounded-full border border-[#397EF5] flex items-center justify-center hover:bg-gray-900 transition-colors z-30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-[60px] h-[60px] rounded-full border border-[#397EF5] flex items-center justify-center hover:bg-gray-900 transition-colors z-30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Cards Container */}
        <div className="relative h-full flex items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              style={getSlideStyles(index) as any}
            >
              <div className="relative w-full h-full rounded-2xl p-[1px] bg-gradient-to-br from-[#397EF5] via-[#29313F] to-[#397EF5]">
                <div className="w-full h-full bg-darkBlue backdrop-blur-[30px] rounded-2xl p-10 flex flex-col items-center">
                  <div
                    className={`p-10 rounded-[31px] flex items-center justify-center border border-[#397EF5] absolute top-[-16%] transition-colors duration-700 ${
                      index === currentSlide ? "bg-[#397EF5]" : "bg-darkBlue"
                    }`}
                  >
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
                      "linear-gradient(135deg, #397EF5 0%, #29313F 50%, #397EF5 100%)",
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