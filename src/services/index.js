const getAll = async () => {
  const response = await fetch('http://localhost:3000/tasks');
  const { tasks } = await response.json();
  return tasks;
};

const taskAPI = {
  getAll,
};

export default taskAPI;
