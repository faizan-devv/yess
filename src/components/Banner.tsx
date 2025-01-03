"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { Typography, Box, Container, Stack } from "@mui/material";
import GradientHeading from "./GradientHeading";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);
  const box4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    setAnimationStarted(true);
    const tl = gsap.timeline();

    tl.from(box1Ref.current, { x: -500, duration: 1 }, 0)
      .from(box2Ref.current, { x: -500, duration: 1 }, 0)
      .from(box3Ref.current, { x: 1500, duration: 1 }, 0)
      .from(box4Ref.current, { x: 1500, duration: 1 }, 0);

    return () => {
      tl.kill();
      setAnimationStarted(false);
    };
  }, { scope: container });

  return (
    <Box>
      <Container
        ref={container}
        maxWidth={false}
        sx={{
          maxWidth: "1472px !important",
          pt: "165px",
          px: {sm:"0px"},
          minHeight: { xs: "100dvh", lg: "100vh" }
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          position="relative"
        >
          {/* Left content */}
          <Box
            flex={1}
            sx={{
              display: { xs: "none", sm: "inline" }
            }}
          >
            <GradientHeading
              className={animationStarted ? "show" : "hide"}
              ref={box1Ref}
              fontSize={{ xs: "20px", sm: "30px", md: "50px", lg: "80px" }}
              fontWeight={800}
            >
              Linking Minds
            </GradientHeading>

            <Typography
              ref={box2Ref}
              variant="subtitle1"
              sx={{
                fontSize: { xs: ".75rem", md: "1.25rem" },
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
                position: "absolute",
                left: "16%",
                top: {
                  xs: "110%",
                  sm: "220%",
                }
              }}
              className={animationStarted ? "show" : "hide"}
            >
              Technology Solutions
            </Typography>
          </Box>

          {/* Right content */}
          <Box
            className="banner-box"
            flex={1}
            sx={{
              position: "absolute",
              right: {
                xs: "-7%",
                sm: "2%",
                md: "5%"
              },
              bottom: {
                xs: "-470px",
                sm: "-830%",
                md: "-555%"
              }
            }}
          >
            <GradientHeading
              className={animationStarted ? "show" : "hide"}
              ref={box3Ref}
              fontSize={{ xs: "20px", sm: "30px", md: "50px", lg: "80px" }}
              fontWeight={800}
            >
              Bridging Worlds
            </GradientHeading>

            <Typography
              className={animationStarted ? "show" : "hide"}
              ref={box4Ref}
              variant="subtitle1"
              sx={{
                fontSize: { xs: ".75rem", md: ".875rem" },
                border: "1px solid #397EF5",
                background: "#282D4047",
                color: "#FFFFFFBD",
                padding: "25px",
                width: { sm: "540px" },
                borderRadius: "31px",
                backdropFilter: "blur(30px)",
                display: "inline-block",
                backgroundColor: "#282D4047",
                marginTop: "54px",
                lineHeight: "30px"
              }}
            >
              YES Solutions (Al Yamamah Engineering Systems Solutions) is a
              Saudi company that has been growing rapidly in IT solutions by
              following a specialized path. YES Solutions provides design and
              implementation services for non-standard projects relating to
              communications, information technology, wireless communications,
              and signal security
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;