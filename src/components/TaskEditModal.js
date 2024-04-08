import { useState } from "react";

export function TaskEditModal({ task, onEditTask }) {
  const [newName, setName] = useState("");

  function handleSubmit(e) {
    if (!newName.trim()) return;

    console.log(`Before: ${task}`);
    const editedTask = { ...task, name: newName };
    console.log(`After: ${editedTask}`);

    onEditTask(editedTask);
  }

  return (
    <div class="modal fade" id="taskEditModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Task</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label htmlFor="editNameInput" className="form-label">
              <strong>Task Name</strong>
            </label>
            <input
              type="text"
              id="editNameInput"
              className="form-control"
              defaultValue={task.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
