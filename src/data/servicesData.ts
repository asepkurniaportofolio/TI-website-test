import { ServiceItem, CertificationProgram, TestimonialItem, AssessmentQuestion } from '../types';

export const CLINICAL_SERVICES: ServiceItem[] = [
  {
    id: 'hypno-anxiety',
    category: 'hypnotherapy',
    title: 'Penanganan Kecemasan, Gerd Psikosomatis & Panic Attack',
    shortDesc: 'Memprogram ulang respon sistem saraf bawah sadar untuk melepaskan pemicu rasa takut berlebih, debar jantung, dan overthinking.',
    fullDesc: 'Kecemasan dan serangan panik seringkali bersumber dari memori bawah sadar yang terkunci di amigdala otak. Melalui hipnoterapi klinis dengan teknik desensitisasi dan reframing, kami membantu menenangkan sistem saraf simpatik sehingga tubuh kembali rileks alami tanpa ketergantungan obat.',
    benefits: [
      'Menghilangkan sensasi sesak napas dan palpitasi psikosomatis',
      'Menghentikan pola overthinking dan kekhawatiran masa depan yang melumpuhkan',
      'Mengembalikan rasa aman, ketenangan batin, dan stabilitas emosi harian'
    ],
    sessionDuration: '90 - 120 Menit / Sesi',
    targetAudience: 'Penderita anxiety, panic attack, gerd psikosomatis, dan overthinking kronis',
    badge: 'Paling Banyak Diminati',
    recommendedSessions: '2 - 4 Sesi'
  },
  {
    id: 'hypno-trauma',
    category: 'hypnotherapy',
    title: 'Terapi Trauma Masa Lalu, Inner Child & Luka Batin (PTSD)',
    shortDesc: 'Penyembuhan akar luka emosional masa kecil, broken home, pengkhianatan, atau peristiwa traumatis secara aman dan tuntas.',
    fullDesc: 'Trauma masa lalu yang belum terselesaikan akan terus mengendalikan respon hidup kita hari ini. Dengan teknik Age Regression, Parts Therapy, dan Forgiveness Therapy, klien dibimbing untuk membebaskan emosi masa lalu dan memulihkan inner child dalam lingkungan yang hangat dan suportif.',
    benefits: [
      'Menyembuhkan akar luka emosional tanpa perlu menceritakan detail yang menyakitkan berulang kali',
      'Meredakan rasa bersalah, amarah terpendam, dan ketakutan ditinggalkan',
      'Membangun rekonsiliasi diri dan penerimaan sejati'
    ],
    sessionDuration: '100 - 120 Menit / Sesi',
    targetAudience: 'Individu dengan trauma masa kecil, korban toxic relationship, duka mendalam, atau PTSD',
    badge: 'Spesialisasi Klinis',
    recommendedSessions: '3 - 5 Sesi'
  },
  {
    id: 'hypno-phobia',
    category: 'hypnotherapy',
    title: 'Pelepasan Fobia Spesifik (Phobia Cure)',
    shortDesc: 'Menghapus reflek fobia irasional seperti takut ketinggian, jarum suntik, ruang sempit, hewan, atau fobia sosial.',
    fullDesc: 'Menggunakan protokol Fast Phobia Cure dan Visual-Kinesthetic Dissociation (VKD), respon rasa takut ekstrem bawah sadar diputus dalam hitungan sesi singkat, memungkinkan Anda beraktivitas normal tanpa rasa ngeri melumpuhkan.',
    benefits: [
      'Menghapus respon panik terhadap objek atau situasi fobia',
      'Dapat diuji langsung sebelum dan sesudah sesi',
      'Hasil permanen dengan memperbarui peta persepsi otak bawah sadar'
    ],
    sessionDuration: '90 Menit / Sesi',
    targetAudience: 'Siapa saja yang terganggu oleh fobia darah, jarum, ketinggian, ruang tertutup (klaustrofobia), kucing/hewan, dll.',
    badge: 'Hasil Cepat',
    recommendedSessions: '1 - 2 Sesi'
  },
  {
    id: 'hypno-insomnia',
    category: 'hypnotherapy',
    title: 'Terapi Insomnia & Pemulihan Pola Tidur Alami',
    shortDesc: 'Membimbing gelombang otak kembali ke status Theta dan Delta alami agar tidur lelap, nyenyak, dan berkualitas.',
    fullDesc: 'Insomnia seringkali disebabkan oleh pikiran sadar yang menolak untuk beristirahat akibat tekanan pekerjaan atau kecemasan bawah sadar. Hipnoterapi melatih ulang siklus tidur alami tubuh dengan anchoring relaksasi tidur dalam.',
    benefits: [
      'Mudah tertidur dalam hitungan menit tanpa obat tidur kimiawi',
      'Bangun pagi dengan tubuh segar, bertenaga, dan pikiran jernih',
      'Diberikan bonus rekaman audio self-hypnosis khusus sebelum tidur'
    ],
    sessionDuration: '90 Menit / Sesi',
    targetAudience: 'Pekerja dengan stres tinggi, penderita insomnia menahun, dan siklus tidur terganggu',
    badge: 'Bonus Audio Terapi',
    recommendedSessions: '2 - 3 Sesi'
  },
  {
    id: 'hypno-habits',
    category: 'hypnotherapy',
    title: 'Hentikan Kebiasaan Buruk & Kecanduan (Habit Breaking)',
    shortDesc: 'Program berhenti merokok, vape, kecanduan game/pornografi, serta eating disorder (binge eating & obesitas).',
    fullDesc: 'Kebiasaan adiktif adalah mekanisme bawah sadar untuk mencari kenyamanan atau pelepasan dopamin. Kami memutus asosiasi bawah sadar antara kebiasaan buruk dengan rasa nyaman, lalu menanamkan pola perilaku sehat baru.',
    benefits: [
      'Menghilangkan keinginan merokok/vape tanpa gejala sakaw berlebihan',
      'Mengatasi emotional eating dan mendukung diet penurunan berat badan sehat',
      'Memperkuat self-discipline dan integritas diri'
    ],
    sessionDuration: '90 - 120 Menit / Sesi',
    targetAudience: 'Perokok aktif yang ingin berhenti permanen, individu dengan emotional eating atau kebiasaan kompulsif',
    recommendedSessions: '2 - 4 Sesi'
  },
  {
    id: 'hypno-confidence',
    category: 'hypnotherapy',
    title: 'Public Speaking, Karisma & Self-Confidence Booster',
    shortDesc: 'Menghancurkan demam panggung, rasa rendah diri (insecure), dan sindrom impostor saat tampil di depan umum.',
    fullDesc: 'Melatih pikiran bawah sadar untuk mengasosiasikan panggung atau situasi sosial dengan antusiasme dan rasa percaya diri alami, bukan ancaman bahaya.',
    benefits: [
      'Bebas dari gemetar, keringat dingin, dan blank saat berbicara di depan publik',
      'Meningkatkan proyeksi suara, bahasa tubuh percaya diri, dan daya pikat persona',
      'Mengaktifkan state of peak performance seketika'
    ],
    sessionDuration: '90 Menit / Sesi',
    targetAudience: 'Profesional, pembicara, eksekutif, mahasiswa, atau siapa pun yang ingin tampil percaya diri',
    recommendedSessions: '2 Sesi'
  }
];

export const CERTIFICATION_PROGRAMS: CertificationProgram[] = [
  {
    id: 'cert-ngh',
    code: 'NGH-USA',
    title: 'NGH-USA 100 Jam - International Certified Consulting Hypnotist',
    credentialTitle: 'Gelar Internasional Resmi: CCH (Certified Consulting Hypnotist - NGH USA)',
    accreditation: 'National Guild of Hypnotists (NGH - USA) Chapter Indonesia',
    duration: '100 Jam Kurikulum Standar Global (Master Instructor Dr. Iwan D. Gunawan)',
    format: 'Intensive Masterclass + Hands-On Practicum + International Supervision',
    prerequisites: 'Terbuka bagi dokter, psikolog, konselor, profesional & umum yang ingin berlisensi dunia',
    description: 'Program sertifikasi tertinggi berstandar dunia dari National Guild of Hypnotists (NGH - USA), organisasi hipnoterapi tertua dan terbesar di dunia. Dipimpin langsung oleh Dr. Iwan D. Gunawan, M.Pd., C.Ht., CI (President of NGH-USA Chapter Indonesia). Lulusan diakui secara internasional dengan nomor registrasi resmi NGH USA.',
    syllabus: [
      {
        module: 'Modul 1: NGH Core Curriculum & Classical Hypnosis Mastery',
        topics: [
          'Standar etik dan kode etik global National Guild of Hypnotists (USA)',
          'Neurosains trance, deepening techniques, dan suggestibility profiling',
          'Protokol induksi Elman, induksi klasik, dan rapid sensory conditioning'
        ]
      },
      {
        module: 'Modul 2: Advanced Consulting & Ericksonian Hypnotherapy',
        topics: [
          'Pendekatan Milton H. Erickson: indirect suggestion, metafora terapeutik, & conversational hypnosis',
          'Age Regression terapeutik tuntas dan informed-child integration',
          'Parts Therapy & resolution of internal cognitive dissonance'
        ]
      },
      {
        module: 'Modul 3: Clinical Setup, International Ethics & Practice Protocols',
        topics: [
          'Manajemen studi kasus klinis riil dan supervisi langsung Master Instructor',
          'Standar dokumentasi legalitas, informed consent, & manajemen klien private',
          'Branding internasional dan integrasi ke jejaring terapis global NGH USA'
        ]
      }
    ],
    facilities: [
      'Sertifikat Asli Berhologram NGH-USA dari Merrimack, New Hampshire, USA',
      'ID Card Keanggotaan Resmi NGH-USA & Hak Gelar Internasional CCH',
      'Paket Modul Resmi Berstandar Bahasa Inggris & Bahasa Indonesia NGH',
      'Bimbingan langsung President NGH-USA Chapter Indonesia (Dr. Iwan D. Gunawan)',
      'Akses seumur hidup ke forum alumni dan studi kasus tahunan'
    ],
    investment: 12500000,
    originalPrice: 16000000
  },
  {
    id: 'cert-sch',
    code: 'S.CH',
    title: 'S.CH - Certified Hypnotist (CH) Fundamental Hypnotherapy',
    credentialTitle: 'Gelar Non-Akademis Resmi: CH (Certified Hypnotist)',
    accreditation: 'Terakreditasi Sertifikasi Hipnoterapi Profesional',
    duration: '2 Hari Workshop Intensif (Tersedia Kelas Bandung & Jabodetabek / Online)',
    format: 'Teori 30% + Praktik Langsung 70% (Live Demonstration & Peer Practice)',
    prerequisites: 'Pendidikan minimal SMA/SMK sederajat, terbuka untuk umum (usia 18+)',
    description: 'Program sertifikasi fundamental hypnosis resmi Transformasi Indonesia berstandar Sertifikasi Hipnoterapi Profesional. Peserta dibekali pemahaman mendalam tentang mekanisme pikiran sadar & bawah sadar, uji sugestibilitas, rapid induction di bawah 10 detik, dan stage/waking hypnosis.',
    syllabus: [
      {
        module: 'Modul 1: Subconscious Mechanism & Brainwaves',
        topics: [
          'Sejarah ilmiah hipnosis & cara kerja gelombang otak (Beta, Alpha, Theta, Delta)',
          'Membongkar mitos hipnosis, kejahatan, dan fakta ilmiah pikiran manusia',
          'Mekanisme Critical Factor pikiran dan filter penerimaan sugesti'
        ]
      },
      {
        module: 'Modul 2: Suggestibility Test & Rapid Induction',
        topics: [
          '5 Tes Sugestibilitas efektif membaca kepribadian klien',
          'Teknik Induksi Progresif dan Dave Elman Induction',
          'Shock & Rapid Induction (induksi kilat di bawah 10 detik)',
          'Deepening Techniques untuk mencapai kondisi somnambulisme stabil'
        ]
      },
      {
        module: 'Modul 3: Suggestion Formulation & Stage/Waking Hypnosis',
        topics: [
          'Formula kata sugesti tanpa penolakan (Law of Subconscious Mind)',
          'Demonstrasi Waking Hypnosis (hipnosis dalam kondisi mata terbuka)',
          'Prosedur terminasi aman dan Post-Hypnotic Suggestion (PHS)'
        ]
      }
    ],
    facilities: [
      'Sertifikat Resmi CH bergelar dari Sertifikasi Hipnoterapi Profesional',
      'Buku Panduan Modul Resmi Transformasi Indonesia',
      'ID Card Keanggotaan Resmi Praktisi',
      'Bimbingan Seumur Hidup (Lifetime Mentoring) langsung oleh tim trainer',
      'Akses mengulang kelas (Free Reseat) kapan pun kelas diadakan'
    ],
    investment: 3500000,
    originalPrice: 4500000
  },
  {
    id: 'cert-cht',
    code: 'C.Ht',
    title: 'C.Ht - Advanced Clinical Hypnotherapist Certification',
    credentialTitle: 'Gelar Non-Akademis Resmi: C.Ht (Certified Hypnotherapist)',
    accreditation: 'Sertifikasi Hipnoterapi Profesional & Standar Praktik Mandiri',
    duration: '2 Hari Workshop Lanjutan + Praktik Supervisi Kasus Klinis',
    format: 'Full Hands-On Clinical Case Study & Supervised Therapy Protocols',
    prerequisites: 'Telah menyelesaikan jenjang S.CH / Memiliki sertifikat CH',
    description: 'Program sertifikasi tingkat mahir untuk menjadi Hipnoterapis Klinis Profesional berlisensi. Mempelajari protokol penyembuhan trauma mendalam, konflik internal (Parts Therapy), desensitisasi emosi masa lalu (Age Regression), dan prosedur membuka klinik praktik mandiri.',
    syllabus: [
      {
        module: 'Modul 1: Advanced Clinical Hypno-Analysis',
        topics: [
          'Protokol Intake Interview & Anamnesis Kasus Klinis',
          'Ideomotor Response (IMR) untuk komunikasi langsung pikiran bawah sadar',
          'Initial Sensitizing Event (ISE) vs Subsequent Sensitizing Event (SSE)'
        ]
      },
      {
        module: 'Modul 2: Deep Emotional Healing Protocols',
        topics: [
          'Age Regression (Regresi Usia) dengan proteksi abreaksi aman',
          'Informed Child Technique & Inner Child Healing',
          'Parts Therapy (Penyelesaian konflik internal antar bagian kepribadian)',
          'Forgiveness Therapy mendalam untuk memutus trauma dan dendam masa lalu'
        ]
      },
      {
        module: 'Modul 3: Clinical Setup & Legal Compliance',
        topics: [
          'Standard Operating Procedure (SOP) sesi terapi profesional',
          'Legalitas izin praktik hipnoterapi di Indonesia',
          'Strategi branding dan membuka klinik hipnoterapi mandiri'
        ]
      }
    ],
    facilities: [
      'Sertifikat Resmi C.Ht bergelar dari Sertifikasi Hipnoterapi Profesional',
      'Hak menyandang gelar resmi C.Ht di belakang nama',
      'Template dokumen resmi (Informed Consent, Client Intake Sheet, SOP)',
      'Supervisi studi kasus nyata langsung oleh Master Trainer',
      'Jejaring rujukan klien klinik dan komunitas terapis Transformasi Indonesia'
    ],
    investment: 5500000,
    originalPrice: 7000000
  },
  {
    id: 'cert-bundle',
    code: 'DOUBLE',
    title: 'Master Professional Program: CH + C.Ht Double Certification',
    credentialTitle: 'Double Credential: CH & C.Ht + Lisensi Praktisi Lengkap',
    accreditation: 'Paket Komprehensif Paling Populer & Siap Buka Praktik',
    duration: '4 Hari Workshop Intensif (Jalur Cepat Menjadi Terapis)',
    format: 'Comprehensive Training + Internship & Business Mentoring',
    prerequisites: 'Terbuka bagi umum yang bertekad menjadi praktisi terapis mandiri',
    description: 'Jalur tercepat dan terlengkap untuk menguasai ilmu hipnosis dari nol hingga mahir membuka klinik praktik mandiri resmi di bawah asuhan Transformasi Indonesia. Menggabungkan kurikulum CH dan C.Ht dalam satu paket istimewa.',
    syllabus: [
      {
        module: 'Kurikulum Penuh CH & C.Ht Digabungkan',
        topics: [
          'Semua materi fundamental hipnosis & rapid induksi',
          'Semua materi terapi klinis lanjutan (Regresi, Parts Therapy, Forgiveness)',
          'Bonus: Modul Hypno-Parenting & Self-Hypnosis Blueprint',
          'Bonus: Strategi Branding & Membuka Klinik Hipnoterapi Mandiri'
        ]
      }
    ],
    facilities: [
      'Mendapatkan 2 Sertifikat Resmi Sekaligus (Gelar CH & C.Ht)',
      'Paket Toolkit Praktik (Pendulum Kuningan, Soundscape Terapi, Skrip Sugesti Klinis)',
      'Konsultasi bimbingan langsung dengan Dr. Iwan D. Gunawan & tim',
      'Voucher Diskon Pelatihan Khusus untuk Anggota Keluarga',
      'Akses perpustakaan ratusan jurnal dan skrip kasus hipnoterapi'
    ],
    investment: 7800000,
    originalPrice: 11500000
  }
];

export const COACHING_PROGRAMS = [
  {
    id: 'coach-life',
    title: '1-on-1 Life & Mindset Breakthrough Coaching',
    category: 'coaching',
    shortDesc: 'Menemukan kejelasan arah hidup, mengatasi rasa buntu (stuck), dan mendesain blueprint masa depan yang bermakna.',
    benefits: [
      'Mendefinisikan nilai hidup sejati (Core Values) dan visi 5 tahun ke depan',
      'Menghilangkan kebiasaan menunda-nunda (procrastination) dan rasa rendah diri',
      'Action plan terukur setiap minggu dengan akuntabilitas penuh dari coach'
    ],
    duration: '60 - 75 Menit / Sesi (Paket 6 atau 12 Pertemuan)',
    idealFor: 'Individu yang sedang mengalami quarter-life crisis, transisi karier, atau butuh kejelasan arah hidup.',
    badge: 'Transformasi Personal'
  },
  {
    id: 'coach-executive',
    title: 'Executive & Leadership Coaching',
    category: 'coaching',
    shortDesc: 'Penguatan ketahanan mental kepemimpinan, pengambilan keputusan di bawah tekanan, dan delegasi efektif.',
    benefits: [
      'Emotional intelligence & resilience dalam memimpin tim skala besar',
      'Mengatasi kesepian kepemimpinan (Executive Loneliness) dan stres operasional',
      'Meningkatkan kemampuan komunikasi persuasif dan strategic thinking'
    ],
    duration: '90 Menit / Sesi (Paket 3 - 6 Bulan Retainer)',
    idealFor: 'C-Level Executives, Business Owners, Directors, dan General Managers.',
    badge: 'Tingkat Tinggi'
  },
  {
    id: 'coach-wealth',
    title: 'Mindset & Wealth Breakthrough Coaching',
    category: 'coaching',
    shortDesc: 'Membongkar subconscious money block, ketakutan gagal/sukses, dan sindrom ketidaklayakan finansial.',
    benefits: [
      'Mengidentifikasi trauma masa kecil seputar uang dan kelimpahan',
      'Membangun mentalitas magnet rezeki yang tenang dan terencana',
      'Menyelaraskan ambisi finansial dengan ketenangan batin yang sejati'
    ],
    duration: '75 Menit / Sesi (Paket 4 Sesi)',
    idealFor: 'Pebisnis, profesional, dan freelancer yang merasa stuck di batas penghasilan tertentu.',
    badge: 'Mental Block'
  }
];

export const ADDITIONAL_SERVICES = [
  {
    id: 'add-stifin',
    title: 'Tes STIFIn (Mesin Kecerdasan Genetik 5 Belahan Otak)',
    category: 'additional',
    shortDesc: 'Pemetaan genetik berbasis biometrik sidik jari untuk mengenali mesin kecerdasan dominan (Sensing, Thinking, Intuiting, Feeling, Insting).',
    icon: 'Fingerprint',
    features: [
      'Mengetahui bakat alami, potensi karier, dan gaya belajar anak/dewasa',
      'Memahami kepribadian pasangan untuk keharmonisan keluarga',
      'Konsultasi privat hasil tes bersama Promotor Resmi STIFIn'
    ],
    format: '1x Sesi Scan Biometrik Sidik Jari + Konsultasi 60 Menit (Bandung & Jabodetabek)'
  },
  {
    id: 'add-nlp',
    title: 'Neo NLP Practitioner Certification (32 Jam)',
    category: 'additional',
    shortDesc: 'Pelatihan resmi Neo NLP Society mempelajari struktur cara kerja otak, bahasa persuasif hipnotik, dan anchoring kondisi emosi puncak.',
    icon: 'BrainCircuit',
    features: [
      'Teknik Swish Pattern, Timeline Therapy, & Reframing Cepat',
      'Komunikasi persuasif tingkat tinggi untuk negosiasi dan leadership',
      'Gelar resmi Certified Neo NLP Practitioner (NNLP) berlisensi'
    ],
    format: 'Workshop Intensif 2 Hari di Bandung & Jabodetabek'
  },
  {
    id: 'add-corporate',
    title: 'Corporate Mental Wellness & Mindset Transformation',
    category: 'additional',
    shortDesc: 'Program in-house dipimpin langsung oleh Dr. Iwan D. Gunawan untuk perusahaan, perbankan, dan BUMN demi resiliensi mental tim.',
    icon: 'Building2',
    features: [
      'Workshop Stress Management & Work-Life Integration',
      'Pelatihan Hypno-Selling & Persuasive Communication untuk Divisi Sales',
      'Sesi Relaksasi Massal & Employee Assistance Program (EAP)'
    ],
    format: 'Half-Day / Full-Day Workshop di Kantor Anda atau Hybrid'
  },
  {
    id: 'add-parenting',
    title: 'Hypno-Parenting & Terapi Anak / Remaja',
    category: 'additional',
    shortDesc: 'Membimbing orang tua menanamkan sugesti positif saat gelombang otak anak berada di fase sugestif (sebelum tidur).',
    icon: 'Smile',
    features: [
      'Mengatasi kecanduan gawai, tantrum emosional, dan mogok sekolah',
      'Meningkatkan konsentrasi belajar, daya ingat, dan motivasi anak',
      'Menyembuhkan trauma bullying di sekolah dan ketakutan sosial anak'
    ],
    format: 'Sesi Konsultasi Orang Tua + Terapi Anak (2 - 3 Sesi)'
  },
  {
    id: 'add-telehealth',
    title: 'Sesi Konsultasi & Hipnoterapi Online (Tele-Therapy)',
    category: 'additional',
    shortDesc: 'Layanan terapi jarak jauh aman via video call terenkripsi bagi klien luar kota, luar pulau, atau luar negeri.',
    icon: 'Video',
    features: [
      'Protokol grounding digital yang telah teruji efektivitasnya',
      'Dapat dilakukan dari kenyamanan kamar pribadi Anda',
      'Jadwal fleksibel menyesuaikan zona waktu klien internasional'
    ],
    format: 'Video Call Privat (Zoom / Google Meet HD)'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    clientName: 'Ibu Rina K.',
    ageOrProfession: '34 Tahun - Corporate Manager, Jabodetabek',
    problem: 'Panic attack & gerd psikosomatis selama 2 tahun hingga takut keluar rumah sendirian.',
    result: 'Setelah 3 sesi hipnoterapi di Transformasi Indonesia, dada saya tidak pernah sesak lagi. Saya bisa kembali menyetir mobil sendiri dan bekerja tanpa rasa takut.',
    category: 'Hipnoterapi',
    rating: 5,
    anonymizedNote: 'Nama disamarkan demi privasi etika'
  },
  {
    id: 'testi-2',
    clientName: 'Bapak Hendra S., S.CH, C.Ht',
    ageOrProfession: 'Praktisi & Alumni Batch 24, Surabaya',
    problem: 'Ingin alih profesi dan memiliki lisensi terapis yang diakui resmi di Indonesia.',
    result: 'Pelatihan S.CH & C.Ht di sini luar biasa praktikal! Bukan cuma teori, tapi langsung praktik regresi dan studi kasus nyata. Sekarang saya sudah buka klinik hipnoterapi sendiri.',
    category: 'Sertifikasi S.CH & C.Ht',
    rating: 5
  },
  {
    id: 'testi-3',
    clientName: 'Dimas A.',
    ageOrProfession: '29 Tahun - Founder Startup',
    problem: 'Impostor syndrome parah, burnout kepemimpinan, dan overthinking sebelum presentasi ke investor.',
    result: 'Sesi executive coaching membuka mata saya terhadap mental block masa lalu. Kami berhasil mengamankan pendanaan seri A dengan mentalitas yang jauh lebih tenang.',
    category: 'Life Coaching',
    rating: 5
  },
  {
    id: 'testi-4',
    clientName: 'Siti Rahmawati',
    ageOrProfession: '41 Tahun - Ibu Rumah Tangga',
    problem: 'Trauma broken marriage & dendam masa lalu yang membuat susah tidur nyenyak selama 4 tahun.',
    result: 'Melalui Forgiveness Therapy, beban di pundak saya seperti runtuh seketika. Saya menangis lega dan malam itu tidur pulas 8 jam penuh tanpa obat tidur.',
    category: 'Hipnoterapi',
    rating: 5,
    anonymizedNote: 'Studi kasus luka batin & inner child'
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    question: 'Apa tantangan atau keinginan utama yang paling mendesak bagi Anda saat ini?',
    options: [
      {
        text: 'Mengatasi kecemasan, trauma masa lalu, fobia, atau psikosomatis yang mengganggu fisik/mental',
        points: { hypnotherapy: 3, coaching: 0, certification: 0, additional: 1 }
      },
      {
        text: 'Ingin mempelajari ilmu hipnosis secara profesional dan mendapatkan sertifikat gelar resmi (CH, C.Ht)',
        points: { hypnotherapy: 0, coaching: 0, certification: 3, additional: 1 }
      },
      {
        text: 'Mencari kejelasan arah hidup, karier, leadership, atau mematahkan batasan pencapaian finansial',
        points: { hypnotherapy: 1, coaching: 3, certification: 0, additional: 1 }
      },
      {
        text: 'Program untuk kantor/perusahaan, persiapan melahirkan (hypnobirthing), atau terapi anak/remaja',
        points: { hypnotherapy: 1, coaching: 1, certification: 0, additional: 3 }
      }
    ]
  },
  {
    id: 2,
    question: 'Sudah berapa lama kondisi atau kebutuhan ini Anda rasakan?',
    options: [
      {
        text: 'Sudah menahun / berbulan-bulan dan rasanya sulit diubah dengan logika sadar semata',
        points: { hypnotherapy: 3, coaching: 1, certification: 0, additional: 1 }
      },
      {
        text: 'Baru beberapa minggu/bulan belakangan karena transisi fase hidup baru',
        points: { hypnotherapy: 1, coaching: 3, certification: 0, additional: 1 }
      },
      {
        text: 'Saya sudah lama tertarik mendalami psikologi bawah sadar untuk membantu orang lain',
        points: { hypnotherapy: 0, coaching: 1, certification: 3, additional: 0 }
      },
      {
        text: 'Saya ingin mempelajari self-help praktis untuk diri sendiri atau keluarga di rumah',
        points: { hypnotherapy: 1, coaching: 1, certification: 1, additional: 3 }
      }
    ]
  },
  {
    id: 3,
    question: 'Bagaimana preferensi metode transformasi yang paling Anda harapkan?',
    options: [
      {
        text: 'Masuk ke akar pikiran bawah sadar dalam kondisi relaksasi mendalam untuk pelepasan emosi',
        points: { hypnotherapy: 3, coaching: 0, certification: 1, additional: 1 }
      },
      {
        text: 'Diskusi terstruktur, penetapan tujuan, dan pembuatan strategi mingguan dengan mentor',
        points: { hypnotherapy: 0, coaching: 3, certification: 0, additional: 1 }
      },
      {
        text: 'Pelatihan intensif dengan kurikulum resmi, modul materi, praktik langsung, dan sertifikat',
        points: { hypnotherapy: 0, coaching: 0, certification: 3, additional: 0 }
      },
      {
        text: 'Workshop terfokus (seperti self-hypnosis mandiri atau hypnobirthing persalinan)',
        points: { hypnotherapy: 1, coaching: 0, certification: 1, additional: 3 }
      }
    ]
  }
];

export const MYTH_FACTS = [
  {
    myth: 'Hipnoterapi adalah ilmu gaib, mistis, atau sihir yang menggunakan jin.',
    fact: 'Hipnoterapi adalah cabang ilmu psikologi dan neurosains terapan yang murni ilmiah. Kondisi trance hipnosis serupa dengan keadaan saat Anda melamun atau menjelang tidur nyenyak, di mana gelombang otak berpindah ke fase Alpha dan Theta.'
  },
  {
    myth: 'Klien akan pingsan atau tidak sadar sama sekali saat diterapi.',
    fact: 'Dalam hipnoterapi klinis, klien tetap 100% sadar, mendengar suara terapis dengan jelas, dan memiliki kendali penuh atas dirinya. Anda bukan tertidur pulas, melainkan berada dalam relaksasi fisik dan fokus mental tinggi.'
  },
  {
    myth: 'Terapis bisa memaksa klien membocorkan rahasia pribadi atau PIN ATM.',
    fact: 'Pikiran bawah sadar memiliki mekanisme pertahanan moral alami (Critical Factor). Jika terapis memberikan sugesti yang melanggar nilai etika, agama, atau keamanan klien, klien akan otomatis menolak atau langsung terbangun seketika.'
  },
  {
    myth: 'Bisa terjebak dan tidak bisa bangun dari kondisi hipnosis.',
    fact: 'Secara fisiologis hal ini mustahil. Jika terapis meninggalkan ruangan saat Anda dalam trance, Anda akan beralih ke tidur fisiologis biasa selama beberapa saat lalu terbangun dengan sendirinya dalam kondisi segar bugar.'
  }
];

export const PRICING_PACKAGES = [
  {
    id: 'price-single',
    name: 'Sesi Tunggal (Single Session)',
    type: 'Klinik Bandung / Jabodetabek / Online',
    price: 950000,
    priceNote: 'per sesi (durasi 90-120 menit)',
    description: 'Cocok untuk intake anamnesis awal, pelepasan fobia spesifik, atau pengujian sugestibilitas mendalam.',
    features: [
      'Konsultasi anamnesis mendalam dengan terapis senior',
      'Tes sugestibilitas & pemetaan peta bawah sadar',
      '1x Sesi Hipnoterapi Klinis intensif',
      'Evaluasi pasca-sesi & panduan latihan relaksasi mandiri',
      'Pilihan klinik: Bandung, Jabodetabek, atau Tele-Therapy Zoom'
    ],
    popular: false,
    cta: 'Pilih Sesi Tunggal'
  },
  {
    id: 'price-intensive',
    name: 'Paket Terapi Intensif (3 Sesi Pemulihan Tuntas)',
    type: 'Program Paling Direkomendasikan',
    price: 2450000,
    priceNote: 'total 3 sesi komprehensif (hemat Rp 400.000)',
    description: 'Rekomendasi standar klinis utama Transformasi Indonesia untuk kasus anxiety, panic attack, gerd psikosomatis, insomnia, dan trauma luka batin.',
    features: [
      '3x Sesi Hipnoterapi Klinis Terarah (durasi @120 menit)',
      'Akses teknik regresi usia & forgiveness therapy mendalam',
      'Bonus Audio Relaksasi Pribadi (Subconscious Booster)',
      'Pendampingan berkala via WhatsApp dengan terapis',
      'Garansi bimbingan tuntas hingga kondisi batin stabil'
    ],
    popular: true,
    cta: 'Pilih Paket 3 Sesi Terlaris'
  },
  {
    id: 'price-cert-professional',
    name: 'Sertifikasi Profesi CH & C.Ht',
    type: 'Pelatihan Lisensi Praktisi Nasional',
    price: 7800000,
    priceNote: 'Double certification (CH & C.Ht)',
    description: 'Jalur resmi menjadi Hipnoterapis bergelar non-akademis CH & C.Ht, siap buka praktik mandiri.',
    features: [
      'Double Gelar Resmi: CH (Certified Hypnotist) & C.Ht',
      'Workshop intensif 4 hari dengan praktik 70%',
      'ID Card Praktisi & Akreditasi Dewan Hipnoterapi',
      'Template SOP, Informed Consent & Dokumen Legalitas Praktik',
      'Lifetime Mentoring & Akses Bebas Mengulang Kelas (Reseat)'
    ],
    popular: false,
    cta: 'Daftar Sertifikasi'
  },
  {
    id: 'price-cert-ngh',
    name: 'Sertifikasi Internasional NGH-USA (100 Jam)',
    type: 'Lisensi Hipnoterapi Tertinggi Dunia',
    price: 12500000,
    priceNote: 'Gelar Internasional CCH (NGH - USA)',
    description: 'Program prestisius berstandar dunia dari National Guild of Hypnotists (USA) langsung dibimbing Dr. Iwan D. Gunawan (President NGH Chapter Indonesia).',
    features: [
      'Sertifikat Asli Berhologram NGH-USA dari USA',
      'Gelar Internasional CCH (Certified Consulting Hypnotist)',
      'Kurikulum 100 Jam Internasional + Ericksonian Hypnotherapy',
      'ID Member NGH-USA teregistrasi di direktori terapis dunia',
      'Supervisi studi kasus klinis tingkat mahir'
    ],
    popular: false,
    cta: 'Daftar Sertifikasi NGH'
  }
];
