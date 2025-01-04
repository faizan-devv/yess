import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";

const Initative = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1472px",
        height: "100vh", // Full viewport height
        position: "relative", // Position image correctly
      }}
      className="flex items-center"
      dir="rtl" // Set the text direction to RTL
    >
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Box
          sx={{
            position: "relative", // Position image behind content
            width: { xs: "90%", sm: "80%", md: "70%" },
            zIndex: 1, // Ensure content stays on top
          }}
        >
          <Image
            src="/images/blue-blur.svg"
            alt="blue overlay"
            fill
            style={{
              left: "-15%",
              top: "0", // Ensure image stays in place
              zIndex: -1, // Keep the image behind content
            }}
          />
          <GradientHeading
            gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
            fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
            fontWeight={700}
            sx={{
              textAlign: "center", // Center the heading
              mb: 2, // Add spacing between heading and content
            }}
          >
            مبادرة النظام الرقمي للمشاهد الطبيعية
          </GradientHeading>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 400,
              mb: { xs: 1.5, sm: 2 },
              color: "#FFFFFFDB",
              lineHeight: { xs: "25px", sm: "39px" },
              textAlign: "center", // Center the paragraph
              width: "100%", // Ensure the text takes up full width
            }}
          >
            تهدف المبادرة إلى توفير تجربة تكنولوجية سلسة للزوار في البيئة. حيث سيتم ربطهم بالميزات التفاعلية عبر التطبيق المحمول، ونقاط التفاعل الرقمية، والنظارات الذكية، والمناظير، إضافة إلى دمج الواقع المعزز والذكاء الاصطناعي. مبادرة النظام الرقمي للمشاهد الطبيعية.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Initative;
