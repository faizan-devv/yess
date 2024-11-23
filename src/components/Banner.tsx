import { Typography, Box } from "@mui/material";
import NavHeader from "./NavBar";
const Banner = () => {
  return (
    <div className="">
      <NavHeader />
      <div className="banner px-[70px] pt-[165px] min-h-screen">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            position: "relative",
          }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "5rem" },
                fontWeight: 800,
                mb: 2,
                background:
                  "linear-gradient(101.13deg, #FFFFFF 24.57%, rgba(16, 13, 49, 0) 74.19%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Linking Minds
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: ".875rem", md: "1.25rem" },
                border: "1px solid #397EF5",
                background: "#282D4047",
                backgroundImage:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(153, 153, 153, 0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                padding: "7.3px 24px",
                width: "fit-content",
                borderRadius: "100px",
                backdropFilter: "blur(30px)",
                display: "inline-block",
                backgroundColor: "#282D4047",
              }}
              className="tech-sol"
            >
              Technology Solutions
            </Typography>
          </Box>

          {/* Right image */}
          <Box
            sx={{
              flex: 1,
              position: "absolute",
              right: "12%",
              bottom: "-511%",
            }}
          >
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
              Bridging Worlds
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: ".75rem", md: ".875rem" },
                border: "1px solid #397EF5",
                background: "#282D4047",
                color: " #FFFFFFBD",
                padding: "25px",
                width: "540px",
                borderRadius: "31px",
                backdropFilter: "blur(30px)",
                display: "inline-block",
                backgroundColor: "#282D4047",
                marginTop: "54px",
                lineHeight: "30px",
              }}
              className=""
            >
              YES Solutions (Al Yamamah Engineering Systems Solutions) is a
              Saudi company that has been growing rapidly in IT solutions by
              following a specialized path. YES Solutions provides design and
              implementation services for non-standard projects relating to
              communications, information technology, wireless communications,
              and signal security
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Banner;
