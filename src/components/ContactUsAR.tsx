"use client";
import Image from "next/image";
import { TextField, Button, Typography, Box, MenuItem, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import GradientHeading from "./GradientHeading";
import NavBar from "./NavBar";
import { useState } from "react";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const StyledTextField = styled(TextField)(() => ({
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
}));

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

  // Create custom theme for RTL
  const theme = createTheme({
    direction: "rtl", // Enable RTL
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="contact-us">
        <NavBar />
        <Container 
          maxWidth={false} 
          sx={{ 
            maxWidth: '1472px', 
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
                اتصل بنا
              </GradientHeading>
              <div>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "20px", md: "30px" },
                    fontWeight: 400,
                    mb: 2,
                  }}
                  className="text-white80"
                >
                  حلول رقمية ذكية لبيئات آمنة من خلال الأتمتة والتحكمات الذكية
                </Typography>
              </div>
            </Box>
          </div>
          <div className="form rounded-[50px] ">
            <Grid container className="items-center overflow-hidden border border-[#397EF5] rounded-[50px]">
              <Grid 
                item 
                xs={12} 
                lg={9} 
                className="space-y-4 w-full bg-darkBlue col-span-3 py-[57px] pl-[57px] pr-[121px] rounded-tl-[50px] rounded-bl-[50px]"
              >
                <div className="w-[80%]">
                  <Typography
                    variant="h1"
                    className="text-white"
                    sx={{
                      fontSize: { xs: "34px", md: "54px" },
                      lineHeight: { xs: "32px", md: "68px" },
                      fontWeight: 700,
                    }}
                  >
                    تواصل <span className="text-[#397EF5]">معنا</span>
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    className="text-white mt-4 pb-8 pd:pt-[20px] md:pb-10"
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                      lineHeight: { xs: "14px", md: "24px" },
                    }}
                  >
                    للتواصل معنا، يرجى ملء النموذج أدناه وسنرد عليك في أقرب وقت.
                  </Typography>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <StyledTextField
                      required
                      fullWidth
                      label="الاسم"
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
                      label="البريد الإلكتروني"
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
                      label="رقم الهاتف"
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
                      label="كيف عرفت عنا؟"
                      value={formData.source}
                      onChange={(e) =>
                        setFormData({ ...formData, source: e.target.value })
                      }
                      className="bg-[#1C1E3C] rounded-lg"
                      InputLabelProps={{ className: "text-white/50" }}
                      SelectProps={{ className: "text-white" }}
                    >
                      <MenuItem value="search">محرك البحث</MenuItem>
                      <MenuItem value="social">وسائل التواصل الاجتماعي</MenuItem>
                      <MenuItem value="referral">إحالة</MenuItem>
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
                      إرسال
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
                          الهاتف
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
                          البريد الإلكتروني
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
                xs={12}
                lg={3} 
                sx={{ 
                  display: { xs: "none", lg: "block" } 
                }}
                className="h-full"
              >
                <div className="rounded-3xl h-[90%] w-[100%]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=... (Google Map URL)"
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
    </ThemeProvider>
  );
};

export default ContactUs;
