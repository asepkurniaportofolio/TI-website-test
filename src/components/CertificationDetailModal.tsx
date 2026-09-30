import React from 'react';
import { X, CheckCircle, Award, BookOpen, Clock, Users, ShieldCheck, CreditCard } from 'lucide-react';
import { CertificationProgram } from '../types';

interface CertificationDetailModalProps {
  program: CertificationProgram | null;
  onClose: () => void;
  onSelectBooking: (programTitle: string) => void;
  onOpenPayment?: (programTitle: string, nominal: number) => void;
}

export const CertificationDetailModal: React.FC<CertificationDetailModalProps> = ({
  program,
  onClose,
  onSelectBooking,
  onOpenPayment,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white p-6 relative border-b border-blue-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-blue-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-sky-200" />
            <span>{program.accreditation}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white pr-8">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-blue-50 font-medium mt-1">
            {program.credentialTitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-500 block">Durasi:</span>
              <strong className="text-slate-800">{program.duration}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Format:</span>
              <strong className="text-slate-800">{program.format}</strong>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 block">Syarat:</span>
              <strong className="text-slate-800">{program.prerequisites}</strong>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif font-bold text-slate-900 text-sm mb-1.5">Deskripsi Lengkap Program</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Syllabus Modules */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-slate-900 text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Kurikulum & Rincian Silabus Pelatihan</span>
            </h4>
            
            <div className="space-y-2.5">
              {program.syllabus.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h5 className="font-semibold text-xs text-slate-900 mb-1.5">
                    {s.module}
                  </h5>
                  <ul className="space-y-1">
                    {s.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-serif font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Fasilitas Resmi Alumni</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {program.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <span className="text-[11px] text-slate-400 line-through block">
              Biaya Normal: Rp {program.originalPrice.toLocaleString('id-ID')}
            </span>
            <div className="text-xl font-bold font-serif text-slate-900">
              Rp {program.investment.toLocaleString('id-ID')}
              <span className="text-xs font-normal text-slate-500 font-sans ml-1">/ peserta</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            {onOpenPayment && (
              <button
                onClick={() => {
                  onClose();
                  onOpenPayment(program.title, program.investment);
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                <span>Transfer / No. Rekening</span>
              </button>
            )}
            <button
              onClick={() => {
                onClose();
                onSelectBooking(`Daftar ${program.title}`);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all text-center cursor-pointer"
            >
              Daftar Batch Sekarang
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors text-center cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
