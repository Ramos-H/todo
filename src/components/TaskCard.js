import styles from "./styles/TaskCard.module.css";

export function TaskCard({ id, name, isDone, onUpdateCompletion, onDelete }) {
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
                  id={`inputCheck-${id}`}
                  defaultChecked={isDone}
                  className="form-check-input"
                  onChange={() => onUpdateCompletion(id)}
                />
                <label
                  htmlFor={`inputCheck-${id}`}
                  className={`form-check-label ${
                    isDone && "text-decoration-line-through text-secondary"
                  }`}
                >
                  {name ?? "Task"}
                </label>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-danger" onClick={() => onDelete(id)}>
                <strong>
                  Delete <i className="bi bi-trash3-fill"></i>
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
