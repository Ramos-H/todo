import styles from "./styles/TaskCard.module.css";

export function TaskCard({ id, name, isDone }) {
  return (
    <div className={`card mb-2 ${styles.taskCard}`}>
      <div className="card-body">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="isDone"
                  // Temp value
                  id={`inputCheck-${id ?? 0}`}
                  defaultChecked={isDone}
                  className="form-check-input"
                />
                <label
                  htmlFor={`inputCheck-${id ?? 0}`}
                  className={`form-check-label ${
                    isDone && "text-decoration-line-through text-secondary"
                  }`}
                >
                  {name ?? "Task"}
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
