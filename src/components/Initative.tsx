import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
const Initative = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1472px",
        height:"100dvh"
      }}
      className=""
    >
      <Stack alignItems="center">
        <Box
          sx={{
            width: { xs: "90%"},
            textAlign: "center",
          }}
        >
          <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
          The initiative of Digital landscape system
          </GradientHeading>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "25px" },
              fontWeight: 400,
              mb: { xs: 1.5, sm: 2 },
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight:"39px"
            }}
          >
            is to provide a seamless technology experience to visitors in the environment. They will get connected with the intuitive features provided through Mobile App, Digital touch points, Smart Glasses , Binoculars adding the Augmented Reality & AI on top.  The initiative of the Digital Landscape

          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};
export default Initative;
