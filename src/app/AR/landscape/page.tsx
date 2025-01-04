import {
  MainLayout,
  LandscapeSystemAR,
  NavBarAR,
  RegistrationFormAR,
  FooterAR,
  InitativeAR,
  GreenProjectAR,
  SmartSolutionsAR,
} from "@/components";
import { Typography, Box } from "@mui/material";
export default function Landscape() {
  return (
    <MainLayout>
      <div className="fullpage-container">
        {/* Full-page snap sections */}
        <div className="">
          <section className="fullpage-section">
            <div className="land-scape">
              <NavBarAR />
              <LandscapeSystemAR />
            </div>
            <Box
              sx={{
                display:"flex",
                justifyContent:"center"
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "12px", sm:"14px", md: "20px" },
                  fontWeight: 400,
                  mb: 2,
                  color: "#FFFFFFDB",
                  lineHeight: { xs: "25px", sm: "39px" },
                  width: {
                    xs: "95%",
                    sm: "75%",
                  },
                  textAlign:"center"
                }}
              >
                Yamama is the part of visionary initiative for digital landscape
                system which offers an immersive, informative, and interactive
                experience to the end user who is consuming the services for
                multiple environments either its a smart city services or Green
                projects like smart park. The Digital Landscape outlines the
                creation of a network for sharing vital environmental data
                across the smart cities, parks etc establishing a strong
                community bond focused on sustainable practices.
              </Typography>
            </Box>
          </section>
        </div>
        <section className="fullpage-section overflow-hidden Initative">
          <InitativeAR />
        </section>
        <section className="fullpage-section overflow-hidden green">
          <GreenProjectAR />
        </section>
        <div className="fullpage-section smart">
          <SmartSolutionsAR />
        </div>
        <section id="contact" className="fullpage-section">
          <RegistrationFormAR />
        </section>

        <div className="normal-scroll-sections">
          <FooterAR />
        </div>
      </div>
    </MainLayout>
  );
}
