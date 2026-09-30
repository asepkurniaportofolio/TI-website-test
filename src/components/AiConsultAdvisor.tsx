import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, AlertCircle, RefreshCw, MessageSquare } from 'lucide-react';

interface AiConsultAdvisorProps {
  onOpenBookingWithQuery?: (query: string) => void;
}

export const AiConsultAdvisor: React.FC<AiConsultAdvisorProps> = ({ onOpenBookingWithQuery }) => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('Hipnoterapi Klinis');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const samplePrompts = [
    'Apakah saat dihipnoterapi saya bisa tidak sadar atau rahasia saya terbongkar?',
    'Apa perbedaan mendasar antara S.CH dan C.Ht dalam sertifikasi hipnosis?',
    'Bagaimana hipnoterapi menyembuhkan trauma masa kecil (inner child) dan kecemasan?',
    'Kapan seseorang lebih membutuhkan Life Coaching dibanding Hipnoterapi?',
  ];

  const handleAsk = async (queryText?: string) => {
    const textToSend = queryText || question;
    if (!textToSend.trim()) return;

    setIsLoading(true);
    setErrorMsg(null);
    setResponse(null);

    try {
      const res = await fetch('/api/ai-consult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: textToSend,
          category: category,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Gagal memproses konsultasi.');
      }
      setResponse(data.reply);
    } catch (err: any) {
      setErrorMsg(err.message || 'Terjadi kesalahan teknis. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-[#F0F7FF]/50 text-slate-900 border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-xl relative overflow-hidden border-2 border-sky-200">
          
          <div className="relative z-10 space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>AI Subconscious & Certification Consultant</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0F2B5C]">
                  Konsultasi Kilat Bersama Pakar AI Transformasi Indonesia
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Punya pertanyaan seputar hipnoterapi, cara kerja pikiran, keamanan terapi, atau kurikulum lisensi NGH? Tanyakan sekarang untuk jawaban ilmiah instan.
                </p>
              </div>
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-2">
              {['Hipnoterapi Klinis', 'Sertifikasi NGH', 'Life Coaching', 'Mitos vs Fakta Hipnosis'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    category === cat
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-sky-50 hover:bg-sky-100 text-blue-900 border border-sky-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Sample Questions */}
            <div className="space-y-1.5">
              <span className="text-[11px] text-slate-600 font-medium">Atau pilih pertanyaan populer:</span>
              <div className="flex flex-wrap gap-2">
                {samplePrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuestion(prompt);
                      handleAsk(prompt);
                    }}
                    className="text-left text-[11px] bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-blue-900 px-3 py-1.5 rounded-md border border-slate-200 transition-colors cursor-pointer font-medium"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>
            </div>

            {/* Input form */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Ketik pertanyaan Anda tentang hipnoterapi, sertifikasi NGH, STIFIn, atau coaching..."
                className="flex-1 bg-white border-2 border-sky-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={() => handleAsk()}
                disabled={isLoading || !question.trim()}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Menganalisis...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Tanyakan</span>
                  </>
                )}
              </button>
            </div>

            {/* Error view */}
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* AI Response View */}
            {response && (
              <div className="mt-4 p-5 rounded-2xl bg-sky-50 border-2 border-sky-200 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-sky-200/80 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <span>Penjelasan Resmi Pakar Transformasi Indonesia:</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">Didukung Sains Pikiran Bawah Sadar</span>
                </div>

                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                  {response}
                </div>

                {onOpenBookingWithQuery && (
                  <div className="pt-2 border-t border-sky-200/80 flex justify-end">
                    <button
                      onClick={() => onOpenBookingWithQuery(question)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5 underline cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Jadikan Topik Ini Saat Reservasi Sesi &rarr;</span>
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
