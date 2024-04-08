import { useState } from "react";
import styles from "./styles/TaskCard.module.css";

export const TaskCardModes = {
  ViewMode: 1,
  EditMode: 2,
};

export function TaskCard({
  id,
  name,
  isDone,
  onUpdateCompletion,
  onDelete,
  onEdit,
  onReload,
}) {
  const [newName, setNewName] = useState(name);
  const [mode, setMode] = useState(TaskCardModes.ViewMode);

  function handleToggleEdit() {
    setMode((currentMode) => {
      if (currentMode === TaskCardModes.ViewMode) {
        return TaskCardModes.EditMode;
      } else {
        onReload();
        return TaskCardModes.ViewMode;
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newName.trim()) return;

    const editedTask = { id, name: newName.trim(), isDone };
    onEdit(editedTask);

    setNewName("");
    setMode(TaskCardModes.ViewMode);
  }

  return (
    <div className={`card mb-2 ${styles.taskCard}`}>
      <div className="card-body">
        <div className="container-fluid">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      name="isDone"
                      defaultChecked={isDone}
                      className="form-check-input"
                      onChange={() => onUpdateCompletion(id)}
                    />
                  </div>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className={`${
                      mode === TaskCardModes.ViewMode
                        ? "form-control-plaintext"
                        : "form-control"
                    } ${
                      isDone && "text-decoration-line-through text-secondary"
                    }`}
                    defaultValue={newName}
                    readOnly={mode === TaskCardModes.ViewMode}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  {mode === TaskCardModes.EditMode ? (
                    <>
                      <button type="submit" className="btn btn-success me-1">
                        <i className="bi bi-floppy-fill"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger me-1"
                        onClick={handleToggleEdit}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-info me-1"
                      onClick={handleToggleEdit}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  )}

                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => onDelete(id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
