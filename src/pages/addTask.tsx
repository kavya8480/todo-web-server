import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  onCreate: (task: any) => void;
};

export default function AddTask({ open, setOpen, onCreate }: Props) {
  const [task, setTask] = React.useState({
    name: "",
    description: "",
    date: "",
    notes: "",
    priority: "Medium",
  });

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!task.name.trim()) return;

    onCreate(task);

    setTask({
      name: "",
      description: "",
      date: "",
      notes: "",
      priority: "Medium",
    });

    setOpen(false);
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(2,6,23,0.65)",
        backdropFilter: "blur(12px)",
        zIndex: 9999,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 520,
          p: 4,
          borderRadius: 5,
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.25)",
        }}
      >
        {/* HEADER */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography fontSize={20} fontWeight={800}>
              ✨ Create New Task
            </Typography>
            <Typography fontSize={12} color="text.secondary">
              Organize your work efficiently
            </Typography>
          </Box>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              background: "#f3f4f6",
              "&:hover": { background: "#e5e7eb" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* FORM */}
        <Stack spacing={2.2}>
          <TextField
            label="Task Name"
            name="name"
            value={task.name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Description"
            name="description"
            value={task.description}
            onChange={handleChange}
            multiline
            rows={2}
            fullWidth
          />

         <Stack direction="row" spacing={2}>
  <TextField
    type="date"
    name="date"
    value={task.date}
    onChange={handleChange}
    fullWidth
    InputLabelProps={{ shrink: true }}
  />

 <TextField
  select
  fullWidth
  label="Priority"
  value={task.priority}
  SelectProps={{
    MenuProps: {
      disablePortal: true,
    },
  }}
  onChange={(e) =>
    setTask((prev) => ({
      ...prev,
      priority: e.target.value,
    }))
  }
>
  <MenuItem value="Low">🟢 Low</MenuItem>
  <MenuItem value="Medium">🟡 Medium</MenuItem>
  <MenuItem value="High">🔴 High</MenuItem>
</TextField>
</Stack>
          <TextField
            label="Notes"
            name="notes"
            value={task.notes}
            onChange={handleChange}
            multiline
            rows={2}
            fullWidth
          />

          {/* SUBMIT */}
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 1,
              py: 1.2,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
              background: "linear-gradient(135deg,#6366f1,#3b82f6)",
              boxShadow: "0 10px 30px rgba(99,102,241,0.35)",
              "&:hover": {
                background: "linear-gradient(135deg,#4f46e5,#2563eb)",
              },
            }}
          >
            Create Task ✨
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}