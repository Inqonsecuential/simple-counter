// IndexPage.tsx
import React, { useState, useEffect } from 'react';
import Counter from '@/components/counter';

const IndexPage: React.FC = () => {
  const [counters, setCounters] = useState<number[]>([]);

  // Load counters from localStorage on component mount
  useEffect(() => {
    const savedCounters = JSON.parse(localStorage.getItem('counters') || '[]');
    setCounters(savedCounters);

    // Listen for changes in localStorage from other tabs/windows
    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Function to handle changes in localStorage from other tabs/windows
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === 'counters') {
      const savedCounters = JSON.parse(e.newValue || '[]');
      setCounters(savedCounters);
    }
  };

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
    <div className='max-w-7xl mx-auto '>
      <h1 className='text-3xl font-bold py-8 lg:py-10 font-lexend'>
        Simple Counter IndexPage
      </h1>
      <button
        className='bg-blue-500 text-white px-3 py-2 rounded mb-4 font-lexend transition-all duration-200 hover:bg-blue-700'
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
