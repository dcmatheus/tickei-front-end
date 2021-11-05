import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../slices/tasks';
import TaskItem from './TaskItem';

const assignValue = (status) => {
  const three = 3;
  const two = 2;
  const one = 1;
  const zero = 0;
  switch (status) {
  case 'A começar':
    return three;
  case 'Em andamento':
    return two;
  case 'Concluído':
    return one;
  default:
    return zero;
  }
};

const sortFunctions = {
  date: {
    ascendent: (a, b) => {
      const dataA = new Date(a.date);
      const dataB = new Date(b.date);
      return dataB - dataA;
    },
    descendent: (a, b) => {
      const dataA = new Date(a.date);
      const dataB = new Date(b.date);
      return dataA - dataB;
    },
  },
  alphabetical: {
    ascendent: (a, b) => a.text.localeCompare(b.text),
    descendent: (a, b) => b.text.localeCompare(a.text),
  },
  state: {
    ascendent: (a, b) => assignValue(b.status) - assignValue(a.status),
    descendent: (a, b) => assignValue(a.status) - assignValue(b.status),
  },
};

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const { tasks, order, orientation } = useSelector(selectTasks);

  useEffect(() => {
    const sortedTasks = [...tasks].sort(sortFunctions[order][orientation]);
    setTaskList(sortedTasks);
  }, [tasks, order, orientation, setTaskList]);

  const mapTasks = (task, index) => (
    <TaskItem
      task={ task }
      key={ index }
    />
  );

  return (
    <div className="border-t border-gray-700 pt-2">
      { (taskList) && taskList.map(mapTasks) }
    </div>
  );
}
