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
      description:
        "We develop high-performance, tailor-made software solutions for businesses that require more than standard applications. Our bespoke software services provide robust, scalable solutions designed to boost operational efficiency and drive growth.",
    },
    {
      title: "SaaS Development",
      icon: "/images/programming-arrow.svg",
      description:
        "Thinking about transitioning to the cloud? Our SaaS development services offer cost-efective, scalable solutions. We help you lead your industry by improving accessibility, lowering costs, and enhancing user experience with our SaaS applications.",
    },
    {
      title: "DevOps Services",
      icon: "/images/message-programming.svg",
      description:
        "Our DevOps services streamline IT processes and reduce costs. By providing seamless IT infrastructure monitoring and integration, we boost the effciency and reliability of your IT environment.",
    },
    {
      title: "Blockchain Solutions",
      icon: "/images/message-programming.svg",
      description:
        "Our Blockchain solutions enhance security and transparency. By leveraging decentralized technology, we enable efficient, tamper-proof transactions and streamlined processes for your business.",
    },
    {
      title: "Online Marketplace Development",
      icon: "/images/message-programming.svg",
      description:
        "Online Marketplace Development enables businesses to build scalable platforms that connect buyers and sellers effortlessly. With intuitive interfaces and advanced features, these marketplaces foster growth and enhance user engagement.",
    },
    {
      title: "PWA Development",
      icon: "/images/message-programming.svg",
      description:
        "PWA Development delivers fast, reliable, and engaging web applications that function seamlessly across devices. By combining the best of web and mobile experiences, it ensures improved performance and user retention.",
    },
    {
      title: "Digitalization & Transformation",
      icon: "/images/message-programming.svg",
      description:
        "Digitalization & Transformation revolutionizes business operations by integrating modern technologies and workflows. This approach enhances efficiency, drives innovation, and positions organizations for sustainable growth in a digital-first world.",
    },
    {
      title: "AI and Machine Learning Solutions",
      icon: "/images/message-programming.svg",
      description:
        "AI and Machine Learning Solutions harness the power of data to deliver intelligent automation and predictive insights. These technologies optimize decision-making, enhance user experiences, and drive innovation across industries.",
    },
    {
      title: "MVP Development",
      icon: "/images/message-programming.svg",
      description:
        "MVP Development focuses on creating a functional prototype to validate ideas quickly and cost-effectively. This approach accelerates market entry, gathers user feedback, and lays the foundation for scalable product growth.",
    },
    {
      title: "UI/UX Design",
      icon: "/images/message-programming.svg",
      description:
        "UI/UX Design crafts intuitive and visually appealing interfaces that enhance user engagement. By prioritizing functionality and aesthetics, it ensures seamless interactions and a satisfying user experience across platforms.",
    },
    {
      title: "Oracle-Based Services",
      icon: "/images/message-programming.svg",
      description:
        "Oracle-Based Services provide robust database solutions and enterprise-grade applications to streamline business processes. These services enhance data management, scalability, and operational efficiency for organizations of all sizes.",
    },
    {
      title: "Edge Computing Solutions",
      icon: "/images/message-programming.svg",
      description:
        "Edge Computing Solutions bring processing power closer to data sources, reducing latency and improving performance. By enabling real-time data analysis and decision-making, these solutions enhance efficiency and support scalable, distributed applications.",
    },
    {
      title: "Product Discovery",
      icon: "/images/message-programming.svg",
      description:
        "Product Discovery focuses on understanding user needs and market demands to guide the development of innovative solutions. Through research and testing, it ensures that products are aligned with customer expectations, reducing risks and enhancing success.",
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
      transition: "all 700ms ease-in-out",
      position: "absolute",
      width: "350px",
      height: "350px",
    };

    // Position-specific styles
    if (position === 0) {
      // Current slide
      return {
        ...baseStyles,
        transform: "translateX(0) scale(1.1)",
        opacity: 1,
        zIndex: 20,
      };
    } else if (position === 1 || position === -services.length + 1) {
      // Next slide
      return {
        ...baseStyles,
        transform:
          "translateX(calc(100% + 1rem)) rotate(12deg) translateY(30%)",
        opacity: 0.5,
        zIndex: 10,
      };
    } else if (position === -1 || position === services.length - 1) {
      // Previous slide
      return {
        ...baseStyles,
        transform:
          "translateX(calc(-100% - 1rem)) rotate(-12deg) translateY(30%)",
        opacity: 0.5,
        zIndex: 10,
      };
    } else {
      // Hidden slides
      return {
        ...baseStyles,
        transform:
          position > 0
            ? "translateX(calc(200% + 8rem)) scale(0.8)"
            : "translateX(calc(-200% - 8rem)) scale(0.8)",
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
            <div key={index} style={getSlideStyles(index) as any}>
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
                  <h3 className="text-[12px] font-normal text-white80 text-center mt-4 ">
                    {service.description}
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
