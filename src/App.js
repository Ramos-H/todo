import { data } from "./TaskData";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

export default function App() {
  const data2 = data;

  return (
    <div className="container">
      <Header />

      <div className="row justify-content-center">
        <div className="col col-lg-6">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col">
                <form>
                  <label htmlFor="nameInput" className="form-label">
                    <strong>New Task Name</strong>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="nameInput"
                      className="form-control"
                    />
                    <button className="btn btn-success">
                      <strong>
                        Add <i class="bi bi-plus-lg"></i>
                      </strong>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <TaskList tasks={data2} />
          </div>
        </div>
      </div>
    </div>
  );
}
