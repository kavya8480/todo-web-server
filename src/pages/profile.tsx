import {
  Box,
  Paper,
  Typography,
  Avatar,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";

type ProfileProps = {
  setProfileOpen: (value: boolean) => void;
};


export default function Profile({setProfileOpen }: ProfileProps) {
  const [editMode, setEditMode] = React.useState(false);

    return (
    <Box
      sx={{
        minHeight: "100",
        background: "linear-gradient(135deg,#eef2ff,#f8fafc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 650,
          borderRadius: 5,
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* TOP BANNER */}
        <Box
          sx={{
            height: 120,
            background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
            position: "relative",
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              position: "absolute",
              bottom: -45,
              left: 30,
              border: "4px solid white",
              bgcolor: "#111827",
              fontSize: 28,
            }}
          >
            K
          </Avatar>
        </Box>

        {/* BODY */}
        <Box sx={{ p: 4, pt: 7 }}>
          {/* NAME + STATUS */}
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography variant="h5" fontWeight={800}>
                Kavya
              </Typography>
              <Typography color="text.secondary">
                Full Stack Developer • Student
              </Typography>
            </Box>

            <Chip
              label="Active User"
              color="success"
              sx={{ fontWeight: 600 }}
            />
          </Stack>

          <Divider sx={{ my: 3 }} />

          {/* STATS */}
          <Stack direction="row" spacing={2}>
            <Paper
              sx={{
                flex: 1,
                p: 2,
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #e5e7eb",
              }}
            >
              <Typography fontWeight={800} fontSize={22}>
                48
              </Typography>
              <Typography variant="caption">
                Total Tasks
              </Typography>
            </Paper>

            <Paper
              sx={{
                flex: 1,
                p: 2,
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #e5e7eb",
              }}
            >
              <Typography fontWeight={800} fontSize={22} color="green">
                30
              </Typography>
              <Typography variant="caption">
                Completed
              </Typography>
            </Paper>

            <Paper
              sx={{
                flex: 1,
                p: 2,
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #e5e7eb",
              }}
            >
              <Typography fontWeight={800} fontSize={22} color="orange">
                18
              </Typography>
              <Typography variant="caption">
                Pending
              </Typography>
            </Paper>
          </Stack>

          <Divider sx={{ my: 3 }} />

          {/* INFO SECTION */}
          <Stack spacing={2}>
  {editMode ? (
    <>
      <TextField label="Location" defaultValue="India" />
      <TextField label="Email" defaultValue="kavya@gmail.com" />
      <TextField label="Role" defaultValue="Student Developer" />
      <TextField label="Project" defaultValue="Todo Web App" />
    </>
  ) : (
    <>
      <Typography>📍 India</Typography>
      <Typography>📧 kavya@gmail.com</Typography>
      <Typography>💼 Role: Student Developer</Typography>
      <Typography>🚀 Project: Todo Web App</Typography>
    </>
  )}
</Stack>

          {/* BUTTONS */}
          <Stack direction="row" spacing={2} mt={4}>
            <Button
                variant="contained"
  onClick={() => setEditMode(!editMode)}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                flex: 1,
              }}
            >
               {editMode ? "Save Profile" : "Edit Profile"}
            </Button>

            <Button
              variant="outlined"
          onClick={() => setProfileOpen(false)}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                flex: 1,
              }}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}