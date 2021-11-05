import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import tasks from './slices/tasks';

export default configureStore({
  reducer: {
    user,
    tasks,
  },
});
