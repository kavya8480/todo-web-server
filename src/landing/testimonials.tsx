import {
  Avatar,
  Box,
  Paper,
  Typography,
} from "@mui/material";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    review:
      "TaskFlow completely changed the way I manage my daily work. Clean, fast and beautiful.",
    avatar: "A",
  },
  {
    name: "Priya Verma",
    role: "Project Manager",
    review:
      "The dashboard is intuitive and the task management experience is excellent.",
    avatar: "P",
  },
  {
    name: "Rahul Singh",
    role: "UI/UX Designer",
    review:
      "One of the best task management apps I've used. Modern UI and smooth workflow.",
    avatar: "R",
  },
];

export default function Testimonials() {
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
        TESTIMONIALS
      </Typography>

      <Typography
        textAlign="center"
        fontSize={{ xs: 34, md: 48 }}
        fontWeight={800}
        mt={2}
        mb={7}
      >
        Loved by Professionals
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
        {testimonials.map((item) => (
          <Paper
            key={item.name}
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 5,
              border: "1px solid #e5e7eb",
              transition: ".3s",
              background: "#fff",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 20px 45px rgba(0,0,0,.08)",
              },
            }}
          >
            <Typography
              sx={{
                color: "#6b7280",
                lineHeight: 1.8,
              }}
            >
              "{item.review}"
            </Typography>

            <Box
              mt={4}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Avatar
                sx={{
                  bgcolor: "#6366f1",
                }}
              >
                {item.avatar}
              </Avatar>

              <Box>
                <Typography fontWeight={700}>
                  {item.name}
                </Typography>

                <Typography
                  fontSize={14}
                  color="text.secondary"
                >
                  {item.role}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}