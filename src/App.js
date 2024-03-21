import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function handleUpdateCompletion(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        return task.id === id ? { ...task, isDone: !task.isDone } : task;
      })
    );
  }

  const handleDeleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />

      <div className="row justify-content-center">
        <div className="col col-lg-6">
          <div className="container-fluid">
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
              tasks={tasks}
              onUpdateCompletion={handleUpdateCompletion}
              onDeleteTask={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
