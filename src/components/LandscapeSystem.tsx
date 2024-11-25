/* import Image from "next/image"; */
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";
import NavBar from "./NavBar";
import Footer from "./Footer";
import RegistrationForm from "./RegistrationForm";


const LandscapeSystem = () =>{
return(
   <div className="">
     <div className="land-scape">
      <NavBar />
        <div className="flex justify-center pt-[114px] pb-[290px]">
        <Box sx={{ width: "60%" }} className="text-center">
          <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">Digital landscape systems</GradientHeading>
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
             Intelligent digitalsolutionsfor secure envorinmenst through automation &smart controls
            </Typography>
          </div>
        </Box>
      </div>
    </div>
      <RegistrationForm />
      <Footer />
   </div>
)
}
export default LandscapeSystem