import React, { useState } from 'react';

const DateDifferenceCalculator = () => {
  const [result, setResult] = useState('');

  const calculateDifference = () => {
    const startDate = new Date('1900-03-23');
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setResult(`Od dnia 23.03.1900 do dnia dzisiejszego minęło: ${days} dni, ${months} miesięcy oraz ${years} lat`);
  };

  return (
      <div>
        <button onClick={calculateDifference}>Oblicz</button>
        {result && <p>{result}</p>}
      </div>
  );
};

export default DateDifferenceCalculator;
