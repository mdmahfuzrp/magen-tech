import React, { useState, useEffect } from "react";
import './countdown.css'
const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = new Date(`January 1, 2024 00:00:00`) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      {timeLeft.days !== undefined && (
        <div className="flex items-center justify-center gap-2">
          <p className="custom-shadow min-w-[32px] text-white font-bold w-fit h-[32px] p-[6px] bg-special rounded-[4px] flex items-center justify-center text-[20px]">{timeLeft.days}</p>
          <span className="font-semibold text-[14px]">:</span>
          <p className="custom-shadow min-w-[32px] text-white font-bold w-fit h-[32px] p-[6px] bg-special rounded-[4px] flex items-center justify-center text-[20px]">{timeLeft.hours}</p>
          <span className="font-semibold text-[14px]">:</span>

          <p className="custom-shadow min-w-[32px] text-white font-bold w-fit h-[32px] p-[6px] bg-special rounded-[4px] flex items-center justify-center text-[20px]">{timeLeft.minutes}</p>
          <span className="font-semibold text-[14px]">:</span>

          <p className="custom-shadow min-w-[32px] text-white font-bold w-fit h-[32px] p-[6px] bg-special rounded-[4px] flex items-center justify-center text-[20px]">{timeLeft.seconds}</p>
        </div>
      )}
      {timeLeft.days === undefined && <p>Happy New Year 2024!</p>}
    </div>
  );
};

export default Countdown;
