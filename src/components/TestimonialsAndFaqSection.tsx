import React, { useState } from 'react';
import { Star, ShieldAlert, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { TESTIMONIALS, MYTH_FACTS } from '../data/servicesData';

export const TestimonialsAndFaqSection: React.FC = () => {
  const [openMythIndex, setOpenMythIndex] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-20 bg-slate-50/60 text-slate-800 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Sub-section 1: Testimonials & Alumni Success */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>TESTIMONI & KISAH NYATA TRANSFORMASI</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Mereka yang Telah Menemukan Kembali Kedamaian & Potensinya
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Kisah pemulihan tuntas dari klien terapi klinis dan testimoni alumni sertifikasi profesi NGH-USA di Transformasi Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-blue-300 hover:shadow-md transition-all relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                      {t.category}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-slate-700 bg-slate-50/80 p-3 rounded-xl border border-slate-200/60">
                    <strong className="text-blue-700 font-semibold">Tantangan: </strong>
                    {t.problem}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{t.result}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <h4 className="font-bold text-xs text-slate-900">{t.clientName}</h4>
                  <p className="text-[11px] text-slate-500">{t.ageOrProfession}</p>
                  {t.anonymizedNote && (
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      * {t.anonymizedNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 2: Myth vs Fact (Edukasi Mitos Hipnosis) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
                <span>EDUKASI ILMIAH</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Mitos vs Fakta Ilmiah Hipnosis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Banyak orang takut mencoba hipnoterapi karena penggambaran keliru di tayangan televisi dan pertunjukan hiburan (stage hypnosis). Berikut fakta medis & neurosains sesungguhnya.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {MYTH_FACTS.map((item, idx) => {
                const isOpen = openMythIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200/70 rounded-xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => setOpenMythIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-slate-800 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                          M
                        </span>
                        <span className="text-slate-800">Mitos: "{item.myth}"</span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-blue-50/40 border-t border-slate-200/60 space-y-2 text-xs text-slate-700 leading-relaxed animate-in fade-in duration-200">
                        <div className="flex items-start gap-2 text-blue-900 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>FAKTA ILMIAH & KLINIS:</span>
                        </div>
                        <p className="pl-6 text-slate-600">
                          {item.fact}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
