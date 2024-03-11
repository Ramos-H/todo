import { TaskCard } from "./TaskCard";

export function TaskList({ tasks, onDeleteTask }) {
  const pendingTasks = tasks.filter((task) => !task.isDone);
  const doneTasks = tasks.filter((task) => task.isDone);

  return (
    <div className="row mb-3">
      <div className="col">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <strong>Pending Tasks</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                {pendingTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    {...{ ...task, onDelete: onDeleteTask }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <strong>Completed Tasks</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                {doneTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    {...{ ...task, onDelete: onDeleteTask }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
