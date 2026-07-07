import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Chip,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import Drawer from "@mui/material/Drawer";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import AddTask from "../pages/addTask";
import EditTask from "../pages/editTask";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from 'axios';

export default function Dashboard() {
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [notificationsEnabled, setNotificationsEnabled] =
  React.useState(false);

const [openSnackbar, setOpenSnackbar] =
  React.useState(false);

const handleNotificationToggle = () => {
  setNotificationsEnabled((prev) => !prev);
  setOpenSnackbar(true);
};

const [profileOpen, setProfileOpen] = React.useState(false);

const [settingsOpen, setSettingsOpen] = React.useState(false);

const [taskOpen, setTaskOpen] = React.useState(false);
const [tasks, setTasks] = React.useState<any[]>([]);

const [taskSnackbar, setTaskSnackbar] = React.useState(false);
const [taskMessage, setTaskMessage] = React.useState("");

//  GETALLTASK 
React.useEffect(() => {
    axios
      .get("http://localhost:4000/task/getAllTask")
      .then((response) => {
        const mappedTasks = response.data.all_tasks.map((task: any) => ({
          id: task.external_id,
          name: task.name,
          description: task.description,
          notes: task.notes,
          date: task.due_date,
          status: task.status,      // Default value
          priority: task.priority,// Default value
        }));

        setTasks(mappedTasks);
      })
      .catch((err) => console.error(err));
  }, []);


const handleCreateTask = async (task: any) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/task/create",
      {
        name: task.name,
        description: task.description,
        notes: task.notes,
        due_date: task.date,
      }
    );

    const createdTask = response.data.task;

    setTasks((prev) => [
      ...prev,
      {
        id: createdTask.external_id,
        name: createdTask.name,
        description: createdTask.description,
        notes: createdTask.notes,
        date: createdTask.due_date,
        status: createdTask.status,
        priority: "Medium",
      },
    ]);

    setTaskMessage("🎉 Task Created Successfully");
    setTaskSnackbar(true);

  } catch (error) {
    console.log(error);
  }
};

const handleDeleteTask = async (taskId: string) => {
  try {
    await axios.delete(
      `http://localhost:4000/task/delete/${taskId}`
    );

    const updated = tasks.filter((task) => task.id !== taskId);

    setTasks(updated);

    setTaskMessage("🗑️ Task Deleted Successfully");
    setTaskSnackbar(true);

  } catch (error) {
    console.log(error);
  }
};

const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.status === "Completed"
).length;

const pendingTasks = tasks.filter(
  (task) => task.status !== "Completed"
).length;

const today = new Date().toISOString().split("T")[0];

const dueToday = tasks.filter(
  (task) => task.date === today
).length;

const handleLogout = () => {
  setProfileOpen(false);
  setSettingsOpen(false);
  setAnchorEl(null);

  setNotificationsEnabled(false);
  setOpenSnackbar(false);

 
  alert("Logged out successfully");
};

const [selectedTask, setSelectedTask] = React.useState<any | null>(null);
const [detailOpen, setDetailOpen] = React.useState(false);

const handleTaskClick = (task: any) => {
  setSelectedTask(task);
  setDetailOpen(true);
};
 
const [filter, setFilter] = React.useState("All");

const filteredTasks = tasks.filter((task) => {
  const today = new Date().toISOString().split("T")[0];

  if (filter === "Completed") {
    return task.status === "Completed";
  }

  if (filter === "Pending") {
    return task.status !== "Completed";
  }

  if (filter === "Due Today") {
    return task.date === today;
  }

  return true; // Total Tasks
});

const [editOpen, setEditOpen] = React.useState(false);
const [editTask, setEditTask] = React.useState<any | null>(null);

const [editSnackbar, setEditSnackbar] = React.useState(false);

const handleEditTask = (task: any) => {
  setEditTask(task);
  setEditOpen(true);
};

const handleUpdateTask = async (updatedTask: any) => {
  try {
    await axios.post(
      `http://localhost:4000/task/update/${updatedTask.id}`,
      {
        name: updatedTask.name,
        description: updatedTask.description,
        notes: updatedTask.notes,
        due_date: updatedTask.date,
        status: updatedTask.status,
        priority: updatedTask.priority,
      }
    );

    const updated = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );

    setTasks(updated);
    setEditSnackbar(true);
  } catch (error) {
    console.log(error);
  }
};

  return (
    
    <Box sx={{ bgcolor: "#f5f5f5", height: "100", p: 4 ,display: "flex",
    flexDirection: "column",

}}>

      {/* TOP BAR */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 4,
          borderRadius: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.8)",
          border: "1px solid #e5e7eb",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={800}>
            Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back 👋 Manage your tasks smartly
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">

          <Snackbar
  open={taskSnackbar}
  autoHideDuration={5000}
  onClose={() => setTaskSnackbar(false)}
  message={taskMessage}
/>

          <Button
            variant="contained"
            sx={{ borderRadius: 3, textTransform: "none" }}
  onClick={() => setTaskOpen(true)}

          >
            + Add Task
          </Button>
            <IconButton onClick={handleNotificationToggle}>
  {notificationsEnabled ? (
    <NotificationsIcon color="secondary" />
  ) : (
    <NotificationsOffIcon color="action" />
  )}
</IconButton>

<Snackbar
  open={openSnackbar}
  autoHideDuration={2500}
  onClose={() => setOpenSnackbar(false)}
  message={
    notificationsEnabled
      ? "🔔 You will receive all notifications"
      : "🔕 You will not receive notifications"
  }
/>
          <IconButton onClick={handleOpen}>
            <Avatar
              sx={{
                width: 42,
                height: 42,
                bgcolor: "#6366f1",
                fontWeight: "bold",
              }}
            >
            </Avatar>

          </IconButton>

           
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
           <MenuItem   onClick={() => {
    handleClose();
    setProfileOpen(true);
  }}
>Profile</MenuItem>
          <MenuItem
    onClick={() => {
      handleClose();
      setSettingsOpen(true);
    }}
  >
    Settings
  </MenuItem>
            <MenuItem
  onClick={() => {
    handleClose();
    handleLogout();
  }}
>
  Logout
</MenuItem>
          </Menu>
        </Stack>
      </Paper>



      {/* STATS CARDS */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>

  {[
  { title: "Total Tasks", value: totalTasks, color: "#6366f1", type: "All" },
  { title: "Completed", value: completedTasks, color: "#22c55e", type: "Completed" },
  { title: "Pending", value: pendingTasks, color: "#f59e0b", type: "Pending" },
  { title: "Due Today", value: dueToday, color: "#ef4444", type: "Due Today" },
].map((item) => (
    
    <Paper
      key={item.title}
      onClick={() => setFilter(item.type)}
      sx={{
        flex: "1 1 220px",
        p: 3,
        borderRadius: 4,
        cursor: "pointer",
        border: "1px solid #e5e7eb",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Typography fontSize={14} color="text.secondary">
        {item.title}
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 800, color: item.color }}>
        {item.value}
      </Typography>
    </Paper>

  ))}

</Box>

      {/* RECENT TASKS */}
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 4,
          border: "1px solid #e5e7eb",
        }}
      >
        <Typography variant="h6" fontWeight={700} mb={2}>
          All Tasks
        </Typography>

        <Stack spacing={2}>
         {filteredTasks.map((task, i) => (
  <Paper
  key={i}
  onClick={() => handleTaskClick(task)}
  sx={{
    p: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer",
    "&:hover": { background: "#f9fafb" },
  }}
>
    <Typography>{task.name}</Typography>

<Stack direction="row" spacing={1} alignItems="center">
    <Chip
      label={task.priority}
      size="small"
      color={
        task.priority === "High"
          ? "error"
          : task.priority === "Medium"
          ? "warning"
          : "success"
      }
    />

          {/* DELETE BUTTON */}
     <Stack direction="row" spacing={1} alignItems="center">

  {/* EDIT BUTTON */}
  <IconButton
    onClick={(e) => {
      e.stopPropagation();
      handleEditTask(task);
    }}
    sx={{
      bgcolor: "#eef2ff",
      color: "#4f46e5",
      "&:hover": {
        bgcolor: "#6366f1",
        color: "#fff",
        transform: "scale(1.1)",
      },
      transition: "0.2s",
      borderRadius: 2,
    }}
  >
    <EditIcon fontSize="small" />
  </IconButton>

  {/* DELETE BUTTON */}
  <IconButton
   onClick={(e) => {
    e.stopPropagation();
    handleDeleteTask(task.id);
  }}
    sx={{
      bgcolor: "#fef2f2",
      color: "#ef4444",
      "&:hover": {
        bgcolor: "#ef4444",
        color: "#fff",
        transform: "scale(1.1)",
      },
      transition: "0.2s",
      borderRadius: 2,
    }}
  >
    <DeleteOutlineIcon fontSize="small" />
  </IconButton>

</Stack>

    </Stack>
  </Paper>
))}
        </Stack>
      </Paper>
     <Drawer
  anchor="right"
  open={profileOpen}
  onClose={() => setProfileOpen(false)}
  PaperProps={{
    sx: {
      width: 420,
      borderRadius: "16px 0 0 16px",
      overflowX: "hidden",
    },
  }}
>
  <Profile setProfileOpen={setProfileOpen} />
</Drawer>

<Drawer
  anchor="right"
  open={settingsOpen}
  onClose={() => setSettingsOpen(false)}
  PaperProps={{
    sx: {
      width: 420,
      borderRadius: "16px 0 0 16px",
    },
  }}
>
 <Settings setSettingsOpen={setSettingsOpen} />
</Drawer>
{taskOpen && (
  <AddTask
    open={taskOpen}
    setOpen={setTaskOpen}
    onCreate={handleCreateTask}
  />
)}

<Drawer
  anchor="right"
  open={detailOpen}
  onClose={() => setDetailOpen(false)}
  PaperProps={{
    sx: { width: 420, borderRadius: "16px 0 0 16px", p: 3 },
  }}
>
  {selectedTask && (
    <Box>
      <Typography variant="h6" fontWeight={700}>
        {selectedTask.name}
      </Typography>

      <Typography mt={2}>
        <b>Description:</b> {selectedTask.description}
      </Typography>

      <Typography mt={2}>
        <b>Notes:</b> {selectedTask.notes}
      </Typography>

      <Typography mt={2}>
        <b>Date:</b> {selectedTask?.date || "N/A"}
      </Typography>

      <Typography mt={2}>
        <b>Status:</b>{" "}
        <Chip
          label={selectedTask?.status || "Pending"}
          color={
            selectedTask?.status === "Completed" ? "success" : "warning"
          }
        />
      </Typography>

      {/* ACTION BUTTONS */}
      <Stack direction="row" spacing={2} mt={3}>
        
        {/* MARK COMPLETE */}
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            const updated = tasks.map((t) =>
              t.id === selectedTask.id
                ? { ...t, status: "Completed" }
                : t
            );

            setTasks(updated);
            localStorage.setItem("tasks", JSON.stringify(updated));
            setSelectedTask({ ...selectedTask, status: "Completed" });
          }}
        >
          Mark Complete
        </Button>

        {/* CLOSE */}
        <Button
          variant="outlined"
          onClick={() => setDetailOpen(false)}
        >
          Close
        </Button>
      </Stack>
    </Box>
  )}
</Drawer>

{detailOpen && selectedTask && (
  <Button
    color="error"
    onClick={() => {
      const updated = tasks.filter((t) => t.id !== selectedTask.id);
      setTasks(updated);
      localStorage.setItem("tasks", JSON.stringify(updated));
      setDetailOpen(false);
    }}
  >
    Delete Task
  </Button>
)}

<EditTask
  open={editOpen}
  setOpen={setEditOpen}
  task={editTask}
  onUpdate={handleUpdateTask}
/>

<Snackbar
  open={editSnackbar}
  autoHideDuration={2000}
  onClose={() => setEditSnackbar(false)}
  message="✅Task Updated"
/>

    </Box>
  );
}