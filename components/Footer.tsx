import React from 'react';
import { EVENT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pt-10 pb-8 text-left border-t rule w-full max-w-3xl mx-auto">
      <p className="label-mono text-chalk-mute mb-4">Sobre o evento</p>
      <p className="text-[14px] text-chalk-soft leading-relaxed mb-6 max-w-2xl">
        Semana React é gratuito, online e organizado por desenvolvedores ativos —
        não é produto pago, não tem &ldquo;curso completo&rdquo; depois, não tem upsell.
        Em {new Date().getFullYear() - 2}{' '}
        a primeira edição teve {EVENT.registrationsLastEdition.toLocaleString('pt-BR')} inscrições.
        A 3ª edição roda em outubro de 2026.
      </p>

      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-3 text-xs text-chalk-mute">
        <a
          href="https://github.com/otavio0machado/semana-react"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-react transition-colors"
        >
          Código no GitHub
        </a>
        <a
          href={EVENT.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-react transition-colors"
        >
          Canal no YouTube (gravações de edições anteriores)
        </a>
        <a href="/lgpd.html" className="hover:text-react transition-colors">
          Tratamento de e-mail (LGPD)
        </a>
      </div>

      <p className="mt-8 text-[11px] text-chalk-mute font-mono">
        © {new Date().getFullYear()} Semana React · iniciativa independente, não comercial · conteúdo deste site é fictício, parte de um{' '}
        <a
          href="https://github.com/otavio0machado/semana-fullstack-portifolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-chalk"
        >
          study case
        </a>
        .
      </p>
    </footer>
  );
};
