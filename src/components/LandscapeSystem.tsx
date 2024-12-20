import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";

const LandscapeSystem = () => {
  return (
    <Box
      sx={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        /*  alignItems:"center" */
      }}
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
        <GradientHeading
          fontSize={{ xs: "40px", md: "95px" }}
          fontWeight={800}
          className="landscap"
        >
          Smart Solutions
        </GradientHeading>
        <Image
          src="/images/buildings.svg"
          alt="buildings"
          width={993}
          height={466}
        />
        <Box sx={{
          position: "absolute",
          bottom: "14%",
          width: "80%",
        }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
              mb: 2,
              color: "#FFFFFFCC",
              lineHeight: "39px",
            }}
          >
            Yamama is the part of visionary initiative for digital landscape
            system which offers an immersive, informative, and interactive
            experience to the end user who is consuming the services for
            multiple environments either its a smart city services or Green
            projects like smart park. The Digital Landscape outlines the
            creation of a network for sharing vital environmental data across
            the smart cities, parks etc establishing a strong community bond
            focused on sustainable practices.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LandscapeSystem;
