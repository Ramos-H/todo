import { TaskCard } from "./TaskCard";

export function TaskList({ tasks }) {
  tasks = tasks ?? Array.from(Array(5).keys());
  const pendingTasks = tasks.filter((x) => x < 3);
  const doneTasks = tasks.filter((x) => x >= 3);

  return (
    <div className="row mb-3">
      <div className="col">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                {pendingTasks.map((task) => (
                  <TaskCard key={task} />
                ))}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                {doneTasks.map((task) => (
                  <TaskCard key={task} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
