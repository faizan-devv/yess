"use client";
import Image from "next/image";
import { Button, Box, Container, Stack, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(({}) => ({
  maxWidth: "1070px !important",
  paddingLeft: "0",
  paddingRight: "0",
}));

const Footer = () => {
  const services = [
    { name: "التسويق عبر البريد الإلكتروني", href: "/services/email-marketing" },
    { name: "الحملات", href: "/services/campaigns" },
    { name: "العلامات التجارية", href: "/services/branding" },
    { name: "خدمات خارج الإنترنت", href: "/services/offline" },
  ];

  const about = [
    { name: "قصتنا", href: "/about/our-story" },
    { name: "الفوائد", href: "/about/benefits" },
    { name: "فريقنا", href: "/about/team" },
    { name: "الوظائف", href: "/about/careers" },
  ];

  const help = [
    { name: "الأسئلة الشائعة", href: "/faqs" },
    { name: "اتصل بنا", href: "/contact-us" },
  ];

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        mb: { xs: 8, md: 16, lg: "100px" },
        direction: "rtl", // Right-to-left direction
      }}
    >
      <StyledContainer>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
            mb: 3,
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
            />
            <Stack spacing={4} sx={{ my: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: { xs: 16, md: 17 }, fontWeight: 500 }}
              >
                موقع المكتب:
              </Typography>
              <Link
                href="https://maps.app.goo.gl/gcbHhq7KPSW6wDJm7"
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
                      mb: 2,
                      color: "#ffffff",
                    }}
                  >
                    طريق الملك عبد العزيز، الرياض، المملكة العربية السعودية
                  </Typography>
                </Box>
              </Link>

              <Typography
                variant="subtitle1"
                sx={{ fontSize: { xs: 16, md: 17 }, fontWeight: 500 }}
              >
                موقع المكتب الرئيسي:
              </Typography>
              <Link
                href="https://maps.app.goo.gl/TUNEsTsw7fZYc7KA8"
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
                      mb: 2,
                      color: "#ffffff",
                    }}
                  >
                    8384، طريق الأمير محمد بن فهد، الفردوس، 5237 صندوق بريد
                    2150 الرمز البريدي 34251
                  </Typography>
                </Box>
              </Link>

              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: 16, md: 17 },
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                الاتصال السريع: +966-13-828-1002
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                ابدأ الآن
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
                mb: 2,
              }}
            >
              الخدمات
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
                    mb: 1.5,
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
                mb: 2,
              }}
            >
              عن الشركة
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
                    mb: 1.5,
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
                mb: 2,
              }}
            >
              المساعدة
            </Typography>
            <Stack spacing={1.5}>
              {help.map((item) => (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  key={item.name}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 14, md: 15 },
                      lineHeight: "18px",
                      fontWeight: 400,
                      color: "white",
                      mb: 1.5,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
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
            gap: { xs: 3, sm: 0 },
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
                mr: { sm: 5 },
              }}
            >
              الشروط والأحكام
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, md: 15 },
                lineHeight: "19px",
                fontWeight: 400,
                color: "white",
              }}
            >
              سياسة الخصوصية
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              mt: { xs: 3, sm: 0 },
            }}
          >
            <Image
              src="/images/fb.svg"
              alt="Facebook"
              width={10}
              height={20}
              priority
            />
            <Image
              src="/images/twitter.svg"
              alt="Twitter"
              width={22}
              height={22}
              priority
            />
            <Image
              src="/images/insta.svg"
              alt="Instagram"
              width={22}
              height={22}
              priority
            />
          </Stack>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Footer;
