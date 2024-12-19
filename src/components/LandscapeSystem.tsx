import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegistrationForm from "./RegistrationForm";
import Image from "next/image";

const LandscapeSystem = () => {
  return (
    <Box>
      <Box className="land-scape">
        <NavBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "114px",
            pb: "290px",
          }}
        >
          <Box
            sx={{
              width: "60%",
              textAlign: "center",
            }}
          >
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              Smart Solutions
            </GradientHeading>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  fontWeight: 400,
                  mb: 2,
                  color: "rgba(255, 255, 255, 0.8)", // equivalent to text-white80
                }}
              >
                Intelligent digital solutions for secure environments through
                automation & smart controls
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background:
            "linear-gradient(138.35deg, #29313F -0.03%, #397EF5 30.27%, #29313F 100.96%)",
          paddingBottom: "1px",
          backdropFilter: "blur(30px)",
        }}
      >
        <Box className=" bg-darkBlue">
          <Container
            maxWidth={false}
            sx={{
              maxWidth: "1472px",
            }}
          >
            <Stack
              sx={{
                px: { xs: 2, md: "0px" },
                
                pt: 13,
              }}
              spacing={3}
              className="flex flex-col items-center text-center"
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "25px",
                  color: "#FFFFFFCC",
                  position:"absolute",
                  maxWidth:"1472px"
                }}
              >
                Yamama is part of a visionary initiative for smart solutions
                that offers an immersive, informative, and interactive
                experience to the end user consuming services across multiple
                environments, whether it's smart city services or green projects
                like smart parks. The smart solutions outline the creation of a
                network for sharing vital environmental data across smart
                cities, parks, etc., establishing a strong community bond
                focused on sustainable practices.
              </Typography>
              <Image
                src="/images/buildings.svg"
                alt="Smart Solutions Buildings"
                height={715}
                width={993}
              />
            </Stack>
          </Container>
        </Box>
      </Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1472px",
        }}
        className="land-scape-content"
      >
        <Stack
          sx={{
            px: { xs: 2, md: "0px" },
            py: 8,
          }}
          spacing={3}
          className="relative blue-circle overflow-hidden"
        >
          {/* First Section */}
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 6, md: 12 }}
            alignItems="center"
            paddingTop="50px"
          >
            {/* Left Content */}
            <Stack spacing={{ xs: 4, md: 6 }} flex={1}>
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
                fontWeight={700}
              >
                The initiative of Digital landscape system
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
                is to provide a seamless technology experience to visitors in
                the environment. They will get connected with the intuitive
                features provided through Mobile App, Digital touch points,
                Smart Glasses , Binoculars adding the Augmented Reality & AI on
                top. The initiative of the Digital Landscape
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
                  src="/images/smart1.svg"
                  alt=""
                  width={516}
                  height={426}
                  style={{ marginRight: "20px" }}
                />
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    height: "187px",
                    width: "187px",
                    borderRadius: "40px",
                    bgcolor: "#397EF5",
                    position: "absolute",
                    top: "10%",
                    right: -15,
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
            alignItems="center"
            paddingTop="50px"
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
                  src="/images/img3.svg"
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
              <GradientHeading
                gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                fontSize={{ xs: "24px", sm: "30px", md: "50px" }}
                fontWeight={700}
              >
                Strategy of the Green Riyadh project
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
                which is one of the most ambitious urban afforestation projects
                in the world Planting 7.5 million trees across the capital. The
                current parks lack interactivity and fail to fully capitalize on
                the potential for environmental education and awareness.
                Visitors often miss out on understanding ...
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "25px",
              color: "#FFFFFFCC",
              paddingTop:"100px"
            }}
          >
            strategy of the Green Riyadh project which is one of the most
            ambitious urban afforestation projects in the world Planting 7.5
            million trees across the capital. The current parks lack
            interactivity and fail to fully capitalize on the potential for
            environmental education and awareness. Visitors often miss out on
            understanding the ecosystem's intricacies and their role in
            environmental preservation. The need for a cohesive and innovative
            solution to bridge this gap has become evident. Therefore, Yamama
            focusing on an engaging and informative experience that complements
            the natural surroundings. The visitors would be able to seamlessly
            interact with the environment, have access to valuable information,
            and an opportunity to contribute to environmental conservation
            efforts.
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "25px",
              color: "#FFFFFFCC",
              paddingTop:"55px"
            }}
          >
            Yamama Engineering is a technology based leading service integrator
            providing the full digital landscape system committed to delivering
            innovative IT and smart IoT solutions to cities, municipalities, and
            private organizations. With a focus on transforming urban spaces
            into smart, sustainable, and connected communities, our
            comprehensive services encompass various smart solutions for cities,
            parks, and buildings. The company's mission centers on enhancing the
            quality of life for residents while optimizing city administrators'
            operational efficiency encompassing full Digital Landscape system.
            With a vision to empower and enrich lifestyles through a strong
            digital ecosystem, Al-Yamamah enables the cities of KSA to embrace
            technology integration and collaborate closely with citizens for
            inclusive urban development.
          </Typography>
        </Stack>
      </Container>

      <RegistrationForm />
      <Footer />
    </Box>
  );
};

export default LandscapeSystem;
