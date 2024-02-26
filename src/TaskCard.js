export function TaskCard({ taskId, taskName, state }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="isDone"
                  // Temp value
                  id={`inputCheck-${taskId ?? 0}`}
                  defaultChecked={state}
                  className="form-check-input"
                />
                <label
                  htmlFor={`inputCheck-${taskId ?? 0}`}
                  className="form-check-label"
                >
                  {taskName ?? "Task"}
                </label>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-danger">
                <strong>
                  Delete <i class="bi bi-trash3-fill"></i>
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
