import PropTypes from 'prop-types';
import React from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

export default function MoreInfos({ task }) {
  const { date, status, book } = task;
  return (
    <div>
      <div className="flex justify-between border-gray-600 border-t mt-1 pt-1">
        <div className="flex-col">
          <div className="font-semibold">Book:</div>
          <div>{ book }</div>
        </div>
        <div className="flex-col">
          <div className="font-semibold">Status:</div>
          <div>{ status }</div>
        </div>
        <div className="flex-col">
          <div className="font-semibold">Data:</div>
          <div>{ date }</div>
        </div>
      </div>
      <div
        className="flex text-gray-100 justify-evenly border-gray-600 border-t mt-1 pt-1"
      >
        <button
          type="button"
          className="bg-red-900 p-2 rounded-md"
        >
          <FaTrashAlt />
        </button>
        <button
          type="button"
          className="bg-yellow-500 p-2 rounded-md"
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
    book: PropTypes.string,
  }).isRequired,
};
