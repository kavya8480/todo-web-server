import { Box, Paper, Typography } from "@mui/material";

const stats = [
  {
    number: "10K+",
    title: "Tasks Completed",
    color: "#6366f1",
  },
  {
    number: "1K+",
    title: "Active Users",
    color: "#10b981",
  },
  {
    number: "99%",
    title: "Success Rate",
    color: "#f59e0b",
  },
  {
    number: "24/7",
    title: "Support",
    color: "#ef4444",
  },
];

export default function Statistics() {
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
        WHY TASKFLOW
      </Typography>

      <Typography
        textAlign="center"
        fontWeight={800}
        fontSize={{ xs: 34, md: 48 }}
        mt={2}
        mb={7}
      >
        Trusted by Thousands
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4,1fr)",
          },
          gap: 4,
        }}
      >
        {stats.map((item) => (
          <Paper
            key={item.title}
            elevation={0}
            sx={{
              p: 5,
              textAlign: "center",
              borderRadius: 5,
              background: "#fff",
              border: "1px solid #e5e7eb",
              transition: ".3s",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 40px rgba(0,0,0,.08)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 42,
                fontWeight: 800,
                color: item.color,
              }}
            >
              {item.number}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#6b7280",
              }}
            >
              {item.title}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}