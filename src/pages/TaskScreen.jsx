import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import CheckList from '../components/CheckList';
import taskAPI from '../services';
import { addTasks } from '../slices/tasks';

export default function TaskScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    const asyncFunction = async () => {
      const allTasks = await taskAPI.getAll();
      dispatch(addTasks(await allTasks));
    };
    asyncFunction();
  }, [dispatch]);
  return (
    <div>
      <Header />
      <CheckList />
    </div>
  );
}
