import {
  Box,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const features = [
  {
    icon: <DashboardIcon sx={{ fontSize: 40 }} />,
    title: "Beautiful Dashboard",
    desc: "Monitor all your tasks with a clean and modern dashboard.",
    color: "#6366f1",
  },
  {
    icon: <TaskAltIcon sx={{ fontSize: 40 }} />,
    title: "Task Management",
    desc: "Create, edit, delete and organize tasks effortlessly.",
    color: "#10b981",
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
    title: "Notifications",
    desc: "Stay updated with reminders and important task alerts.",
    color: "#f59e0b",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: "Team Collaboration",
    desc: "Collaborate with teammates and manage shared projects.",
    color: "#8b5cf6",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    title: "Analytics",
    desc: "Track your productivity and task completion progress.",
    color: "#ef4444",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Secure Access",
    desc: "Protected login with authentication and secure storage.",
    color: "#06b6d4",
  },
];

export default function Features() {
  return (
   <Box
     id="features"
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2,1fr)",
      md: "repeat(3,1fr)",
    },
    gap: 4,
  }}
>
  {features.map((feature) => (
    <Paper
      key={feature.title}
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 5,
        border: "1px solid #e5e7eb",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        transition: ".3s",
        height: "100%",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,.08)",
        },
      }}
    >
      <Box
        sx={{
          width: 70,
          height: 70,
          borderRadius: "18px",
          bgcolor: feature.color,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        {feature.icon}
      </Box>

      <Typography fontWeight={700} fontSize={22}>
        {feature.title}
      </Typography>

      <Typography mt={2} color="text.secondary">
        {feature.desc}
      </Typography>
    </Paper>
  ))}
</Box>
  );
}