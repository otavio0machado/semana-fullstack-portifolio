import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, X } from 'lucide-react';
import { subscribeToEvent } from '../services/api';

export const OptInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  // Ref to trigger shake animation via class manipulation logic
  const [shouldShake, setShouldShake] = useState(false);

  const triggerError = (msg: string) => {
    setError(msg);
    setShouldShake(true);
    setTimeout(() => setShouldShake(false), 500); // Remove animation class after duration
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!email || !email.includes('@') || email.length < 5) {
      triggerError('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('loading');

    try {
      const response = await subscribeToEvent(email);
      if (response.success) {
        setStatus('success');
        setShowModal(true); // Open the Modal
      } else {
        setStatus('idle');
        triggerError(response.message);
      }
    } catch (err) {
      setStatus('idle');
      triggerError('Ocorreu um erro. Tente novamente.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStatus('idle');
    setEmail('');
    setError(null);
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-6 px-4 md:px-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative group">
            <label htmlFor="email" className="sr-only">Seu melhor e-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu melhor e-mail..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              disabled={status === 'loading'}
              className={`
                w-full h-14 px-6 bg-neutral-900 border-2 rounded-lg text-lg text-white placeholder-neutral-500 
                focus:outline-none focus:ring-4 focus:ring-red-900/20 transition-all duration-200
                ${error ? 'border-red-600 focus:border-red-600' : 'border-neutral-800 focus:border-red-500'}
                ${shouldShake ? 'animate-shake' : ''}
              `}
            />
            {error && (
              <div className="absolute right-4 top-4 text-red-500 animate-fade-in">
                <AlertCircle className="w-6 h-6" />
              </div>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium text-center animate-fade-in -mt-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full h-16 bg-red-600 hover:bg-red-500 text-white font-black text-lg md:text-xl uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transform transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <Loader2 className="w-8 h-8 animate-spin" />
            ) : (
              <>
                <span>Garantir Minha Vaga Grátis</span>
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </>
            )}
          </button>

          <p className="text-center text-neutral-500 text-xs">
            🔒 100% Livre de Spam. Seus dados estão seguros.
          </p>
        </form>
      </div>

      {/* SUCCESS MODAL OVERLAY */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl shadow-green-900/20 scale-100 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="bg-green-500/10 p-4 rounded-full">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Inscrição Confirmada!
            </h3>
            
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              Enviamos o link de acesso exclusivo para o seu e-mail: <br/>
              <span className="text-white font-semibold">{email}</span>
            </p>

            <div className="bg-neutral-800/50 p-4 rounded-lg mb-6 text-sm text-neutral-400">
              ⚠️ Verifique também sua caixa de <strong>Spam</strong> ou <strong>Promoções</strong>.
            </div>

            <button
              onClick={handleCloseModal}
              className="w-full py-4 bg-neutral-100 hover:bg-white text-black font-bold text-lg rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};