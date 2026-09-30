import React, { useState } from 'react';
import { 
  Printer, 
  X, 
  Check, 
  Copy, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  FileText, 
  Phone, 
  CreditCard,
  QrCode,
  Download,
  Award
} from 'lucide-react';
import { BankAccount, QRIS_DATA } from '../data/bankAccountsData';
import { OFFICIAL_WHATSAPP } from '../data/ecosystemData';

interface PrintablePaymentSummaryProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  serviceCategory?: string;
  nominal?: string | number;
  selectedBank: BankAccount;
  senderName?: string;
  senderBank?: string;
  transferAmount?: string;
  transferDate?: string;
  transferNotes?: string;
  referenceNumber: string;
}

export const PrintablePaymentSummary: React.FC<PrintablePaymentSummaryProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  serviceCategory = 'Hipnoterapi Klinis & Sertifikasi',
  nominal,
  selectedBank,
  senderName,
  senderBank,
  transferAmount,
  transferDate,
  transferNotes,
  referenceNumber
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `*RINGKASAN PEMESANAN & PEMBAYARAN TRANSFORMASI INDONESIA*\n` +
      `No. Referensi: ${referenceNumber}\n` +
      `Layanan: ${serviceTitle}\n` +
      `Kategori: ${serviceCategory}\n` +
      `Nominal: ${nominal ? (typeof nominal === 'number' ? `Rp ${nominal.toLocaleString('id-ID')}` : nominal) : 'Sesuai Kesepakatan'}\n` +
      `Rekening Tujuan: ${selectedBank.bankName} - ${selectedBank.accountNumber} a.n. ${selectedBank.accountHolder}\n` +
      `Nama Pemesan: ${senderName || '-'}\n` +
      `Konfirmasi WA: ${OFFICIAL_WHATSAPP}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayNominal = nominal 
    ? (typeof nominal === 'number' ? `Rp ${nominal.toLocaleString('id-ID')}` : String(nominal))
    : (transferAmount ? `Rp ${transferAmount}` : 'Sesuai Kesepakatan Konsultasi');

  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-300 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]">
        
        {/* Modal Controls Bar (hidden when printing) */}
        <div className="no-print bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-sky-400" />
            <span className="font-bold text-xs sm:text-sm text-slate-100">
              Pratinjau Dokumen Cetak / Simpan PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700 cursor-pointer"
              title="Salin Rincian ke Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Tutup Pratinjau"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-100/50 flex justify-center">
          
          <div 
            id="printable-summary-container"
            className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 text-slate-900 font-sans"
          >
            {/* Header Document */}
            <div className="border-b-2 border-slate-900 pb-5 mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Brand & Accreditation */}
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-xl bg-white p-1 border border-slate-300 shadow-2xs flex items-center justify-center shrink-0">
                    <img 
                      src="/log.png" 
                      alt="Logo Transformasi Indonesia" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <h1 className="font-serif font-black text-xl text-slate-900 tracking-tight leading-tight">
                      TRANSFORMASI INDONESIA
                    </h1>
                    <p className="text-[11px] font-bold text-blue-700 tracking-wider uppercase">
                      Lembaga Pelatihan Mind Technology & Klinik Hipnoterapi
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      Chapter Resmi National Guild of Hypnotists (NGH-USA) & Sertifikasi Hipnoterapi Profesional
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Bandung: Jl. Terusan Candi Mendut No. 9 | Jabodetabek: Gd. Is Plaza Lt. 5 Pramuka Raya
                    </p>
                  </div>
                </div>

                {/* Document Type Badge & Ref */}
                <div className="sm:text-right shrink-0 bg-blue-50 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-blue-200 sm:border-0">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider mb-1">
                    BUKTI PEMESANAN & PETUNJUK BAYAR
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-900">
                    Ref: <span className="text-blue-700">{referenceNumber}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Tanggal: {currentDate}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-full mt-1">
                    Menunggu Verifikasi Transfer
                  </div>
                </div>

              </div>
            </div>

            {/* Document Content Grid */}
            <div className="space-y-5 text-xs text-slate-800">
              
              {/* Section 1: Rincian Layanan & Biaya */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>1. Rincian Layanan / Program Terpilih</span>
                </h3>
                
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <span className="text-[10px] uppercase text-slate-500 font-bold block">
                        Nama Program / Layanan:
                      </span>
                      <strong className="text-sm sm:text-base text-slate-900 block mt-0.5">
                        {serviceTitle}
                      </strong>
                      <span className="text-[11px] text-blue-700 font-medium">
                        Kategori: {serviceCategory}
                      </span>
                    </div>

                    <div className="sm:text-right sm:border-l sm:border-slate-200 sm:pl-4">
                      <span className="text-[10px] uppercase text-slate-500 font-bold block">
                        Investasi / Biaya:
                      </span>
                      <strong className="font-serif text-base sm:text-lg text-blue-900 block mt-0.5">
                        {displayNominal}
                      </strong>
                      <span className="text-[10px] text-emerald-700 font-medium">
                        Termasuk Konsultasi & Sertifikat
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Data Pemohon / Pengirim */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>2. Data Pemesan / Rencana Pembayaran</span>
                </h3>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                      Nama Pemesan / Rekening:
                    </span>
                    <strong className="text-slate-900 text-xs block">
                      {senderName || '(Sesuai Data Pemesanan)'}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                      Bank Asal Pengirim:
                    </span>
                    <span className="text-slate-800 text-xs">
                      {senderBank || 'Transfer Antar-Bank / ATM / m-Banking'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                      Tanggal Rencana Transfer:
                    </span>
                    <span className="text-slate-800 text-xs">
                      {transferDate || currentDate}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                      Catatan / Sesi:
                    </span>
                    <span className="text-slate-800 text-xs italic">
                      {transferNotes || 'Konfirmasi slot sesi / pelatihan'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 3: Rekening Resmi Lembaga Tujuan Transfer */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                  <span>3. Rekening Resmi Tujuan Transfer</span>
                </h3>

                <div className="bg-blue-50/70 rounded-xl p-4 border border-blue-200 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200 pb-2.5">
                    <div>
                      <span className="text-[10px] font-bold text-blue-700 uppercase">
                        Bank Tujuan:
                      </span>
                      <strong className="text-base text-slate-900 block font-sans">
                        {selectedBank.bankName} (Kode: {selectedBank.bankCode})
                      </strong>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-[10px] font-bold text-blue-700 uppercase">
                        Nomor Rekening Resmi:
                      </span>
                      <div className="font-mono text-lg sm:text-xl font-bold text-blue-950 tracking-wider">
                        {selectedBank.accountNumber}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs pt-1 gap-1">
                    <div>
                      <span className="text-slate-600">Atas Nama: </span>
                      <strong className="text-slate-900">{selectedBank.accountHolder}</strong>
                    </div>
                    <div className="text-[11px] text-blue-800 font-medium">
                      Opsi QRIS: NMID {QRIS_DATA.nmid} a.n. {QRIS_DATA.merchantName}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Prosedur Konfirmasi & Validasi */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>4. Langkah Konfirmasi Bukti Transfer</span>
                </h3>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-[11px] text-slate-700 leading-relaxed">
                  <p>1. Lakukan transfer sejumlah <strong>{displayNominal}</strong> ke rekening resmi di atas.</p>
                  <p>2. Ambil screenshot resi transfer m-Banking atau foto struk bukti transfer fisik ATM.</p>
                  <p>3. Kirimkan foto bukti transfer beserta Nomor Referensi <strong>{referenceNumber}</strong> ke WhatsApp Resmi: <strong>{OFFICIAL_WHATSAPP}</strong>.</p>
                  <p>4. Tim administrasi Transformasi Indonesia akan memverifikasi dan menerbitkan Surat Konfirmasi / Kwitansi Resmi terakreditasi.</p>
                </div>
              </div>

              {/* Document Seal & Verification Footer */}
              <div className="pt-4 border-t-2 border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-[10px] text-slate-500 space-y-0.5">
                  <div className="flex items-center gap-1 text-slate-700 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Lembaga Transformasi Indonesia & Dr. Iwan D. Gunawan, M.Pd.</span>
                  </div>
                  <p>Website: transformasiindonesia.net | Email: info@transformasiindonesia.net</p>
                  <p>WhatsApp Hotline: {OFFICIAL_WHATSAPP} (Senin - Sabtu: 09:00 - 17:00 WIB)</p>
                  <p className="italic text-slate-400">
                    *Dokumen ini diterbitkan secara digital oleh sistem Transformasi Indonesia untuk arsip pemohon.
                  </p>
                </div>

                {/* Stamp Representation */}
                <div className="border-2 border-dashed border-blue-400 p-2.5 rounded-xl bg-blue-50/50 text-center shrink-0 w-full sm:w-auto">
                  <div className="text-[9px] font-black text-blue-800 uppercase tracking-widest">
                    TRANSFORMASI INDONESIA
                  </div>
                  <div className="text-[8px] font-bold text-slate-600">
                    OFFICIAL VALIDATED SUMMARY
                  </div>
                  <div className="text-[8px] font-mono text-blue-700 mt-0.5">
                    {referenceNumber}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Bottom Actions (hidden when printing) */}
        <div className="no-print bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            Gunakan tombol <strong>Cetak / PDF</strong> untuk mencetak dokumen atau menyimpannya sebagai file PDF di perangkat Anda.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-300 transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
