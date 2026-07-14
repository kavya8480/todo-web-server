import { useState } from "react";
import axios from "axios";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onRegisterClick: () => void;
}

export default function Login({ onRegisterClick }: LoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:4000/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login Success:", response.data);

      // Example:
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      navigate("/dashboard");

    } catch (error: any) {
      console.error("Login Failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={12}
      sx={{
        mt: 10,
        width: 400,
        p: 5,
        borderRadius: 5,
        textAlign: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "primary.main",
          width: 70,
          height: 70,
          mx: "auto",
          mb: 2,
        }}
      >
        <LockOutlinedIcon fontSize="large" />
      </Avatar>

      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        Welcome Back
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Sign in to continue
      </Typography>

      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <TextField
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />

        <Typography
          variant="body2"
          color="primary"
          sx={{
            textAlign: "right",
            cursor: "pointer",
          }}
        >
          Forgot Password?
        </Typography>

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={loading}
          sx={{
            py: 1.5,
            borderRadius: 3,
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Don't have an account?{" "}
          <Link
            component="button"
            underline="hover"
            onClick={onRegisterClick}
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}