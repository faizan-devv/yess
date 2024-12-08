import GradientHeading from "./GradientHeading";
import { Typography, Box, Container, Stack } from "@mui/material";
import ServiceSlider from "./ServiceSlider";

const Services = () => {
  return (
    <Box 
      id="services" 
      sx={{
        minHeight: '100dvh',
        mt: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="services"
    >
      <Container 
        maxWidth={false}
        sx={{
          maxWidth: '1472px !important'
        }}
      >
        <Stack
          alignItems="center"
          sx={{
            mb: '15px',
            pt: '100px',
            position: 'relative',
          }}
          className="blue-circle"
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '80%',
                lg: '60%'
              },
              textAlign:"center"
            }}
          >
            <GradientHeading>Our Services</GradientHeading>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { 
                    xs: "20px", 
                    md: "30px" 
                  },
                  fontWeight: 400,
                  mb: 2,
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                Al Yamamah Engineering Solutions operates in a range of cutting-edge areas, offering state-of-the-art IT services and transforming traditional professional services into exemplary implementation units. 

              </Typography>
            </Box>
          </Box>
        </Stack>
        
        <Box>
          <ServiceSlider />
        </Box>
      </Container>
    </Box>
  );
};

export default Services;