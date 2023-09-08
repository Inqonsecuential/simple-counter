import React, { useState } from 'react';

interface CounterProps {
  value: number;
  label: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  onUpdateLabel: (newLabel: string) => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  onRemove,
  label,
  onUpdateLabel,
}) => {
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [newLabel, setNewLabel] = useState(label);

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLabel(event.target.value);
  };

  const handleLabelBlur = () => {
    setIsEditingLabel(false);
    onUpdateLabel(newLabel);
  };
  return (
    <div className=''>
      <div className='border-b-2 border-gray-400 py-3'>
        <div className='grid grid-cols-1 lg:grid-cols-6 max-w-7xl gap-5'>
          <div className='col-span-2 lg:col-span-3 flex items-center justify-between'>
            <button
              className='bg-green-600 dark:bg-green-700 hover:bg-green-800 dark:hover:bg-green-600 font-bold text-white px-3 py-2 rounded font-lexend transition-all duration-200'
              onClick={onIncrement}
            >
              Increase
            </button>
            <div className='text-xl font-bold font-lexend text-gray-700 dark:text-gray-200'>
              {value}
            </div>
            <div className='flex space-x-3'>
              <button
                className='bg-red-600 dark:bg-red-700 hover:bg-red-800 dark:hover:bg-red-600 font-bold text-white px-3 py-2 rounded transition-all duration-200 font-lexend '
                onClick={onDecrement}
              >
                Decrease
              </button>
            </div>
          </div>

          <div className='col-span-1 lg:col-span-2 flex items-center justify-start space-x-3 lg:mx-auto'>
            {isEditingLabel ? (
              <input
                type='text'
                value={newLabel}
                onChange={handleLabelChange}
                onBlur={handleLabelBlur}
                className='text-base dark:bg-gray-600 dark:text-gray-200 font-semibold px-3 py-2 w-48 rounded border-2 focus:outline-none border-blue-600 dark:border-blue-700 font-lexend'
              />
            ) : (
              <span className='text-base font-semibold px-3 py-2 w-48 truncate rounded border-2 dark:border-gray-500 dark:text-gray-200 font-lexend'>
                {label}
              </span>
            )}
            <button
              className='bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 text-white px-3 py-2 font-lexend rounded font-bold'
              onClick={() => setIsEditingLabel(!isEditingLabel)}
            >
              {isEditingLabel ? 'Save' : 'Edit'}
            </button>
          </div>
          <div className='order-1 lg:order-2 col-span-1 w-full flex justify-end'>
            <button
              className='bg-gray-300 w-16 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-200 text-gray-700 px-3 py-2 font-bold rounded font-lexend transition-all duration-200'
              onClick={onRemove}
            >
              X
            </button>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
