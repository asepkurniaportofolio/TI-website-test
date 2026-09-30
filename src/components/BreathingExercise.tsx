import React, { useState, useEffect } from 'react';
import { Wind, Play, Pause, RefreshCw, Volume2, Sparkles } from 'lucide-react';
import { calmingAudio } from '../utils/audioSynthesizer';

export const BreathingExercise: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [counter, setCounter] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            // switch phase
            if (phase === 'Inhale') {
              setPhase('Hold');
              calmingAudio.playSingingBowlBell();
              return 7;
            } else if (phase === 'Hold') {
              setPhase('Exhale');
              calmingAudio.playSingingBowlBell();
              return 8;
            } else {
              setPhase('Inhale');
              setCycleCount((c) => c + 1);
              calmingAudio.playSingingBowlBell();
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const toggleBreathing = () => {
    if (!isActive) {
      setPhase('Inhale');
      setCounter(4);
      calmingAudio.playSingingBowlBell();
    }
    setIsActive(!isActive);
  };

  const resetExercise = () => {
    setIsActive(false);
    setPhase('Inhale');
    setCounter(4);
    setCycleCount(0);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'Inhale':
        return 'Tarik Napas Perlahan Melalui Hidung...';
      case 'Hold':
        return 'Tahan Napas, Rasakan Ketenangan...';
      case 'Exhale':
        return 'Hembuskan Panjang Lewat Mulut...';
    }
  };

  return (
    <section className="py-12 bg-[#F0F7FF] border-y border-sky-200 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-200 shadow-xl shadow-blue-900/5">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Explanatory text */}
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide">
                <Wind className="w-3.5 h-3.5 text-blue-600" />
                <span>Teknik Relaksasi Instan (Protokol 4-7-8)</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2B5C]">
                Rasakan Ketenangan Gelombang Otak Anda Sekarang
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sebelum membaca lebih jauh, luangkan 1 menit untuk merelaksasi sistem saraf simpatik Anda. Latihan ini merangsang saraf Vagus dan menurunkan hormon kortisol seketika.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={toggleBreathing}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 hover:bg-amber-500 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/20'
                  }`}
                >
                  {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isActive ? 'Jeda Latihan' : 'Mulai Latihan Relaksasi'}</span>
                </button>

                <button
                  onClick={resetExercise}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-sky-50 text-sm font-bold border border-sky-200 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Ulangi</span>
                </button>

                {cycleCount > 0 && (
                  <span className="text-xs font-bold text-blue-900 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200">
                    Selesai {cycleCount} Siklus
                  </span>
                )}
              </div>
            </div>

            {/* Interactive Visual Breathing Indicator */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                
                {/* Outer pulsing ring based on phase */}
                <div
                  className={`absolute rounded-full transition-all duration-1000 ease-in-out ${
                    isActive && phase === 'Inhale'
                      ? 'w-44 h-44 sm:w-48 sm:h-48 bg-blue-400/25 scale-105 border-2 border-blue-400'
                      : isActive && phase === 'Hold'
                      ? 'w-44 h-44 sm:w-48 sm:h-48 bg-sky-400/25 scale-100 animate-pulse border-2 border-sky-400'
                      : isActive && phase === 'Exhale'
                      ? 'w-28 h-28 sm:w-32 sm:h-32 bg-blue-600/10 scale-95 border border-blue-300'
                      : 'w-36 h-36 bg-sky-100 border border-sky-200'
                  }`}
                />

                {/* Main center circle */}
                <div
                  className={`relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-1000 border-2 border-white ${
                    phase === 'Inhale'
                      ? 'bg-gradient-to-tr from-blue-600 to-sky-500 scale-105 shadow-blue-500/30'
                      : phase === 'Hold'
                      ? 'bg-gradient-to-tr from-sky-500 to-blue-700 scale-100 shadow-sky-500/30'
                      : 'bg-gradient-to-tr from-[#0F2B5C] to-blue-800 scale-90 shadow-blue-950/30'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
                    {isActive ? phase : 'Relaks'}
                  </span>
                  <span className="text-3xl font-black font-serif my-0.5 text-white">
                    {isActive ? counter : '4-7-8'}
                  </span>
                  <span className="text-[10px] text-sky-200 font-medium">
                    {isActive ? 'Detik' : 'Pola Napas'}
                  </span>
                </div>
              </div>

              <p className="text-xs font-semibold text-blue-900 mt-3 text-center min-h-[1.5rem]">
                {isActive ? getPhaseText() : 'Klik "Mulai Latihan Relaksasi" di atas'}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
