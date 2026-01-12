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
    <div className="flex flex-col items-center mx-2 md:mx-4 group cursor-default">
      {/* Glassy Box */}
      <div className="
        relative bg-neutral-900/40 backdrop-blur-xl 
        border border-white/10 hover:border-red-500/50 
        rounded-2xl p-4 w-[80px] h-[80px] md:w-[110px] md:h-[110px] 
        flex items-center justify-center 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
        transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-red-900/20
      ">

        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />

        <span className="text-4xl md:text-6xl font-black text-white tabular-nums relative z-10 drop-shadow-lg tracking-tight">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-3 group-hover:text-red-400 transition-colors text-neutral-500">
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