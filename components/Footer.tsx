import React from 'react';
import { Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pb-8 text-center border-t border-neutral-900 pt-8 w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-1 text-neutral-600 mb-4 text-sm">
        <Lock className="w-3 h-3" />
        <span>Seus dados estão seguros. Não enviamos spam.</span>
      </div>
      <div className="flex justify-center gap-6 text-xs text-neutral-700">
        <a href="#" className="hover:text-neutral-500 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-neutral-500 transition-colors">Política de Privacidade</a>
      </div>
      <p className="mt-4 text-neutral-800 text-[10px]">
        © {new Date().getFullYear()} Semana FullStack. Todos os direitos reservados.
      </p>
    </footer>
  );
};