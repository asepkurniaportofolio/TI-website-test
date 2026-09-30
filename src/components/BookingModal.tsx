import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Send, CreditCard } from 'lucide-react';
import { BookingFormData } from '../types';
import { OFFICIAL_WHATSAPP_LINK } from '../data/ecosystemData';
import { supabase } from '../lib/supabaseClient';
import { trackMetaEvent } from '../utils/metaPixel';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultCategory?: string;
  onOpenPayment?: (serviceName?: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Hipnoterapi Klinis Privat',
  defaultCategory = 'Hipnoterapi Klinis',
  onOpenPayment,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    whatsapp: '',
    email: '',
    serviceCategory: defaultCategory,
    specificService: defaultService,
    sessionType: 'Klinik (Tatap Muka)',
    preferredDate: '',
    preferredTime: '09:00 WIB',
    issueDescription: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({
        ...prev,
        specificService: defaultService,
        serviceCategory: defaultCategory || prev.serviceCategory,
      }));
    }
  }, [defaultService, defaultCategory]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSubmitError(null);

    if (!supabase) {
      setIsSubmitted(true);
      setIsSaving(false);
      trackMetaEvent('CompleteRegistration', {
        content_name: formData.specificService,
        content_category: formData.serviceCategory,
        email: formData.email || undefined,
        phone: formData.whatsapp || undefined
      });

      const message = `*FORMULIR RESERVASI - TRANSFORMASI INDONESIA*%0A%0A` +
        `*Nama Lengkap:* ${formData.fullName}%0A` +
        `*No. WhatsApp:* ${formData.whatsapp}%0A` +
        `*Email:* ${formData.email || '-'}%0A` +
        `*Kategori:* ${formData.serviceCategory}%0A` +
        `*Layanan Dipilih:* ${formData.specificService}%0A` +
        `*Format Sesi:* ${formData.sessionType}%0A` +
        `*Perkiraan Tanggal:* ${formData.preferredDate || 'Fleksibel'} (${formData.preferredTime})%0A` +
        `*Deskripsi Singkat:* ${formData.issueDescription || '-'}`;

      setTimeout(() => {
        window.open(`${OFFICIAL_WHATSAPP_LINK}&text=${message}`, '_blank');
      }, 1200);
      return;
    }

    const { error } = await supabase.from('bookings').insert({
      customer_name: formData.fullName,
      phone: formData.whatsapp,
      email: formData.email || null,
      service: formData.specificService,
      category: formData.serviceCategory,
    });

    if (error) {
      setSubmitError('Data belum tersimpan. Silakan coba lagi atau lanjutkan melalui WhatsApp.');
      setIsSaving(false);
      return;
    }

    setIsSubmitted(true);
    setIsSaving(false);

    trackMetaEvent('CompleteRegistration', {
      content_name: formData.specificService,
      content_category: formData.serviceCategory,
      email: formData.email || undefined,
      phone: formData.whatsapp || undefined
    });

    const message = `*FORMULIR RESERVASI - TRANSFORMASI INDONESIA*%0A%0A` +
      `*Nama Lengkap:* ${formData.fullName}%0A` +
      `*No. WhatsApp:* ${formData.whatsapp}%0A` +
      `*Email:* ${formData.email || '-'}%0A` +
      `*Kategori:* ${formData.serviceCategory}%0A` +
      `*Layanan Dipilih:* ${formData.specificService}%0A` +
      `*Format Sesi:* ${formData.sessionType}%0A` +
      `*Perkiraan Tanggal:* ${formData.preferredDate || 'Fleksibel'} (${formData.preferredTime})%0A` +
      `*Deskripsi Singkat:* ${formData.issueDescription || '-'}`;

    setTimeout(() => {
      window.open(`${OFFICIAL_WHATSAPP_LINK}&text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white p-5 sm:p-6 relative border-b border-blue-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-blue-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup Formulir"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3 pr-8">
            <div className="w-10 h-10 rounded-xl bg-white p-1 border border-white/30 shadow-xs flex items-center justify-center shrink-0">
              <img 
                src="/log.png" 
                alt="Logo Transformasi Indonesia" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-blue-100 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
                <span>Kerahasiaan Medis & Kode Etik NGH-USA</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                Reservasi Sesi & Konsultasi Terarah
              </h3>
            </div>
          </div>
          <p className="text-xs text-blue-50">
            Silakan lengkapi data awal untuk konfirmasi jadwal praktisi Transformasi Indonesia atau pendaftaran sertifikasi.
          </p>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-7 space-y-4 max-h-[80vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
            
            {/* Quick Payment Account Trigger */}
            {onOpenPayment && (
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">Ingin transfer biaya sesi langsung?</p>
                    <p className="text-[11px] text-slate-500">Lihat nomor rekening BCA, Mandiri, BSI & QRIS</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenPayment(formData.specificService)}
                  className="bg-white hover:bg-slate-50 text-blue-700 font-bold text-[11px] px-3 py-1.5 rounded-lg border border-blue-300 shrink-0 cursor-pointer shadow-2xs flex items-center gap-1"
                >
                  <span>No. Rekening</span>
                </button>
              </div>
            )}

            {/* Full name & WA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="0812xxxxxxxx"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Email (Opsional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Kategori Program</label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                >
                  <option value="Hipnoterapi Klinis">Hipnoterapi Klinis</option>
                  <option value="Sertifikasi S.CH & C.Ht">Sertifikasi S.CH & C.Ht (NGH)</option>
                  <option value="Life & Mindset Coaching">Life & Mindset Coaching</option>
                  <option value="Layanan Tambahan">Layanan Tambahan (STIFIn / NLP / Corporate)</option>
                </select>
              </div>
            </div>

            {/* Specific Service / Concern */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Layanan / Kasus Yang Dipilih <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.specificService}
                onChange={(e) => setFormData({ ...formData, specificService: e.target.value })}
                placeholder="Misal: Gerd Psikosomatis / Lisensi NGH-USA / Tes STIFIn"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Session Type */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1.5">Format Pertemuan</label>
              <div className="grid grid-cols-2 gap-3">
                {['Klinik (Tatap Muka)', 'Online (Video Call)'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, sessionType: type as any })}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                      formData.sessionType === type
                        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-2xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Perkiraan Tanggal</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Pilihan Jam Sesi</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                >
                  <option value="09:00 WIB">Pagi (09:00 - 11:00 WIB)</option>
                  <option value="11:00 WIB">Siang (11:00 - 13:00 WIB)</option>
                  <option value="13:30 WIB">Siang (13:30 - 15:00 WIB)</option>
                  <option value="15:00 WIB">Sore (15:00 - 17:00 WIB - Sesi Terakhir)</option>
                </select>
                <p className="text-[10px] text-slate-500 mt-1">Jam operasional sesi: 09:00 - 17:00 WIB (Senin - Sabtu)</p>
              </div>
            </div>

            {/* Issue Description */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Deskripsi Singkat Keluhan atau Harapan Anda
              </label>
              <textarea
                rows={3}
                value={formData.issueDescription}
                onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                placeholder="Ceritakan gambaran singkat apa yang ingin Anda selesaikan atau capai..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSaving}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSaving ? 'Menyimpan data...' : 'Kirim Formulir & Lanjutkan ke WhatsApp'}</span>
              </button>
              {submitError && (
                <p className="text-[11px] text-center text-rose-600 mt-2" role="alert">
                  {submitError}
                </p>
              )}
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Data Anda dilindungi oleh kode etik medis dan privasi klien.
              </p>
            </div>

          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5 animate-in zoom-in-95 duration-200 text-slate-700">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-1">
              <h4 className="font-serif text-xl font-bold text-slate-900">
                Data Berhasil Diterima!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Terima kasih, Bapak/Ibu <strong>{formData.fullName}</strong>. Admin reservasi Transformasi Indonesia sedang mengalihkan Anda ke WhatsApp resmi untuk konfirmasi final ketersediaan slot praktisi.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 max-w-sm mx-auto text-slate-700">
              <p><strong className="text-slate-900">Layanan:</strong> {formData.specificService}</p>
              <p><strong className="text-slate-900">Format:</strong> {formData.sessionType}</p>
              <p><strong className="text-slate-900">Waktu:</strong> {formData.preferredDate || 'Jadwal Fleksibel'} ({formData.preferredTime})</p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              Selesai & Tutup
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
