import PropTypes from 'prop-types';
import React from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addTasks } from '../slices/tasks';
import { removeTask } from '../services/tasks';

export default function MoreInfos({ task }) {
  const {
    date,
    status,
    // list,
    _id: id,
  } = task;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-around border-gray-600 border-t mt-1 pt-1">
        {/* <div className="flex-col">
          <div className="font-semibold">Lista:</div>
          <div>{ list }</div>
        </div> */}
        <div className="flex-col">
          <div className="font-semibold">Status:</div>
          <div>{ status }</div>
        </div>
        <div className="flex-col">
          <div className="font-semibold">Data:</div>
          <div>{ date.split('T')[0] }</div>
        </div>
      </div>
      <div
        className="flex text-gray-100 justify-center border-gray-600 border-t mt-1 pt-1"
      >
        <button
          type="button"
          className="bg-red-900 p-2 rounded-md mx-2"
          onClick={ async () => dispatch(addTasks(await removeTask(id))) }
        >
          <FaTrashAlt />
        </button>
        <button
          type="button"
          className="bg-yellow-500 p-2 rounded-md mx-2"
        >
          <FaPen />
        </button>
      </div>
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
