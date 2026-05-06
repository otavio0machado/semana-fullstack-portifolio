import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-baseline gap-3 mb-10">
      <span className="font-mono text-base text-react">{'<'}</span>
      <span className="font-semibold text-xl tracking-tight text-chalk">Semana React</span>
      <span className="font-mono text-base text-react">{'/>'}</span>
    </div>
  );
};
