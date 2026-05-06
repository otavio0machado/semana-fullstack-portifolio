import React from 'react';
import { Logo } from './components/Logo';
import { CountdownTimer } from './components/CountdownTimer';
import { OptInForm } from './components/OptInForm';
import { Footer } from './components/Footer';
import { WarningBar } from './components/WarningBar';
import { ShareSection } from './components/ShareSection';
import { Schedule } from './components/Schedule';
import { Instructors } from './components/Instructors';
import { EVENT } from './constants';

function App() {
  return (
    <div className="min-h-screen w-full bg-ink text-chalk relative flex flex-col items-center selection:bg-react/30">
      <WarningBar />

      <main className="relative z-10 w-full max-w-3xl px-5 md:px-8 pt-12 md:pt-16 pb-12 flex flex-col">
        <Logo />

        <header className="mb-2">
          <p className="label-mono text-react mb-5">{EVENT.edition}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-chalk mb-7">
            Sete noites pra entender React.
            <br />
            <span className="text-chalk-soft font-normal">
              Uma hora cada, ao vivo no YouTube.
            </span>
          </h1>
          <p className="text-base md:text-lg text-chalk-soft leading-relaxed max-w-2xl mb-3">
            Sem promessa de &ldquo;dominar React em 7 dias&rdquo;. Em sete horas você
            entende setup, estado, formulários, useEffect, fetch, roteamento e
            deploy — o que cabe em sete horas, e nada mais.
          </p>
          <p className="text-base md:text-lg text-chalk-soft leading-relaxed max-w-2xl">
            O resto vem com prática individual usando o repositório que fica
            público antes do evento começar.
          </p>
        </header>

        <CountdownTimer />

        <OptInForm />

        <Schedule />

        <Instructors />

        <ShareSection />

        <Footer />
      </main>
    </div>
  );
}

export default App;
