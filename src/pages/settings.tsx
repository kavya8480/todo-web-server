import {
  Box,
  Paper,
  Typography,
  Stack,
  Switch,
  Button,
  Avatar,
  Chip,
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import SecurityIcon from "@mui/icons-material/Security";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";



type SettingsProps = {
  setSettingsOpen: (value: boolean) => void; 
};

export default function Settings({ setSettingsOpen}: SettingsProps) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100%",
        background: "linear-gradient(135deg,#eef2ff,#f8fafc)",
        p: 2,
      }}
    >
      {/* HEADER */}
      <Paper
        sx={{
          p: 3,
          borderRadius: 4,
          background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
          color: "white",
          mb: 2,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: "white", color: "#6366f1" }}>
            ⚙️
          </Avatar>

          <Box>
            <Typography variant="h6" fontWeight={800}>
              Settings Panel
            </Typography>
            <Typography fontSize={13} sx={{ opacity: 0.9 }}>
              Customize your experience
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* SETTINGS CARDS */}
      <Stack spacing={2}>

        {/* DARK MODE */}
   <Paper sx={{ p: 2, borderRadius: 3 }}> 
    <Stack direction="row" justifyContent="space-between"> 
      <Stack direction="row" spacing={1} alignItems="center"> 
        <DarkModeIcon color="primary" />
         <Box> <Typography fontWeight={600}>Dark Mode</Typography>
          <Typography fontSize={12} color="text.secondary"> Switch theme appearance </Typography>
           </Box>
            </Stack>
            <Switch /> 
            </Stack> 
            </Paper>

        {/* NOTIFICATIONS */}
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={1} alignItems="center">
              <NotificationsIcon color="secondary" />
              <Box>
                <Typography fontWeight={600}>Notifications</Typography>
                <Typography fontSize={12} color="text.secondary">
                  Get app alerts
                </Typography>
              </Box>
            </Stack>
            <Switch defaultChecked />
          </Stack>
        </Paper>

        {/* EMAIL */}
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon color="success" />
              <Box>
                <Typography fontWeight={600}>Email Alerts</Typography>
                <Typography fontSize={12} color="text.secondary">
                  Receive email updates
                </Typography>
              </Box>
            </Stack>
            <Switch />
          </Stack>
        </Paper>

        {/* SECURITY */}
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={1} alignItems="center">
              <SecurityIcon color="error" />
              <Box>
                <Typography fontWeight={600}>Security</Typography>
                <Typography fontSize={12} color="text.secondary">
                  Login & privacy controls
                </Typography>
              </Box>
            </Stack>

            <Chip label="Protected" color="success" size="small" />
          </Stack>
        </Paper>
      </Stack>

      {/* FOOTER BUTTONS */}
      <Stack direction="row" spacing={2} mt={3}>
        <Button
          variant="outlined"
          fullWidth
          sx={{ borderRadius: 3 }}
          onClick={() => setSettingsOpen(false)}
        >
          Close
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: 3,
            background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
          }}
          onClick={() => setOpenSnackbar(true)}
        >
          Save Changes
        </Button>

        <Snackbar
  open={openSnackbar}
  autoHideDuration={3000}
  onClose={() => setOpenSnackbar(false)}
  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
>
  <Alert
    onClose={() => setOpenSnackbar(false)}
    severity="success"
    variant="filled"
  >
    Settings saved successfully!
  </Alert>
</Snackbar>
      </Stack>
      
    </Box>
  );
}