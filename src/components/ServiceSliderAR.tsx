"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Custom hook for media query
const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: any) => {
      setMatches(e.matches);
    };
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

const ServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState("next");
  const isSmallScreen = useMediaQuery("(max-width: 512px)");

  const services = [
    {
      title: "تطوير البرمجيات المخصصة",
      icon: "/images/simcard.svg",
      description:
        "نقوم بتطوير حلول برمجية مخصصة عالية الأداء للأعمال التي تتطلب تطبيقات أكثر من الحلول القياسية. تقدم خدماتنا البرمجية المخصصة حلولًا قوية وقابلة للتطوير مصممة لتعزيز الكفاءة التشغيلية ودفع النمو.",
    },
    {
      title: "تطوير البرمجيات كخدمة (SaaS)",
      icon: "/images/programming-arrow.svg",
      description:
        "هل تفكر في الانتقال إلى السحابة؟ تقدم خدمات تطوير SaaS حلولًا قابلة للتطوير وفعّالة من حيث التكلفة. نساعدك على قيادة صناعتك من خلال تحسين الوصول وتقليل التكاليف وتحسين تجربة المستخدم مع تطبيقات SaaS الخاصة بنا.",
    },
    {
      title: "خدمات DevOps",
      icon: "/images/message-programming.svg",
      description:
        "تعمل خدمات DevOps على تبسيط العمليات التكنولوجية وتقليل التكاليف. من خلال تقديم مراقبة بنية تكنولوجيا المعلومات ودمجها بشكل سلس، نحن نعزز كفاءة وموثوقية بيئة تكنولوجيا المعلومات الخاصة بك.",
    },
    {
      title: "حلول Blockchain",
      icon: "/images/icon1.svg",
      description:
        "تعزز حلول Blockchain الأمان والشفافية. من خلال الاستفادة من التكنولوجيا اللامركزية، نحن نمكّن من إجراء معاملات آمنة وغير قابلة للتغيير وعمليات مبسطة لعملك.",
    },
    {
      title: "تطوير أسواق الإنترنت",
      icon: "/images/icon2.svg",
      description:
        "تمكّن خدمات تطوير أسواق الإنترنت الشركات من بناء منصات قابلة للتطوير تربط بين المشترين والبائعين بسلاسة. من خلال واجهات مستخدم بديهية وميزات متقدمة، تساعد هذه الأسواق على النمو وتعزيز التفاعل مع المستخدمين.",
    },
    {
      title: "تطوير PWA",
      icon: "/images/icon3.svg",
      description:
        "يقدم تطوير PWA تطبيقات ويب سريعة وموثوقة وجذابة تعمل بسلاسة عبر الأجهزة. من خلال الجمع بين أفضل تجارب الويب والجوال، يضمن ذلك تحسين الأداء واحتفاظ المستخدمين.",
    },
    {
      title: "الرقمنة والتحول",
      icon: "/images/icon4.svg",
      description:
        "تعمل الرقمنة والتحول على تغيير العمليات التجارية من خلال دمج التقنيات الحديثة وتدفقات العمل. يعزز هذا النهج الكفاءة ويدفع الابتكار ويضع المؤسسات في موضع استعداد للنمو المستدام في عالم رقمي.",
    },
    {
      title: "حلول الذكاء الاصطناعي وتعلم الآلة",
      icon: "/images/icon5.svg",
      description:
        "تستفيد حلول الذكاء الاصطناعي وتعلم الآلة من قوة البيانات لتقديم الأتمتة الذكية والرؤى التنبؤية. تساعد هذه التقنيات في تحسين اتخاذ القرارات، وتعزيز تجارب المستخدم، ودفع الابتكار عبر الصناعات.",
    },
    {
      title: "تطوير MVP",
      icon: "/images/icon6.svg",
      description:
        "يركز تطوير MVP على إنشاء نموذج أولي وظيفي للتحقق من الأفكار بسرعة وبتكلفة منخفضة. يسرع هذا النهج من دخول السوق، ويجمع تعليقات المستخدمين، ويضع الأساس لنمو المنتج القابل للتطوير.",
    },
    {
      title: "تصميم واجهة المستخدم وتجربة المستخدم",
      icon: "/images/icon7.svg",
      description:
        "يعمل تصميم واجهة المستخدم وتجربة المستخدم على ابتكار واجهات بديهية وجذابة بصريًا تعزز من تفاعل المستخدم. من خلال إعطاء الأولوية للوظائف والجماليات، يضمن ذلك التفاعلات السلسة وتجربة مستخدم مرضية عبر الأنظمة الأساسية.",
    },
    {
      title: "الخدمات المعتمدة على Oracle",
      icon: "/images/icon8.svg",
      description:
        "تقدم الخدمات المعتمدة على Oracle حلولًا قوية لإدارة قواعد البيانات والتطبيقات على مستوى المؤسسات لتحسين العمليات التجارية. تعزز هذه الخدمات من إدارة البيانات، والقابلية للتوسع، والكفاءة التشغيلية للمؤسسات من جميع الأحجام.",
    },
    {
      title: "حلول الحوسبة الطرفية",
      icon: "/images/icon9.svg",
      description:
        "تعمل حلول الحوسبة الطرفية على تقريب القدرة الحسابية من مصادر البيانات، مما يقلل من التأخير ويحسن الأداء. من خلال تمكين تحليل البيانات واتخاذ القرارات في الوقت الفعلي، تعزز هذه الحلول الكفاءة وتدعم التطبيقات الموزعة والقابلة للتوسع.",
    },
    {
      title: "اكتشاف المنتجات",
      icon: "/images/icon10.svg",
      description:
        "يركز اكتشاف المنتجات على فهم احتياجات المستخدمين وطلبات السوق لتوجيه تطوير الحلول المبتكرة. من خلال البحث والاختبار، يضمن ذلك أن المنتجات تتماشى مع توقعات العملاء، مما يقلل المخاطر ويعزز النجاح.",
    },
  ];

  const nextSlide = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const getSlideStyles = (index: number) => {
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
        transform: isSmallScreen
          ? "translateX(35px) scale(1.1)"
          : "translateX(0) scale(1.1)",
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
      const isJustRemoved =
        (direction === "next" &&
          (position === -2 || position === services.length - 2)) ||
        (direction === "prev" &&
          (position === 2 || position === -services.length + 2));

      if (isJustRemoved) {
        return {
          ...baseStyles,
          transform: "translateY(100vh)",
          opacity: 0,
          zIndex: -1,
        };
      }

      return {
        ...baseStyles,
        transform:
          position > 0
            ? "translateX(calc(200% + 8rem)) rotate(12deg) translateY(30%)"
            : "translateX(calc(-200% - 8rem)) rotate(-12deg) translateY(30%)",
        opacity: 0,
        zIndex: -1,
      };
    }
  };

  // Add client-side only rendering for the slider content
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <section className="w-full">
      <div className="max-w-full sm:max-w-[95%] h-[615px] mx-auto relative">
        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-[60px] h-[60px] rounded-full border border-[#397EF5] flex items-center justify-center hover:bg-gray-900 transition-colors z-30"
          aria-label="الانتقال إلى الشريحة السابقة"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-[60px] h-[60px] rounded-full border border-[#397EF5] flex items-center justify-center hover:bg-gray-900 transition-colors z-30"
          aria-label="الانتقال إلى الشريحة التالية"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Cards Container */}
        <div className="relative h-full flex items-center justify-center overflow-hidden pb-[100px]">
          {services.map((service, index) => (
            <div key={index} style={getSlideStyles(index) as any}>
              <div className="relative w-[80%] sm:w-full h-full rounded-2xl p-[1px] bg-gradient-to-br from-[#397EF5] via-[#29313F] to-[#397EF5]">
                <div className="w-full h-full bg-darkBlue backdrop-blur-[30px] rounded-2xl sm:p-10 flex flex-col items-center">
                  <div
                    className={`p-4 sm:p-10 rounded-[31px] flex items-center justify-center border border-[#397EF5] absolute top-[-16%] transition-colors duration-700 ${
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
                  <h3 className="text-[25px] font-bold text-white80 text-center mt-12 sm:mt-10 w-full md:w-[70%]">
                    {service.title}
                  </h3>
                  <h3 className="text-[12px] font-normal text-white80 text-center mt-4">
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
