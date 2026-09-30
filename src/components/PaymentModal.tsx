import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  QrCode, 
  Copy, 
  Check, 
  ShieldCheck, 
  Send, 
  FileCheck, 
  Lock, 
  Building2, 
  AlertCircle,
  ExternalLink,
  Printer
} from 'lucide-react';
import { 
  OFFICIAL_WHATSAPP, 
} from '../data/ecosystemData';
import { 
  OFFICIAL_BANK_ACCOUNTS, 
  QRIS_DATA, 
  BankAccount 
} from '../data/bankAccountsData';
import { PrintablePaymentSummary } from './PrintablePaymentSummary';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  serviceCategory?: string;
  nominal?: string | number;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  serviceTitle = 'Layanan / Sertifikasi Transformasi Indonesia',
  serviceCategory = 'Hipnoterapi Klinis & Sertifikasi',
  nominal,
}) => {
  const [activeTab, setActiveTab] = useState<'bank' | 'qris' | 'confirm'>('bank');
  const [selectedBank, setSelectedBank] = useState<BankAccount>(OFFICIAL_BANK_ACCOUNTS[0]);
  const [copiedBankId, setCopiedBankId] = useState<string | null>(null);
  const [showPrintSummary, setShowPrintSummary] = useState(false);

  // Consistent reference number for this booking/payment session
  const [referenceNumber] = useState(() => {
    const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `TI-${dateStr}-${rand}`;
  });

  // Quick confirmation form state
  const [senderName, setSenderName] = useState('');
  const [senderBank, setSenderBank] = useState('');
  const [transferAmount, setTransferAmount] = useState(nominal ? String(nominal) : '');
  const [transferDate, setTransferDate] = useState('');
  const [transferNotes, setTransferNotes] = useState('');

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBankId(id);
    setTimeout(() => {
      setCopiedBankId(null);
    }, 2000);
  };

  const handleSendWhatsAppConfirmation = () => {
    const phone = OFFICIAL_WHATSAPP.replace(/\D/g, '');
    const message = `*KONFIRMASI PEMBAYARAN - TRANSFORMASI INDONESIA*%0A%0A` +
      `*Nama Pengirim:* ${senderName || '-' }%0A` +
      `*Bank Asal:* ${senderBank || '-' }%0A` +
      `*Nominal Transfer:* ${transferAmount || (nominal ? String(nominal) : '-')}%0A` +
      `*Tanggal Transfer:* ${transferDate || 'Hari Ini'}%0A` +
      `*Bank Tujuan TI:* ${selectedBank.bankName} (${selectedBank.accountNumber} a.n ${selectedBank.accountHolder})%0A` +
      `*Layanan / Program:* ${serviceTitle}%0A` +
      `*Catatan:* ${transferNotes || '-'}%0A%0A` +
      `_Mohon dicek dan diterbitkan tanda terima / kwitansi resmi. Terima kasih._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Top Header - Clean Soft Blue */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white p-6 sm:p-7 relative border-b border-blue-500/20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-blue-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup Jendela Pembayaran"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3 pr-8">
            <div className="w-11 h-11 rounded-xl bg-white p-1 border border-white/30 shadow-xs flex items-center justify-center shrink-0">
              <img 
                src="/log.png" 
                alt="Logo Transformasi Indonesia" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-800/80 text-blue-100 text-[10px] font-semibold border border-blue-400/40">
                  <ShieldCheck className="w-3 h-3 text-sky-200" />
                  <span>Rekening Resmi Terverifikasi</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-900/80 text-emerald-200 text-[10px] font-semibold border border-emerald-500/40">
                  <Lock className="w-2.5 h-2.5" />
                  <span>Aman 100%</span>
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                Nomor Rekening & Pembayaran Resmi
              </h3>
            </div>
          </div>
          <p className="text-xs text-blue-100 max-w-xl">
            Lembaga Transformasi Indonesia & Dr. Iwan D. Gunawan (President NGH Chapter Indonesia). Seluruh transfer wajib ditujukan ke rekening resmi di bawah ini.
          </p>

          {/* Context Banner: Selected Service */}
          <div className="mt-4 p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] uppercase font-bold text-sky-200 tracking-wider">
                Layanan / Program Terpilih:
              </span>
              <h4 className="font-bold text-sm text-white truncate">{serviceTitle}</h4>
            </div>
            <div className="flex flex-wrap items-center sm:justify-end gap-3 shrink-0">
              {nominal && (
                <div className="sm:text-right">
                  <span className="text-[10px] uppercase font-bold text-sky-200 tracking-wider block">
                    Investasi / Biaya:
                  </span>
                  <p className="font-serif font-bold text-base text-white">
                    {typeof nominal === 'number' ? `Rp ${nominal.toLocaleString('id-ID')}` : nominal}
                  </p>
                </div>
              )}
              <button
                type="button"
                onClick={() => setShowPrintSummary(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs shadow-xs transition-all cursor-pointer hover:shadow-sm"
                title="Cetak Ringkasan Booking & Rekening Resmi"
              >
                <Printer className="w-3.5 h-3.5 text-blue-700" />
                <span>Cetak Ringkasan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation: Bank, QRIS, Konfirmasi */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-3 sm:px-6 pt-2.5 sm:pt-3 gap-1.5 sm:gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('bank')}
            className={`flex items-center gap-1.5 sm:gap-2 pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'bank'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-xl shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            <span>Transfer Bank</span>
          </button>

          <button
            onClick={() => setActiveTab('qris')}
            className={`flex items-center gap-1.5 sm:gap-2 pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'qris'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-xl shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            <span>Scan QRIS</span>
          </button>

          <button
            onClick={() => setActiveTab('confirm')}
            className={`flex items-center gap-1.5 sm:gap-2 pb-2.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'confirm'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-xl shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            <span>Konfirmasi Bayar WA</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-7 max-h-[65vh] overflow-y-auto space-y-5 sm:space-y-6">
          
          {/* TAB 1: BANK TRANSFER ACCOUNTS */}
          {activeTab === 'bank' && (
            <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Pilih Rekening Tujuan Transfer:
                </span>
                <span className="text-[11px] text-blue-700 font-medium bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 w-fit">
                  Bebas Biaya Admin Antar-Bank (BI-FAST)
                </span>
              </div>

              {/* Bank Cards Grid */}
              <div className="grid grid-cols-1 gap-4">
                {OFFICIAL_BANK_ACCOUNTS.map((bank) => {
                  const isSelected = selectedBank.id === bank.id;
                  const isCopied = copiedBankId === bank.id;

                  return (
                    <div
                      key={bank.id}
                      onClick={() => setSelectedBank(bank)}
                      className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                        isSelected 
                          ? 'border-blue-600 bg-blue-50/40 shadow-xs' 
                          : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-2xs'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm sm:text-base text-slate-900">
                              {bank.bankName}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${bank.colorScheme.badgeBg} ${bank.colorScheme.badgeText}`}>
                              {bank.badge}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                            <span className="font-mono text-lg sm:text-2xl font-bold text-slate-900 tracking-wider">
                              {bank.accountNumber}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopy(bank.accountNumber, bank.id);
                              }}
                              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer ${
                                isCopied
                                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                              }`}
                              title="Salin Nomor Rekening"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Tersalin!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Salin Rekening</span>
                                </>
                              )}
                            </button>
                          </div>

                          <p className="text-xs text-slate-600 font-medium">
                            Atas Nama: <strong className="text-slate-900">{bank.accountHolder}</strong>
                          </p>
                        </div>

                        {isSelected && (
                          <div className="shrink-0 flex sm:flex-col items-center justify-end text-blue-700 text-xs font-bold gap-1 bg-blue-100/70 sm:bg-transparent px-3 py-1.5 rounded-xl">
                            <Check className="w-5 h-5 text-blue-600" />
                            <span className="text-[11px]">Dipilih</span>
                          </div>
                        )}
                      </div>

                      {/* Instructions for this bank if selected */}
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                          <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                            Langkah Transfer {bank.bankName}:
                          </p>
                          <ol className="list-decimal pl-4 space-y-1 text-slate-700">
                            {bank.instructions.map((inst, i) => (
                              <li key={i}>{inst}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 3 Step Instruction Guide */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span>3 Langkah Praktis Aktivasi Jadwal:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700">
                    <strong className="text-sky-300 block mb-1">1. Transfer Dana</strong>
                    <span className="text-slate-300">Gunakan m-Banking atau ATM ke rekening resmi di atas.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700">
                    <strong className="text-sky-300 block mb-1">2. Simpan Bukti</strong>
                    <span className="text-slate-300">Ambil screenshot resi transfer m-Banking atau foto struk ATM.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700">
                    <strong className="text-sky-300 block mb-1">3. Konfirmasi WA</strong>
                    <span className="text-slate-300">Kirim bukti via WhatsApp untuk penguncian slot praktisi seketika.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Confirm and Print */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowPrintSummary(true)}
                  className="sm:w-1/2 bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-4 rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer text-xs sm:text-sm"
                  title="Cetak Ringkasan Pemesanan & Pembayaran"
                >
                  <Printer className="w-4 h-4 text-blue-600" />
                  <span>Cetak Ringkasan Booking</span>
                </button>

                <button
                  onClick={() => setActiveTab('confirm')}
                  className="sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer text-xs sm:text-sm"
                >
                  <span>Sudah Transfer? Lanjut WA</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: QRIS NATIONAL STANDARD */}
          {activeTab === 'qris' && (
            <div className="space-y-6 text-center animate-in fade-in duration-200">
              <div className="space-y-1">
                <h4 className="font-bold text-base text-slate-900">
                  Scan QRIS Resmi Transformasi Indonesia
                </h4>
                <p className="text-xs text-slate-500">
                  Mendukung semua mobile banking (BCA, Mandiri, BRI, BNI, CIMB) & seluruh dompet digital (GoPay, OVO, Dana, ShopeePay, LinkAja).
                </p>
              </div>

              {/* QRIS Visual Card */}
              <div className="max-w-sm mx-auto p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-red-600">
                    <QrCode className="w-4 h-4" />
                    <span>QRIS NASIONAL</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">NMID: {QRIS_DATA.nmid}</span>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Generated Clean Modern QR Pattern Representation */}
                  <div className="w-48 h-48 bg-white p-3 rounded-xl flex flex-col items-center justify-center shadow-inner relative">
                    <div className="w-full h-full border-4 border-slate-900 rounded-lg p-2 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
                          <div className="w-5 h-5 bg-white rounded-xs flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-slate-900 rounded-xs" />
                          </div>
                        </div>
                        <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
                          <div className="w-5 h-5 bg-white rounded-xs flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-slate-900 rounded-xs" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Center Brand Badge */}
                      <div className="my-auto flex items-center justify-center">
                        <div className="px-2 py-1 rounded bg-blue-600 text-white font-bold text-[9px] uppercase tracking-wider shadow-sm">
                          TI • NGH
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center">
                          <div className="w-5 h-5 bg-white rounded-xs flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-slate-900 rounded-xs" />
                          </div>
                        </div>
                        <div className="w-8 h-8 border-2 border-slate-900 flex items-center justify-center">
                          <div className="w-4 h-4 bg-slate-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-300 mt-2 font-medium">A.n. {QRIS_DATA.merchantName}</span>
                </div>

                <div className="text-left bg-blue-50/60 p-3 rounded-xl border border-blue-200 text-xs text-slate-800 space-y-1">
                  <p className="font-bold text-blue-950">Aplikasi yang Didukung:</p>
                  <p className="text-slate-600 text-[11px]">
                    BCA Mobile, Livin' Mandiri, GoPay, OVO, DANA, ShopeePay, LinkAja, dan seluruh aplikasi berlogo QRIS.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={() => setShowPrintSummary(true)}
                  className="sm:w-1/2 bg-white hover:bg-slate-50 text-slate-800 font-bold py-3 px-3 rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer text-xs"
                >
                  <Printer className="w-3.5 h-3.5 text-blue-600" />
                  <span>Cetak Ringkasan</span>
                </button>
                <button
                  onClick={() => setActiveTab('confirm')}
                  className="sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer text-xs"
                >
                  <span>Konfirmasi WA</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: CONFIRMATION FORM TO WHATSAPP */}
          {activeTab === 'confirm' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-800 space-y-1">
                  <h5 className="font-bold text-blue-950">Konfirmasi Cepat untuk Mengunci Jadwal Anda</h5>
                  <p className="text-slate-600">
                    Isi data pengirim di bawah ini. Sistem kami akan langsung membuka chat WhatsApp resmi Transformasi Indonesia dengan template pesan otomatis.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Nama Pengirim / Pemilik Rekening <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Hendra Wijaya"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Bank Asal Pengirim
                    </label>
                    <input
                      type="text"
                      value={senderBank}
                      onChange={(e) => setSenderBank(e.target.value)}
                      placeholder="Contoh: BCA / Mandiri / BRI"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Nominal Transfer
                    </label>
                    <input
                      type="text"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      placeholder="Contoh: 1.500.000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Tanggal Transfer
                    </label>
                    <input
                      type="date"
                      value={transferDate}
                      onChange={(e) => setTransferDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Bank Tujuan Transformasi Indonesia
                    </label>
                    <select
                      value={selectedBank.id}
                      onChange={(e) => {
                        const b = OFFICIAL_BANK_ACCOUNTS.find(x => x.id === e.target.value);
                        if (b) setSelectedBank(b);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                    >
                      {OFFICIAL_BANK_ACCOUNTS.map(b => (
                        <option key={b.id} value={b.id}>
                          {b.bankName} - {b.accountNumber}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    value={transferNotes}
                    onChange={(e) => setTransferNotes(e.target.value)}
                    placeholder="Contoh: Untuk sesi hari Sabtu / Pendaftaran sertifikasi batch Oktober..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                  />
                </div>

                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleSendWhatsAppConfirmation}
                      className="sm:flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer text-xs sm:text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Konfirmasi WA</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPrintSummary(true)}
                      className="bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-4 rounded-xl border border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer text-xs sm:text-sm"
                      title="Cetak Ringkasan Booking & Konfirmasi"
                    >
                      <Printer className="w-4 h-4 text-blue-600" />
                      <span>Cetak Ringkasan</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Admin kami akan segera membalas dan menerbitkan surat konfirmasi / kwitansi resmi.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer info note */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>Kerahasiaan & Keamanan Pembayaran Dilindungi</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPrintSummary(true)}
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Ringkasan (Print/PDF)</span>
            </button>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href="https://transformasiindonesia.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              <span>transformasiindonesia.net</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Printable Summary Sheet Modal */}
      <PrintablePaymentSummary
        isOpen={showPrintSummary}
        onClose={() => setShowPrintSummary(false)}
        serviceTitle={serviceTitle}
        serviceCategory={serviceCategory}
        nominal={nominal}
        selectedBank={selectedBank}
        senderName={senderName}
        senderBank={senderBank}
        transferAmount={transferAmount}
        transferDate={transferDate}
        transferNotes={transferNotes}
        referenceNumber={referenceNumber}
      />
    </div>
  );
};
