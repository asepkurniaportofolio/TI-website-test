import React, { useState } from 'react';
import { 
  HeartPulse, 
  Brain, 
  Sparkles, 
  Smile, 
  UserCheck, 
  Flame, 
  Activity, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  CreditCard,
  Building2,
  Lock,
  Award,
  Zap,
  HelpCircle,
  Eye,
  Check
} from 'lucide-react';

interface ProblemItem {
  id: string;
  title: string;
  badge: string;
  symptoms: string[];
  description: string;
  approach: string;
  estimatedSessions: string;
}

interface ProblemsAndProcessSectionProps {
  onOpenBooking: (serviceName?: string, categoryName?: string) => void;
  onOpenPayment?: (serviceName?: string, categoryName?: string, nominal?: number | string) => void;
}

export const ProblemsAndProcessSection: React.FC<ProblemsAndProcessSectionProps> = ({
  onOpenBooking,
  onOpenPayment
}) => {
  const [activeCategory, setActiveCategory] = useState<'emosi' | 'psikosomatis' | 'diri' | 'perilaku' | 'anak'>('emosi');
  const [selectedProblem, setSelectedProblem] = useState<ProblemItem | null>(null);

  const categories = [
    {
      id: 'emosi',
      label: 'Emosi & Perasaan',
      icon: HeartPulse,
      count: '6 Keluhan Umum',
      tagline: 'Anxiety, Panic Attack, Fobia, Trauma & Luka Batin'
    },
    {
      id: 'psikosomatis',
      label: 'Psikosomatis',
      icon: Activity,
      count: '4 Keluhan Fisik-Psikis',
      tagline: 'GERD Stres, Sesak Napas, Nyeri Otot & Insomnia'
    },
    {
      id: 'diri',
      label: 'Permasalahan Diri',
      icon: Brain,
      count: '5 Hambatan Mental',
      tagline: 'Minder, Overthinking, Mental Block & Demam Panggung'
    },
    {
      id: 'perilaku',
      label: 'Perilaku & Kebiasaan',
      icon: Flame,
      count: '5 Pola Negatif',
      tagline: 'Kecanduan Gadget, Rokok, Pornografi & Pola Makan'
    },
    {
      id: 'anak',
      label: 'Hipnoterapi Anak',
      icon: Smile,
      count: 'Khusus Anak & Remaja',
      tagline: 'Mogok Sekolah, Tantrum, Bullying & Kurang Fokus'
    }
  ];

  const problemData: Record<string, ProblemItem[]> = {
    emosi: [
      {
        id: 'anxiety-panic',
        title: 'Anxiety & Panic Attack (Kecemasan Berlebih)',
        badge: 'Kasus Tertinggi',
        symptoms: ['Jantung berdebar tiba-tiba', 'Takut mati / takut gila tanpa sebab jelas', 'Gelisah terus-menerus dan pikiran kacau'],
        description: 'Kecemasan kronis dan serangan panik terjadi akibat respon alarm bawah sadar (amigdala) yang terus menyala akibat rekaman trauma atau stres masa lalu.',
        approach: 'Menonaktifkan pemicu alarm di bawah sadar, menetralisir kecemasan dengan desensitisasi emosional, dan melatih respon relaksasi instan.',
        estimatedSessions: '2 - 4 Sesi'
      },
      {
        id: 'trauma-inner-child',
        title: 'Trauma Masa Lalu & Luka Batin (Inner Child)',
        badge: 'Pemulihan Mendalam',
        symptoms: ['Sering menangis tiba-tiba', 'Sulit memaafkan orang tua / mantan', 'Merasa tidak berharga atau takut ditolak'],
        description: 'Luka emosional masa kanak-kanak atau kejadian menyakitkan yang tersimpan di bawah sadar dan terus mendikte reaksi emosi Anda di masa dewasa.',
        approach: 'Teknik Age Regression terarah, rekonsiliasi inner child, pelepasan amarah terpendam (forgiveness therapy), dan pemulihan citra diri.',
        estimatedSessions: '2 - 4 Sesi'
      },
      {
        id: 'fobia-spesifik',
        title: 'Fobia Spesifik & Rasa Takut Berlebihan',
        badge: 'Hasil Cepat',
        symptoms: ['Takut ruang sempit (klaustrofobia)', 'Takut ketinggian, darah, jarum, atau hewan', 'Panik saat menghadapi objek pemicu'],
        description: 'Pikiran bawah sadar keliru mengasosiasikan suatu objek atau kondisi sebagai ancaman kematian, memicu refleks lari atau panik instan.',
        approach: 'Metode Fast Phobia Cure (NLP) dan desensitisasi bawah sadar untuk memutus jangkar (anchor) ketakutan tanpa membuat klien tersiksa.',
        estimatedSessions: '1 - 2 Sesi'
      },
      {
        id: 'depresi-kehilangan',
        title: 'Depresi Ringan-Sedang & Kedukaan (Grief)',
        badge: 'Pemulihan Jiwa',
        symptoms: ['Kehilangan gairah hidup', 'Rasa hampa berkepanjangan', 'Duka mendalam akibat perceraian atau ditinggal wafat'],
        description: 'Kondisi energi mental yang terkuras akibat tumpukan kesedihan, rasa bersalah, dan penolakan terhadap realitas yang belum terproses tuntas.',
        approach: 'Pelepasan ikatan emosi yang membelenggu, reframing makna hidup, dan membangkitkan kembali motivasi bawah sadar masa depan.',
        estimatedSessions: '3 - 4 Sesi'
      },
      {
        id: 'anger-issue',
        title: 'Anger Issue & Emosi Tidak Terkendali',
        badge: 'Regulasi Emosi',
        symptoms: ['Gampang meledak-ledak', 'Sering merusak barang saat marah', 'Merasa bersalah hebat setelah marah ke anak/pasangan'],
        description: 'Kemarahan biasanya merupakan emosi sekunder yang menutupi rasa sakit, kekecewaan, atau rasa tidak aman yang terpendam di masa lalu.',
        approach: 'Menemukan pemicu kemarahan pertama kali, pelepasan energi marah secara aman di bawah sadar, dan pemasangan jangkar ketenangan.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'overthinking-night',
        title: 'Overthinking & Beban Pikiran Malam Hari',
        badge: 'Ketenangan Mental',
        symptoms: ['Pikiran tidak bisa diam saat tidur', 'Skenario terburuk berputar-putar', 'Lelah mental setiap bangun pagi'],
        description: 'Pikiran bawah sadar berada dalam kondisi hiper-waspada karena beban tanggung jawab atau ketakutan akan masa depan.',
        approach: 'Melatih pikiran bawah sadar masuk ke gelombang alfa-theta alami, membersihkan arsip pikiran negatif, dan memasang anchor damai.',
        estimatedSessions: '2 - 3 Sesi'
      }
    ],
    psikosomatis: [
      {
        id: 'gerd-psikosomatis',
        title: 'GERD & Asam Lambung Psikosomatis',
        badge: 'Klinik Spesialis',
        symptoms: ['Ulu hati panas, mual, dada sesak', 'Pemeriksaan dokter dan endoskopi normal', 'Gejala kambuh setiap kali cemas atau banyak pikiran'],
        description: 'Hubungan timbal balik antara otak dan lambung (Gut-Brain Axis). Saat pikiran stres, sistem saraf otonom memicu lambung memproduksi asam berlebih.',
        approach: 'Memutus lingkaran setan cemas-lambung, menenangkan saraf vagus lewat hipnoterapi, dan reprogramming persepsi sensasi tubuh.',
        estimatedSessions: '2 - 4 Sesi'
      },
      {
        id: 'sesak-napas-psikis',
        title: 'Sesak Napas & Tenggorokan Tercekik (Globus)',
        badge: 'Respirasi Psikis',
        symptoms: ['Merasa tidak puas saat menghirup oksigen', 'Sensasi ada benda mengganjal di leher', 'Saturasi oksigen dicek selalu 98-99% normal'],
        description: 'Ketegangan otot pernapasan halus dan diafragma akibat respon hiperventilasi bawah sadar yang terpicu saat merasa tertekan.',
        approach: 'Rekalibrasi pola napas bawah sadar, pelepasan beban emosi yang menekan dada, dan relaksasi neuromuskular somatik.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'insomnia-kronis',
        title: 'Insomnia Akut & Sulit Tidur Nyenyak',
        badge: 'Kualitas Hidup',
        symptoms: ['Berbaring berjam-jam tanpa bisa lelap', 'Sering terbangun tengah malam dan sulit tidur lagi', 'Ketergantungan obat tidur dokter'],
        description: 'Kecemasan antisipatif terhadap tidur ("takut tidak bisa tidur") yang justru membuat sistem saraf simpatis terjaga aktif.',
        approach: 'Menghapus fobia tidur, membongkar keyakinan keliru tentang tidur, dan menginstal auto-induksi hipnotis mandiri untuk tidur pulas.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'nyeri-otot-migrain',
        title: 'Ketegangan Otot, Migrain Psikis & Vertigo',
        badge: 'Pelepasan Somatis',
        symptoms: ['Leher dan pundak kaku seperti memikul batu', 'Sakit kepala sebelah tanpa kelainan fisik', 'Sensasi melayang saat stres'],
        description: 'Tubuh menyimpan emosi yang tidak terkatakan dalam bentuk kontraksi otot kronis (body armor).',
        approach: 'Somatic hypnotherapy untuk mendengarkan pesan dari tubuh dan melepaskan trauma fisik yang terkunci di jaringan saraf.',
        estimatedSessions: '2 - 3 Sesi'
      }
    ],
    diri: [
      {
        id: 'minder-self-esteem',
        title: 'Kurang Percaya Diri & Perasaan Rendah Diri',
        badge: 'Citra Diri',
        symptoms: ['Selalu membandingkan diri dengan orang lain', 'Merasa tidak pantas sukses atau dicintai', 'Sulit menolak permintaan orang lain (People Pleaser)'],
        description: 'Keyakinan membatasi (limiting belief) yang terbentuk sejak kecil akibat kritik tajam, ejekan, atau penolakan lingkungan.',
        approach: 'Membangun ulang cetak biru (blueprint) citra diri baru di bawah sadar, menanamkan afirmasi bertenaga, dan validasi jati diri sejati.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'demam-panggung',
        title: 'Demam Panggung & Ketakutan Bicara di Depan Umum',
        badge: 'Pengembangan Diri',
        symptoms: ['Gemetar, suara serak, dan keringat dingin di panggung', 'Pikiran mendadak blank saat presentasi', 'Menghindari kesempatan karir karena takut bicara'],
        description: 'Ketakutan primitif akan penghakiman sosial atau dipermalukan yang memicu respon bahaya di sistem limbik.',
        approach: 'Visualisasi masa depan (future pacing), reprogramming respon panggung menjadi antusiasme, dan pemasangan anchor percaya diri instan.',
        estimatedSessions: '1 - 2 Sesi'
      },
      {
        id: 'mental-block-rezeki',
        title: 'Mental Block Keuangan, Karir & Bisnis',
        badge: 'Pemberdayaan',
        symptoms: ['Penghasilan mentok di angka yang sama bertahun-tahun', 'Merasa bersalah jika memegang banyak uang', 'Selalu merusak peluang sukses sendiri (Self-Sabotage)'],
        description: 'Program bawah sadar mengenai uang ("uang sumber masalah", "orang kaya jahat") yang secara otomatis menolak keberlimpahan.',
        approach: 'Menghapus keyakinan toksik tentang uang, mengharmoniskan relasi dengan kelimpahan, dan pemrograman pikiran bawah sadar miliarder.',
        estimatedSessions: '2 - 4 Sesi'
      },
      {
        id: 'prokrastinasi-fokus',
        title: 'Prokrastinasi Akut & Sulit Mengambil Keputusan',
        badge: 'Produktivitas',
        symptoms: ['Selalu menunda hingga batas waktu akhir', 'Mudah terdistraksi dan kehilangan fokus', 'Bimbang berhari-hari untuk hal sepele'],
        description: 'Menunda bukan karena malas, melainkan mekanisme perlindungan bawah sadar dari rasa takut gagal atau perfeksionisme ekstrem.',
        approach: 'Menghilangkan perfeksionisme toksik, menyelaraskan tujuan bawah sadar dengan sadar, dan membangun dorongan aksi otomatis.',
        estimatedSessions: '2 Sesi'
      },
      {
        id: 'sulit-moveon',
        title: 'Sulit Move On & Keterikatan Emosi Hubungan',
        badge: 'Hubungan Sehat',
        symptoms: ['Masih terbayang-bayang mantan pasangan', 'Kecanduan hubungan toksik (Toxic Relationship)', 'Takut membuka hati kembali'],
        description: 'Jangkar emosional yang masih kuat mengikat neuron memori dengan perasaan cinta atau ketergantungan semu.',
        approach: 'Metode Emotional Cord Cutting di bawah sadar, penutupan luka batin penolakan, dan rekonsiliasi penerimaan diri.',
        estimatedSessions: '2 - 3 Sesi'
      }
    ],
    perilaku: [
      {
        id: 'gadget-addiction',
        title: 'Kecanduan Gadget, Game & Media Sosial',
        badge: 'Detoks Digital',
        symptoms: ['Tidak bisa lepas dari layar smartphone', 'Marah atau gelisah saat tidak ada internet', 'Pekerjaan atau studi terbengkalai'],
        description: 'Ketergantungan lonjakan dopamin instan yang dipicu oleh notifikasi dan algoritma digital.',
        approach: 'Reset sistem reward dopamin bawah sadar, menanamkan kontrol diri alami, dan mengganti pelarian digital dengan kepuasan nyata.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'stop-smoking',
        title: 'Berhenti Merokok & Vaping (Stop Smoking)',
        badge: 'Kesehatan Fisik',
        symptoms: ['Ingin berhenti tapi selalu gagal saat stres', 'Kebutuhan hisap rokok setelah makan atau mengobrol', 'Khawatir efek samping batuk dan penyakit paru'],
        description: 'Merokok 90% adalah kebiasaan bawah sadar yang mengaitkan rokok dengan ketenangan atau pertemanan, bukan sekadar nikotin.',
        approach: 'Memutus asosiasi nikmat dari rokok di bawah sadar, menciptakan rasa enek atau netral terhadap asap, dan pemasangan jangkar hidup sehat.',
        estimatedSessions: '2 Sesi'
      },
      {
        id: 'porn-addiction',
        title: 'Kecanduan Pornografi & Masturbasi',
        badge: 'Privat & Rahasia',
        symptoms: ['Dorongan impulsif yang sulit ditahan', 'Rasa bersalah dan penyesalan mendalam setelah melakukannya', 'Disfungsi ereksi psikogenik atau hilang fokus'],
        description: 'Pelarian bawah sadar saat kesepian, bosan, atau stres yang telah mengakar menjadi sirkuit saraf kompulsif.',
        approach: 'Penyembuhan akar emosi kesepian, pelepasan rasa bersalah toksik, dan reprogramming respon stres tanpa bergantung pada stimulus pornografi.',
        estimatedSessions: '2 - 4 Sesi'
      },
      {
        id: 'weight-management',
        title: 'Emotional Eating & Manajemen Berat Badan',
        badge: 'Gaya Hidup',
        symptoms: ['Makan berlebih saat stres atau sedih', 'Suka ngemil malam hari meski tidak lapar', 'Diet selalu gagal karena dorongan nafsu makan bawah sadar'],
        description: 'Makanan digunakan oleh pikiran bawah sadar sebagai obat penenang emosi (comfort food) untuk mengisi kekosongan batin.',
        approach: 'Virtual Gastric Banding hypnosis, membedakan lapar fisik vs lapar emosi, dan reprogramming rasa kenyang alami.',
        estimatedSessions: '3 - 4 Sesi'
      },
      {
        id: 'kebiasaan-buruk',
        title: 'Kebiasaan Menggigit Kuku & Menarik Rambut',
        badge: 'Kebiasaan Fisik',
        symptoms: ['Kuku rusak karena digigit tanpa sadar', 'Menarik-narik rambut saat berpikir (Trikotilomania)', 'Menggertakkan gigi saat tidur (Bruxism)'],
        description: 'Pelepasan ketegangan saraf bawah sadar yang termanifestasi menjadi gerakan repetitif tubuh tanpa disadari.',
        approach: 'Meningkatkan kesadaran ambang bawah sadar, mengganti pelampiasan motorik dengan relaksasi tangan, dan netralisir stres.',
        estimatedSessions: '2 Sesi'
      }
    ],
    anak: [
      {
        id: 'mogok-sekolah',
        title: 'Mogok Sekolah & Takut Berpisah dari Orang Tua',
        badge: 'Anak & Remaja',
        symptoms: ['Sakit perut atau menangis histeris setiap pagi sebelum sekolah', 'Menolak masuk kelas atau takut guru tertentu', 'Separation anxiety yang akut'],
        description: 'Anak mengalami trauma sosial di sekolah atau rasa tidak aman ketika harus berpisah dari pengasuh utamanya.',
        approach: 'Hypnotherapy ramah anak dengan storytelling metafisik, boneka emosi, dan penanaman rasa aman dan mandiri.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'trauma-bullying',
        title: 'Trauma Perundungan (Bullying) & Ejekan Teman',
        badge: 'Pemulihan Anak',
        symptoms: ['Menjadi pendiam dan penakut', 'Takut berteman atau menutup diri di kamar', 'Nilai akademik turun drastis'],
        description: 'Rasa percaya diri anak hancur akibat intimidasi verbal atau fisik yang terekam sangat dalam di memorinya.',
        approach: 'Netralisir memori intimidasi, membangun perisai mental pelindung bawah sadar, dan mengembalikan keberanian anak.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'tantrum-emosi-anak',
        title: 'Tantrum Parah, Pembangkangan & Emosi Meledak',
        badge: 'Harmoni Keluarga',
        symptoms: ['Mengamuk hebat jika keinginannya tidak dipenuhi', 'Memukul diri sendiri atau orang tua', 'Sulit diajak berkomunikasi secara tenang'],
        description: 'Anak belum memiliki kosakata emosi untuk menyuarakan rasa frustrasi, ketidakadilan, atau rasa tidak diperhatikan.',
        approach: 'Sleep Talk Therapy melalui orang tua di rumah dikombinasikan dengan sesi hipnoterapi anak privat di klinik.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'fokus-belajar-anak',
        title: 'Kurang Fokus Belajar & Ketergantungan Gadget',
        badge: 'Prestasi Akademik',
        symptoms: ['Hanya mau tenang jika diberi HP', 'Sulit berkonsentrasi lebih dari 5 menit saat belajar', 'Gelisah dan mudah bosan'],
        description: 'Kelebihan stimulasi digital yang membuat otak anak terbiasa dengan kecepatan tinggi dan kesulitan memproses materi sekolah yang statis.',
        approach: 'Reprogramming konsentrasi bawah sadar, instalasi teknik visualisasi belajar cepat, dan pembatasan alami dorongan layar.',
        estimatedSessions: '2 - 3 Sesi'
      },
      {
        id: 'ngompol-gagap',
        title: 'Mengompol di Usia Besar (Enuresis) & Gagap Bicara',
        badge: 'Gejala Psikis Anak',
        symptoms: ['Masih mengompol di usia di atas 6-10 tahun', 'Bicara tersendat-sendat atau gagap saat cemas', 'Pemeriksaan organ urologi/saraf normal'],
        description: 'Respon regresi psikologis anak akibat kecemasan tersembunyi (misal: lahirnya adik baru, ketakutan pada figur otoritas).',
        approach: 'Menghilangkan beban rasa bersalah anak, relaksasi otot kandung kemih bawah sadar, dan afirmasi kendali tubuh.',
        estimatedSessions: '2 - 3 Sesi'
      }
    ]
  };

  const currentProblems = problemData[activeCategory] || [];

  return (
    <section id="keluhan-dan-proses" className="py-20 bg-[#F0F7FF]/60 text-slate-900 border-b border-sky-100 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header ala hipnoterapis.co.id */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>KLINIK HIPNOTERAPI BERLISENSI RESMI NO. #1 DI INDONESIA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F2B5C] leading-tight">
            Permasalahan Apa yang Sedang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-900">Menghambat Hidup Anda?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Seperti pada portal resmi <strong className="text-blue-900">hipnoterapis.co.id</strong> & <strong className="text-blue-900">Transformasi Indonesia</strong>, kami menangani keluhan pikiran, emosi, perilaku, dan psikosomatis dengan metode ilmiah berbasis pikiran bawah sadar tanpa efek samping obat-obatan.
          </p>
        </div>

        {/* Category Tabs (5 Pillars ala hipnoterapis.co.id) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`p-3 sm:p-4 rounded-2xl text-left transition-all cursor-pointer border last:col-span-2 sm:last:col-span-1 lg:last:col-span-1 ${
                  isActive
                    ? 'bg-gradient-to-b from-blue-700 via-blue-800 to-indigo-900 text-white border-blue-600 shadow-lg shadow-blue-900/25 ring-2 ring-blue-400/40'
                    : 'bg-white hover:bg-sky-50 border-sky-200 text-slate-800 shadow-2xs'
                }`}
              >
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center mb-2 sm:mb-2.5 ${
                  isActive 
                    ? 'bg-white text-blue-900 shadow-sm' 
                    : 'bg-sky-100 text-blue-700'
                }`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className={`font-bold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-[#0F2B5C]'}`}>
                  {cat.label}
                </p>
                <p className={`text-[10px] sm:text-[11px] font-medium mt-0.5 line-clamp-1 ${isActive ? 'text-sky-200' : 'text-slate-500'}`}>
                  {cat.count}
                </p>
              </button>
            );
          })}
        </div>

        {/* Problems Grid for Selected Category (Clean Cards with White/Blue Contrast) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {currentProblems.map((prob) => (
            <div 
              key={prob.id}
              className="bg-white text-slate-900 rounded-2xl p-6 border-2 border-sky-200 hover:border-blue-600 shadow-md hover:shadow-xl hover:shadow-blue-900/10 transition-all flex flex-col justify-between group"
            >
              <div>
                
                {/* Header card with badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                    {prob.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>Est. {prob.estimatedSessions}</span>
                  </div>
                </div>

                {/* Problem Title */}
                <h3 className="font-serif text-lg font-bold text-[#0F2B5C] leading-snug group-hover:text-blue-700 transition-colors mb-2.5">
                  {prob.title}
                </h3>

                {/* Problem Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {prob.description}
                </p>

                {/* Symptoms Checklist */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-4 space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Gejala yang Umum Dirasakan:</p>
                  {prob.symptoms.map((sym, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>

                {/* Clinical Approach Note */}
                <div className="text-[11px] text-blue-950 bg-sky-50 rounded-lg p-2.5 border border-sky-200 mb-5">
                  <span className="font-bold">Pendekatan Terapi: </span>
                  <span>{prob.approach}</span>
                </div>

              </div>

              {/* Action Buttons: Booking & Rekening Transfer */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-1 xs:grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenBooking(prob.title, 'Hipnoterapi Klinis')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-2 rounded-xl transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Konsultasi</span>
                </button>
                
                {onOpenPayment && (
                  <button
                    onClick={() => onOpenPayment(prob.title, 'Hipnoterapi Klinis')}
                    className="w-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs py-2.5 px-2 rounded-xl border-2 border-sky-300 hover:border-blue-600 transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-blue-700" />
                    <span>No. Rekening</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* 4 Steps: Sesi Hipnoterapi Berjalan (Standar Profesional ala hipnoterapis.co.id) */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#0F2B5C] via-[#1E3A8A] to-[#0B2545] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-blue-400/30 shadow-2xl relative text-white">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-200 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-400/60 inline-block mb-2">
              STANDAR PROSEDUR KLINIS
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Bagaimana Alur 4 Tahap Sesi Hipnoterapi Berjalan?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 mt-2 leading-relaxed">
              Banyak orang mengira hipnoterapi seperti hipnotis panggung yang menghilangkan kesadaran. Faktanya, Anda tetap 100% sadar, memegang kendali penuh, dan bekerja sama secara ilmiah dengan hipnoterapis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-blue-300/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
                  01
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-2">
                  Konsultasi & Mind Mapping
                </h4>
                <p className="text-xs text-sky-100/90 leading-relaxed">
                  Terapis mendengarkan secara mendalam keluhan Anda, memetakan pemicu masalah (*trigger*), dan menetapkan target kesembuhan yang jelas dan terukur.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-300/20 flex items-center gap-1.5 text-[11px] text-sky-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
                <span>Eksplorasi Aman & Tanpa Penghakiman</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-blue-300/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
                  02
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-2">
                  Induksi Relaksasi Mendalam
                </h4>
                <p className="text-xs text-sky-100/90 leading-relaxed">
                  Membimbing gelombang otak Anda dari Beta (waspada tegang) memasuki frekuensi Alfa dan Theta yang sangat rileks, tenang, dan reseptif terhadap sugesti.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-300/20 flex items-center gap-1.5 text-[11px] text-sky-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
                <span>Kondisi Seperti Saat Akan Tertidur</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-blue-300/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
                  03
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-2">
                  Pelepasan Trauma & Reprogramming
                </h4>
                <p className="text-xs text-sky-100/90 leading-relaxed">
                  Menemukan akar memori di bawah sadar yang memicu masalah (*Root Cause Analysis*), mencabut muatan emosi negatifnya, dan memprogram pola baru yang memberdayakan.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-300/20 flex items-center gap-1.5 text-[11px] text-sky-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
                <span>Terapi Inti Langsung ke Bawah Sadar</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-blue-300/30 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-serif font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
                  04
                </div>
                <h4 className="font-serif font-bold text-base text-white mb-2">
                  Terminasi & Integrasi Hasil
                </h4>
                <p className="text-xs text-sky-100/90 leading-relaxed">
                  Anda dibangunkan dalam kondisi sangat bugar, pikiran damai, dan energi positif melimpah. Disertai evaluasi langsung dan panduan swa-hipnosis mandiri di rumah.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-300/20 flex items-center gap-1.5 text-[11px] text-sky-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
                <span>Bangun Lebih Segar & Bertenaga</span>
              </div>
            </div>

          </div>

          {/* Clinical Commitment / Guarantee Box */}
          <div className="mt-8 pt-6 border-t border-blue-300/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-sky-200">
              <Lock className="w-4 h-4 text-sky-300 shrink-0" />
              <span>100% Kerahasiaan Klien Dijamin Penuh</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-sky-200">
              <Award className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Instruktur Resmi NGH-USA & Dewan</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-sky-200">
              <Building2 className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Klinik Resmi Bandung, Jabodetabek & Online</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
