// components/GradientHeading.tsx
"use client";

import { Typography, TypographyProps } from "@mui/material";
import { CSSProperties } from "react";

interface GradientHeadingProps extends TypographyProps {
  gradient?: string;
  fontSize?: { xs?: string; md?: string };
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: number | string;
}

const GradientHeading = ({
  children,
  variant = "h1",
  gradient = "linear-gradient(130deg, #FFFFFF 31.58%, #100D31 98.2%)",
  fontSize = { xs: "2.5rem", md: "5rem" },
  fontWeight = 800,
  sx,
  ...props
}: GradientHeadingProps) => {
  const gradientStyle: CSSProperties = {
    background: gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <Typography
      variant={variant}
      sx={{
        fontSize: {
          xs: fontSize.xs,
          md: fontSize.md,
        },
        fontWeight,
        mb: 2,
        ...gradientStyle,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default GradientHeading;
