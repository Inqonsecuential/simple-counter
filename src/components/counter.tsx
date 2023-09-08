import React from 'react';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div className='border-b-2 border-gray-400 py-3'>
      <div className='flex justify-between items-center bg-white rounded max-w-xl '>
        <button
          className='bg-green-600 hover:bg-green-800 font-bold text-white px-3 py-2 rounded font-lexend transition-all duration-200'
          onClick={onIncrement}
        >
          Increase
        </button>
        <div className='text-xl font-bold font-lexend text-gray-700'>
          {value}
        </div>
        <div className='space-x-3'>
          <button
            className='bg-red-600 hover:bg-red-800 font-bold text-white px-3 py-2 rounded transition-all duration-200 font-lexend '
            onClick={onDecrement}
          >
            Decrease
          </button>
          <button
            className='bg-gray-300 hover:bg-gray-700 hover:text-gray-200 text-gray-700 px-3 py-2 font-bold rounded font-lexend transition-all duration-200'
            onClick={onRemove}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
