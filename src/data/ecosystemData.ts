export interface EcosystemProgramPoint {
  title: string;
  desc: string;
  badge?: string;
  details?: string[];
}

export interface EcosystemPillar {
  id: string;
  key: 'development' | 'public_learning' | 'certification' | 'personal';
  number: string;
  title: string;
  subHeadline: string;
  quote?: string;
  badge: string;
  programs: EcosystemProgramPoint[];
}

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: 'development-solutions',
    key: 'development',
    number: '01',
    title: 'Development Solutions',
    badge: 'Organisasi & Pendidik',
    subHeadline: 'Solusi pengembangan terarah untuk organisasi, pendidik, dan generasi muda.',
    quote: 'Membangun kapabilitas manusia yang tangguh, adaptif, dan berkinerja tinggi.',
    programs: [
      {
        title: 'TransformMind™ Corporate Development',
        desc: 'Leadership • Communication • Coaching • Resilience • Team Performance • Adaptability • Sales • Service • Human Skills for the AI Era',
        badge: 'Corporate',
        details: [
          'Kepemimpinan transformasional & coaching mindset bagi para leader',
          'Ketahanan mental (resilience) & adaptabilitas tim di era kecerdasan buatan',
          'Peningkatan kinerja tim, akselerasi penjualan (sales), dan layanan prima'
        ]
      },
      {
        title: 'TransformMind™ Educator Development',
        desc: 'Ketahanan mental & emosi • Student handling • Komunikasi efektif • Coaching untuk pendidik',
        badge: 'Educator',
        details: [
          'Manajemen ketahanan emosi guru & pencegahan kelelahan mental (burnout)',
          'Keahlian student handling menghadapi karakter siswa generasi digital',
          'Komunikasi empatik & pendekatan coaching dalam proses belajar mengajar'
        ]
      },
      {
        title: 'TransformMind™ Youth Academy',
        desc: 'Self-mastery • Social mastery • Leadership • Success',
        badge: 'Youth & Next-Gen',
        details: [
          'Penguasaan diri (self-mastery), disiplin emosi, dan self-confidence',
          'Kecerdasan sosial, public speaking, dan kemampuan kepemimpinan',
          'Pola pikir sukses & strategi menemukan potensi masa depan'
        ]
      }
    ]
  },
  {
    id: 'public-learning',
    key: 'public_learning',
    number: '02',
    title: 'Public Learning',
    badge: 'Kelas Publik Terbuka',
    subHeadline: 'Kelas terbuka untuk belajar, bertumbuh, dan berkembang bersama.',
    quote: 'Pembelajaran hari ini, untuk perubahan yang lebih baik esok hari.',
    programs: [
      {
        title: 'TransformMind™ Live Class',
        desc: 'Kelas publik online yang fleksibel, interaktif, dan relevan',
        badge: 'Online Interactive',
        details: [
          'Sesi webinar interaktif langsung bersama Dr. Iwan D. Gunawan & praktisi senior',
          'Topik aplikatif: emosi, mindset, produktivitas, dan self-healing harian',
          'Akses rekaman kelas & ruang tanya jawab langsung'
        ]
      },
      {
        title: 'TransformMind™ Intensive Class',
        desc: 'Kelas pendalaman 3–5 jam yang fokus, praktis, dan berdampak',
        badge: 'Workshop 3-5 Jam',
        details: [
          'Pendalaman materi terstruktur dengan kurikulum praktis dan teruji',
          'Simulasi kasus nyata, drill teknik penanganan, dan mentoring langsung',
          'E-Certificate resmi, workbook materi, dan panduan tindak lanjut mandiri'
        ]
      }
    ]
  },
  {
    id: 'professional-certification',
    key: 'certification',
    number: '03',
    title: 'Professional Certification',
    badge: 'Lisensi Profesi Resmi',
    subHeadline: 'Jalur sertifikasi untuk peningkatan kompetensi dan kredibilitas profesional.',
    quote: 'Diakui resmi oleh National Guild of Hypnotists (NGH - USA) dan ',
    programs: [
      {
        title: 'TransformMind™ Hypnotherapy Certification',
        desc: 'Healing • therapeutic change • unconscious transformation',
        badge: 'NGH-USA',
        details: [
          'Sertifikasi Certified Hypnotist (CH) & Certified Hypnotherapist (C.Ht)',
          'Kurikulum 100 Jam resmi National Guild of Hypnotists (NGH - USA)',
          'Praktik klinis nyata: regresi usia, parts therapy, trauma relief, dan phobia cure'
        ]
      },
      {
        title: 'TransformMind™ Coaching Certification',
        desc: 'Coaching skills • empowering people • development conversations',
        badge: 'Certified Coach',
        details: [
          'Keterampilan coaching profesional untuk memberdayakan potensi manusia',
          'Framework percakapan pengembangan diri (development conversations)',
          'Active listening, powerful questioning, dan goal accountability'
        ]
      },
      {
        title: 'TransformMind™ NLP Certification',
        desc: 'Mindset • communication • influence • personal change',
        badge: 'Neo NLP Society',
        details: [
          'Lisensi resmi Certified Neo NLP Practitioner & Master Practitioner',
          'Pemrograman pola pikir bawah sadar, anchoring emosi positif, dan reframing',
          'Seni persuasi elegan, kalibrasi non-verbal, dan transformasi perilaku cepat'
        ]
      }
    ]
  },
  {
    id: 'personal-transformation',
    key: 'personal',
    number: '04',
    title: 'Personal Transformation',
    badge: 'Terapi & Konseling Privat',
    subHeadline: 'Layanan transformasi & terapi personal tuntas untuk kesehatan mental dan bawah sadar.',
    quote: 'Ruang aman untuk memulihkan kedamaian batin dan melangkah maju berdaya.',
    programs: [
      {
        title: 'TransformMind™ Clinical Hypnotherapy',
        desc: 'Sesi privat tuntas untuk Anxiety, Panic Attack, Gerd Psikosomatis, Trauma, Fobia, dan Insomnia',
        badge: 'Klinik Bandung & Jabodetabek',
        details: [
          'Sesi 1-on-1 langsung bersama Dr. Iwan D. Gunawan & tim hipnoterapis berlisensi',
          'Pendekatan tuntas ke akar masalah bawah sadar tanpa ketergantungan obat',
          'Jaminan kerahasiaan medis (100% confidential) sesuai kode etik NGH'
        ]
      },
      {
        title: 'TransformMind™ 1-on-1 Life & Mindset Coaching',
        desc: 'Pendampingan privat untuk self-mastery, arah tujuan hidup, dan membongkar mental block',
        badge: 'Life & Mindset',
        details: [
          'Membongkar limiting beliefs, self-sabotage, dan keraguan masa depan',
          'Penyusunan peta jalan hidup (clarity roadmap) yang konkret dan terarah',
          'Pilihan sesi: tatap muka di klinik privat atau daring video call aman'
        ]
      },
      {
        title: 'TransformMind™ Counseling & STIFIn Assessment',
        desc: 'Pemetaan potensi genetik sidik jari, konseling keluarga, dan bimbingan pemulihan emosional',
        badge: 'STIFIn & Counseling',
        details: [
          'Tes biometrik sidik jari STIFIn untuk mengetahui cetak biru mesin kecerdasan alami',
          'Konseling keharmonisan keluarga, relationship, dan pola asuh anak (parenting)',
          'Rekomendasi lingkungan belajar, penjurusan karier, dan pengelolaan stres genetik'
        ]
      }
    ]
  }
];

export const SERVICE_SHAPES = [
  { label: 'In-House Training', desc: 'Pelatihan privat khusus organisasi' },
  { label: 'Workshop', desc: 'Pendalaman praktis & studi kasus' },
  { label: 'Public Class', desc: 'Kelas publik terbuka berkala' },
  { label: 'Certification', desc: 'Jalur lisensi profesi resmi' },
  { label: 'Customized Program', desc: 'Kurikulum tailor-made sesuai kebutuhan' }
];

export const AUDIENCE_TARGETS = [
  { label: 'Individu', desc: 'Pemulihan emosi & pertumbuhan diri' },
  { label: 'Pendidik', desc: 'Guru, dosen, & praktisi edukasi' },
  { label: 'Pemimpin', desc: 'Leader, manajer, & eksekutif' },
  { label: 'Perusahaan', desc: 'Korporasi, BUMN, & swasta' },
  { label: 'Organisasi', desc: 'Komunitas & lembaga sosial' },
  { label: 'Helping Professionals', desc: 'Konselor, dokter, psikolog, & terapis' }
];

export const OFFICIAL_WHATSAPP = '085860736452';
export const OFFICIAL_WHATSAPP_LINK = 'https://wa.me/6285860736452?text=Halo%20Transformasi%20Indonesia,%20saya%20ingin%20berkonsultasi%20mengenai%20Ekosistem%20Layanan%20Transformasi%20Indonesia';
