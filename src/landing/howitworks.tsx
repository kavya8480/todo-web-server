import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Register in seconds and securely log in to access your personal workspace.",
    color: "#6366f1",
  },
  {
    number: "02",
    title: "Manage Your Tasks",
    description:
      "Create, edit, prioritize and organize your daily tasks effortlessly.",
    color: "#10b981",
  },
  {
    number: "03",
    title: "Stay Productive",
    description:
      "Track progress, complete tasks and achieve your goals with ease.",
    color: "#f59e0b",
  },
];

export default function HowItWorks() {
  return (
    <Box
      sx={{
        maxWidth: 1300,
        mx: "auto",
        py: 10,
        px: 4,
      }}
    >
      <Typography
        textAlign="center"
        color="#6366f1"
        fontWeight={700}
      >
        HOW IT WORKS
      </Typography>

      <Typography
        textAlign="center"
        fontWeight={800}
        fontSize={{ xs: 34, md: 48 }}
        mt={2}
        mb={7}
      >
        Get Started in 3 Easy Steps
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3,1fr)",
          },
          gap: 4,
        }}
      >
        {steps.map((step) => (
          <Paper
            key={step.number}
            elevation={0}
            sx={{
              p: 5,
              borderRadius: 5,
              border: "1px solid #e5e7eb",
              textAlign: "center",
              transition: ".3s",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 45px rgba(0,0,0,.08)",
              },
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 70,
                mx: "auto",
                mb: 3,
                borderRadius: "50%",
                bgcolor: step.color,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              {step.number}
            </Box>

            <Typography
              fontWeight={700}
              fontSize={22}
            >
              {step.title}
            </Typography>

            <Typography
              mt={2}
              color="text.secondary"
            >
              {step.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}