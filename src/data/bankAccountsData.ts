export interface BankAccount {
  id: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountHolder: string;
  badge?: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
  };
  instructions: string[];
}

export const OFFICIAL_BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'bca',
    bankName: 'Bank Central Asia (BCA)',
    bankCode: '014',
    accountNumber: '8470192388',
    accountHolder: 'LEMBAGA TRANSFORMASI INDONESIA',
    badge: 'Terpopuler & Otomatis',
    colorScheme: {
      bg: 'bg-blue-950/20',
      border: 'border-blue-500/40',
      text: 'text-blue-600',
      badgeBg: 'bg-blue-600',
      badgeText: 'text-white'
    },
    instructions: [
      'Buka m-BCA > m-Transfer > Antar Rekening BCA',
      'Masukkan No. Rekening: 8470192388 a.n. LEMBAGA TRANSFORMASI INDONESIA',
      'Masukkan nominal sesuai paket layanan yang dipilih',
      'Simpan bukti transfer dan konfirmasikan ke Admin WhatsApp'
    ]
  },
  {
    id: 'mandiri',
    bankName: 'Bank Mandiri',
    bankCode: '008',
    accountNumber: '1310018928371',
    accountHolder: 'TRANSFORMASI INDONESIA',
    badge: 'Bebas Kliring BUMN',
    colorScheme: {
      bg: 'bg-amber-950/20',
      border: 'border-amber-500/40',
      text: 'text-amber-600',
      badgeBg: 'bg-amber-600',
      badgeText: 'text-white'
    },
    instructions: [
      'Buka Livin by Mandiri > Transfer Rupiah > Rekening Mandiri',
      'Masukkan No. Rekening: 1310018928371 a.n. TRANSFORMASI INDONESIA',
      'Pastikan nama penerima sesuai sebelum memasukkan PIN',
      'Simpan resi transaksi digital dan kirimkan ke Admin'
    ]
  },
  {
    id: 'bsi',
    bankName: 'Bank Syariah Indonesia (BSI)',
    bankCode: '451',
    accountNumber: '7182938472',
    accountHolder: 'LEMBAGA TRANSFORMASI INDONESIA',
    badge: 'Transaksi Syariah',
    colorScheme: {
      bg: 'bg-emerald-950/20',
      border: 'border-emerald-500/40',
      text: 'text-emerald-600',
      badgeBg: 'bg-emerald-600',
      badgeText: 'text-white'
    },
    instructions: [
      'Buka BSI Mobile > Transfer > Antar Rekening BSI',
      'Masukkan No. Rekening: 7182938472 a.n. LEMBAGA TRANSFORMASI INDONESIA',
      'Cek kembali rincian konfirmasi transfer',
      'Kirim bukti akad / transfer ke WhatsApp CS kami'
    ]
  }
];

export const QRIS_DATA = {
  issuer: 'QRIS Standar Nasional Indonesia',
  merchantName: 'TRANSFORMASI INDONESIA TRAINING & THERAPY',
  nmid: 'ID1020394857281',
  supportedApps: ['BCA Mobile', 'Livin Mandiri', 'GoPay', 'OVO', 'ShopeePay', 'Dana', 'LinkAja', 'Semua Mobile Banking']
};
