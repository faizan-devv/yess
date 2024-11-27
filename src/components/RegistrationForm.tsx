"use client";

import { TextField, Button, Typography } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";

const RegistrationForm = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div id="contact" className="px-4 sm:px-8 md:px-16 lg:px-[240px] py-12 md:py-[100px]">
      <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
        Register your interest
      </GradientHeading>

      <Typography
        variant="subtitle1"
        className="text-white70 mt-4 md:mt-[20px]"
        sx={{ 
          fontSize: { xs: "24px", md: "30px" },
          lineHeight: { xs: "32px", md: "39px" }
        }}
      >
        Earthworks will start in 2024.
      </Typography>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-8 md:mt-[50px] gap-8">
        <div className="space-y-4 w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6 md:mb-[38px]">
              <Typography
                variant="subtitle1"
                className="text-white mt-4 md:mt-[20px]"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: { xs: "22px", md: "25px" },
                  marginBottom: { xs: "16px", md: "23px" },
                }}
              >
                Email
              </Typography>
              <TextField
                fullWidth
                label="Rachel@domain.com"
                variant="filled"
                className="bg-[#1A1D41] rounded border-[#1A1D41]"
                InputProps={{
                  className: "text-white",
                  disableUnderline: true,
                  sx: {
                    "&:hover": {
                      backgroundColor: "#1A1D41",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#1A1D41",
                    },
                    "& input": {
                      color: "white",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#8D8D8D",
                    "&.Mui-focused": {
                      color: "#8D8D8D",
                    },
                  },
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1A1D41",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#1A1D41",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#1A1D41",
                    },
                    "&:before": {
                      borderBottom: "none",
                    },
                    "&:after": {
                      borderBottom: "none",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "none",
                    },
                  },
                }}
              />
            </div>
            <div className="mb-6 md:mb-[38px]">
              <Typography
                variant="subtitle1"
                className="text-white mt-4 md:mt-[20px]"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: { xs: "22px", md: "25px" },
                  marginBottom: { xs: "16px", md: "23px" },
                }}
              >
                Company Name
              </Typography>
              <TextField
                fullWidth
                label="Rachel@domain.com"
                variant="filled"
                className="bg-[#1A1D41] rounded border-[#1A1D41]"
                InputProps={{
                  className: "text-white",
                  disableUnderline: true,
                  sx: {
                    "&:hover": {
                      backgroundColor: "#1A1D41",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#1A1D41",
                    },
                    "& input": {
                      color: "white",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#8D8D8D",
                    "&.Mui-focused": {
                      color: "#8D8D8D",
                    },
                  },
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1A1D41",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#1A1D41",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#1A1D41",
                    },
                    "&:before": {
                      borderBottom: "none",
                    },
                    "&:after": {
                      borderBottom: "none",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "none",
                    },
                  },
                }}
              />
            </div>
            <div className="mb-6 md:mb-[38px]">
              <Typography
                variant="subtitle1"
                className="text-white mt-4 md:mt-[20px]"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: { xs: "22px", md: "25px" },
                  marginBottom: { xs: "16px", md: "23px" },
                }}
              >
                Message
              </Typography>
              <TextField
                fullWidth
                label="Type your query here....."
                variant="filled"
                multiline
                rows={4}
                className="bg-[#1A1D41] rounded border-[#1A1D41]"
                InputProps={{
                  className: "text-white",
                  disableUnderline: true,
                  sx: {
                    "&:hover": {
                      backgroundColor: "#1A1D41",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#1A1D41",
                    },
                    "& textarea": {
                      color: "white",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#8D8D8D",
                    "&.Mui-focused": {
                      color: "#8D8D8D",
                    },
                  },
                }}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#1A1D41",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#1A1D41",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "#1A1D41",
                    },
                    "&:before": {
                      borderBottom: "none",
                    },
                    "&:after": {
                      borderBottom: "none",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "none",
                    },
                  },
                }}
              />
            </div>

            <Button 
              variant="outlined" 
              sx={{ 
                paddingInline: { xs: "24px", md: "36px" },
                width: { xs: "100%", sm: "auto" }
              }}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center justify-center">
            <Image
              src="/images/yess-logo.svg"
              alt="yess-logo"
              width={311}
              height={418}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;