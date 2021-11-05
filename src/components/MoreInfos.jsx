import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FiX, FiCheck } from 'react-icons/fi';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addTasks } from '../slices/tasks';
import { removeTask, editTask } from '../services/tasks';

const statusOptions = ['A começar', 'Em andamento', 'Concluído'];
export default function MoreInfos({ task }) {
  const [editing, setEditing] = useState(false);
  const [taskEdited, setTaskEdited] = useState({ status: 'A começar' });
  const {
    date,
    status,
    _id: id,
  } = task;
  const dispatch = useDispatch();
  const confirmFunc = async () => {
    dispatch(addTasks(await editTask(id, taskEdited)));
    setEditing(false);
  };
  return (
    <div className="border-gray-600 border-t mt-1 pt-1">
      { editing ? (
        <div>
          <div className="flex-col text-center text-xl">
            <h1>Status:</h1>
            <select
              onChange={ ({ target }) => setTaskEdited(
                { ...taskEdited, status: target.value },
              ) }
              className="text-gray-900 mb-2"
            >
              { statusOptions.map((element, index) => (
                <option value={ element } key={ index }>{ element }</option>
              )) }
            </select>
          </div>
          <div
            className="flex text-gray-100 justify-around "
          >
            <FiX className="text-2xl" onClick={ () => setEditing(false) } />
            <FiCheck className="text-2xl" onClick={ confirmFunc } />
          </div>
        </div>

      ) : (
        <div>
          <div className="flex justify-around">
            <div className="flex-col">
              <div className="font-semibold">Status:</div>
              <div>{ status }</div>
            </div>
            <div className="flex-col">
              <div className="font-semibold">Data:</div>
              <div>{ date.split('T')[0] }</div>
            </div>
            <div
              className="flex text-gray-100 justify-center border-gray-600"
            >
              <button
                type="button"
                className="mx-2"
                onClick={ async () => dispatch(addTasks(await removeTask(id))) }
              >
                <FaTrashAlt />
              </button>
              <button
                type="button"
                className="mx-2"
                onClick={ () => setEditing(true) }
              >
                <FaPen />
              </button>
            </div>
          </div>
        </div>
      ) }

    </div>
  );
}

MoreInfos.propTypes = {
  task: PropTypes.shape({
    date: PropTypes.string,
    status: PropTypes.string,
    // list: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
