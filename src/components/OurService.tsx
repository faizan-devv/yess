import GradientHeading from "./GradientHeading";
import { Typography, Box } from "@mui/material";
import Services from "./Services";
import NavHeader from "./NavBar";
import Image from "next/image";
import Footer from "./Footer";

const OurService = () => {
  return (
    <div id="our-services">
      <div className="services-banner ">
        <NavHeader />
        <div className="py-[187px] px-[70px]">
          <Box
            sx={{
              width: {
                sm: "100%",
                md: "80%",
                lg: "60%",
              },
            }}
            className=""
          >
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              Over a decade of excellence
            </GradientHeading>
            <div className="">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  fontWeight: 400,
                }}
                className="text-white80"
              >
                Saudi Vision 2030 empowers us to drive innovation and shape the
                future of technology in the Kingdom
              </Typography>
            </div>
          </Box>
        </div>
      </div>
      <div className="all-service px-[169px] pt-[57px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-[#397EF5] opacity-10 text-[90px] font-bold mb-4 leading-[72px]">
              01
            </div>

            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "30px", md: "50px" }}
              fontWeight={700}
            >
              Signal Engineering and Analysis Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: "39px",
              }}
              className="text-white80"
            >
              We develop and implement advanced solutions for analyzing and
              managing signals. These systems enhance performance, security, and
              operational efficiency by providing reliable and precise signal
              processing.
            </Typography>
          </div>

          {/* Right Image */}
          <div className="flex justify-end relative">
            <div
              className="blue-shade h-[486px] w-[150px] border-r border-[#397EF5] relative right-[-7%]"
              style={{
                background:
                  "linear-gradient(270deg, #397EF5 -554.05%, #0B081F 64.53%)",
              }}
            ></div>
            <Image
              src="/images/social.svg"
              alt="Signal Engineering Visualization"
              width={516}
              height={426}
              style={{ marginRight: "20px" }}
            />
            <div className="blue-box h-[187px] w-[187px] rounded-[40px] bg-[#397EF5] absolute top-[10%] -z-10"></div>
          </div>
        </div>
        <div className="flex justify-center items-start gap-12 py-[192px]">
          <div className="text-[#397EF5] opacity-10 text-[90px] font-bold leading-[72px]">
            02
          </div>
          <div className="w-[45%]">
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "30px", md: "50px" }}
              fontWeight={700}
            >
              Signal Jamming Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: "39px",
              }}
              className="text-white80"
            >
              Our team specializes in designing and implementing platforms that
              protect sensitive information, whether they are based on the
              internet or on applications. Our solutions ensure secure and
              uninterrupted communication for critical operations by preventing
              unauthorized access and interference
            </Typography>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-start relative">
            <div className="blue-box h-[187px] w-[187px] rounded-[40px] bg-[#397EF5] absolute top-[10%] -z-10"></div>

            <Image
              src="/images/fiber.svg"
              alt="Signal Security Systems"
              width={516}
              height={426}
              style={{ marginLeft: "20px" }}
            />
            <div
              className="blue-shade h-[486px] w-[150px] border-l border-[#397EF5] relative left-[-7%]"
              style={{
                background:
                  "linear-gradient(90deg, #397EF5 -554.05%, #0B081F 64.53%)",
              }}
            ></div>
          </div>
          <div className="space-y-6">
            <div className="text-[#397EF5] opacity-10 text-[90px] font-bold mb-4 leading-[72px]">
              03
            </div>

            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "30px", md: "50px" }}
              fontWeight={700}
            >
              Signal Security Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: "39px",
              }}
              className="text-white80"
            >
              Our signal security solutions offer reliable protection against
              potential threats. We design our systems in such a way that they
              detect, prevent, and mitigate risks, allowing our clients to feel
              confident that their communications infrastructure is secure.
            </Typography>
          </div>
        </div>
        <div className="flex justify-center items-start gap-12 pt-[192px] pb-[95px]">
          <div className="text-[#397EF5] opacity-10 text-[90px] font-bold leading-[72px]">
            04
          </div>
          <div className="w-[45%]">
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "30px", md: "50px" }}
              fontWeight={700}
            >
              Situational Awareness Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: "39px",
              }}
              className="text-white80"
            >
              We provide situational awareness systems that deliver real-time
              data and insights, enabling informed decision-making and strategic
              planning. In these systems, multiple data sources are integrated
              to provide a comprehensive picture of the operational environment,
              which enhances situational awareness and response capabilities
            </Typography>
          </div>
        </div>
      </div>
      <div className="mb-[100px]">
        <Services />
      </div>
      <Footer />
    </div>
  );
};
export default OurService;
