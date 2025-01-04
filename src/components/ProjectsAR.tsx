"use client";
import { Typography, Box, Button } from "@mui/material";
import GradientHeading from "./GradientHeading";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedBox = ({ children, direction = "left" }: {
  children: any;
  direction: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ x: direction === "left" ? 100 : -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="projects projects-section min-h-dvh lg:min-h-screen mt-[100px] overflow-hidden" dir="rtl">
      <div className="flex justify-center lg:border-r border-customGray mx-5 md:mx-[172px]">
        <Box
          sx={{
            width: {
              sm: "100%",
              lg: "60%",
            },
          }}
          className="projects-header py-[90px] text-center relative"
        >
          <GradientHeading>المشاريع</GradientHeading>
          <div className="">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "30px" },
                fontWeight: 400,
                mb: 2,
              }}
              className="text-white80"
            >
              تمكننا من دفع الابتكار وتشكيل مستقبل التكنولوجيا في المملكة
            </Typography>
          </div>
        </Box>
      </div>
      <div className="all-projects hidden lg:inline-block">
        <div className="right-section px-[47px] flex items-center">
          <Typography className="text-white font-bold text-2xl pr-[19px] pl-20">
            01
          </Typography>
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Right Section */}
            <Box className="relative border-r border-customGray lg:col-span-1">
              <Box className="space-y-6 ">
                <div className="detail-card px-[30px] bg-darkBlue relative blue-circle py-20">
                  <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    className="text-white"
                  >
                    رحلتنا نحو التحول الرقمي
                  </Typography>

                  <Button variant="outlined">عرض المزيد</Button>
                </div>
              </Box>
            </Box>

            {/* Left Section */}
            <Box className="space-y-8 p-8 lg:col-span-2 pr-[170px]">
              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  YES IT Solutions هي شركة رائدة في تقديم خدمات التحول الرقمي
                  متخصصة في التقنيات الحديثة.
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  خبرتنا في الأمن السيبراني، الذكاء الاصطناعي، تعلم الآلة، الخدمات السحابية،
                  وإنترنت الأشياء (IoT) تمكننا من تقديم حلول مبتكرة لتلبية احتياجات أعمال عملائنا.
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  من خلال تبني التحول الرقمي وتوافق استراتيجياتنا مع رؤية السعودية 2030،
                  سوف نتمكن من دفع الابتكار وتشكيل مستقبل التكنولوجيا في المملكة العربية السعودية.
                </Typography>
              </AnimatedBox>
            </Box>
          </Box>
        </div>
        <div className="left-section px-[47px] flex items-center border-t border-b border-customGray">
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Right Section */}
            <Box className="space-y-8 p-8 lg:col-span-2 pr-[210px]">
              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  في YES Solutions نحن ملتزمون بتقديم حلول تكنولوجية مستدامة وذات جودة عالية
                  لعملائنا.
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  استراتيجيتنا التجارية تعتمد على تطوير قدراتنا الخاصة وإقامة شراكات استراتيجية مع شركات
                  عالمية.
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  تتيح لنا استراتيجيتنا الاستفادة من التقنيات الحديثة مع الحفاظ على استقلالنا الفني
                  كمزود حلول تكامل الأنظمة، مما يضمن مصداقيتنا وثقة عملائنا.
                </Typography>
              </AnimatedBox>
            </Box>
            {/* Left Section */}
            <Box className="relative border-l border-customGray lg:col-span-1">
              <Box className="space-y-6 ">
                <div className="detail-card px-[30px] bg-darkBlue relative blue-circle py-20">
                  <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    className="text-white w-3/4"
                  >
                    مواصفاتنا ومحفظتنا
                  </Typography>

                  <Button variant="outlined">عرض المزيد</Button>
                </div>
              </Box>
            </Box>
          </Box>
          <Typography className="text-white font-bold text-2xl pl-[19px] pr-20">
            02
          </Typography>
        </div>
        <div className="right-section px-[47px] flex items-center border-b border-customGray">
          <Typography className="text-white font-bold text-2xl pr-[19px] pl-20">
            03
          </Typography>
          <Box className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Right Section */}
            <Box className="relative border-r border-customGray lg:col-span-1">
              <Box className="space-y-6 ">
                <div className="detail-card px-[30px] bg-darkBlue relative blue-circle py-20">
                  <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "30px", md: "48px" },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    className="text-white"
                  >
                    مجالات الخبرة الرئيسية والالتزام بالتميز
                  </Typography>

                  <Button variant="outlined">عرض المزيد</Button>
                </div>
              </Box>
            </Box>

            {/* Left Section */}
            <Box className="space-y-8 p-8 lg:col-span-2 pr-[160px]">
              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  تسلط مشاريعنا الناجحة مع عملاء مثل وزارة الدفاع ووزارة الداخلية
                  وجهاز المخابرات العامة والحرس الملكي والجمارك السعودية الضوء على قدرتنا
                  على تقديم بوابات ويب آمنة ومخصصة. هذه البوابات تتميز بإجراءات أمنية متقدمة لحماية
                  البيانات الحساسة مع واجهات سهلة الاستخدام ووظائف مصممة خصيصًا لكل عميل.
                </Typography>
              </AnimatedBox>

              <AnimatedBox direction="left">
                <Typography className="text-white70 text-base font-medium w-4/5">
                  إنها تعزز الشفافية، وتبسط العمليات، وتحسن تقديم الخدمة.
                </Typography>
              </AnimatedBox>
            </Box>
          </Box>
        </div>
      </div>
      <div className="all-projects inline-block lg:hidden">
        <div className="mb-section px-[47px]">
          <Box className="">
            <div className="detail-card bg-darkBlue relative blue-circle py-10">
              <Box className="w-16 h-16 bg-[#397EF51A] border-b-2 border-white mb-8 rounded-[11px] flex items-center justify-center"></Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "30px", lg: "48px" },
                  fontWeight: 700,
                }}
                className="text-white"
              >
                رحلتنا نحو التحول الرقمي
              </Typography>
            </div>
          </Box>

          {/* Right Section */}
          <Box>
            <AnimatedBox direction="left">
              <Typography className="text-white70 text-base font-medium">
                YES IT Solutions هي شركة رائدة في تقديم خدمات التحول الرقمي
                متخصصة في التقنيات الحديثة.
              </Typography>
            </AnimatedBox>

            <AnimatedBox direction="left">
              <Typography className="text-white70 text-base font-medium">
                خبرتنا في الأمن السيبراني، الذكاء الاصطناعي، تعلم الآلة، الخدمات السحابية،
                وإنترنت الأشياء (IoT) تمكننا من تقديم حلول مبتكرة لتلبية احتياجات أعمال عملائنا.
              </Typography>
            </AnimatedBox>

            <AnimatedBox direction="left">
              <Typography className="text-white70 text-base font-medium">
                من خلال تبني التحول الرقمي وتوافق استراتيجياتنا مع رؤية السعودية 2030،
                سوف نتمكن من دفع الابتكار وتشكيل مستقبل التكنولوجيا في المملكة العربية السعودية.
              </Typography>
            </AnimatedBox>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Projects;
