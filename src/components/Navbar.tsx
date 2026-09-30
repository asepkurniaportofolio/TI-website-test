import React, { useState, useEffect, useRef } from 'react';
import { 
  Home,
  User,
  Sparkles, 
  Phone, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Award, 
  GraduationCap, 
  HeartPulse, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck,
  Package,
  BookOpen,
  Users,
  Presentation,
  Briefcase,
  FileText,
  CreditCard,
  ExternalLink
} from 'lucide-react';
import { calmingAudio } from '../utils/audioSynthesizer';
import { 
  ECOSYSTEM_PILLARS, 
  OFFICIAL_WHATSAPP, 
  OFFICIAL_WHATSAPP_LINK 
} from '../data/ecosystemData';
import { CERTIFICATION_PROGRAMS } from '../data/servicesData';
import { CertificationProgram } from '../types';

interface NavbarProps {
  onOpenBooking: (serviceName?: string, category?: string) => void;
  onOpenPayment?: (serviceName?: string, nominal?: number) => void;
  activeEcosystemTab?: 'development' | 'public_learning' | 'certification' | 'personal';
  onSelectEcosystemTab?: (key: 'development' | 'public_learning' | 'certification' | 'personal') => void;
  onOpenCertificationDetail?: (program: CertificationProgram) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onOpenPayment,
  activeEcosystemTab = 'development',
  onSelectEcosystemTab,
  onOpenCertificationDetail
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  // Dropdown states for Sertifikasi & Produk
  const [certDropdownOpen, setCertDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  // Mobile accordion state: 'certification' | 'products' | null
  const [mobileExpanded, setMobileExpanded] = useState<'certification' | 'products' | null>('certification');

  const certTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCalmAudio = () => {
    if (isAudioPlaying) {
      calmingAudio.stopAmbience();
      setIsAudioPlaying(false);
    } else {
      calmingAudio.startAmbience();
      setIsAudioPlaying(true);
    }
  };

  // Sertifikasi Hover Handlers
  const handleCertEnter = () => {
    if (certTimeoutRef.current) clearTimeout(certTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsDropdownOpen(false);
    setCertDropdownOpen(true);
  };

  const handleCertLeave = () => {
    certTimeoutRef.current = setTimeout(() => {
      setCertDropdownOpen(false);
    }, 250);
  };

  // Produk Hover Handlers
  const handleProductsEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (certTimeoutRef.current) clearTimeout(certTimeoutRef.current);
    setCertDropdownOpen(false);
    setProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 250);
  };

  // Click on Certification
  const handleSelectCertification = (program: CertificationProgram) => {
    setCertDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectEcosystemTab) {
      onSelectEcosystemTab('certification');
    }
    const el = document.getElementById('sertifikasi') || document.getElementById('ekosistem-layanan');
    if (el) el.scrollIntoView({ behavior: 'smooth' });

    if (onOpenCertificationDetail) {
      onOpenCertificationDetail(program);
    }
  };

  // Click on a Product / Ecosystem Category
  const handleSelectProductCategory = (pillarKey: 'development' | 'public_learning' | 'certification' | 'personal') => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectEcosystemTab) {
      onSelectEcosystemTab(pillarKey);
    }
    const el = document.getElementById('ekosistem-layanan') || document.getElementById('produk');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavScroll = (elementId: string) => {
    setMobileMenuOpen(false);
    setCertDropdownOpen(false);
    setProductsDropdownOpen(false);
    if (elementId === 'profil') {
      if (window.location.pathname !== '/profil') {
        window.history.pushState({}, '', '/profil');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (elementId === 'home') {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Utility Bar (Desktop Only): Soft Midnight Slate */}
      <div className={`hidden lg:block transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F1E36]/95 py-1.5 text-[11px]' 
          : 'bg-[#112340]/90 py-2 text-xs'
      } text-slate-300 border-b border-slate-800/40 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Official Credentials */}
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="flex items-center gap-1.5 text-slate-100 font-medium">
              <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Lembaga Resmi NGH-USA Chapter Indonesia</span>
            </div>
            <div className="hidden xl:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Bandung & Jabodetabek</span>
            </div>
          </div>

          {/* Right: Hours & WhatsApp Official Link */}
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Senin - Sabtu: 09.00 - 17.00 WIB</span>
            </div>
            <a
              href={OFFICIAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              title="Chat WhatsApp Resmi Transformasi Indonesia"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp: {OFFICIAL_WHATSAPP}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar: Clean, Soft Translucent White */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-xs py-2.5 border-b border-slate-200/60' 
          : 'bg-white/80 backdrop-blur-md py-3.5 border-b border-slate-100/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            
            {/* Logo Brand: Soft Navy & Sky Blue */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavScroll('home');
              }}
              className="flex items-center gap-2.5 group shrink-0" 
              id="brand-logo-link"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-1 border border-slate-200/90 shadow-xs flex items-center justify-center group-hover:scale-105 group-hover:border-blue-400 transition-all shrink-0">
                <img 
                  src="/log.png" 
                  alt="Logo Transformasi Indonesia" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="font-serif font-bold text-sm sm:text-base lg:text-lg tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors truncate max-w-[155px] xs:max-w-[220px] sm:max-w-none">
                    Transformasi Indonesia
                  </span>
                  <span className="hidden xs:inline-flex text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 shrink-0">
                    NGH
                  </span>
                </div>
                <p className="hidden xl:block text-[11px] text-slate-500 font-normal tracking-normal leading-none mt-0.5">
                  Human Development • Performance • Transformation
                </p>
              </div>
            </a>

            {/* NAVIGATION MENU: HOME, PROFIL, SERTIFIKASI & PRODUK */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
              
              {/* 1. HOME LINK */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavScroll('home');
                }}
                className="px-3 py-1.5 rounded-xl text-xs lg:text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Home
              </a>

              {/* 2. PROFIL LINK */}
              <a
                href="#profil"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavScroll('profil');
                }}
                className="px-3 py-1.5 rounded-xl text-xs lg:text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Profil
              </a>

              {/* 3. MENU SERTIFIKASI (Dengan Dropdown Kurikulum & Lisensi) */}
              <div 
                className="relative py-1"
                onMouseEnter={handleCertEnter}
                onMouseLeave={handleCertLeave}
              >
                <button
                  id="navbar-sertifikasi-btn"
                  onClick={() => setCertDropdownOpen(!certDropdownOpen)}
                  className={`px-3 py-1.5 rounded-xl text-xs lg:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer group whitespace-nowrap ${
                    certDropdownOpen 
                      ? 'bg-slate-100 text-blue-700 shadow-2xs' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  aria-expanded={certDropdownOpen}
                >
                  <GraduationCap className={`w-4 h-4 transition-colors ${certDropdownOpen ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} />
                  <span>Sertifikasi</span>
                  <span className={`text-[10px] font-medium px-1.5 py-0.2 rounded-full ${
                    certDropdownOpen ? 'bg-blue-100/70 text-blue-800' : 'bg-slate-100 text-slate-500'
                  }`}>
                    NGH
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${certDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                {/* MEGA-MENU SERTIFIKASI */}
                {certDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-[90vw] sm:w-[580px] lg:w-[650px] max-w-[calc(100vw-2rem)] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={handleCertEnter}
                    onMouseLeave={handleCertLeave}
                  >
                    <div className="bg-white/98 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-200/50 text-slate-800">
                      
                      {/* Dropdown Header */}
                      <div className="pb-3 mb-3.5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                              Program Sertifikasi Profesi
                            </span>
                            <span className="text-xs text-slate-400 font-normal">
                              Lisensi Resmi NGH-USA
                            </span>
                          </div>
                          <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mt-1">
                            Jalur Sertifikasi Hipnoterapis Berstandar Internasional:
                          </h4>
                        </div>

                        <button
                          onClick={() => {
                            setCertDropdownOpen(false);
                            if (onSelectEcosystemTab) onSelectEcosystemTab('certification');
                            handleNavScroll('sertifikasi');
                          }}
                          className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0 self-start sm:self-auto cursor-pointer"
                        >
                          <span>Buka Semua di Halaman</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Certification Programs Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3.5">
                        {CERTIFICATION_PROGRAMS.map((program) => {
                          const isNGH = program.code === 'NGH-USA';
                          const isDouble = program.code === 'DOUBLE';

                          return (
                            <div
                              key={program.id}
                              onClick={() => handleSelectCertification(program)}
                              className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group text-left ${
                                isNGH 
                                  ? 'bg-sky-50/40 hover:bg-sky-50/80 border-sky-200/70 hover:border-blue-400'
                                  : isDouble
                                  ? 'bg-amber-50/30 hover:bg-amber-50/60 border-amber-200/70 hover:border-amber-300'
                                  : 'bg-slate-50/50 hover:bg-white border-slate-200/70 hover:border-blue-300 hover:shadow-2xs'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md ${
                                    isNGH ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
                                  }`}>
                                    {program.code}
                                  </span>
                                  <span className="text-[10px] font-medium text-slate-400">
                                    {program.duration.split('(')[0]}
                                  </span>
                                </div>
                                <h5 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                                  {program.title}
                                </h5>
                                <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                                  {program.credentialTitle}
                                </p>
                                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                  {program.description}
                                </p>
                              </div>

                              <div className="pt-2 mt-2 border-t border-slate-200/50 flex items-center justify-between text-[11px]">
                                <span className="font-semibold text-slate-900 font-serif">
                                  Rp {program.investment.toLocaleString('id-ID')}
                                </span>
                                <span className="text-blue-600 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 text-[10px]">
                                  <span>Lihat Silabus</span>
                                  <ChevronRight className="w-3 h-3" />
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Dropdown Quick Footer */}
                      <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="text-[11px]">Bimbingan langsung Dr. Iwan D. Gunawan (President NGH Indonesia)</span>
                        </div>
                        <a
                          href={OFFICIAL_WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 cursor-pointer text-[11px]"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Tanya Jadwal Lisensi</span>
                        </a>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* 4. MENU PRODUK (Katalog 4 Pilar Layanan) */}
              <div 
                className="relative py-1"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <button
                  id="navbar-produk-btn"
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className={`px-3 py-1.5 rounded-xl text-xs lg:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer group whitespace-nowrap ${
                    productsDropdownOpen 
                      ? 'bg-slate-100 text-blue-700 shadow-2xs' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  aria-expanded={productsDropdownOpen}
                >
                  <Package className={`w-4 h-4 transition-colors ${productsDropdownOpen ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} />
                  <span>Produk</span>
                  <span className={`text-[10px] font-medium px-1.5 py-0.2 rounded-full ${
                    productsDropdownOpen ? 'bg-blue-100/70 text-blue-800' : 'bg-slate-100 text-slate-500'
                  }`}>
                    4 Pilar
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                {/* MEGA-MENU PRODUK */}
                {productsDropdownOpen && (
                  <div 
                    className="absolute top-full right-0 pt-2 w-[90vw] sm:w-[580px] lg:w-[650px] max-w-[calc(100vw-2rem)] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={handleProductsEnter}
                    onMouseLeave={handleProductsLeave}
                  >
                    <div className="bg-white/98 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xl shadow-slate-200/50 text-slate-800">
                      
                      {/* Dropdown Header */}
                      <div className="pb-3 mb-3.5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                              Katalog Produk Transformasi Indonesia
                            </span>
                            <span className="text-xs text-slate-400 font-normal">
                              Solusi Individu & Organisasi
                            </span>
                          </div>
                          <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mt-1">
                            Pilih Kategori Produk & Program:
                          </h4>
                        </div>

                        <a
                          href="#biaya"
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            handleNavScroll('biaya');
                          }}
                          className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0 self-start sm:self-auto cursor-pointer"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          <span>Daftar Investasi & Biaya</span>
                        </a>
                      </div>

                      {/* 4 Product Categories Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3.5">
                        
                        {/* Product Category 1: Personal Transformation */}
                        <div 
                          onClick={() => handleSelectProductCategory('personal')}
                          className="p-3 rounded-xl border border-slate-200/70 bg-slate-50/40 hover:bg-white hover:border-blue-300 hover:shadow-2xs transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-7 h-7 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center shrink-0 border border-sky-100">
                              <HeartPulse className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Produk Terapi 1-on-1</span>
                              <h5 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-blue-600 transition-colors">
                                Personal Transformation
                              </h5>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                            Hipnoterapi Klinis Privat (Anxiety, Gerd, Trauma PTSD, Phobia, Insomnia), Mindset Coaching, & Tes STIFIn.
                          </p>
                          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-medium">
                            <span>Mulai Rp 1.500.000</span>
                            <span className="flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                              Buka Detail <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                        {/* Product Category 2: Development Solutions */}
                        <div 
                          onClick={() => handleSelectProductCategory('development')}
                          className="p-3 rounded-xl border border-slate-200/70 bg-slate-50/40 hover:bg-white hover:border-blue-300 hover:shadow-2xs transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                              <Briefcase className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Produk Korporat & B2B</span>
                              <h5 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-blue-600 transition-colors">
                                Development Solutions
                              </h5>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                            In-House Corporate Training, Leadership Mindset Transformation, & High Performance Team Building.
                          </p>
                          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-medium">
                            <span>Customized Program</span>
                            <span className="flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                              Buka Detail <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                        {/* Product Category 3: Public Learning */}
                        <div 
                          onClick={() => handleSelectProductCategory('public_learning')}
                          className="p-3 rounded-xl border border-slate-200/70 bg-slate-50/40 hover:bg-white hover:border-blue-300 hover:shadow-2xs transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-100">
                              <Presentation className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Produk Publik & Workshop</span>
                              <h5 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-blue-600 transition-colors">
                                Public Learning
                              </h5>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                            Live Interactive Learning & Intensive Public Workshops untuk akselerasi potensi dan keterampilan pikiran.
                          </p>
                          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-medium">
                            <span>Kelas Online & Offline</span>
                            <span className="flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                              Buka Detail <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                        {/* Product Category 4: Professional Certification */}
                        <div 
                          onClick={() => handleSelectProductCategory('certification')}
                          className="p-3 rounded-xl border border-slate-200/70 bg-slate-50/40 hover:bg-white hover:border-blue-300 hover:shadow-2xs transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                              <GraduationCap className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block">Produk Lisensi Profesi</span>
                              <h5 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-blue-600 transition-colors">
                                Professional Certification
                              </h5>
                            </div>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                            Sertifikasi Gelar CH & C.Ht, dan International Certified Consulting Hypnotist CCH (NGH-USA).
                          </p>
                          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-medium">
                            <span>Gelar Resmi & Lisensi</span>
                            <span className="flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                              Buka Detail <ChevronRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Products Footer Actions */}
                      <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-[11px] text-slate-400">
                          Tersedia format In-House, Private, Class, & Corporate Contract
                        </span>
                        <button
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            onOpenBooking('Konsultasi Produk Layanan', 'Produk Transformasi Indonesia');
                          }}
                          className="text-xs font-medium text-blue-600 hover:text-blue-800 cursor-pointer"
                        >
                          Jadwalkan Diskusi Produk & Proposal &rarr;
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </div>

            </nav>

            {/* Right Action Suite: Relaksasi 432Hz & Consultation CTA */}
            <div className="flex items-center gap-2 lg:gap-2.5 shrink-0">
              
              {/* Relaxation Audio Synthesizer (432Hz) */}
              <button
                id="btn-calm-ambient"
                onClick={toggleCalmAudio}
                className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isAudioPlaying 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 border border-slate-200/60'
                }`}
                title={isAudioPlaying ? 'Matikan Suara Frekuensi Relaksasi 432Hz' : 'Nyalakan Frekuensi Relaksasi Ketenangan (432Hz)'}
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                    <span className="whitespace-nowrap font-medium">432Hz Aktif</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span className="whitespace-nowrap">Relaksasi 432Hz</span>
                  </>
                )}
              </button>

              {/* Consultation Booking CTA (Soft Vibrant Blue) */}
              <button
                id="btn-quick-booking"
                onClick={() => onOpenBooking()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>Konsultasi</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-colors border border-slate-200/60 lg:hidden cursor-pointer shrink-0"
                aria-label="Toggle Menu Mobile"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* MOBILE & TABLET DRAWER: HOME, PROFIL, SERTIFIKASI & PRODUK */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200/80 px-4 pt-3 pb-6 space-y-2.5 shadow-xl text-slate-800 animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          
          {/* Top Quick Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-white p-0.5 border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
                <img 
                  src="/log.png" 
                  alt="Logo Transformasi Indonesia" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-slate-800 text-xs">Transformasi Indonesia</span>
            </div>
            <span className="text-[10px] text-slate-500 font-semibold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200/60">
              NGH
            </span>
          </div>

          {/* 1. HOME MOBILE LINK */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavScroll('home');
            }}
            className="w-full p-3 rounded-xl border border-slate-200/70 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-medium text-xs flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <Home className="w-3.5 h-3.5" />
              </div>
              <span className="text-slate-800 font-medium text-xs">Home</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>

          {/* 2. PROFIL MOBILE LINK */}
          <a
            href="#profil"
            onClick={(e) => {
              e.preventDefault();
              handleNavScroll('profil');
            }}
            className="w-full p-3 rounded-xl border border-slate-200/70 bg-slate-50/50 hover:bg-slate-100 text-slate-700 font-medium text-xs flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <User className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-slate-800 font-medium text-xs block">Profil</span>
                <span className="text-[10px] text-slate-400">Dr. Iwan D. Gunawan & Legalitas</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>

          {/* 3. MENU SERTIFIKASI (Accordion Mobile) */}
          <div className="rounded-xl border border-slate-200/70 overflow-hidden bg-white">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'certification' ? null : 'certification')}
              className={`w-full p-3 flex items-center justify-between text-left cursor-pointer transition-colors ${
                mobileExpanded === 'certification' ? 'bg-slate-100 text-slate-900' : 'bg-slate-50/60 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  mobileExpanded === 'certification' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700'
                }`}>
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-xs text-slate-800">Sertifikasi</span>
                    <span className="text-[9px] font-medium px-1.5 py-0.2 rounded-full bg-slate-200/70 text-slate-700">
                      NGH
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Jalur Lisensi Resmi CH, C.Ht & NGH-USA
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'certification' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
            </button>

            {mobileExpanded === 'certification' && (
              <div className="p-2.5 bg-white space-y-2 animate-in fade-in duration-150 border-t border-slate-100">
                <div className="space-y-1.5">
                  {CERTIFICATION_PROGRAMS.map((prog) => (
                    <div
                      key={prog.id}
                      onClick={() => handleSelectCertification(prog)}
                      className="p-2.5 rounded-lg border border-slate-200/60 bg-slate-50/40 hover:bg-slate-100/60 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[9px] font-mono font-medium bg-slate-200/70 text-slate-700 px-1.5 py-0.2 rounded">
                            {prog.code}
                          </span>
                          <span className="text-xs font-semibold text-slate-800 line-clamp-1">{prog.title}</span>
                        </div>
                        <p className="text-[10px] text-slate-400">{prog.credentialTitle}</p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onSelectEcosystemTab) onSelectEcosystemTab('certification');
                    handleNavScroll('sertifikasi');
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-2xs mt-1"
                >
                  <span>Buka Tab Sertifikasi di Halaman</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* 4. MENU PRODUK (Accordion Mobile) */}
          <div className="rounded-xl border border-slate-200/70 overflow-hidden bg-white">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
              className={`w-full p-3 flex items-center justify-between text-left cursor-pointer transition-colors ${
                mobileExpanded === 'products' ? 'bg-slate-100 text-slate-900' : 'bg-slate-50/60 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  mobileExpanded === 'products' ? 'bg-blue-600 text-white' : 'bg-sky-50 text-sky-700'
                }`}>
                  <Package className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-xs text-slate-800">Produk</span>
                    <span className="text-[9px] font-medium px-1.5 py-0.2 rounded-full bg-slate-200/70 text-slate-700">
                      4 Pilar
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Katalog Solusi Individu & Organisasi
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === 'products' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
            </button>

            {mobileExpanded === 'products' && (
              <div className="p-2.5 bg-white space-y-1.5 animate-in fade-in duration-150 border-t border-slate-100">
                <div 
                  onClick={() => handleSelectProductCategory('personal')}
                  className="p-2.5 rounded-lg border border-slate-200/60 bg-slate-50/40 hover:bg-slate-100/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="w-3.5 h-3.5 text-blue-600" />
                      <span className="font-semibold text-xs text-slate-800">1. Personal Transformation</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Hipnoterapi Klinis Privat, Anxiety, Trauma, & Tes STIFIn.
                  </p>
                </div>

                <div 
                  onClick={() => handleSelectProductCategory('development')}
                  className="p-2.5 rounded-lg border border-slate-200/60 bg-slate-50/40 hover:bg-slate-100/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                      <span className="font-semibold text-xs text-slate-800">2. Development Solutions</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    In-House Corporate Training & Team Building B2B.
                  </p>
                </div>

                <div 
                  onClick={() => handleSelectProductCategory('public_learning')}
                  className="p-2.5 rounded-lg border border-slate-200/60 bg-slate-50/40 hover:bg-slate-100/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Presentation className="w-3.5 h-3.5 text-blue-600" />
                      <span className="font-semibold text-xs text-slate-800">3. Public Learning</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Live Interactive Learning & Intensive Public Workshops.
                  </p>
                </div>

                <div 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavScroll('biaya');
                  }}
                  className="p-2.5 rounded-lg border border-slate-200/60 bg-slate-50/40 hover:bg-slate-100/60 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                      <span className="font-semibold text-xs text-slate-800">4. Paket Investasi & Rekening</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Rincian Biaya Transparan & Pilihan Transfer Bank Resmi / QRIS.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp Direct Hotline */}
          <a
            href={OFFICIAL_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600/90 hover:bg-emerald-600 text-white p-2.5 rounded-xl text-xs font-medium flex items-center justify-center gap-2 shadow-2xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi WhatsApp: {OFFICIAL_WHATSAPP}</span>
          </a>

          {/* Ambient Sound & Quick Consultation CTA */}
          <div className="pt-0.5 flex items-center justify-between gap-2">
            <button
              onClick={toggleCalmAudio}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                isAudioPlaying
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : 'bg-slate-50 text-slate-600 border-slate-200/60'
              }`}
            >
              {isAudioPlaying ? (
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-blue-600" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span>{isAudioPlaying ? 'Jeda Musik 432Hz' : 'Musik Relaksasi 432Hz'}</span>
            </button>
          </div>

          <div className="pt-0.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Jadwalkan Konsultasi Sekarang</span>
            </button>
          </div>

        </div>
      )}

    </header>
  );
};
