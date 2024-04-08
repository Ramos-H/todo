import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { useState } from "react";
import { TaskEditModal } from "./components/TaskEditModal";
import { SortOptions, sortAndFilterTasks } from "./utils";
import { SortAndFilterForm } from "./components/SortAndFilterForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("");
  const [lastLoad, setLastLoad] = useState(Date.now());
  const [sortField, setSortField] = useState(SortOptions.Newest);

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

  function handleEditTask(editedTask) {
    setTasks((currentTasks) => [
      ...currentTasks.filter((task) => task.id !== editedTask.id),
      editedTask,
    ]);
  }

  function handleDeleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  function handleReload() {
    setLastLoad(Date.now());
  }

  const pendingTasks = tasks.filter((task) => !task.isDone);
  const doneTasks = tasks.filter((task) => task.isDone);

  let filteredPendingTasks = sortAndFilterTasks(pendingTasks, sortField, query);
  let filteredDoneTasks = sortAndFilterTasks(doneTasks, sortField, query);

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

            <SortAndFilterForm
              onSetQuery={setQuery}
              onChangeSortField={setSortField}
            />

            <TaskList
              pendingTasks={filteredPendingTasks}
              doneTasks={filteredDoneTasks}
              lastReload={lastLoad}
              onUpdateCompletion={handleUpdateCompletion}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
              onReload={handleReload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
