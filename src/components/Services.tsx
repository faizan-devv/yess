import GradientHeading from "./GradientHeading";
import { Typography, Box } from "@mui/material";
import ServiceSlider from "./ServiceSlider";

const Services = () => {
  return (
    <div className="min-h-screen services mt-[100px]">
      <div className="flex justify-center text-center ">
        <Box sx={{ width: "60%" }}>
          <GradientHeading>Our Services</GradientHeading>
          <div className="">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "20px", md: "30px" },
                fontWeight: 400,
                mb: 2,
              }}
              className="text-white80"
            >
              Saudi Vision 2030 empowers us to drive innovation and shape the
              future of technology in the Kingdom
            </Typography>
          </div>
        </Box>
      </div>

      <div className="mt-20">
      <ServiceSlider />
      </div>
    </div>
  );
};
export default Services;