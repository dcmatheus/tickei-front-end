import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  tags: [],
  search: 'additionDate',
  order: 'date',
  orientation: 'ascendent',
  listSelected: 'Caixa de Entrada',
};

const reducers = {
  addTasks(state, { payload }) {
    return { ...state, tasks: payload };
  },
  setOrder(state, { payload }) {
    return { ...state, order: payload };
  },
  setOrientation(state, { payload }) {
    return { ...state, orientation: payload };
  },
};

const tasks = createSlice({
  name: 'Tasks',
  initialState,
  reducers,
});

export const selectTasks = (state) => state.tasks;

export const { addTasks, setOrder, setOrientation } = tasks.actions;

export default tasks.reducer;
