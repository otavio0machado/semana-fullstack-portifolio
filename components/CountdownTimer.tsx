import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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

export const CountdownTimer: React.FC = () => {
  // CONFIG: Date logic is here. Sets timer for 5 days from now.
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5); 
    return date;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-1 md:mx-2">
      {/* High Contrast Box */}
      <div className="bg-neutral-900 border-2 border-neutral-800 rounded-md p-3 w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex items-center justify-center shadow-2xl relative overflow-hidden group">
        
        {/* Subtle red glow on background */}
        <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors"></div>
        
        <span className="text-3xl md:text-5xl font-black text-white tabular-nums relative z-10">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs text-red-500 font-bold uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="flex justify-center gap-1 md:gap-2">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
};