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
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface NavLinkProps extends TypographyProps {
  component?: React.ElementType;
  href?: string;
}

interface StyledNavProps extends BoxProps {
  component?: React.ElementType;
}

interface NavHeaderProps {
  onMenuStateChange?: (isOpen: boolean) => void;
}

const StyledNav = styled(Box)<StyledNavProps>(() => ({
  paddingTop: "37px",
  paddingLeft: "0px",
  paddingRight: "0px",
}));

const StyledSelect = styled(Select)(() => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif !important',
  borderRadius: "100px",
  border:"1px solid #3D3D3D",
  color: "#ffffff",
  padding: "10px 24px",
  height: '46.50px',
  marginRight: '16px',
  width: '137px',
  transition: "none",
  textTransform: 'capitalize',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover': {
    backgroundColor: "#e3e5e724",
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3D3D3D',
    },
  },
  '&:active': {
    backgroundColor: "#e3e5e71a",
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#3D3D3D',
  },
  '& .MuiSelect-icon': {
    color: 'white',
  },
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  fontFamily: '"Plus Jakarta Sans", sans-serif !important',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: "#e3e5e724",
  },
  '&.Mui-selected': {
    backgroundColor: "#e3e5e71a",
    '&:hover': {
      backgroundColor: "#e3e5e724",
    },
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
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const NavHeader: React.FC<NavHeaderProps> = ({ onMenuStateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleMenuToggle = (newState: boolean) => {
    setIsOpen(newState);
    onMenuStateChange?.(newState);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const scrollToSection = (e: any, sectionId: any) => {
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
              <Link href="/">
                <NavLink>Home</NavLink>
              </Link>
              <Link href="/our-services">
                <NavLink>Services</NavLink>
              </Link>
              <Link href="/about-us">
                <NavLink>About Us</NavLink>
              </Link>
              <Link href="/landscape">
                <NavLink>Smart Solutions</NavLink>
              </Link>
              <Link href="/ar-solutions">
                <NavLink>AR Solutions</NavLink>
              </Link>
              <Link href="/">
                <NavLink onClick={(e) => scrollToSection(e, "clients")}>
                  Partners & Clients
                </NavLink>
              </Link>
            </Stack>
          </DesktopNavContainer>
          
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
            <StyledSelect
              value={language}
              onChange={handleLanguageChange}
              variant="outlined"
            >
              <StyledMenuItem value="en">Eng</StyledMenuItem>
              <StyledMenuItem value="ar">عربی</StyledMenuItem>
            </StyledSelect>
            <Link href="/contact-us">
              <Button variant="outlined">Contact Us</Button>
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
              <Link href="/">
                <NavLink sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}>
                  Home
                </NavLink>
              </Link>
              <NavLink
                component="a"
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}
              >
                Services
              </NavLink>
              <NavLink
                component="a"
                href="#clients"
                onClick={(e) => scrollToSection(e, "clients")}
                sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}
              >
                Partners & Clients
              </NavLink>
              <Link href="/about-us">
                <NavLink sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}>
                  About Us
                </NavLink>
              </Link>
              <Link href="/ar-solutions">
                <NavLink sx={{ p: 2, "&:hover": { bgcolor: "action.hover" } }}>
                  AR Solutions
                </NavLink>
              </Link>
              {/* Language Select - Mobile */}
              <StyledSelect
                value={language}
                onChange={handleLanguageChange}
                variant="outlined"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      width: '150px',
                    },
                  },
                }}
              >
                <StyledMenuItem value="en">English</StyledMenuItem>
                <StyledMenuItem value="ar">Arabic</StyledMenuItem>
              </StyledSelect>
              <Link href="/contact-us">
                <Button variant="outlined" fullWidth>
                  Contact Us
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