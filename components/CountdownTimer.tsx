import React, { useEffect, useState } from 'react';
import { EVENT } from '../constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: 'before' | 'live' | 'ended';
}

const computeStatus = (target: Date, end: Date): TimeLeft => {
  const now = new Date();
  if (now >= end) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, status: 'ended' };
  }
  if (now >= target) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, status: 'live' };
  }
  const diff = +target - +now;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    status: 'before',
  };
};

export const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState<TimeLeft>(() => computeStatus(EVENT.startDate, EVENT.endDate));

  useEffect(() => {
    const tick = setInterval(() => setTime(computeStatus(EVENT.startDate, EVENT.endDate)), 1000);
    return () => clearInterval(tick);
  }, []);

  if (time.status === 'ended') {
    return (
      <div className="my-10 max-w-lg mx-auto text-center border-t rule pt-8">
        <p className="label-mono text-chalk-mute mb-2">Edição 03 · encerrada em 25/10/2026</p>
        <p className="text-chalk-soft text-sm leading-relaxed">
          As 7 noites foram gravadas e estão na playlist da edição. A próxima
          edição é divulgada por aqui — se quiser receber aviso por e-mail,
          basta deixar o endereço abaixo.
        </p>
      </div>
    );
  }

  if (time.status === 'live') {
    return (
      <div className="my-10 max-w-lg mx-auto text-center border-t rule pt-8">
        <p className="label-mono text-react mb-2">Ao vivo agora</p>
        <a
          href={EVENT.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-react text-ink font-medium hover:bg-react/80 transition-colors"
        >
          Abrir transmissão no YouTube
        </a>
      </div>
    );
  }

  // status === 'before'
  return (
    <div className="my-10 max-w-2xl mx-auto border-t rule pt-8">
      <p className="label-mono text-chalk-mute mb-5 text-center">Faltam para a 1ª noite</p>
      <div className="flex justify-center gap-px bg-ink-line border rule font-mono">
        {(['days', 'hours', 'minutes', 'seconds'] as const).map((k) => (
          <div key={k} className="bg-ink py-4 px-5 md:px-7 flex flex-col items-center min-w-[80px]">
            <span className="text-3xl md:text-4xl font-medium text-chalk tabular-nums">
              {String(time[k]).padStart(2, '0')}
            </span>
            <span className="label-mono text-chalk-mute mt-1.5">
              {k === 'days' ? 'dias' : k === 'hours' ? 'horas' : k === 'minutes' ? 'min' : 'seg'}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-chalk-mute mt-4 font-mono">
        Início em 19/10/2026 · 20h00 (BRT)
      </p>
    </div>
  );
};
