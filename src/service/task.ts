import api from "./interceptor";

//  GetAllTask 
export async function getAllTask() {
  try {
     localStorage.getItem("accessToken");
    const response: any = await api.get(
      "/task/getAllTask"
    );

    const mappedTasks = response.all_tasks.map((task: any) => ({
      id: task.external_id,
      name: task.name,
      description: task.description,
      notes: task.notes,
      date: task.due_date,
      status: task.status,
      priority: task.priority,
    }));

    return mappedTasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

//  CreateTask 
export async function createTask(task: any) {
  try {
     localStorage.getItem("accessToken");
  
    const response = await api.post(
      "/task/create",
      {
        name: task.name,
        description: task.description,
        notes: task.notes,
        due_date: task.date,
        priority: task.priority,
      }
    );


    return {
      id: response.data.task.external_id,
      name: response.data.task.name,
      description: response.data.task.description,
      notes: response.data.task.notes,
      date: response.data.task.due_date,
      status: response.data.task.status,
      priority: response.data.task.priority,
    };
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
}

//   DeleteTask 

export async function deleteTask(taskId: string) {
  try {
     localStorage.getItem("accessToken");
    const response = await api.delete(
      `/task/delete/${taskId}`,
      
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}

//  UpdateTask 
export async function updateTask(updatedTask: any) {
  try {
     localStorage.getItem("accessToken");
    const response = await api.post(
      `/task/update/${updatedTask.id}`,
      {
        name: updatedTask.name,
        description: updatedTask.description,
        notes: updatedTask.notes,
        due_date: updatedTask.date,
        status: updatedTask.status,
        priority: updatedTask.priority,
      },
    
    );

    return response.data.task;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
}