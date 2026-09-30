import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, Sparkles, HeartPulse, GraduationCap, Compass } from 'lucide-react';
import { ASSESSMENT_QUESTIONS } from '../data/servicesData';

interface MindAssessmentQuizProps {
  onSelectRecommendation: (serviceCategory: string, specificName: string) => void;
}

export const MindAssessmentQuiz: React.FC<MindAssessmentQuizProps> = ({ onSelectRecommendation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{
    category: string;
    title: string;
    description: string;
    actionLabel: string;
  } | null>(null);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updated);

    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(updated);
    }
  };

  const calculateResult = (answers: number[]) => {
    const scores = {
      hypnotherapy: 0,
      coaching: 0,
      certification: 0,
      additional: 0,
    };

    answers.forEach((optIdx, qIdx) => {
      const q = ASSESSMENT_QUESTIONS[qIdx];
      if (q && q.options[optIdx]) {
        const p = q.options[optIdx].points;
        scores.hypnotherapy += p.hypnotherapy;
        scores.coaching += p.coaching;
        scores.certification += p.certification;
        scores.additional += p.additional;
      }
    });

    let topCategory = 'hypnotherapy';
    let maxScore = -1;

    (Object.keys(scores) as (keyof typeof scores)[]).forEach((cat) => {
      if (scores[cat] > maxScore) {
        maxScore = scores[cat];
        topCategory = cat;
      }
    });

    if (topCategory === 'certification') {
      setResult({
        category: 'Sertifikasi Profesi',
        title: 'Program Sertifikasi Hipnoterapis Profesional (NGH-USA)',
        description: 'Anda memiliki ketertarikan kuat dalam mempelajari mekanisme pikiran bawah sadar untuk menolong diri sendiri, keluarga, maupun membuka praktik profesional berlisensi internasional.',
        actionLabel: 'Lihat Kurikulum Sertifikasi NGH',
      });
    } else if (topCategory === 'coaching') {
      setResult({
        category: 'Personal Development',
        title: 'Mindset Coaching & Tes Genetik STIFIn',
        description: 'Fokus utama Anda adalah akselerasi potensi, mengenali mesin kecerdasan genetik bawaan lahir, dan menembus batas mental penghambat karier atau bisnis.',
        actionLabel: 'Konsultasikan Coaching & STIFIn',
      });
    } else {
      setResult({
        category: 'Hipnoterapi Klinis',
        title: 'Sesi Hipnoterapi Klinis Privat (1-on-1 Therapy)',
        description: 'Gejala atau beban emosional yang Anda rasakan berakar kuat di memori bawah sadar (anxiety, trauma masa lalu, psikosomatis, atau fobia). Hipnoterapi klinis langsung ke akar masalah adalah solusi tercepat dan paling tuntas.',
        actionLabel: 'Jadwalkan Terapi Klinis Privat',
      });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setResult(null);
  };

  return (
    <section id="asesmen" className="py-16 sm:py-20 bg-white border-y border-sky-100 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>FITUR KONSULTASI INTERAKTIF MANDIRI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#0F2B5C]">
            Asesmen Kebutuhan Pikiran & Layanan Tepat
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Bingung harus memilih antara Hipnoterapi Klinis, Sertifikasi NGH /  atau Coaching? Jawab 3 pertanyaan singkat untuk rekomendasi objektif sesuai kondisi Anda.
          </p>
        </div>

        <div className="bg-[#F8FAFC] rounded-3xl border-2 border-sky-200 shadow-xl p-6 sm:p-8">
          {!result ? (
            <div className="space-y-6">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between border-b border-sky-200 pb-3">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                  Pertanyaan {currentQuestionIndex + 1} dari {ASSESSMENT_QUESTIONS.length}
                </span>
                <div className="flex gap-1.5">
                  {ASSESSMENT_QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-1.5 rounded-full transition-all ${
                        idx === currentQuestionIndex
                          ? 'bg-blue-600'
                          : idx < currentQuestionIndex
                          ? 'bg-sky-400'
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Question */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F2B5C]">
                {ASSESSMENT_QUESTIONS[currentQuestionIndex].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {ASSESSMENT_QUESTIONS[currentQuestionIndex].options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className="w-full text-left p-4 rounded-xl border border-sky-200 bg-white hover:border-blue-600 hover:bg-sky-50 transition-all flex items-center justify-between gap-4 group cursor-pointer shadow-2xs"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-900 leading-snug">
                      {opt.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            /* Result Box */
            <div className="text-center py-4 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-200 text-blue-600 mx-auto flex items-center justify-center shadow-md">
                {result.category.includes('Hipnoterapi') ? (
                  <HeartPulse className="w-8 h-8 text-blue-600" />
                ) : result.category.includes('Sertifikasi') ? (
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                ) : (
                  <Compass className="w-8 h-8 text-blue-600" />
                )}
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Rekomendasi Terbaik Untuk Anda
                </span>
                <h3 className="font-serif text-2xl font-black text-[#0F2B5C]">
                  {result.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                  {result.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => onSelectRecommendation(result.category, result.title)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  {result.actionLabel}
                </button>
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Asesmen</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
