import { Typography, Box } from "@mui/material";

const LandscapeSystem = () => {
  return (
    <Box
      sx={{
        height: "70dvh",
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
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs:"30px", sm: "40px",md:"60", lg: "71px" },
            fontWeight: 800,
            color: "#FFFFFFFA",
            position: "relative",
            top: "10%",
          }}
        >
          Smart Solutions
        </Typography>
        {/* <Image
          src="/images/buildings.svg"
          alt="buildings"
          width={993}
          height={466}
        /> */}
       
      </Box>
    </Box>
  );
};

export default LandscapeSystem;
