import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 12,
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Background Blur */}

      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          bgcolor: "#8b5cf6",
          borderRadius: "50%",
          filter: "blur(140px)",
          opacity: .20,
          top: -120,
          left: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          bgcolor: "#06b6d4",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: .15,
          bottom: -80,
          right: -80,
        }}
      />

      <Stack
  spacing={5}
  alignItems="center"
  textAlign="center"
  sx={{
    maxWidth: 900,
    mx: "auto",
  }}
>
        {/* LEFT */}

        <Box>
          <Typography
            sx={{
              color: "#6366f1",
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            MODERN TASK MANAGEMENT
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: 42,
                md: 64,
              },
              lineHeight: 1.1,
              mt: 2,
            }}
          >
            Organize Work
            <br />

            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg,#6366f1,#8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beautifully.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "#6b7280",
              fontSize: 18,
              maxWidth: 520,
            }}
          >
            Manage projects, prioritize tasks,
            collaborate with your team and stay
            productive using one beautiful workspace.
          </Typography>

          <Stack
  alignItems="center"
  mt={5}
>
  <Button
    variant="contained"
    size="large"
    onClick={() => navigate("/register")}
    sx={{
      px: 6,
      py: 1.8,
      borderRadius: "16px",
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
      background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
      boxShadow: "0 12px 30px rgba(99,102,241,.35)",

      "&:hover": {
        background: "linear-gradient(90deg,#4f46e5,#7c3aed)",
        transform: "translateY(-3px)",
        boxShadow: "0 18px 40px rgba(99,102,241,.45)",
      },
    }}
  >
    Get Started →
  </Button>
</Stack>
        </Box>
        </Stack>

{/* RIGHT */}
<Box
  sx={{
    mt: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Box
  sx={{
    position: "relative",
    width: "100%",
    maxWidth: 900,
    minHeight: 520,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {/* Main Glass Card */}
  <Paper
    elevation={0}
    sx={{
      width: 430,
      p: 4,
      borderRadius: "30px",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,.5)",
      boxShadow: "0 30px 80px rgba(99,102,241,.15)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Typography
      sx={{
        fontWeight: 800,
        fontSize: 32,
        textAlign: "center",
        mb: 1,
      }}
    >
      ✨ Work Smarter
    </Typography>

    <Typography
      sx={{
        textAlign: "center",
        color: "#6b7280",
        mb: 5,
      }}
    >
      Everything you need to stay productive,
      focused and organized.
    </Typography>

    <Stack spacing={3}>
      {[
        {
          icon: "🚀",
          title: "Manage Unlimited Tasks",
          color: "#6366f1",
        },
        {
          icon: "🔥",
          title: "Priority Management",
          color: "#ef4444",
        },
        {
          icon: "✅",
          title: "Track Progress Easily",
          color: "#10b981",
        },
        {
          icon: "⚡",
          title: "Boost Productivity",
          color: "#f59e0b",
        },
      ].map((item) => (
        <Paper
          key={item.title}
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            gap: 2,
            border: "1px solid #eef2ff",
            transition: ".3s",

            "&:hover": {
              transform: "translateX(8px)",
              boxShadow: "0 15px 35px rgba(99,102,241,.15)",
            },
          }}
        >
          <Box
            sx={{
              width: 55,
              height: 55,
              borderRadius: "50%",
              bgcolor: item.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              color: "#fff",
            }}
          >
            {item.icon}
          </Box>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 17,
            }}
          >
            {item.title}
          </Typography>
        </Paper>
      ))}
    </Stack>
  </Paper>

  {/* Floating Badge 1 */}
  <Paper
    elevation={0}
    sx={{
      position: "absolute",
      top: 40,
      left: -20,
      px: 3,
      py: 2,
      borderRadius: 4,
      bgcolor: "#fff",
      boxShadow: "0 15px 40px rgba(0,0,0,.08)",
    }}
  >
    <Typography fontWeight={700}>
      🚀 10K+ Users
    </Typography>
  </Paper>

  {/* Floating Badge 2 */}
  <Paper
    elevation={0}
    sx={{
      position: "absolute",
      bottom: 30,
      right: -20,
      px: 3,
      py: 2,
      borderRadius: 4,
      bgcolor: "#fff",
      boxShadow: "0 15px 40px rgba(0,0,0,.08)",
    }}
  >
    <Typography fontWeight={700}>
      ⭐ 4.9 Rating
    </Typography>
  </Paper>

  {/* Floating Badge 3 */}
  <Paper
    elevation={0}
    sx={{
      position: "absolute",
      top: 200,
      right: -35,
      px: 3,
      py: 2,
      borderRadius: 4,
      bgcolor: "#fff",
      boxShadow: "0 15px 40px rgba(0,0,0,.08)",
    }}
  >
    <Typography fontWeight={700}>
      ⚡ Faster Workflow
    </Typography>
  </Paper>
  </Box>
</Box>
    
    </Box>
  );
}