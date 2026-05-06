import React from 'react';
import { Github } from 'lucide-react';

export const ShareSection: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto mt-20 text-left border-t rule pt-10">
      <p className="label-mono text-react mb-3">Sem fórmula secreta</p>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-chalk mb-3">
        O código de cada noite vai pro GitHub.
      </h2>
      <p className="text-chalk-soft leading-relaxed text-[15px] mb-6">
        Não tem &ldquo;material exclusivo&rdquo;. O repositório com o código de cada
        noite, desafios opcionais e respostas é público antes da transmissão e
        continua disponível depois — você pode fazer no seu ritmo, sem ter
        assistido ao vivo.
      </p>
      <a
        href="https://github.com/otavio0machado/semana-react"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border rule px-4 py-2.5 text-sm text-chalk hover:bg-ink-soft transition-colors"
      >
        <Github size={14} />
        github.com/otavio0machado/semana-react
      </a>
    </section>
  );
};
