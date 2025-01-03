"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  Button,
  IconButton,
  Typography,
  styled,
  BoxProps,
  TypographyProps,
} from "@mui/material";

interface NavLinkProps extends TypographyProps {
  component?: React.ElementType;
  href?: string;
}

interface StyledNavProps extends BoxProps {
  component?: React.ElementType; // Include the `component` prop explicitly
}
// Styled components to maintain the same design
const StyledNav = styled(Box)<StyledNavProps>(() => ({
  paddingTop: "37px",
  paddingLeft: "0px",
  paddingRight: "0px",
}));

const DesktopNavContainer = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  borderRadius: "100px",
  border: "1px solid #3D3D3D",
  padding: "12px 51px",
  backgroundColor: "rgba(30, 30, 30, 0.2)",
  backdropFilter: "blur(8px)",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

const NavLink = styled(Typography)<NavLinkProps>(({ theme }) => ({
  color: "white",
  cursor: "pointer",
  transition: "colors 0.3s",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const NavHeaderAR = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: any, sectionId: any) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false);
    }
  };

  return (
    <StyledNav component="nav">
      <Container maxWidth={false} sx={{ maxWidth: "1472px", px: { sm: "0" } }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          {/* Logo Section */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={63}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavContainer>
            <Stack direction="row" spacing={4}>
              <Link href="/AR">
                <NavLink>الرئيسية</NavLink>
              </Link>
              <Link href="/AR/our-services">
                <NavLink>من نحن</NavLink>
              </Link>
              <Link href="/AR/about-us">
                <NavLink> من نحن</NavLink>
              </Link>
              <Link href="/AR/landscape">
                <NavLink>الحلول الذكية</NavLink>
              </Link>
              <Link href="/AR/ar-solutions">
                <NavLink> حلول الواقع المعزز</NavLink>
              </Link>
              <Link href="/">
                <NavLink onClick={(e) => scrollToSection(e, "clients")}>
                  الشركاء والعملاء
                </NavLink>
              </Link>
            </Stack>
          </DesktopNavContainer>

          {/* Contact Button - Desktop */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Link href="/AR/contact-us">
              <Button variant="outlined">اتصل بنا</Button>
            </Link>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { lg: "none" }, color: "white" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={32} />
          </IconButton>
        </Stack>

        {/* Mobile Menu */}
        {isOpen && (
          <Box
            sx={{
              display: { lg: "none" },
              mt: 4,
              p: 4,
              bgcolor: "background.paper",
            }}
          >
            <Stack spacing={2}>
              <Link href="/AR">
                <NavLink sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}>
                  الرئيسية
                </NavLink>
              </Link>
              <NavLink
                component="a"
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}
              >
                الخدمات
              </NavLink>
              <NavLink
                component="a"
                href="#clients"
                onClick={(e) => scrollToSection(e, "clients")}
                sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}
              >
                الشركاء والعملاء
              </NavLink>
              <Link href="/about-us">
                <NavLink sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}>
                  من نحن
                </NavLink>
              </Link>
              <Link href="/landscape">
                <NavLink sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}>
                  Smart Solutions
                </NavLink>
              </Link>
              <Link href="/ar-solutions">
                <NavLink sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}>
                  حلول الواقع المعزز
                </NavLink>
              </Link>
              <Link href="/contact-us">
                <Button variant="outlined" fullWidth>
                  الحلول الذكية
                </Button>
              </Link>
            </Stack>
          </Box>
        )}
      </Container>
    </StyledNav>
  );
};

export default NavHeaderAR;
