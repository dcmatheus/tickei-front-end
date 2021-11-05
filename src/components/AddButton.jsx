import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/tasks';

export default function AddButton() {
  const [onForm, changeOnForm] = useState(false);
  const [text, changeText] = useState('');
  const dispatch = useDispatch();
  const resetState = () => {
    // Retorna o componente ao estado original
    changeOnForm(false);
    changeText('');
  };

  const addNewTask = () => {
    // Adiciona uma nova task
    dispatch(addTask(text));
    resetState();
  };

  return onForm ? (
    <form className="bg-gray-700 p-2 rounded-md flex-column text-center">
      <input
        type="text"
        onChange={ ({ target }) => changeText(target.value) }
        value={ text }
        className="w-full mb-2 rounded-md p-1 text-gray-900 bg-gray-200"
      />
      <div className="w-full flex justify-evenly text-gray-200">
        <button
          type="button"
          onClick={ resetState }
          className="bg-red-900 p-2 rounded-md"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={ addNewTask }
          className="bg-green-900 p-2 rounded-md"
        >
          Adicionar
        </button>
      </div>
    </form>
  ) : (
    <button
      type="button"
      onClick={ () => changeOnForm(true) }
      className="bg-gray-700 p-2 rounded-md"
    >
      + Adicionar task
    </button>
  );
}
