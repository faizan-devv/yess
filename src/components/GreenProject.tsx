import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
const GreenProject = () => {
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
          Strategy of the Green Riyadh project
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
            which is one of the most ambitious urban afforestation projects in the world Planting 7.5 million trees across the capital. The current parks lack interactivity and fail to fully capitalize on the potential for environmental education and awareness. Visitors often miss out on understanding ...
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};
export default GreenProject;
