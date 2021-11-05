import React from 'react';
import { useDispatch } from 'react-redux';
import { setOrder, setOrientation } from '../slices/tasks';

const orderOptions = [
  { option: 'Data', value: 'data' },
  { option: 'Texto', value: 'alphabetical' },
  { option: 'Estado', value: 'state' },
];

export default function OrderForm() {
  const dispatch = useDispatch();
  return (
    <div className="border-t border-gray-700 pt-2 text-xl">
      <div className="bg-gray-700 mb-2 rounded-md p-2 flex w-full">
        <select
          className="w-1/2 bg-gray-700"
          onChange={ ({ target }) => dispatch(setOrder(target.value)) }
        >
          { orderOptions.map(({ option, value }, index) => (
            <option value={ value } key={ index }>{ option }</option>
          ))}
        </select>
        <select
          className="w-1/2 bg-gray-700"
          onChange={ ({ target }) => dispatch(setOrientation(target.value)) }
        >
          <option value="ascendent">Crescente</option>
          <option value="descendent">Decrescente</option>
        </select>
      </div>
    </div>
  );
}
