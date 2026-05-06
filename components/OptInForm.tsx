import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Bell } from 'lucide-react';
import { subscribeToEvent } from '../services/api';

export const OptInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes('@') || email.length < 5) {
      setError('Insira um e-mail válido.');
      return;
    }

    setStatus('loading');
    try {
      const response = await subscribeToEvent(email);
      if (response.success) {
        setStatus('success');
      } else {
        setStatus('idle');
        setError(response.message);
      }
    } catch {
      setStatus('idle');
      setError('Algo deu errado. Tenta de novo em um minuto.');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto mt-10 border rule bg-ink-soft p-6 text-left">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-react shrink-0 mt-0.5" />
          <div>
            <p className="text-chalk font-medium mb-1">E-mail anotado</p>
            <p className="text-chalk-soft text-[14px] leading-relaxed">
              Mandamos um único e-mail no dia de cada noite, com o link da
              transmissão e a agenda da noite. Sem newsletter, sem promoção,
              sem &ldquo;curso premium&rdquo; depois.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10 text-left">
      <label htmlFor="email" className="label-mono text-chalk-mute mb-3 block">
        Lembrete por e-mail (opcional)
      </label>
      <div className="flex gap-2">
        <input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          disabled={status === 'loading'}
          className={`flex-1 h-12 px-4 bg-ink-soft border rule rounded-none text-chalk placeholder:text-chalk-mute focus:outline-none focus:border-react/50 transition-colors ${error ? 'border-clay' : ''}`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="h-12 px-5 bg-chalk text-ink text-sm font-medium hover:bg-chalk-soft transition-colors flex items-center gap-2 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              <Bell size={14} />
              Receber lembrete
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="text-clay text-xs mt-2 flex items-center gap-1.5">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
      <p className="text-xs text-chalk-mute mt-3 leading-relaxed">
        Um e-mail por noite, durante a semana do evento. Nada antes, nada depois.
        Excluído da base no dia 26 (sem confirmação necessária).
      </p>
    </form>
  );
};
