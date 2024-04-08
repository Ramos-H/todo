import { TaskCard } from "./TaskCard";

export function TaskList({
  pendingTasks,
  doneTasks,
  lastReload,
  onUpdateCompletion,
  onDeleteTask,
  onEditTask,
  onReload,
}) {
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
                <strong>Pending Tasks ({pendingTasks.length})</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                {pendingTasks.map((task) => (
                  <TaskCard
                    key={`${task.id}-${lastReload}`}
                    {...{
                      ...task,
                      onUpdateCompletion: onUpdateCompletion,
                      onDelete: onDeleteTask,
                      onEdit: onEditTask,
                      onReload: onReload,
                    }}
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
                <strong>Completed Tasks ({doneTasks.length})</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                {doneTasks.map((task) => (
                  <TaskCard
                    key={`${task.id}-${lastReload}`}
                    {...{
                      ...task,
                      onUpdateCompletion: onUpdateCompletion,
                      onDelete: onDeleteTask,
                      onEdit: onEditTask,
                      onReload: onReload,
                    }}
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
