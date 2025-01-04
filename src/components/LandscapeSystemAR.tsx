import { Typography, Box } from "@mui/material";

const LandscapeSystem = () => {
  return (
    <Box
      sx={{
        height: "100vh", // Full height of the viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Ensures vertical centering
        background: "#1A1D41", // Optional: Add a background color for contrast
      }}
      dir="rtl" // Added RTL support
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "80%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "60px", lg: "71px" }, // Fix font size on large screens
            fontWeight: 800,
            color: "#FFFFFFFA",
            position: "relative",
            top: "0", // Removed top: 10% for better vertical centering
          }}
        >
          الحلول الذكية
        </Typography>
        {/* Optionally, you can add the image */}
        {/* <Image
          src="/images/buildings.svg"
          alt="buildings"
          width={993}
          height={466}
        /> */}
      </Box>
    </Box>
  );
};

export default LandscapeSystem;
