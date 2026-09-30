import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award } from 'lucide-react';
import { OFFICIAL_WHATSAPP, OFFICIAL_WHATSAPP_LINK } from '../data/ecosystemData';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Top CTA Banner: Soft Clean Blue */}
      <div className="border-b border-blue-500/20 py-10 sm:py-12 bg-gradient-to-r from-blue-800 via-blue-700 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Siap Memulai Perjalanan Pemulihan & Transformasi Anda?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100">
              Konsultasikan keluhan atau rencana sertifikasi profesi NGH-USA, CH & C.Ht, dan STIFIn bersama tim pakar kami.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-900 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shrink-0 transition-all shadow-md cursor-pointer text-center"
          >
            Hubungi Praktisi Kami Sekarang
          </button>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 border border-slate-700 shadow-md flex items-center justify-center shrink-0">
                <img 
                  src="/log.png" 
                  alt="Logo Transformasi Indonesia" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white">Transformasi Indonesia</span>
                <span className="block text-[10px] text-sky-400 font-medium tracking-wider uppercase">
                  Lembaga Hipnoterapi Klinis & Lisensi NGH-USA
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Didirikan oleh Dr. Iwan D. Gunawan (President National Guild of Hypnotists Chapter Indonesia). Pusat rujukan hipnoterapi klinis, sertifikasi profesi internasional NGH, tes potensi genetik STIFIn, dan corporate leadership training.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 border border-slate-700/60 p-3 rounded-xl">
              <Award className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Praktisi Teregistrasi NGH-USA & Terikat Kode Etik Kerahasiaan Klien</span>
            </div>
          </div>

          {/* Quick Links / 4 Pilar Ekosistem Layanan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Ekosistem Layanan (4 Pilar)</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">1. Development Solutions</a></li>
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">2. Public Learning (Live & Intensive)</a></li>
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">3. Professional Certification (NGH)</a></li>
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">4. Personal Transformation (Hipnoterapi)</a></li>
              <li><a href="#keluhan-dan-proses" className="hover:text-white transition-colors">Daftar Masalah Klinis & 4 Tahap Terapi</a></li>
            </ul>
          </div>

          {/* Layanan Tambahan & Lisensi */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Akreditasi & Lisensi</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">NGH-USA Certified Hypnotherapist</a></li>
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">Professional Board License</a></li>
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">TransformMind™ Coaching & NLP</a></li>
              <li><a href="#ekosistem-layanan" className="hover:text-white transition-colors">Tes Genetik Sidik Jari STIFIn</a></li>
              <li><a href="#profil" className="hover:text-white transition-colors">Profil Dr. Iwan D. Gunawan</a></li>
            </ul>
          </div>

          {/* Contact & Clinic Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Kontak & Klinik Resmi</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Bandung & Jabodetabek (Klinik Hipnoterapi & Ruang Pelatihan Transformasi Indonesia)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a 
                  href={OFFICIAL_WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-semibold text-emerald-400"
                >
                  WhatsApp: {OFFICIAL_WHATSAPP}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>info@transformasiindonesia.id</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Senin - Sabtu: 09:00 - 17:00 WIB</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Ethics Note */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Transformasi Indonesia (transformasiindonesia.net). Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Kode Etik NGH-USA</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Legalitas Izin Lembaga</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
