"use client";
import Image from "next/image";
import { Typography, Box, Container, Stack } from "@mui/material";
import GradientHeading from "./GradientHeading";

const OurClients = () => {
  const clients = [
    {
      name: "Ministry of Defence",
      nameAr: "وزارة الدفاع",
      logo: "/images/mod-logo.svg",
    },
    {
      name: "Ministry of Interior",
      nameAr: "وزارة الداخلية",
      logo: "/images/moi-logo.svg",
    },
    {
      name: "GIP",
      nameAr: "رئاسة الاستخبارات العامة",
      logo: "/images/gip-logo.svg",
    },
    {
      name: "PSS/GID",
      nameAr: "المنصة الوطنية الموحدة",
      logo: "/images/pss-logo.svg",
    },
    {
      name: "Royal Guards",
      nameAr: "الحرس الملكي",
      logo: "/images/rg-logo.svg",
    },
  ];

  return (
    <Box
      id="clients"
      className="our-clients clients-section blue-circle"
      sx={{ my: "100px", px: { sm: "0px" } }}
    >
      <Container maxWidth={false} sx={{ width: "1472px" }}>
        <Stack alignItems="center">
          <Box
            sx={{
              width: {
                sm: "100%",
                md: "80%",
                lg: "60%",
              },
            }}
            className="text-center"
          >
            <GradientHeading>Our Clients</GradientHeading>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "20px", md: "30px" },
                  fontWeight: 400,
                  mb: 2,
                }}
                className="text-white80"
              >
                Saudi Vision 2030 empowers us to drive innovation and shape the
                future of technology in the Kingdom
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* Clients Grid */}
        <Box sx={{ my: { xs: "30px", lg: "100px" } }}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: { xs: "24px", md: "56px", lg: 0 },
            }}
          >
            {clients.map((client, index) => (
              <Box
                key={client.name}
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "20%" },
                }}
              >
                {index !== clients.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: "none", lg: "block" },
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "1px",
                      height: "128px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(180deg, #0B0920 6.69%, #FFFFFF 55.61%, #0B0920 96.46%)",
                      }}
                    />
                  </Box>
                )}

                {/* Client Logo and Text */}
                <Stack alignItems="center" sx={{ p: { lg: 3 } }}>
                  <Box
                    sx={{
                      width: "200px",
                      height: "200px",
                      mb: 2.5,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </Box>
                  <GradientHeading
                    variant="subtitle1"
                    fontSize={{ xs: "16px", md: "20px" }}
                    gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
                    fontWeight={600}
                  >
                    {client.name}
                  </GradientHeading>
                  <Typography
                    variant="subtitle1"
                    className="text-white"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                      fontWeight: 600,
                    }}
                  >
                    {client.nameAr}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default OurClients;
