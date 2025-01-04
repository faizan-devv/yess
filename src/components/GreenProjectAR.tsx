import { Typography, Box, Stack, Container } from "@mui/material";
import GradientHeading from "./GradientHeading";
import Image from "next/image";

const GreenProject = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1472px",
        height: "100vh", // Adjusted for full viewport height
      }}
      className="flex items-center"
      dir="rtl" // Added RTL support
    >
      <Stack>
        <Box
          sx={{
            width: { xs: "90%" },
          }}
        >
          <Image
            src="/images/blue-blur.svg"
            alt="blue overlay"
            fill
            style={{ left: "-15%", zIndex: "-1" }}
          />
          <GradientHeading
            gradient="linear-gradient(90deg, #FFFFFF 78.31%, #635E5E 116.02%)"
            fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
            fontWeight={700}
            sx={{
              textAlign: "center", // Center the heading for RTL
            }}
          >
            استراتيجية مشروع الرياض الأخضر
          </GradientHeading>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 400,
              mb: { xs: 1.5, sm: 2 },
              color: "#FFFFFFDB",
              lineHeight: { xs: "25px", sm: "39px" },
              width: {
                xs: "95%",
                sm: "80%",
              },
              textAlign: "center", // Center text for RTL
            }}
          >
            هو واحد من أكثر مشاريع التشجير الحضرية طموحًا في العالم، حيث سيتم
            زراعة 7.5 مليون شجرة عبر العاصمة. الحدائق الحالية تفتقر إلى التفاعل
            ولا تستفيد بالكامل من الإمكانيات المتاحة للتعليم البيئي وزيادة
            الوعي. غالبًا ما يفوت الزوار فرصة فهم ...
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 400,
              mb: { xs: 1.5, sm: 2 },
              color: "#FFFFFFDB",
              lineHeight: { xs: "25px", sm: "39px" },
              width: {
                xs: "95%",
                sm: "75%",
              },
              marginTop: "40px",
              textAlign: "center", // Ensure text alignment for RTL
            }}
          >
            استراتيجية مشروع الرياض الأخضر هو أحد أكثر مشاريع التشجير
            الحضرية طموحًا في العالم، حيث سيتم زراعة 7.5 مليون شجرة عبر
            العاصمة. الحدائق الحالية تفتقر إلى التفاعل ولا تستفيد بالكامل
            من الإمكانيات المتاحة للتعليم البيئي وزيادة الوعي. غالبًا ما
            يفوت الزوار فرصة فهم تعقيدات النظام البيئي ودورهم في الحفاظ
            على البيئة. أصبح من الواضح الحاجة إلى حل متماسك ومبتكر لسد
            هذه الفجوة. لذلك، تركز "يمامة" على تقديم تجربة تفاعلية
            ومفيدة تكمل المحيط الطبيعي. سيتمكن الزوار من التفاعل بسلاسة
            مع البيئة، والحصول على معلومات قيمة، والمساهمة في جهود
            الحفاظ على البيئة.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default GreenProject;
