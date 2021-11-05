import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import MoreInfos from './MoreInfos';

const checkboxClass = 'text-xl mr-2';

export default function TaskItem({ task }) {
  const [status, setStatus] = useState('A começar');
  const [moreInfos, setMoreInfos] = useState(false);
  const { text } = task;
  return (
    <div className="bg-gray-700 p-2 mb-2 rounded-md">
      <div className="flex flex-wrap items-center">
        {
          (status === 'Concluído') ? (
            <ImCheckboxChecked
              className={ checkboxClass }
              onClick={ () => setStatus('Em andamento') }
            />
          ) : (
            <ImCheckboxUnchecked
              className={ checkboxClass }
              onClick={ () => setStatus('Concluído') }
            />
          )
        }
        <button
          type="button"
          className="text-xl text-left flex-grow"
          onClick={ () => setMoreInfos(!moreInfos) }
        >
          { text }
        </button>
      </div>
      {
        moreInfos && <MoreInfos task={ task } />
      }
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
};
