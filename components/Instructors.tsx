import React from 'react';
import { Github } from 'lucide-react';
import { INSTRUCTORS } from '../constants';

export const Instructors: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto mt-20 text-left">
      <p className="label-mono text-react mb-3">Quem conduz</p>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-chalk mb-10">
        Três pessoas, três especialidades.
      </h2>

      <div className="border-t rule">
        {INSTRUCTORS.map((p) => (
          <article key={p.github} className="border-b rule py-5 flex items-baseline justify-between gap-6">
            <div>
              <h3 className="text-chalk font-medium">{p.name}</h3>
              <p className="text-chalk-soft text-[14px]">{p.role}</p>
            </div>
            <a
              href={`https://github.com/${p.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-chalk-mute hover:text-react transition-colors flex items-center gap-1.5"
            >
              <Github size={14} />
              {p.github}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
