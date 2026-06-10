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

interface LoginProps {
  onRegisterClick: () => void;
}

export default function Login({ onRegisterClick }: LoginProps) {
  return (
    <Paper
      elevation={12}
      sx={{
        mt:10,
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

      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 1 }}
      >
        Welcome Back
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Sign in to continue
      </Typography>

      <Box
        component="form"
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
          variant="outlined"
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
          variant="outlined"
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
          variant="contained"
          size="large"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: 3,
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Sign In
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