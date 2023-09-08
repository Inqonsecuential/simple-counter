// IndexPage.tsx
import React, { useState, useEffect } from 'react';
import Counter from '@/components/counter';

const IndexPage: React.FC = () => {
  const [counters, setCounters] = useState<{ label: string; value: number }[]>(
    [],
  );

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
    setCounters([...counters, { label: 'New Counter', value: 0 }]);
  };

  const incrementCounter = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index].value++;
    setCounters(updatedCounters);
  };

  const decrementCounter = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index].value--;
    setCounters(updatedCounters);
  };

  const removeCounter = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters.splice(index, 1);
    setCounters(updatedCounters);
  };

  const updateCounterLabel = (index: number, newLabel: string) => {
    const updatedCounters = [...counters];
    updatedCounters[index] = { ...updatedCounters[index], label: newLabel };
    setCounters(updatedCounters);
  };

  return (
    <div className='dark:bg-gray-900 min-h-screen'>
      <div className='max-w-7xl mx-auto px-3'>
        <h1 className='text-3xl font-bold py-8 lg:py-10 font-lexend dark:text-gray-200'>
          Simple Counter
        </h1>
        <button
          className='bg-blue-500 dark:bg-blue-700 text-gray-200 font-bold px-3 py-2 rounded mb-4 font-lexend transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-600'
          onClick={addCounter}
        >
          Create New Counter
        </button>
        <div>
          {counters.map((counter, index) => (
            <Counter
              key={index}
              label={counter.label}
              value={counter.value}
              onIncrement={() => incrementCounter(index)}
              onDecrement={() => decrementCounter(index)}
              onRemove={() => removeCounter(index)}
              onUpdateLabel={(newLabel: string) =>
                updateCounterLabel(index, newLabel)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
