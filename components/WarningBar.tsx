import React from 'react';
import { Youtube } from 'lucide-react';
import { EVENT } from '../constants';

export const WarningBar: React.FC = () => {
  return (
    <div className="w-full bg-ink-soft border-b rule py-2.5 text-center text-xs md:text-sm text-chalk-soft flex justify-center items-center gap-2">
      <Youtube className="w-4 h-4 text-react" />
      <span>
        Não precisa se inscrever pra assistir — também é{' '}
        <a
          href={EVENT.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-chalk underline decoration-dotted hover:text-react transition-colors"
        >
          aberto no canal do YouTube
        </a>
        .
      </span>
    </div>
  );
};
