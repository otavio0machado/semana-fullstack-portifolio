import React from 'react';
import { Calendar } from 'lucide-react';
import { Logo } from './components/Logo';
import { CountdownTimer } from './components/CountdownTimer';
import { OptInForm } from './components/OptInForm';
import { Footer } from './components/Footer';
import { WarningBar } from './components/WarningBar';
import { ShareSection } from './components/ShareSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-brand-black text-white relative flex flex-col items-center selection:bg-red-500 selection:text-white">
      
      <WarningBar />

      {/* Background Ambience - Reduced for High Contrast Focus */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-red-600/10 blur-[150px] pointer-events-none" />
      
      <main className="relative z-10 w-full max-w-3xl px-4 pt-12 md:pt-16 pb-12 flex flex-col items-center text-center">
        
        <Logo />

        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-6 mt-4">
          
          {/* Date Badge */}
          {/* Data do evento definida aqui visualmente */}
          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-5 py-1.5 shadow-lg">
            <Calendar className="w-4 h-4 text-red-500" />
            <span className="text-neutral-200 text-sm font-semibold tracking-wide uppercase">De 20 a 27 de Outubro</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Domine o React e o <br className="hidden md:block"/>
            <span className="text-white relative whitespace-nowrap">
              Mercado de Trabalho
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-600" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7535 5.5117 84.7208 0.672027 197.809 3.01258" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span><br />
            em 7 Dias
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto font-medium">
            Evento 100% Online e Gratuito. <span className="text-white">Do Zero ao seu Primeiro Deploy.</span>
          </p>
        </div>

        <CountdownTimer />

        <OptInForm />

        <ShareSection />

        <Footer />
      </main>
    </div>
  );
}

export default App;