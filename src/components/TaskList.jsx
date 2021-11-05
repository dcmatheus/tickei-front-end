import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../slices/tasks';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useSelector(selectTasks);
  const mapTasks = (task, index) => (
    <TaskItem
      task={ task }
      key={ index }
    />
  );

  return (
    <div className="border-t border-gray-700 pt-2">
      { (tasks) && tasks.map(mapTasks) }
    </div>
  );
}
