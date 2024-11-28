"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Typography, Box } from "@mui/material";
import GradientHeading from "./GradientHeading";

const Banner = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);
  const box3Ref = useRef<HTMLDivElement>(null);
  const box4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP timeline
    setAnimationStarted(true);
    const tl = gsap.timeline();

    // Animate all elements simultaneously
    tl.from(box1Ref.current, { x: -500, duration: 1 }, 0)
      .from(box2Ref.current, { x: -500, duration: 1 }, 0)
      .from(box3Ref.current, { x: 1500, duration: 1 }, 0)
      .from(box4Ref.current, { x: 1500, duration: 1 }, 0);

    // Cleanup
    return () => {
      tl.kill();
      setAnimationStarted(false);
    };
  }, []);

  return (
    <div className="">
      {/*  <NavBar /> */}
      <div
        ref={container}
        className="px-[70px] pt-[165px] min-h-dvh lg:min-h-screen "
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            position: "relative",
          }}
        >
          {/* Left content */}
          <Box 
          sx={{ flex: 1, display: { xs: "none", sm: "inline" } }}>
            <GradientHeading
              className={animationStarted ? "show" : "hide"}
              ref={box1Ref}
              fontSize={{ xs: "30px", md: "80px" }}
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
                },
              }}
              className={animationStarted ? "show" : "hide"}
            >
              Technology Solutions
            </Typography>
          </Box>

          {/* Right image */}
          <Box
            className="banner-box"
            sx={{
              flex: 1,
              position: "absolute",
              right: {
                xs: "-7%",
                sm: "-6%",
                md:"12%"
              },
              bottom: {
                xs:"-470px",
                sm: "-830%",
                md: "-511%",
              },
            }}
          >
            <GradientHeading
              className={animationStarted ? "show" : "hide"}
              ref={box3Ref}
              fontSize={{ xs: "30px", md: "80px" }}
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
                color: " #FFFFFFBD",
                padding: "25px",
                width: { sm: "540px" },
                borderRadius: "31px",
                backdropFilter: "blur(30px)",
                display: "inline-block",
                backgroundColor: "#282D4047",
                marginTop: "54px",
                lineHeight: "30px",
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
        </Box>
      </div>
    </div>
  );
};

export default Banner;
