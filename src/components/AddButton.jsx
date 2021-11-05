import React, { useState } from 'react';
import AddForm from './AddForm';

export default function AddButton() {
  const [onForm, changeOnForm] = useState(false);
  return (
    <div className="border-t border-gray-700 pt-2">
      { onForm ? (
        <AddForm changeOnForm={ changeOnForm } />
      ) : (
        <button
          type="button"
          onClick={ () => changeOnForm(true) }
          className="bg-gray-700 p-2 mb-2 rounded-md text-xl w-full"
        >
          + Adicionar task
        </button>
      )}
    </div>
  );
}
