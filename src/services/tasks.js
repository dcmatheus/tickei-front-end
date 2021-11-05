const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getAll = async () => {
  const response = await fetch('http://localhost:3000/tasks');
  const { tasks } = await response.json();
  return tasks;
};

export const addNewTask = async (task) => {
  await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers,
    body: JSON.stringify({ ...task }),
  });
  const tasks = await getAll();
  return tasks;
};

export const removeTask = async (id) => {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
    headers,
  });
  const tasks = await getAll();
  return tasks;
};

export const editTask = async (id, task) => {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ ...task }),
  });
  const tasks = await getAll();
  return tasks;
};
