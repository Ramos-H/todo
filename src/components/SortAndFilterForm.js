import { SortOptions } from "../utils";

export function SortAndFilterForm({ onSetQuery, onChangeSortField }) {
  return (
    <div className="row mb-3">
      <div className="col">
        <label htmlFor="queryInput" className="form-label">
          <strong>Filter and Sort</strong>
        </label>
        <div className="input-group">
          <input
            type="text"
            id="queryInput"
            className="form-control"
            onChange={(e) => onSetQuery(e.target.value)}
          />
          <select
            className="form-select flex-grow-0 w-25"
            onChange={(e) => onChangeSortField(Number(e.target.value))}
          >
            <option value={SortOptions.Newest}>Newest</option>
            <option value={SortOptions.Oldest}>Oldest</option>
            <option value={SortOptions.AToZ}>A to Z</option>
            <option value={SortOptions.ZToA}>Z to A</option>
          </select>
        </div>
      </div>
    </div>
  );
}
