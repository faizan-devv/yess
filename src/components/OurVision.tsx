import { Typography, Box } from "@mui/material";
const OurVision = () => {
  return (
    <div className="our-vsion px-[70px] min-h-screen flex items-center justify-center text-center">
      <Box sx={{width:"60%"}}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "5rem" },
            fontWeight: 800,
            mb: 2,
            background:
              "linear-gradient(130deg, #FFFFFF 31.58%, #100D31 98.2%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Saudi Vision 2030
        </Typography>
        <div className="">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: 400,
            mb: 2,
            color:'#FFFFFFCC'
          }}
        >
         empowers us to drive innovation and shape the future
         of technology in the Kingdom
        </Typography></div>
      </Box>
    </div>
  );
};

export default OurVision;
