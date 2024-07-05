import { useState, useEffect } from 'react';

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date("2024-07-05") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="inline-block  text-center mx-2">
        <div className="text-2xl dark:text-white font-bold">
          {timeLeft[interval]}
        </div>
        <div className="text-sm dark:text-white ">
          {interval}
        </div>
      </div>
    );
  });



  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-4 rounded-md dark:bg-zinc-900 shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
        <div className="text-lg mb-4">
          {timerComponents.length ? timerComponents : <span>{"Time's up!"}</span>}
        </div>
        
      </div>
    </div>
  );
};

export default FlashSales;
