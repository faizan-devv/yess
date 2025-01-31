// components/GradientHeading.tsx
"use client";

import { Typography, TypographyProps } from "@mui/material";
import { CSSProperties } from "react";

interface GradientHeadingProps extends TypographyProps {
  gradient?: string;
  fontSize?: { xs?: string; md?: string; sm?: string ; lg?: string };
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1";
  fontWeight?: number | string;
}

const GradientHeading = ({
  children,
  variant = "h1",
  gradient = "linear-gradient(130deg, #FFFFFF 31.58%, #100D31 98.2%)",
  fontSize = { xs: "18px", sm:"20px",  md: "40px", lg:"60px" },
  fontWeight = 700,
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
          sm: fontSize.sm,
          lg: fontSize.lg,
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
