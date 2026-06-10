import {
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
  InputAdornment,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

interface RegisterProps {
    onLoginClick: () => void;
}

export default function SignUp({ onLoginClick }: RegisterProps) {
  return (
    <Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    py: 0,
  }}
>
    <Paper
      elevation={0}
      sx={{
        width: 450,
       maxWidth: "90%",
        p: 4,
        borderRadius: 6,
        textAlign: "center",
        border: "1px solid #e0e0e0",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
      }}
    >
    
      <Avatar
        sx={{
          width: 50,
          height: 50,
          mx: "auto",
          mb: 2,
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
        }}
      >
        <PersonAddAlt1Icon sx={{ fontSize: 40 }} />
      </Avatar>

      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        Create Account
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Sign up to get started
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <TextField
          label="First Name"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />

        <TextField
          label="Last Name"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />

        <TextField
          label="Email Address"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />

        <TextField
          label="Phone Number"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
          }}
        />

        <Button
          variant="contained"
          size="large"
          sx={{
            py: 1.5,
            borderRadius: 3,
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            background:
              "linear-gradient(135deg,#1976d2,#42a5f5)",
          }}
        >
          Create Account
        </Button>

        <Typography color="text.secondary">
          Already have an account?{" "}
          <Typography
    component="span"
    onClick={onLoginClick}
    sx={{
      fontWeight: 700,
      color: "primary.main",
      cursor: "pointer",
    }}
  >
    Sign In
  </Typography>
        </Typography>
      </Box>
    
    </Paper>
    </Box>
  );
}