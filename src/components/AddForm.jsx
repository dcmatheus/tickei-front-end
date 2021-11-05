import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from '../slices/tasks';
import { addNewTask } from '../services/tasks';

export default function AddForm({ changeOnForm }) {
  const [task, changeTask] = useState({ text: '', list: '' });
  const dispatch = useDispatch();
  const resetState = () => {
    // Retorna o componente ao estado original
    changeOnForm(false);
    changeTask({ text: '' });
  };

  const addTask = async () => {
    // Adiciona uma nova task
    const taskList = await addNewTask({ ...task, status: 'A começar' });
    dispatch(addTasks(taskList));
    resetState();
  };
  return (
    <form className="bg-gray-700 p-2 mb-2 rounded-md flex-column text-center">
      <input
        type="text"
        onChange={ ({ target }) => changeTask({ ...task, text: target.value }) }
        value={ task.text }
        className="w-full mb-2 rounded p-1 text-gray-900 bg-gray-400"
      />
      {/* <label htmlFor="bookSelect" className="flex py-2 text-xl">
        Lista:
        <select
          id="bookSelect"
          className="ml-2 rounded w-full text-gray-900 bg-gray-400 mb-2"
          onChange={ ({ target }) => changeTask({ ...task, list: target.value }) }
        >
          <option value="">{ ' ' }</option>
        </select>
      </label> */}
      <div className="w-full flex justify-evenly">
        <button
          type="button"
          onClick={ resetState }
          className="bg-red-900 p-2 rounded"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={ addTask }
          className="bg-green-800 p-2 rounded"
          disabled={ !task.text }
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}

AddForm.propTypes = {
  changeOnForm: PropTypes.func.isRequired,
};
