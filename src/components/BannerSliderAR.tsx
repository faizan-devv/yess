import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import NavHeader from "./NavbarAR";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const sliderContent = [
  {
    title: "تطوير البرمجيات المخصصة",
    description:
      "نحن نطور حلول برمجية مخصصة وعالية الأداء للشركات التي تحتاج إلى ما هو أكثر من التطبيقات القياسية. توفر خدماتنا البرمجية المصممة حسب الطلب حلولًا قوية وقابلة للتوسّع، مصممة لتعزيز الكفاءة التشغيلية ودفع عجلة النمو.",
    image: "/images/service1.svg",
  },
  {
    title: "حلول المؤسسات",
    description:
      "حلول مؤسسية متكاملة تُبسط العمليات، وتعزز الإنتاجية، وتدفع التحول الرقمي في مؤسستك.",
    image: "/images/service2.svg",
  },
  {
    title: "أكثر من عقد من التميز",
    description:
      "تطوير منصة برمجية متعددة الطبقات تشمل نظام المعلومات الجغرافية، وأدوات تحليل بيانات متقدمة لأغراض الأمن، وتكامل بين مستشعرات الوعي الظرفي المختلفة ووسائل الاتصال المتعددة الخاصة بها، والتي تم استخدامها لأكثر من 13 عامًا في المملكة.",
    image: "/images/service3.svg",
  },
  {
    title: "حلول الواقع المعزز (AR) والواقع الافتراضي (VR)",
    description:
      "تقدم حلول الواقع المعزز (AR) والواقع الافتراضي (VR) بيئات غامرة للتدريب والتسويق والترفيه، مما يُحدث ثورة في تجربة المستخدم.",
    image: "/images/service4.svg",
  },
  {
    title: "خدمات السحابة",
    description:
      "حلول سحابية قابلة للتوسع وآمنة تُمكّن الشركات من تحقيق المرونة، وخفض التكاليف، وتعزيز التعاون بين الفرق.",
    image: "/images/cloud.svg",
  },
  {
    title: "تطوير البرمجيات داخليًا",
    description:
      "نركّز على تطوير أنظمة ذات بنية مفتوحة بحلول مخصصة. توفر برمجياتنا متعددة الطبقات دعمًا دقيقًا ومحليًا، مما يمكّن العملاء من تحقيق نتائج سريعة ومرنة.",
    image: "/images/service6.svg",
  },
  {
    title: "خدمات الترحيل",
    description:
      "تضمن خدمات الترحيل المتخصصة لدينا انتقال البيانات والتطبيقات بسلاسة إلى المنصات الجديدة، مع تقليل وقت التوقف والحفاظ على سلامة البيانات.",
    image: "/images/service7.svg",
  },
];

const CustomSliderAR = () => {
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
                  gridTemplateColumns:{
                    xs: "2fr 1fr",
                    md: "repeat(2, 1fr)",
                  },
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
                        fontSize: {
                          xs: "16px",
                          sm: "20px",
                          md: "30px",
                          lg: "50px",
                        },
                        fontWeight: 700,
                        lineHeight: {
                          xs: "30px",
                          sm: "40px",
                          lg: "72px",
                        },
                        letterSpacing: "-0.01em",
                        color: "#fff",
                        marginBottom: {
                          xs: "14px",
                          sm: "18px",
                          lg: "24px",
                        },
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
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "20px",
                          lg: "25px",
                        },
                        fontWeight: 400,
                        lineHeight:{
                          xs: "20px",
                          sm: "25px",
                          lg: "39px",
                        },
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

export default CustomSliderAR;
