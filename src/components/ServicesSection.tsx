import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Presentation, 
  GraduationCap, 
  HeartPulse, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  MessageCircle,
  BookOpen,
  Briefcase,
  UserCheck
} from 'lucide-react';
import { 
  ECOSYSTEM_PILLARS, 
  SERVICE_SHAPES, 
  AUDIENCE_TARGETS, 
  OFFICIAL_WHATSAPP, 
  OFFICIAL_WHATSAPP_LINK 
} from '../data/ecosystemData';
import { CLINICAL_SERVICES, CERTIFICATION_PROGRAMS } from '../data/servicesData';
import { CertificationProgram } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string, category: string) => void;
  onSelectServiceForPayment?: (serviceName: string, category: string, nominal?: number | string) => void;
  onOpenSyllabusModal: (program: CertificationProgram) => void;
  activeEcosystemTab?: 'development' | 'public_learning' | 'certification' | 'personal';
  onTabChange?: (tab: 'development' | 'public_learning' | 'certification' | 'personal') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForBooking, 
  onSelectServiceForPayment,
  onOpenSyllabusModal,
  activeEcosystemTab,
  onTabChange
}) => {
  const [currentTab, setCurrentTab] = useState<'development' | 'public_learning' | 'certification' | 'personal'>('development');

  useEffect(() => {
    if (activeEcosystemTab) {
      setCurrentTab(activeEcosystemTab);
    }
  }, [activeEcosystemTab]);

  const handleTabSwitch = (key: 'development' | 'public_learning' | 'certification' | 'personal') => {
    setCurrentTab(key);
    if (onTabChange) {
      onTabChange(key);
    }
  };

  const activePillar = ECOSYSTEM_PILLARS.find(p => p.key === currentTab) || ECOSYSTEM_PILLARS[0];
  const hasActivePrograms = (activePillar?.programs?.length ?? 0) > 0;

  return (
    <section 
      id="ekosistem-layanan" 
      className="py-14 sm:py-20 bg-white text-slate-900 border-b border-sky-100 scroll-mt-20"
    >
      {/* Fallback anchors for direct navigation */}
      <div id="produk" className="scroll-mt-28" />
      <div id="layanan-hipnoterapi" className="scroll-mt-28" />
      <div id="sertifikasi" className="scroll-mt-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Heading with Poster Branding */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>HUMAN DEVELOPMENT • PERFORMANCE • TRANSFORMATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B5C] tracking-tight">
            Ekosistem Layanan Transformasi Indonesia
          </h2>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Program pengembangan, pembelajaran publik, sertifikasi profesional, dan layanan transformasi personal untuk individu, pendidik, organisasi, dan helping professionals.
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-serif italic text-blue-900">
            <span className="font-bold">"Bersama Membangun Manusia Unggul untuk Indonesia yang Lebih Baik"</span>
            <span className="hidden sm:inline text-sky-400">•</span>
            <span className="bg-sky-50 text-blue-800 px-3 py-1 rounded-full border border-sky-200 font-sans not-italic font-bold text-xs">
              People Better Performance Brighter Indonesia
            </span>
          </div>
        </div>

        {/* 4 Pillars Tab Navigation (Clean White & Blue Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" id="service-ecosystem-tabs">
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const isSelected = currentTab === pillar.key;
            let IconComponent = Users;
            if (pillar.key === 'public_learning') IconComponent = Presentation;
            if (pillar.key === 'certification') IconComponent = GraduationCap;
            if (pillar.key === 'personal') IconComponent = HeartPulse;

            return (
              <button
                key={pillar.id}
                onClick={() => handleTabSwitch(pillar.key)}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#0F2B5C] via-[#1E3A8A] to-[#0B2545] text-white border-blue-600 shadow-xl shadow-blue-950/20 ring-2 ring-blue-400/50'
                    : 'bg-[#F8FAFC] hover:bg-sky-50 border-sky-200 text-slate-800 hover:border-blue-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${
                      isSelected 
                        ? 'bg-white text-blue-900 shadow-md' 
                        : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-blue-950/90 text-blue-200' : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className={`font-serif font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-[#0F2B5C]'}`}>
                    {pillar.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-sky-200/50 flex items-center justify-between">
                  <span className={`text-[11px] font-semibold ${isSelected ? 'text-sky-200' : 'text-blue-600'}`}>
                    {pillar.badge}
                  </span>
                  <span className={`text-[11px] font-bold ${isSelected ? 'text-sky-300' : 'text-slate-400'}`}>
                    {isSelected ? 'Aktif' : 'Lihat'} →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Showcase (Clean White Card with Soft Sky-Blue Accents) */}
        <div className="bg-[#F0F7FF]/50 rounded-3xl border-2 border-sky-200 p-5 sm:p-8 lg:p-10 shadow-xl shadow-blue-900/5 relative overflow-hidden">
          
          {/* Active Pillar Banner with Prominent Sub-headline */}
          <div className="bg-gradient-to-r from-[#0F2B5C] via-[#1E3A8A] to-[#0B2545] text-white rounded-2xl p-5 sm:p-7 mb-8 border border-blue-400/40 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-sky-200 border border-blue-400/30">
                    Pilar {activePillar.number}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {activePillar.title}
                  </h3>
                </div>

                {/* Sub-Headline Utama dari Gambar */}
                <p className="text-sm sm:text-base text-sky-100 font-medium italic">
                  "{activePillar.subHeadline}"
                </p>

                {activePillar.quote && (
                  <p className="text-xs text-sky-200/90 pt-1">
                    {activePillar.quote}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={OFFICIAL_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {OFFICIAL_WHATSAPP}</span>
                </a>
                <button
                  onClick={() => onSelectServiceForBooking(activePillar.title, 'Ekosistem Layanan')}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-blue-300/50 shadow-md transition-all cursor-pointer"
                >
                  Jadwalkan Konsultasi
                </button>
              </div>
            </div>
          </div>

          {/* TAB 1 CONTENT: DEVELOPMENT SOLUTIONS */}
          {currentTab === 'development' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {!hasActivePrograms ? (
                <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/60 p-8 text-center text-slate-600">
                  <p className="font-serif text-xl font-bold text-[#0F2B5C]">Konten belum tersedia</p>
                  <p className="mt-2 text-sm">Placeholder sementara untuk kategori ini. Hubungi kami untuk info program terbaru.</p>
                </div>
              ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activePillar.programs.map((prog, idx) => (
                  <div 
                    key={idx}
                    className="bg-white hover:bg-sky-50/40 rounded-2xl border-2 border-sky-200 hover:border-blue-600 p-6 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                          {prog.badge}
                        </span>
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>

                      <h4 className="font-serif font-bold text-lg text-[#0F2B5C]">
                        {prog.title}
                      </h4>

                      {/* Keywords dari Gambar */}
                      <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs font-medium text-slate-800 leading-relaxed">
                        <strong className="text-blue-900 font-bold block mb-1">Cakupan Fokus:</strong>
                        {prog.desc}
                      </div>

                      {prog.details && (
                        <div className="space-y-1.5 pt-2">
                          <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                            Hasil & Sasaran Program:
                          </p>
                          {prog.details.map((dt, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{dt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-6 mt-4 border-t border-sky-100 flex flex-col gap-2">
                      <button
                        onClick={() => onSelectServiceForBooking(prog.title, 'Development Solutions')}
                        className="w-full bg-[#0F2B5C] hover:bg-blue-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Konsultasikan Program Ini</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          )}

          {/* TAB 2 CONTENT: PUBLIC LEARNING */}
          {currentTab === 'public_learning' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {!hasActivePrograms ? (
                <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/60 p-8 text-center text-slate-600">
                  <p className="font-serif text-xl font-bold text-[#0F2B5C]">Konten belum tersedia</p>
                  <p className="mt-2 text-sm">Placeholder sementara untuk kategori ini. Hubungi kami untuk info program terbaru.</p>
                </div>
              ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activePillar.programs.map((prog, idx) => (
                  <div 
                    key={idx}
                    className="bg-white hover:bg-sky-50/40 rounded-2xl border-2 border-sky-200 hover:border-blue-600 p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                          {prog.badge}
                        </span>
                        <Presentation className="w-5 h-5 text-blue-600" />
                      </div>

                      <h4 className="font-serif font-bold text-xl text-[#0F2B5C]">
                        {prog.title}
                      </h4>

                      <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                        {prog.desc}
                      </div>

                      {prog.details && (
                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Format & Fasilitas Kelas:
                          </p>
                          {prog.details.map((dt, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{dt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-6 mt-4 border-t border-sky-100 flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => onSelectServiceForBooking(prog.title, 'Public Learning')}
                        className="flex-1 bg-[#0F2B5C] hover:bg-blue-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Daftar Kelas Publik</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-300" />
                      </button>
                      <a
                        href={OFFICIAL_WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Tanya Jadwal WA</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              )}

              {/* Quote Highlight Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-sky-50 border border-sky-200 text-center max-w-2xl mx-auto">
                <p className="font-serif italic text-blue-950 text-sm sm:text-base font-semibold">
                  "Pembelajaran hari ini, untuk perubahan yang lebih baik esok hari."
                </p>
              </div>
            </div>
          )}

          {/* TAB 3 CONTENT: PROFESSIONAL CERTIFICATION */}
          {currentTab === 'certification' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {!hasActivePrograms ? (
                <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/60 p-8 text-center text-slate-600">
                  <p className="font-serif text-xl font-bold text-[#0F2B5C]">Konten belum tersedia</p>
                  <p className="mt-2 text-sm">Placeholder sementara untuk kategori ini. Hubungi kami untuk info program terbaru.</p>
                </div>
              ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activePillar.programs.map((prog, idx) => (
                  <div 
                    key={idx}
                    className="bg-white hover:bg-sky-50/40 rounded-2xl border-2 border-sky-200 hover:border-blue-600 p-6 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                          {prog.badge}
                        </span>
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>

                      <h4 className="font-serif font-bold text-lg text-[#0F2B5C]">
                        {prog.title}
                      </h4>

                      <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs font-medium text-slate-800 leading-relaxed">
                        <strong className="text-blue-900 block mb-1">Kompetensi Utama:</strong>
                        {prog.desc}
                      </div>

                      {prog.details && (
                        <div className="space-y-1.5 pt-2">
                          <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                            Standar Akreditasi:
                          </p>
                          {prog.details.map((dt, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{dt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-6 mt-4 border-t border-sky-100 flex flex-col gap-2">
                      {idx === 0 && CERTIFICATION_PROGRAMS[0] && (
                        <button
                          onClick={() => onOpenSyllabusModal(CERTIFICATION_PROGRAMS[0])}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-sky-200" />
                          <span>Buka Silabus Kurikulum NGH</span>
                        </button>
                      )}
                      <button
                        onClick={() => onSelectServiceForBooking(prog.title, 'Sertifikasi Profesi')}
                        className="w-full bg-[#0F2B5C] hover:bg-blue-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Daftar Batch Sertifikasi</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          )}

          {/* TAB 4 CONTENT: PERSONAL TRANSFORMATION (CLINICAL HYPNOTHERAPY) */}
          {currentTab === 'personal' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {CLINICAL_SERVICES.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/60 p-8 text-center text-slate-600">
                  <p className="font-serif text-xl font-bold text-[#0F2B5C]">Konten belum tersedia</p>
                  <p className="mt-2 text-sm">Placeholder sementara untuk kategori ini. Hubungi kami untuk info program terbaru.</p>
                </div>
              ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLINICAL_SERVICES.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border-2 border-sky-200 hover:border-blue-600 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                          {item.badge || 'Terapi Klinis'}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          <span>{item.sessionDuration}</span>
                        </div>
                      </div>

                      <h4 className="font-serif font-bold text-base sm:text-lg text-[#0F2B5C] group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.shortDesc}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                          Manfaat Terapi:
                        </p>
                        {item.benefits.slice(0, 2).map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-2">
                      <button
                        onClick={() => onSelectServiceForBooking(item.title, 'Hipnoterapi Klinis')}
                        className="w-full bg-[#0F2B5C] hover:bg-blue-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Reservasi Sesi Privat</span>
                        <ArrowRight className="w-3 h-3 text-sky-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          )}

        </div>

        {/* BENTUK LAYANAN & COCOK UNTUK (Clean White & Blue Bars) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Bentuk Layanan Bar */}
          <div className="bg-white rounded-2xl border-2 border-sky-200 p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-700" />
              <h4 className="font-serif font-bold text-base text-[#0F2B5C] uppercase tracking-wide">
                Bentuk Layanan Kami:
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {SERVICE_SHAPES.map((shape, sIdx) => (
                <div key={sIdx} className="p-3 rounded-xl bg-sky-50/70 border border-sky-200">
                  <p className="font-bold text-xs text-[#0F2B5C]">{shape.label}</p>
                  <p className="text-[10px] text-slate-600 mt-0.5">{shape.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cocok Untuk Bar */}
          <div className="bg-white rounded-2xl border-2 border-sky-200 p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-blue-700" />
              <h4 className="font-serif font-bold text-base text-[#0F2B5C] uppercase tracking-wide">
                Program Ini Cocok Untuk:
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {AUDIENCE_TARGETS.map((aud, aIdx) => (
                <div key={aIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-xs text-slate-900">{aud.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{aud.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* OFFICIAL WHATSAPP CTA BOX (Clean Navy & Emerald) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0B2545] via-[#0F2B5C] to-[#0B2545] text-white border-2 border-blue-400/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Siap bertumbuh bersama Transformasi Indonesia?
              </h3>
              <p className="text-xs sm:text-sm text-sky-200/90 mt-1">
                Diskusikan kebutuhan program Anda atau organisasi Anda bersama kami.
              </p>
              <div className="flex items-center gap-2 pt-1 font-mono font-black text-emerald-300 text-base sm:text-lg">
                <span>Hubungi kami melalui WhatsApp: {OFFICIAL_WHATSAPP}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={OFFICIAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
            <button
              onClick={() => onSelectServiceForBooking('Konsultasi Kebutuhan Organisasi/Pribadi', 'Ekosistem Layanan')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-blue-400/40 transition-all text-center cursor-pointer"
            >
              Ajukan Proposal Program
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
