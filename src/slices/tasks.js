import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  tags: [],
  search: 'additionDate',
  order: 'date',
  listSelected: 'Caixa de Entrada',
};

const reducers = {
  addTasks(state, { payload }) {
    return { ...state, tasks: payload };
  },
};

const tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers,
});

export const selectTasks = (state) => state.tasks;

export const { addTasks } = tasks.actions;

export default tasks.reducer;
