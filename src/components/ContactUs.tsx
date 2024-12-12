"use client";
import Image from "next/image";
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  MenuItem, 
  Container, 
  Grid 
} from "@mui/material";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-us">
      <NavBar />
      <Container 
        maxWidth={false} 
        sx={{ 
          width: '1472px', 
          px: '70px', 
          py: '100px' 
        }}
      >
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
          <Grid container className="items-center overflow-hidden">
            <Grid 
              item 
              xs={12} 
              lg={9} 
              className="space-y-4 w-full bg-darkBlue col-span-3 py-[57px] pl-[57px] pr-[121px] rounded-tl-[50px] rounded-bl-[50px]"
            >
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
            </Grid>

            <Grid 
              item 
              lg={3} 
              sx={{ 
                display: { xs: "none", lg: "block" } 
              }}
              className="h-full"
            >
              <div className="rounded-3xl h-[90%] w-[100%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3622.0176250322284!2d46.654904!3d24.79485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d24.79485!2d46.654903999999995!5e0!3m2!1sen!2s!4v1734002416169!5m2!1sen!2s"
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    minHeight: "635px",
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
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;