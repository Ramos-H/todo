import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("");

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

  function handleDeleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  const pendingTasks = tasks.filter((task) => !task.isDone);
  const doneTasks = tasks.filter((task) => task.isDone);

  const filteredPendingTasks = pendingTasks.filter((task) =>
    task.name.includes(query)
  );
  const filteredDoneTasks = doneTasks.filter((task) =>
    task.name.includes(query)
  );

  const totalProgress = (doneTasks.length / tasks.length) * 100;
  return (
    <div className="container">
      <Header />

      <p className="text-center text-secondary">
        <strong>
          You have completed {!isNaN(totalProgress) ? totalProgress : 0}% of
          your tasks. ({doneTasks.length} out of {tasks.length})
        </strong>
      </p>

      <div className="row justify-content-center">
        <div className="col col-lg-6">
          <div className="container-fluid">
            <TaskForm onAddTask={handleAddTask} />

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="queryInput" className="form-label">
                  <strong>Search</strong>
                </label>
                <input
                  type="text"
                  id="queryInput"
                  className="form-control"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <TaskList
              pendingTasks={filteredPendingTasks}
              doneTasks={filteredDoneTasks}
              onUpdateCompletion={handleUpdateCompletion}
              onDeleteTask={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
