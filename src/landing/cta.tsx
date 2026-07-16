import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        my: 10,
        px: 5,
        py: 8,
        borderRadius: 6,
        textAlign: "center",
        background:
          "linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)",
        color: "#fff",
        boxShadow: "0 25px 60px rgba(99,102,241,.35)",
      }}
    >
      <Typography
        fontSize={{ xs: 34, md: 52 }}
        fontWeight={800}
      >
        Ready to Boost Your Productivity?
      </Typography>

      <Typography
        mt={3}
        sx={{
          maxWidth: 700,
          mx: "auto",
          opacity: .9,
          fontSize: 18,
        }}
      >
        Join thousands of users who manage their daily tasks,
        projects and productivity with TaskFlow.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
        mt={5}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/register")}
          sx={{
            bgcolor: "#fff",
            color: "#6366f1",
            px: 5,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 700,
            "&:hover": {
              bgcolor: "#f3f4f6",
            },
          }}
        >
          Create Account
        </Button>

        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/login")}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            px: 5,
            py: 1.5,
            borderRadius: 3,

            "&:hover": {
              bgcolor: "rgba(255,255,255,.12)",
              borderColor: "#fff",
            },
          }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}