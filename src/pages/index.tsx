// App.tsx
import React, { useState, useEffect } from 'react';
import Counter from '@/components/counter';

const IndexPage: React.FC = () => {
  const [counters, setCounters] = useState<number[]>([]);

  // Load counters from localStorage on component mount
  useEffect(() => {
    const savedCounters = JSON.parse(localStorage.getItem('counters') || '[]');
    setCounters(savedCounters);
  }, []);

  // Save counters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const incrementCounter = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index]++;
    setCounters(updatedCounters);
  };

  const decrementCounter = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index]--;
    setCounters(updatedCounters);
  };

  const removeCounter = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters.splice(index, 1);
    setCounters(updatedCounters);
  };

  return (
    <div className='max-w-7xl mx-auto p-4'>
      <h1 className='text-3xl font-bold py-8 lg:py-10 font-lexend text-gray-800'>
        Simple Counter App
      </h1>
      <button
        className='bg-blue-600 text-white px-3 py-2 font-bold rounded mb-4 font-lexend hover:bg-blue-800 transition-all duration-200'
        onClick={addCounter}
      >
        Create New Counter
      </button>
      <div>
        {counters.map((count, index) => (
          <Counter
            key={index}
            value={count}
            onIncrement={() => incrementCounter(index)}
            onDecrement={() => decrementCounter(index)}
            onRemove={() => removeCounter(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
