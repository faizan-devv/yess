import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";

const OurVision = () => {
  return (
    <div className="our-vsion px-[70px] min-h-dvh lg:min-h-screen  flex items-center justify-center text-center">
      <Box sx={{width: {
          sm:"100%" ,
          md:"80%", 
          lg:"60%" 
        }}}>
        <GradientHeading>
          Saudi Vision 2030
        </GradientHeading>
        <div className="">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: 400,
            mb: 2,
          }} className="text-white80"
        >
         empowers us to drive innovation and shape the future
         of technology in the Kingdom
        </Typography></div>
      </Box>
    </div>
  );
};

export default OurVision;
