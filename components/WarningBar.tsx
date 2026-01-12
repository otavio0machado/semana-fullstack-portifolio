import React from 'react';
import { TriangleAlert } from 'lucide-react';

export const WarningBar: React.FC = () => {
  return (
    <div className="w-full bg-red-950/40 border-b border-red-900/30 text-red-200 py-2.5 text-center text-xs md:text-sm font-bold tracking-wide flex justify-center items-center gap-2 animate-fade-in">
      <TriangleAlert className="w-4 h-4 text-red-500" />
      <span className="uppercase">As vagas para a turma gratuita estão encerrando</span>
    </div>
  );
};