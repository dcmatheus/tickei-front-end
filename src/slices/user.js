import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  isLogged: false,
};

const reducers = {
  changeUser(_state, { payload }) {
    return { isLogged: true, name: payload.name, email: payload.email };
  },
  changeUserEmail(state, { payload }) {
    return { ...state, email: payload };
  },
  changeUserName(state, { payload }) {
    return { ...state, name: payload };
  },
  logout() {
    return initialState;
  },
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export default user;
