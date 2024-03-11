import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((currentTasks) => [...currentTasks, newTask]);
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
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
}
