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
  Direction,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps extends TypographyProps {
  component?: React.ElementType;
  href?: string;
}

interface StyledNavProps extends BoxProps {
  component?: React.ElementType;
}

interface NavHeaderProps {
  onMenuStateChange?: (isOpen: boolean) => void;
  direction?: Direction;
}

const StyledNav = styled(Box)<StyledNavProps>(() => ({
  paddingTop: "37px",
  paddingLeft: "0px",
  paddingRight: "0px",
}));

const StyledSelect = styled(Select)(() => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif !important',
  borderRadius: "100px",
  border: "1px solid #3D3D3D",
  color: "#ffffff",
  padding: "10px 24px",
  height: "46.50px",
  marginLeft: "16px",
  width: "137px",
  transition: "none",
  textTransform: "capitalize",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover": {
    backgroundColor: "#e3e5e724",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3D3D3D",
    },
  },
  "&:active": {
    backgroundColor: "#e3e5e71a",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3D3D3D",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
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
  fontFamily: "var(--font-arabic)", // Arabic font variable
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif !important',
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#e3e5e724",
  },
  "&.Mui-selected": {
    backgroundColor: "#e3e5e71a",
    "&:hover": {
      backgroundColor: "#e3e5e724",
    },
  },
}));

const NavHeader: React.FC<NavHeaderProps> = ({
  onMenuStateChange,
  direction = "rtl", // Default to RTL
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(
    pathname.includes("AR") ? "ar" : "en"
  );
  const handleMenuToggle = (newState: boolean) => {
    setIsOpen(newState);
    onMenuStateChange?.(newState);
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      handleMenuToggle(false);
    }
  };

  const handleLanguageChange = (event: SelectChangeEvent<unknown>) => {
    setLanguage(event.target.value as string);
    if (event.target.value === "en") {
      console.log(pathname);
      if (pathname === "/AR") {
        router.push("/");
        return;
      }
      const segments = pathname.split("/").filter(Boolean);

      if (segments.length > 1) {
        segments.shift(); // Remove the first segment (language code)
      }

      return router.push("/" + segments.join("/"));
    } else {
      console.log("in else");
      const normalizedRoute = pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;

      // Prepend '/AR' if it's not already present
      if (normalizedRoute.startsWith("/AR/")) {
        return normalizedRoute;
      }

      router.push(`/AR${normalizedRoute}`);
    }
  };

  // Arabic navigation items
  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/our-services", label: "خدماتنا" },
    { href: "/about-us", label: "من نحن" },
    { href: "/landscape", label: "الحلول الذكية" },
    { href: "/ar-solutions", label: "حلول الواقع المعزز" },
    { href: "/", label: "شركاؤنا وعملاؤنا", section: "clients" },
  ];

  return (
    <StyledNav component="nav" dir={direction}>
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
            <Stack direction="row">
              {navItems.map((item) => (
                <Link
                  style={{ marginLeft: 32 }}
                  href={item.href}
                  key={item.label}
                >
                  <NavLink
                    onClick={
                      item.section
                        ? (e) => scrollToSection(e, item.section!)
                        : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                </Link>
              ))}
            </Stack>
          </DesktopNavContainer>

          {/* Contact Button - Desktop */}
          <Box
            sx={{ display: { xs: "none", lg: "block" }, alignItems: "center" }}
          >
            <StyledSelect
              value={language}
              onChange={handleLanguageChange}
              variant="outlined"
            >
              <StyledMenuItem value="en">Eng</StyledMenuItem>
              <StyledMenuItem value="ar">عربی</StyledMenuItem>
            </StyledSelect>
            <Link href="/contact-us">
              <Button variant="outlined">اتصل بنا</Button>
            </Link>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { lg: "none" }, color: "white" }}
            onClick={() => handleMenuToggle(!isOpen)}
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
              {navItems.map((item) => (
                <Link href={item.href} key={item.label}>
                  <NavLink
                    onClick={
                      item.section
                        ? (e) => scrollToSection(e, item.section!)
                        : undefined
                    }
                    sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}
                  >
                    {item.label}
                  </NavLink>
                </Link>
              ))}
              <Link href="/contact-us">
                <Button variant="outlined" fullWidth>
                  اتصل بنا
                </Button>
              </Link>
            </Stack>
          </Box>
        )}
      </Container>
    </StyledNav>
  );
};

export default NavHeader;
