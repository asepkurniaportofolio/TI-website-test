import React from 'react';
import { Check, Sparkles, HelpCircle, PhoneCall, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/servicesData';
import { OFFICIAL_WHATSAPP, OFFICIAL_WHATSAPP_LINK } from '../data/ecosystemData';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
  onSelectPayment?: (packageName: string, nominal?: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage, onSelectPayment }) => {
  return (
    <section id="biaya" className="py-14 sm:py-20 bg-[#F0F7FF]/50 text-slate-900 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>INVESTASI TRANSPARAN & TERJANGKAU</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B5C] tracking-tight">
            Pilihan Paket Terapi & Sertifikasi Profesi
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Investasi terbaik untuk kedamaian mental seumur hidup dan karier mulia sebagai praktisi berlisensi resmi NGH-USA. Tersedia pembayaran via transfer bank (BCA, Mandiri, BSI) dan QRIS.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#0F2B5C] via-[#1E3A8A] to-[#0B2545] text-white shadow-2xl ring-2 ring-blue-400/60 border border-blue-300/40'
                    : 'bg-white text-slate-950 border-2 border-sky-200 hover:border-blue-600 hover:shadow-xl shadow-sm'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] sm:text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg border border-sky-200 whitespace-nowrap">
                    Rekomendasi Utama Klien
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isPopular ? 'text-sky-200 bg-blue-950/80 border border-blue-400/60' : 'text-blue-900 bg-blue-50 border border-blue-200'
                    }`}>
                      {pkg.type}
                    </span>
                    <h3 className={`font-serif text-lg sm:text-xl font-bold mt-2 ${isPopular ? 'text-white' : 'text-[#0F2B5C]'}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl sm:text-3xl font-black font-serif ${isPopular ? 'text-white' : 'text-[#0F2B5C]'}`}>
                        Rp {pkg.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <p className={`text-xs mt-1 ${isPopular ? 'text-sky-200/90' : 'text-blue-600 font-semibold'}`}>
                      {pkg.priceNote}
                    </p>
                  </div>

                  <p className={`text-xs leading-relaxed ${isPopular ? 'text-sky-100/90' : 'text-slate-600'}`}>
                    {pkg.description}
                  </p>

                  <div className={`space-y-2.5 pt-4 border-t ${isPopular ? 'border-blue-300/20' : 'border-sky-100'}`}>
                    <p className={`text-[11px] font-bold uppercase tracking-wider ${isPopular ? 'text-sky-200' : 'text-blue-950'}`}>
                      Termasuk Dalam Paket:
                    </p>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                          isPopular 
                            ? 'bg-blue-900 text-sky-200' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isPopular ? 'text-sky-100/90' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 sm:pt-8 space-y-2.5">
                  {onSelectPayment && (
                    <button
                      onClick={() => onSelectPayment(pkg.name, pkg.price)}
                      className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        isPopular
                          ? 'bg-white hover:bg-slate-100 text-blue-950 border-2 border-sky-300'
                          : 'bg-[#0F2B5C] hover:bg-blue-900 text-white'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      <span>Transfer & No. Rekening</span>
                    </button>
                  )}

                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all text-center cursor-pointer border ${
                      isPopular
                        ? 'bg-blue-800/60 hover:bg-blue-800 text-sky-100 border-blue-400/40'
                        : 'bg-sky-50 hover:bg-sky-100 text-blue-900 border-sky-200'
                    }`}
                  >
                    <span>{pkg.cta}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl p-5 sm:p-7 border-2 border-sky-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 shadow-md">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0F2B5C] flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span>Rekening Bank Resmi & Standar Lisensi NGH-USA</span>
                <span className="bg-blue-100 text-blue-800 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full border border-blue-200">Terpercaya Sejak 2008</span>
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Pembayaran hanya melalui rekening resmi Yayasan / Lembaga Transformasi Indonesia & Dr. Iwan D. Gunawan. Konfirmasi otomatis via WhatsApp resmi {OFFICIAL_WHATSAPP}.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
            {onSelectPayment && (
              <button
                onClick={() => onSelectPayment('Paket Layanan Transformasi Indonesia')}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer text-center"
              >
                <CreditCard className="w-4 h-4 text-sky-200" />
                <span>Lihat Rekening Pembayaran</span>
              </button>
            )}
            <a
              href={OFFICIAL_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 px-4 py-2.5 rounded-xl transition-colors cursor-pointer text-center"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tanya Admin WA</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
