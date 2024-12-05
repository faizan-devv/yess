"use client";
import Image from "next/image";
import { Button, Box, Container, Stack, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1070px !important",
  paddingLeft: "0", 
  paddingRight: "0"
}));

const Footer = () => {
  const services = [
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Campaigns", href: "/services/campaigns" },
    { name: "Branding", href: "/services/branding" },
    { name: "Offline", href: "/services/offline" },
  ];

  const about = [
    { name: "Our Story", href: "/about/our-story" },
    { name: "Benefits", href: "/about/benefits" },
    { name: "Team", href: "/about/team" },
    { name: "Careers", href: "/about/careers" },
  ];

  const help = [
    { name: "FAQs", href: "/help/faqs" },
    { name: "Contact Us", href: "/help/contact" },
  ];

  return (
    <Box 
      component="footer" 
      id="footer" 
      sx={{ 
        mb: { xs: 8, md: 16, lg: "100px" }
      }}
    >
      <StyledContainer>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)"
            },
            gap: 4,
            mb: 3
          }}
        >
          {/* Logo and Contact Section */}
          <Box sx={{ gridColumn: { sm: "span 2", lg: "span 1" } }}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={63}
              priority
              // style={{
              //   maxWidth: { xs: "100px", md: "120px" }
              // }}
            />
            <Stack spacing={4} sx={{ my: 4 }}>
              <Typography variant="subtitle1" sx={{ fontSize: { xs: 16, md: 17 }, fontWeight: 500 }}>
                Office Location:
              </Typography>
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Box sx={{ maxWidth: 230 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontSize: { xs: 16, md: 17 }, 
                      fontWeight: 400,
                      mb: 2 ,
                      color: "#ffffff"
                    }}
                  >
                    King Abdulaziz Road, Riyad, KSA
                  </Typography>
                </Box>
              </Link>
              
              <Typography variant="subtitle1" sx={{ fontSize: { xs: 16, md: 17 }, fontWeight: 500 }}>
                Head Office Location:
              </Typography>
              <Box sx={{ maxWidth: 230 }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontSize: { xs: 16, md: 17 }, 
                    fontWeight: 400,
                    mb: 2 
                  }}
                >
                  8384, Prince Mohammed Bin Fahd Road, Al Firdaws, 5237 PO Box 2150 Postal Code 34251
                </Typography>
              </Box>
              
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontSize: { xs: 16, md: 17 }, 
                  fontWeight: 400,
                  mb: 2 
                }}
              >
                Quick Contact: +966-13-828-1002
              </Typography>
              
              <Button 
                variant="outlined" 
                sx={{ 
                  width: { xs: "100%", sm: "auto" } 
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Box>

          {/* Services */}
          <Box sx={{ mt: { xs: 6, sm: 0 } }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontSize: { xs: 16, md: 17 }, 
                lineHeight: "21px",
                fontWeight: 400,
                mb: 2 
              }}
            >
              Services
            </Typography>
            <Stack spacing={1.5}>
              {services.map((item) => (
                <Typography
                  key={item.name}
                  sx={{
                    fontSize: { xs: 14, md: 15 },
                    lineHeight: "18px",
                    fontWeight: 400,
                    color: "white",
                    mb: 1.5
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* About */}
          <Box sx={{ mt: { xs: 6, sm: 0 } }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontSize: { xs: 16, md: 17 }, 
                lineHeight: "21px",
                fontWeight: 400,
                mb: 2 
              }}
            >
              About
            </Typography>
            <Stack spacing={1.5}>
              {about.map((item) => (
                <Typography
                  key={item.name}
                  sx={{
                    fontSize: { xs: 14, md: 15 },
                    lineHeight: "18px",
                    fontWeight: 400,
                    color: "white",
                    mb: 1.5
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Help */}
          <Box sx={{ mt: { xs: 6, sm: 0 } }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontSize: { xs: 16, md: 17 }, 
                lineHeight: "21px",
                fontWeight: 400,
                mb: 2 
              }}
            >
              Help
            </Typography>
            <Stack spacing={1.5}>
              {help.map((item) => (
                <Typography
                  key={item.name}
                  sx={{
                    fontSize: { xs: 14, md: 15 },
                    lineHeight: "18px",
                    fontWeight: 400,
                    color: "white",
                    mb: 1.5
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 3, sm: 0 }
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, md: 15 },
                lineHeight: "19px",
                fontWeight: 400,
                color: "white",
                mr: { sm: 5 }
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, md: 15 },
                lineHeight: "19px",
                fontWeight: 400,
                color: "white"
              }}
            >
              Privacy Policy
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              mt: { xs: 3, sm: 0 }
            }}
          >
            <Image
              src="/images/fb.svg"
              alt="Facebook"
              width={10}
              height={20}
              priority
              // style={{
              //   width: { xs: "16px", sm: "auto" }
              // }}
            />
            <Image
              src="/images/twitter.svg"
              alt="Twitter"
              width={22}
              height={22}
              priority
              // style={{
              //   width: { xs: "20px", sm: "auto" }
              // }}
            />
            <Image
              src="/images/insta.svg"
              alt="Instagram"
              width={22}
              height={22}
              priority
              // style={{
              //   width: { xs: "20px", sm: "auto" }
              // }}
            />
          </Stack>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Footer;