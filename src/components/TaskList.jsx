import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../slices/tasks';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useSelector(selectTasks);
  const mapTasks = (task, index) => (
    <TaskItem
      task={ { text: task, tag: '', date: '20/10/2013', status: 'Em andamento' } }
      key={ index }
    />
  );

  return (
    <div className="border-t border-gray-700 pt-2">
      { tasks.map(mapTasks) }
    </div>
  );
}
