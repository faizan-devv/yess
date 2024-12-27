import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";

const OurVisionAR = () => {
  return (
    <div className="our-vsion px-[70px] min-h-dvh lg:min-h-screen  flex items-center justify-center text-center">
      <Box
        sx={{
          width: {
            sm: "100%",
            md: "80%",
            lg: "60%",
          },
        }}
      >
        <GradientHeading>رؤية السعودية 2030</GradientHeading>
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
            تمكننا من دفع عجلة الابتكار وتشكيل مستقبل التكنولوجيا في المملكة
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default OurVisionAR;
