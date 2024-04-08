import { useState } from "react";

export function TaskForm({ onAddTask }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = { id: Date.now(), name: name.trim(), isDone: false };
    onAddTask(newItem);

    setName("");
  }

  return (
    <div className="card mb-3">
      <div className="container py-2">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nameInput" className="form-label">
                <strong>New Task Name</strong>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  id="nameInput"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="btn btn-success">
                  <strong>
                    Add <i className="bi bi-plus-lg"></i>
                  </strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
