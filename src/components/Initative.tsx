import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";
const Initative = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1472px",
        height: "100dvh",
      }}
      className="flex items-center"
    >
      <Stack>
        <Box
          sx={{
            width: { xs: "90%" },
          }}
        >
          <Image
            src="/images/blue-blur.svg"
            alt="blue overlay"
            fill
            style={{ left: "-15%", zIndex: "-1" }}
          />
          <GradientHeading
            gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
            fontSize={{xs: "20px", sm: "30px", md: "40px" }}
            fontWeight={700}
          >
            The initiative of Digital landscape system
          </GradientHeading>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 400,
              mb: { xs: 1.5, sm: 2 },
              color: "#FFFFFFDB",
              lineHeight: { xs: "25px", sm: "39px" },
              width: {
                xs: "95%",
                sm: "80%",
              },
            }}
          >
            is to provide a seamless technology experience to visitors in the
            environment. They will get connected with the intuitive features
            provided through Mobile App, Digital touch points, Smart Glasses ,
            Binoculars adding the Augmented Reality & AI on top. The initiative
            of the Digital Landscape
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};
export default Initative;
