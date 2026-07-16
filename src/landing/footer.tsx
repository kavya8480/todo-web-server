import {
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

  return (
    <Box
      sx={{
        mt: 10,
        background: "#0f172a",
        color: "#fff",
        py: 7,
        px: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={5}
        >
          {/* LEFT */}

          <Box maxWidth={350}>
            <Typography
              fontSize={30}
              fontWeight={800}
              mb={2}
            >
              🚀 TaskFlow
            </Typography>

            <Typography
              color="#cbd5e1"
              lineHeight={1.8}
            >
              A modern task management platform
              designed to help individuals and teams
              organize work, stay productive and
              achieve more every day.
            </Typography>
          </Box>

          {/* QUICK LINKS */}

         <Stack spacing={1.5}>
  <Typography
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  sx={{
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      color: "#6366f1",
    },
  }}
>
  Home
</Typography>

  <Typography
    sx={{ cursor: "pointer", "&:hover": { color: "#6366f1" } }}
    onClick={() => {
      const section = document.getElementById("features");
      section?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Features
  </Typography>

  <Typography
    sx={{ cursor: "pointer", "&:hover": { color: "#6366f1" } }}
    onClick={() => navigate("/login")}
  >
    Login
  </Typography>

  <Typography
    sx={{ cursor: "pointer", "&:hover": { color: "#6366f1" } }}
    onClick={() => navigate("/register")}
  >
    Register
  </Typography>
</Stack>

          {/* CONTACT */}

          <Box>
            <Typography
              fontWeight={700}
              mb={2}
            >
              Contact
            </Typography>

            <Typography color="#cbd5e1">
              support@taskflow.com
            </Typography>

            <Typography
              color="#cbd5e1"
              mt={1}
            >
              +91 98765 43210
            </Typography>

            <Typography
              color="#cbd5e1"
              mt={1}
            >
              India
            </Typography>
          </Box>

          {/* SOCIAL */}

          <Box>
            <Typography
              fontWeight={700}
              mb={2}
            >
              Follow Us
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: "#1e293b",
                  color: "#fff",
                }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                sx={{
                  bgcolor: "#1e293b",
                  color: "#fff",
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                sx={{
                  bgcolor: "#1e293b",
                  color: "#fff",
                }}
              >
                <TwitterIcon />
              </IconButton>

              <IconButton
                sx={{
                  bgcolor: "#1e293b",
                  color: "#fff",
                }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        <Divider
          sx={{
            my: 5,
            borderColor: "#334155",
          }}
        />

        <Typography
          textAlign="center"
          color="#94a3b8"
        >
          © {new Date().getFullYear()} TaskFlow.
          All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}