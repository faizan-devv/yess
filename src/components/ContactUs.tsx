"use client";
import Image from "next/image";
import { TextField, Button, Typography, Box, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import GradientHeading from "./GradientHeading";
import NavBar from "./NavBar";
import { useState } from "react";
import Footer from "./Footer";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#1A1D41",
    borderRadius: "10px",
    border: "none",
    height: "60px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
  "& .MuiInputLabel-root": {
    color: "#828282",
    fontWeight: 400,
  },
  "& input::placeholder": {
    color: "#828282",
    /* opacity: 1, */
  },
  "& .MuiSelect-select": {
    color: "white",
  },
  "& .MuiMenuItem-root": {
    color: "white",
  },
});
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact-us">
      <NavBar />
      <div className="py-[100px] px-[70px]">
        <div className="flex justify-center mb-[60px]">
          <Box
            sx={{
              width: {
                sm: "100%",
                md: "80%",
                lg: "60%",
              },
            }}
            className="text-center"
          >
            <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
              Contact Us
            </GradientHeading>
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
                Intelligent digitalsolutionsfor secure envorinmenst through
                automation &smart controls
              </Typography>
            </div>
          </Box>
        </div>
        <div className="form border border-[#397EF5] rounded-[50px] ">
          <div className="grid grid-cols-1 lg:grid-cols-4 items-center overflow-hidden">
            <div className="space-y-4 w-full bg-darkBlue col-span-3 py-[57px] pl-[57px] pr-[121px] rounded-tl-[50px] rounded-bl-[50px]">
              <div className="w-[80%]">
                <Typography
                  variant="h1"
                  className="text-white "
                  sx={{
                    fontSize: { xs: "34px", md: "54px" },
                    lineHeight: { xs: "32px", md: "68px" },
                    fontWeight: 700,
                  }}
                >
                  Get in <span className="text-[#397EF5]">Touch</span>
                </Typography>

                <Typography
                  variant="subtitle1"
                  className="text-white mt-4 pb-8 pd:pt-[20px] md:pb-10"
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    lineHeight: { xs: "14px", md: "24px" },
                  }}
                >
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                  Eu leo molestie vel, ornare non id blandit netus.
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <StyledTextField
                    required
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-[#1C1E3C] rounded-lg"
                    InputLabelProps={{ className: "text-white/50" }}
                    inputProps={{ className: "text-white" }}
                  />

                  <StyledTextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-[#1C1E3C] rounded-lg"
                    InputLabelProps={{ className: "text-white/50" }}
                    inputProps={{ className: "text-white" }}
                  />

                  <StyledTextField
                    required
                    fullWidth
                    label="Phone number"
                    variant="outlined"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-[#1C1E3C] rounded-lg"
                    InputLabelProps={{ className: "text-white/50" }}
                    inputProps={{ className: "text-white" }}
                  />

                  <StyledTextField
                    select
                    fullWidth
                    label="How did you find us?"
                    value={formData.source}
                    onChange={(e) =>
                      setFormData({ ...formData, source: e.target.value })
                    }
                    className="bg-[#1C1E3C] rounded-lg"
                    InputLabelProps={{ className: "text-white/50" }}
                    SelectProps={{ className: "text-white" }}
                  >
                    <MenuItem value="search">Search Engine</MenuItem>
                    <MenuItem value="social">Social Media</MenuItem>
                    <MenuItem value="referral">Referral</MenuItem>
                  </StyledTextField>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                      background: "#397EF5",
                      padding: "22.5px 0px",
                    }}
                  >
                    Submit
                  </Button>
                </form>
                <div className="flex flex-col md:flex-row gap-8 pt-[30px] space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/phone.svg"
                      alt="phone-logo"
                      width={60}
                      height={60}
                    />
                    <div>
                      <Typography
                        className="text-white70 text-xs"
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        Phone
                      </Typography>
                      <Typography className="text-white font-medium">
                        +966-13-828-1002
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/email.svg"
                      alt="email-logo"
                      width={60}
                      height={60}
                    />
                    <div>
                      <Typography
                        className="text-white70 text-xs"
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        Email
                      </Typography>
                      <Typography className="text-white font-medium">
                        info@yess.com.sa
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block col-span-1 h-full">
              <div className="rounded-3xl h-[83%] w-[100%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.8673004774145!2d50.0984!3d26.4235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef85c961edcd%3A0x7b2db98f2941c78c!2sAl%20Yamama%20Company%20for%20trading%20and%20Contracting!5e0!3m2!1sen!2sus!4v1658247416186!5i0"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    minHeight: "418px",
                    borderRadius: "1.5rem",
                    position: "relative",
                    top: "10%",
                    left: "-45%",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-tr-[50px] rounded-br-[50px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
