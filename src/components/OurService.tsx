import GradientHeading from "./GradientHeading";
import { Typography, Box, Container, Stack } from "@mui/material";
import Services from "./Services";
import NavHeader from "./NavBar";
import Image from "next/image";
import Footer from "./Footer";

const OurService = () => {
  return (
    <Box id="our-services">
    <Box className="services-banner">
    <Container
        maxWidth={false}
        sx={{
          maxWidth: "1472px",
          px: { xs: 8, md: '0px' },
        }}
      >
      <NavHeader />
      <Box 
        sx={{ 
          py: { xs: 12, md: 23.375 }, 
          px: { xs: 5, md: 0 }   
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "80%",
              lg: "60%"
            }
          }}
        >
          <GradientHeading 
            gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
          >
            Over a decade of excellence
          </GradientHeading>
          
          <Typography
            variant="h1"
            sx={{
              fontSize: { 
                xs: "18px", 
                sm: "20px", 
                md: "30px" 
              },
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.8)",
              mt: 2 // Adding some margin-top for spacing
            }}
          >
            Saudi Vision 2030 empowers us to drive innovation and shape the future of technology in the Kingdom
          </Typography>
        </Box>
      </Box>
    </Container></Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1472px",
          px: { xs: 8, md: '0px' },
          pt: { xs: 8, md: "57px" },
        }}
      >
        {/* First Section */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 6, md: 12 }}
          alignItems="center"
        >
          {/* Left Content */}
          <Stack spacing={{ xs: 4, md: 6 }} flex={1}>
            <Typography
              sx={{
                color: "#397EF5",
                opacity: 0.1,
                fontSize: { xs: "50px", md: "90px" },
                fontWeight: 700,
                lineHeight: { xs: 1.2, md: "72px" },
                mb: { xs: 2, md: 4 },
              }}
            >
              01
            </Typography>
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
              fontWeight={700}
            >
              Signal Engineering and Analysis Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: "39px" },
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              We develop and implement advanced solutions for analyzing and
              managing signals. These systems enhance performance, security, and
              operational efficiency by providing reliable and precise signal
              processing.
            </Typography>
          </Stack>

          {/* Right Image */}
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              position: "relative",
              mt: { xs: 8, md: 0 },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                height: "486px",
                width: "150px",
                borderRight: "1px solid #397EF5",
                position: "relative",
                right: "-7%",
                zIndex: 10,
                background:
                  "linear-gradient(270deg, #397EF5 -554.05%, #0B081F 64.53%)",
              }}
            />
            <Box sx={{ position: "relative", display: "flex" }}>
              <Image
                src="/images/social.svg"
                alt="Signal Engineering Visualization"
                width={516}
                height={426}
                style={{ marginRight: "20px" }}
              />
              <Box
                sx={{
                  height: { xs: "100px", lg: "187px" },
                  width: { xs: "100px", lg: "187px" },
                  borderRadius: { xs: "20px", lg: "40px" },
                  bgcolor: "#397EF5",
                  position: "absolute",
                  top: "10%",
                  right: 0,
                  zIndex: -1,
                }}
              />
            </Box>
          </Box>
        </Stack>

        {/* Second Section */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 6, md: 12 }}
          alignItems="flex-start"
          justifyContent="center"
          sx={{ py: { xs: 12, md: "192px" } }}
        >
          <Typography
            sx={{
              color: "#397EF5",
              opacity: 0.1,
              fontSize: { xs: "50px", md: "90px" },
              fontWeight: 700,
              lineHeight: { xs: 1.2, md: "72px" },
            }}
          >
            02
          </Typography>
          <Box sx={{ width: { xs: "100%", lg: "45%" } }}>
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
              fontWeight={700}
            >
              Signal Jamming Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: "39px" },
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Our team specializes in designing and implementing platforms that
              protect sensitive information, whether they are based on the
              internet or on applications. Our solutions ensure secure and
              uninterrupted communication for critical operations by preventing
              unauthorized access and interference
            </Typography>
          </Box>
        </Stack>

        {/* Third Section */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 6, md: 12 }}
          alignItems="center"
        >
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                height: "187px",
                width: "187px",
                borderRadius: "40px",
                bgcolor: "#397EF5",
                position: "absolute",
                top: "10%",
                zIndex: -1,
              }}
            />
            <Box sx={{ position: "relative", display: "flex" }}>
              <Image
                src="/images/fiber.svg"
                alt="Signal Security Systems"
                width={516}
                height={426}
                style={{ marginLeft: "20px" }}
              />
              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  height: "486px",
                  width: "150px",
                  borderLeft: "1px solid #397EF5",
                  position: "relative",
                  left: "-7%",
                  background:
                    "linear-gradient(90deg, #397EF5 -554.05%, #0B081F 64.53%)",
                }}
              />
            </Box>
          </Box>

          <Stack spacing={{ xs: 4, md: 6 }} flex={1}>
            <Typography
              sx={{
                color: "#397EF5",
                opacity: 0.1,
                fontSize: { xs: "50px", md: "90px" },
                fontWeight: 700,
                lineHeight: { xs: 1.2, md: "72px" },
                mb: { xs: 2, md: 4 },
              }}
            >
              03
            </Typography>
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
              fontWeight={700}
            >
              Signal Security Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: "39px" },
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Our signal security solutions offer reliable protection against
              potential threats. We design our systems in such a way that they
              detect, prevent, and mitigate risks, allowing our clients to feel
              confident that their communications infrastructure is secure.
            </Typography>
          </Stack>
        </Stack>

        {/* Fourth Section */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 6, md: 12 }}
          alignItems="flex-start"
          justifyContent="center"
          sx={{
            pt: { xs: 12, md: "192px" },
            pb: { xs: 8, md: "95px" },
          }}
        >
          <Typography
            sx={{
              color: "#397EF5",
              opacity: 0.1,
              fontSize: { xs: "50px", md: "90px" },
              fontWeight: 700,
              lineHeight: { xs: 1.2, md: "72px" },
            }}
          >
            04
          </Typography>
          <Box sx={{ width: { xs: "100%", lg: "45%" } }}>
            <GradientHeading
              gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
              fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
              fontWeight={700}
            >
              Situational Awareness Systems
            </GradientHeading>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "25px" },
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: "39px" },
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              We provide situational awareness systems that deliver real-time
              data and insights, enabling informed decision-making and strategic
              planning. In these systems, multiple data sources are integrated
              to provide a comprehensive picture of the operational environment,
              which enhances situational awareness and response capabilities
            </Typography>
          </Box>
        </Stack>
      </Container>

      <Box sx={{ mb: "100px" }}>
        <Services />
      </Box>
      <Footer />
    </Box>
  );
};

export default OurService;
