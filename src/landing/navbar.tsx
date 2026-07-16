import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "1300px",
          width: "100%",
          mx: "auto",
        }}
      >
        {/* Logo */}

        <Typography
          variant="h5"
          fontWeight={800}
          sx={{
            color: "#4f46e5",
            cursor: "pointer",
          }}
        >
          TaskFlow
        </Typography>

        {/* Menu */}

        

        {/* Buttons */}

        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/register")}
            sx={{
              borderRadius: 3,
              px: 3,
              background:
                "linear-gradient(90deg,#6366f1,#8b5cf6)",
            }}
          >
            Register
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}