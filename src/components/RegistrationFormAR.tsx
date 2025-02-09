"use client";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Stack,
  Grid,
} from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";
import { useState } from "react";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const publickey = "YyhTVkzHQbGRa5jp5";
  const serviceId = "service_9q9kw0b";
  const templateId = "template_i4znjhz";

  const templateParams = {
    from_company_name: companyName,
    from_company_email: email,
    to_name: "Waqar Munawar",
    message: message,
  };

  const handleSubmit = () => {
    // Handle form submission
    if (email.length === 0) {
      alert("Email cannot be empty!");
      return;
    }
    if (companyName.length === 0) {
      alert("Company cannot be empty!");
      return;
    }
    if (message.length === 0) {
      alert("Message cannot be empty!");
      return;
    }
    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then((response) => {
        console.log("response", response);
        setCompanyName("");
        setEmail("");
        setMessage("");
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something Went Wrong Please try Again Later!");
      });
  };

  const textFieldSx = {
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
  };

  const inputProps = {
    className: "text-white",
    disableUnderline: true,
    sx: {
      "&:hover": {
        backgroundColor: "#1A1D41",
      },
      "&.Mui-focused": {
        backgroundColor: "#1A1D41",
      },
      "& input, & textarea": {
        color: "white",
      },
    },
  };

  const labelProps = {
    sx: {
      color: "#8D8D8D",
      "&.Mui-focused": {
        color: "#8D8D8D",
      },
    },
  };

  return (
    <Box id="contact" sx={{ py: { xs: 6, md: 12.5 } }}>
      <Container maxWidth={false} sx={{ maxWidth: "1070px" }}>
        <Box>
          <GradientHeading gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)">
            سجل اهتمامك
          </GradientHeading>

          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mt: { xs: 2, md: 2.5 },
              fontSize: { xs: "24px", md: "30px" },
              lineHeight: { xs: "32px", md: "39px" },
            }}
          >
            ستبدأ أعمال الحفر في 2024.
          </Typography>

          <Grid
            container
            spacing={4}
            sx={{ mt: { xs: 4, md: 6.25 } }}
            alignItems="center"
          >
            <Grid item xs={12} lg={6}>
              <Stack component="form" onSubmit={handleSubmit} spacing={3}>
                <Box sx={{ mb: { xs: 3, md: 4.75 } }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      mt: { xs: 2, md: 2.5 },
                      mb: { xs: 2, md: 2.875 },
                      fontSize: { xs: "18px", md: "20px" },
                      lineHeight: { xs: "22px", md: "25px" },
                    }}
                  >
                    البريد الإلكتروني
                  </Typography>
                  <TextField
                    fullWidth
                    label="Rachel@domain.com"
                    variant="filled"
                    InputProps={inputProps}
                    InputLabelProps={labelProps}
                    sx={textFieldSx}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Box>

                <Box sx={{ mb: { xs: 3, md: 4.75 } }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      mt: { xs: 2, md: 2.5 },
                      mb: { xs: 2, md: 2.875 },
                      fontSize: { xs: "18px", md: "20px" },
                      lineHeight: { xs: "22px", md: "25px" },
                    }}
                  >
                    اسم الشركة
                  </Typography>
                  <TextField
                    fullWidth
                    label="Rachel@domain.com"
                    variant="filled"
                    value={companyName}
                    InputProps={inputProps}
                    InputLabelProps={labelProps}
                    sx={textFieldSx}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                  />
                </Box>

                <Box sx={{ mb: { xs: 3, md: 4.75 } }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      mt: { xs: 2, md: 2.5 },
                      mb: { xs: 2, md: 2.875 },
                      fontSize: { xs: "18px", md: "20px" },
                      lineHeight: { xs: "22px", md: "25px" },
                    }}
                  >
                    الرسالة
                  </Typography>
                  <TextField
                    fullWidth
                    label="اكتب استفسارك هنا....."
                    variant="filled"
                    multiline
                    rows={4}
                    InputProps={inputProps}
                    InputLabelProps={labelProps}
                    sx={textFieldSx}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </Box>

                <Button
                  variant="outlined"
                  sx={{
                    px: { xs: 3, md: 4.5 },
                    width: { xs: "100%", sm: "fit-content" },
                  }}
                  onClick={handleSubmit}
                >
                  إرسال
                </Button>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/yess-logo.svg"
                  alt="yess-logo"
                  width={311}
                  height={418}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default RegistrationForm;
