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

      {/* Background Ambience & Pattern */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full" />
      </div>
      
      <main className="relative z-10 w-full max-w-4xl px-4 pt-12 md:pt-20 pb-12 flex flex-col items-center text-center">
        
        <Logo />

        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-8 mt-6 animate-fade-in-up">
          
          {/* Date Badge */}
          <div className="flex items-center gap-2.5 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 rounded-full px-6 py-2 shadow-xl ring-1 ring-white/10">
            <Calendar className="w-4 h-4 text-red-500" />
            <span className="text-neutral-200 text-sm font-semibold tracking-wider uppercase">De 20 a 27 de Outubro</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] drop-shadow-2xl">
            Domine o React e o <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 relative whitespace-nowrap">
              Mercado de Trabalho
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-red-600 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C25.7535 5.5117 84.7208 0.672027 197.809 3.01258" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span><br />
            em 7 Dias
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Evento <span className="text-neutral-200 font-semibold border-b border-red-500/30">100% Online e Gratuito</span>. 
            <br className="hidden md:block" />
            Do Zero ao seu Primeiro Deploy Profissional.
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