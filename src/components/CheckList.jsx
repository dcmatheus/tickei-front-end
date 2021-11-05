import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../slices/tasks';
import { ListTable } from '../styles/Components';
import TaskList from './TaskList';
import AddButton from './AddButton';

export default function CheckList() {
  const { tagSelected } = useSelector(selectTasks);
  return (
    <ListTable>
      <div className="text-center text-3xl mb-3 font-medium">{ tagSelected }</div>
      <AddButton />
      <TaskList />
    </ListTable>
  );
}
