import React from 'react';
import { Terminal, Code2 } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <div className="bg-gradient-to-tr from-red-600 to-orange-500 p-2 rounded-lg">
        <Code2 className="w-8 h-8 text-white" />
      </div>
      <div className="text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">
        <span className="text-white">Semana</span>
        <span className="text-red-500">FullStack</span>
      </div>
    </div>
  );
};