import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  tags: [],
  search: 'additionDate',
  order: 'date',
  tagSelected: 'Caixa de Entrada',
};

const reducers = {
  addTask(state, { payload }) {
    return { ...state, tasks: [...state.tasks, payload] };
  },
};

const tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers,
});

export const selectTasks = (state) => state.tasks;

export const { addTask } = tasks.actions;

export default tasks.reducer;
