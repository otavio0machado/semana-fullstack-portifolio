import React from 'react';
import { NIGHTS } from '../constants';

export const Schedule: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto mt-16 text-left">
      <p className="label-mono text-react mb-3">Agenda · 7 noites</p>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-chalk mb-3">
        Cada noite tem uma hora, e está tudo escrito antes.
      </h2>
      <p className="text-chalk-soft mb-10 leading-relaxed text-[15px]">
        Sem &ldquo;projeto surpresa do dia&rdquo;. Você sabe o que entra em cada
        noite, qual instrutor conduz e o que fica fora. As gravações ficam
        disponíveis sem login.
      </p>

      <ol className="border-t rule">
        {NIGHTS.map((n) => (
          <li key={n.n} className="border-b rule py-7 grid grid-cols-12 gap-4">
            <div className="col-span-3 md:col-span-2">
              <span className="font-mono text-react text-lg">{n.n}</span>
              <p className="font-mono text-chalk-mute text-xs mt-1">{n.date}</p>
              <p className="font-mono text-chalk-mute text-xs">{n.weekday}</p>
              <p className="font-mono text-chalk-mute text-xs">{n.time}</p>
            </div>
            <div className="col-span-9 md:col-span-10">
              <h3 className="text-chalk text-lg font-medium leading-snug mb-2">
                {n.title}
              </h3>
              <ul className="space-y-1.5 text-[14px] text-chalk-soft list-disc list-inside marker:text-chalk-mute">
                {n.agenda.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <p className="text-xs font-mono text-chalk-mute mt-3">conduz · {n.instructor}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
