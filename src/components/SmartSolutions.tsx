import { Typography, Container } from "@mui/material";
import Image from "next/image";
const SmartSolutions = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1472px",
        height: "100dvh",
        marginTop: "117px",
      }}
      className=""
    >
      <Image
        src="/images/blue-blur.svg"
        alt="blue overlay"
        fill
        style={{ left: "-15%", zIndex: "-1" }}
      />
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
          fontWeight: 400,
          mb: { xs: 1.5, sm: 2 },
          color: "#FFFFFFDB",
          lineHeight: "39px",
          width:"75%",
        }}
      >
        Yamama Engineering is a technology based leading service integrator
        providing the full digital landscape system committed to delivering
        innovative IT and smart IoT solutions to cities, municipalities, and
        private organizations. With a focus on transforming urban spaces into
        smart, sustainable, and connected communities, our comprehensive
        services encompass various smart solutions for cities, parks, and
        buildings. The company's mission centers on enhancing the quality of
        life for residents while optimizing city administrators' operational
        efficiency encompassing full Digital Landscape system. With a vision to
        empower and enrich lifestyles through a strong digital ecosystem,
        Al-Yamamah enables the cities of KSA to embrace technology integration
        and collaborate closely with citizens for inclusive urban development.
      </Typography>
    </Container>
  );
};
export default SmartSolutions;
