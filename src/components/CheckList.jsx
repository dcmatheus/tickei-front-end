import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../slices/tasks';
import { ListTable } from '../styles/Components';
import TaskList from './TaskList';
import AddButton from './AddButton';
import OrderForm from './OrderForm';

export default function CheckList() {
  const { listSelected } = useSelector(selectTasks);
  return (
    <ListTable>
      <div className="text-center text-3xl mb-3 font-medium">{ listSelected }</div>
      <OrderForm />
      <AddButton />
      <TaskList />
    </ListTable>
  );
}
