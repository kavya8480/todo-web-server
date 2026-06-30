import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  IconButton,
  Snackbar,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

type Task = {
  id: number;
  name: string;
  description?: string;
  notes?: string;
  date?: string;
  priority?: string;
  status?: string;
};

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  task: Task | null;
  onUpdate: (task: Task) => void;
};

export default function EditTask({
  open,
  setOpen,
  task,
  onUpdate,
}: Props) {
  const [form, setForm] = React.useState<Task | null>(task);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    setForm(task);
  }, [task]);

  if (!open || !form) return null;

  const handleChange = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const handleSave = () => {
    onUpdate(form);
    setSaved(true);

    setTimeout(() => {
      setOpen(false);
    }, 800);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "flex-end",
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(8px)",
        zIndex: 9999,
      }}
    >
      <Fade in={open}>
        <Paper
          elevation={0}
          sx={{
            width: 440,
            height: "100%",
            p: 3,
            borderRadius: "20px 0 0 20px",
            background:
              "linear-gradient(145deg, #ffffff, #f3f4f6)",
            boxShadow: "-10px 0 40px rgba(0,0,0,0.15)",
            overflowY: "auto",
          }}
        >
          {/* HEADER */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography fontWeight={800} fontSize={20}>
                ✏️ Edit Task
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                Update your task details
              </Typography>
            </Box>

            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                bgcolor: "#f3f4f6",
                "&:hover": { bgcolor: "#e5e7eb" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          {/* FORM */}
          <Stack spacing={2.2} mt={3}>
            <TextField
              label="Task Name"
              fullWidth
              value={form.name || ""}
              onChange={(e) =>
                handleChange("name", e.target.value)
              }
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={2}
              value={form.description || ""}
              onChange={(e) =>
                handleChange("description", e.target.value)
              }
            />

            <TextField
              label="Notes"
              fullWidth
              multiline
              rows={2}
              value={form.notes || ""}
              onChange={(e) =>
                handleChange("notes", e.target.value)
              }
            />

            <TextField
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={form.date || ""}
              onChange={(e) =>
                handleChange("date", e.target.value)
              }
            />

            <TextField
              select
              label="Priority"
              fullWidth
              value={form.priority || "Low"}
              onChange={(e) =>
                handleChange("priority", e.target.value)
              }
            >
              <MenuItem value="High">🔥 High</MenuItem>
              <MenuItem value="Medium">⚡ Medium</MenuItem>
              <MenuItem value="Low">🌿 Low</MenuItem>
            </TextField>

            <TextField
              select
              label="Status"
              fullWidth
              value={form.status || "Pending"}
              onChange={(e) =>
                handleChange("status", e.target.value)
              }
            >
              <MenuItem value="Pending">🟡 Pending</MenuItem>
              <MenuItem value="Completed">🟢 Completed</MenuItem>
            </TextField>

            {/* BUTTONS */}
            <Stack direction="row" spacing={2} mt={1}>
              <Button
                fullWidth
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  background:
                    "linear-gradient(90deg,#6366f1,#8b5cf6)",
                }}
              >
                Save Changes
              </Button>

              <Button
                fullWidth
                variant="outlined"
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 3,
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>

          {/* SAVED SNACKBAR */}
          <Snackbar
            open={saved}
            autoHideDuration={1500}
            message="✅ Saved Successfully"
            onClose={() => setSaved(false)}
          />
        </Paper>
      </Fade>
    </Box>
  );
}