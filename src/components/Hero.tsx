import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  PhoneCall, 
  CreditCard, 
  Layers, 
  MessageCircle,
  Users,
  ShieldCheck
} from 'lucide-react';
import clinicRoomImg from '../assets/images/clinic_therapy_room_1789711963361.jpg';
import { OFFICIAL_WHATSAPP, OFFICIAL_WHATSAPP_LINK } from '../data/ecosystemData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenPayment?: (serviceName?: string, nominal?: number) => void;
  onExploreCertification: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenPayment, onExploreCertification }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white text-slate-900 border-b border-sky-100/70 scroll-mt-24">
      
      {/* Background Decorative Soft Blue Shapes & Waves like Poster */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none -mr-20 sm:-mr-40 -mt-10 sm:-mt-20 max-w-full" />
      <div className="absolute top-1/2 left-0 w-56 h-56 sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -ml-16 sm:-ml-32 max-w-full" />
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Left Content: Exact Headline from Poster */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Tagline / Sub-brand Banner from Poster */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="tracking-wider">HUMAN DEVELOPMENT • PERFORMANCE • TRANSFORMATION</span>
            </div>

            {/* Main Headline (Persis Poster) */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B5C] leading-tight sm:leading-[1.18]">
                Ekosistem Layanan <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-900">
                  Transformasi Indonesia
                </span>
              </h1>
              
              {/* Poster Quote / Sub-Headline */}
              <p className="text-base sm:text-xl font-serif italic text-blue-900 font-semibold pt-1">
                "Bersama Membangun Manusia Unggul untuk Indonesia yang Lebih Baik"
              </p>
            </div>

            {/* Poster Description */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Program pengembangan terarah, pembelajaran publik interaktif, sertifikasi profesi berstandar internasional (NGH-USA), serta layanan transformasi personal untuk <strong>individu, pendidik, organisasi, dan helping professionals</strong>.
            </p>

            {/* Poster Badges Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="bg-sky-50 text-sky-800 font-bold px-3 py-1 rounded-lg border border-sky-200 shadow-xs">
                Individu Bertumbuh
              </span>
              <span className="text-sky-300 font-bold">•</span>
              <span className="bg-blue-50 text-blue-800 font-bold px-3 py-1 rounded-lg border border-blue-200 shadow-xs">
                Organisasi Berkembang
              </span>
              <span className="text-sky-300 font-bold">•</span>
              <span className="bg-sky-50 text-sky-900 font-bold px-3 py-1 rounded-lg border border-sky-200 shadow-xs">
                Indonesia Lebih Baik
              </span>
            </div>

            {/* CTAs: Clean Blue & White Style */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <a
                id="hero-cta-ecosystem"
                href="#ekosistem-layanan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-700 hover:from-blue-700 hover:to-sky-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm cursor-pointer text-center"
              >
                <Layers className="w-4 h-4 text-sky-200 shrink-0" />
                <span>Jelajahi 4 Pilar Layanan</span>
                <ArrowRight className="w-4 h-4 text-sky-200" />
              </a>

              <a
                id="hero-cta-whatsapp"
                href={OFFICIAL_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-800 font-bold px-5 py-3.5 rounded-xl border-2 border-emerald-300 hover:border-emerald-400 shadow-sm transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chat WA: {OFFICIAL_WHATSAPP}</span>
              </a>

              <button
                id="hero-cta-booking"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-950 text-white font-semibold px-4 py-3.5 rounded-xl shadow-sm transition-all text-xs sm:text-sm cursor-pointer text-center"
              >
                <PhoneCall className="w-4 h-4 text-sky-300 shrink-0" />
                <span>Konsultasi Program</span>
              </button>
            </div>

            {/* Trust checkmarks in Clean Blue */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Lisensi Resmi NGH-USA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Metode Ilmiah, Praktis & Berdampak</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Klinik & Training Bandung, Jabodetabek</span>
              </div>
            </div>

          </div>

          {/* Right Card: Clean White & Blue Showcase like Poster */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-5 sm:p-7 border-2 border-sky-200 shadow-2xl shadow-blue-900/10">
              
              {/* Header Card */}
              <div className="flex items-center justify-between border-b border-sky-100 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white p-1 border border-sky-200 shadow-xs flex items-center justify-center shrink-0">
                    <img 
                      src="/log.png" 
                      alt="Logo Transformasi Indonesia" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-lg text-[#0F2B5C] leading-tight">
                      TRANSFORMASI INDONESIA
                    </h3>
                    <p className="text-[11px] text-blue-600 font-bold uppercase tracking-wider">
                      People Better • Performance Brighter
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* Photo Showcase: Clean Presentation */}
              <div className="relative rounded-2xl overflow-hidden mb-4 border border-sky-100 shadow-sm group">
                <img 
                  src={clinicRoomImg} 
                  alt="Suasana Ruang Terapi & Pelatihan Transformasi Indonesia" 
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white bg-blue-900/80 px-2.5 py-1 rounded-lg border border-blue-400/40 backdrop-blur-xs text-[11px]">
                    Ruang Terapi & Pelatihan
                  </span>
                  <span className="text-[10px] font-bold text-sky-200 bg-slate-900/90 px-2 py-0.5 rounded-full border border-sky-400/40 shrink-0">
                    Bandung & Jabodetabek
                  </span>
                </div>
              </div>

              {/* 4 Pillars Mini Bento Box */}
              <div className="space-y-2 mb-4">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  4 Pilar Transformasi Unggul:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href="#ekosistem-layanan" 
                    className="p-2.5 rounded-xl bg-sky-50/70 hover:bg-sky-100/70 border border-sky-200 text-left transition-colors group block"
                  >
                    <span className="text-[10px] font-bold text-blue-600 block">01. Development</span>
                    <span className="text-xs font-bold text-[#0F2B5C] group-hover:text-blue-700">Corporate & Edu</span>
                  </a>
                  <a 
                    href="#ekosistem-layanan" 
                    className="p-2.5 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 text-left transition-colors group block"
                  >
                    <span className="text-[10px] font-bold text-blue-600 block">02. Learning</span>
                    <span className="text-xs font-bold text-[#0F2B5C] group-hover:text-blue-700">Live & Intensive</span>
                  </a>
                  <a 
                    href="#ekosistem-layanan" 
                    className="p-2.5 rounded-xl bg-sky-50/70 hover:bg-sky-100/70 border border-sky-200 text-left transition-colors group block"
                  >
                    <span className="text-[10px] font-bold text-blue-600 block">03. Certification</span>
                    <span className="text-xs font-bold text-[#0F2B5C] group-hover:text-blue-700">NGH & NLP</span>
                  </a>
                  <a 
                    href="#ekosistem-layanan" 
                    className="p-2.5 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 text-left transition-colors group block"
                  >
                    <span className="text-[10px] font-bold text-blue-600 block">04. Personal</span>
                    <span className="text-xs font-bold text-[#0F2B5C] group-hover:text-blue-700">Hipnoterapi Klinis</span>
                  </a>
                </div>
              </div>

              {/* Verified Metrics in Clean Blue & Navy */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 pt-3 border-t border-sky-100">
                <div className="text-center p-1.5 rounded-lg bg-slate-50/60 sm:bg-transparent">
                  <p className="text-base sm:text-lg font-black font-serif text-[#0F2B5C]">5,000+</p>
                  <p className="text-[10px] sm:text-[9px] font-medium text-slate-500">Klien Selesai</p>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-slate-50/60 sm:bg-transparent">
                  <p className="text-base sm:text-lg font-black font-serif text-blue-600">1,200+</p>
                  <p className="text-[10px] sm:text-[9px] font-medium text-slate-500">Alumni Sertifikasi</p>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-slate-50/60 sm:bg-transparent">
                  <p className="text-base sm:text-lg font-black font-serif text-[#0F2B5C]">14+ Thn</p>
                  <p className="text-[10px] sm:text-[9px] font-medium text-slate-500">Kiprah Praktisi</p>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-slate-50/60 sm:bg-transparent">
                  <p className="text-base sm:text-lg font-black font-serif text-emerald-600">98.7%</p>
                  <p className="text-[10px] sm:text-[9px] font-medium text-slate-500">Tingkat Kepuasan</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
