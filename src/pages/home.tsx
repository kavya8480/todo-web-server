import { useState } from "react";
import { Box } from "@mui/material";
import Login from "../compoments/login";
import Register from "../compoments/register";

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f4f6f8",
      }}
    >
      {showLogin ? (
        <Login
          onRegisterClick={() => setShowLogin(false)}
        />
      ) : (
        <Register
          onLoginClick={() => setShowLogin(true)}
        />
      )}
    </Box>
    
  );
}