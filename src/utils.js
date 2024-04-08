export const SortOptions = {
  Newest: 1,
  Oldest: 2,
  AToZ: 3,
  ZToA: 4,
};

export function sortAndFilterTasks(tasks, sortField, query = "") {
  const sortByNameAsc = (task1, task2) => {
    if (task1.name.toLowerCase() < task2.name.toLowerCase()) {
      return -1;
    }
    if (task1.name.toLowerCase() > task2.name.toLowerCase()) {
      return 1;
    }
    return 0;
  };

  const sortByNameDesc = (task1, task2) => {
    if (task1.name.toLowerCase() < task2.name.toLowerCase()) {
      return 1;
    }
    if (task1.name.toLowerCase() > task2.name.toLowerCase()) {
      return -1;
    }
    return 0;
  };

  const sortByNewest = (task1, task2) => {
    if (task1.id < task2.id) {
      return -1;
    }
    if (task1.id > task2.id) {
      return 1;
    }
    return 0;
  };

  const sortByOldest = (task1, task2) => {
    if (task1.id < task2.id) {
      return 1;
    }
    if (task1.id > task2.id) {
      return -1;
    }
    return 0;
  };

  // Change sort method based on selected sort field
  let sortComparer = sortByNewest;
  switch (sortField) {
    case SortOptions.Newest:
      sortComparer = sortByNewest;
      break;
    case SortOptions.Oldest:
      sortComparer = sortByOldest;
      break;
    case SortOptions.AToZ:
      sortComparer = sortByNameAsc;
      break;
    case SortOptions.ZToA:
      sortComparer = sortByNameDesc;
      break;
    default:
      sortComparer = sortByNewest;
      break;
  }

  return tasks
    .filter((task) => task.name.includes(query))
    .sort((task1, task2) => sortComparer(task1, task2));
}
