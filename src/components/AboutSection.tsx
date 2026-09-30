import React from 'react';
import { Award, ShieldCheck, HeartHandshake, BookOpen, UserCheck, Sparkles, CheckCircle, MapPin, Phone, Camera } from 'lucide-react';
import drIwanImg from '../assets/images/dr_iwan_portrait_1789711948882.jpg';
import clinicRoomImg from '../assets/images/clinic_therapy_room_1789711963361.jpg';
import seminarImg from '../assets/images/training_seminar_room_1789711977353.jpg';
import therapySessionImg from '../assets/images/therapy_session_client_1789711992189.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="profil" className="py-14 sm:py-20 bg-white border-b border-sky-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold tracking-wide shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>PROFIL RESMI TRANSFORMASI INDONESIA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2B5C] tracking-tight">
            Pionir Hipnoterapi Berstandar Dunia & Pendidikan Profesi Berkelanjutan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Didirikan dan dipimpin oleh <strong>Dr. Iwan D. Gunawan</strong>, Transformasi Indonesia memadukan standar tertinggi National Guild of Hypnotists (NGH - USA), Sertifikasi Hipnoterapi Profesional, dan Neo NLP untuk menghadirkan terapi tuntas dan pelatihan lisensi resmi.
          </p>
        </div>

        {/* 2-Column Grid: Clinician Profile & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
          
          {/* Left Column: Master Clinician Card (Clean White & Navy Card) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border-2 border-sky-200 shadow-xl shadow-blue-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/60 rounded-bl-full pointer-events-none" />
              
              {/* Profile Card Header with Real Portrait Photo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-blue-600 shadow-lg group">
                  <img 
                    src={drIwanImg} 
                    alt="Dr. Iwan D. Gunawan, M.Pd." 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0F2B5C]">
                    Dr. Iwan D. Gunawan, M.Pd.
                  </h3>
                  <p className="text-xs font-bold text-blue-700 mt-0.5">
                    C.Ht, CI (NGH-USA), Master Trainer NNLP
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    President of NGH-USA Chapter Indonesia & Founder
                  </p>
                </div>
              </div>

              {/* Credentials list from transformasiindonesia.net */}
              <div className="space-y-2.5 text-xs text-slate-700 border-t border-sky-200/80 pt-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>President of NGH-USA Chapter Indonesia</strong> & Certified Instructor resmi National Guild of Hypnotists (USA)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Certified Instructor & Hypnotherapist</strong> Sertifikasi Hipnoterapi Profesional</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Master Trainer</strong> Neo NLP Society & Praktisi Master Ericksonian Hypnotherapy</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Promotor Resmi STIFIn</strong> (Tes Mesin Kecerdasan Genetik & Bakat Alami)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Dosen & narasumber transformasi mindset di berbagai institusi, BUMN & swasta</span>
                </div>
              </div>

              {/* Clinic Locations & Contact Badges */}
              <div className="mt-6 pt-4 border-t border-sky-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-blue-900 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Klinik Bandung</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Pusat Layanan Hipnoterapi & Workshop Utama</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-blue-900 font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Klinik Jabodetabek</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Sesi Privat Eksekutif & Sertifikasi Reguler</p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-4 p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-blue-950 font-medium italic">
                "Pikiran bawah sadar memiliki kekuatan 88% mengendalikan hidup Anda. Melalui hipnosis ilmiah dan NLP, kami membimbing Anda memprogram ulang pola lama menjadi keberdayaan dan kebahagiaan sejati."
              </div>

            </div>
          </div>

          {/* Right Column: Visi Misi & 4 Pilar Keunggulan Kami */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border-2 border-sky-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  VISI
                </div>
                <h4 className="font-serif font-bold text-[#0F2B5C] text-base">Standar Global Transformasi Pikiran</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menjadi lembaga rujukan utama terapi pikiran bawah sadar dan pusat pelatihan sertifikasi hipnoterapi internasional (NGH-USA) paling kredibel dan berdampak di Indonesia.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-sky-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#0F2B5C] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  MISI
                </div>
                <h4 className="font-serif font-bold text-[#0F2B5C] text-base">Integritas Ilmiah & Empati</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mengedukasi masyarakat tentang hipnosis ilmiah berbasis neurosains, membimbing pemulihan emosi tuntas, serta melahirkan praktisi hipnoterapis profesional yang siap buka praktik.
                </p>
              </div>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="space-y-3 pt-2">
              <h4 className="font-serif font-bold text-[#0F2B5C] text-lg">Keunggulan Layanan Transformasi Indonesia</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0F2B5C]">Akreditasi Dunia NGH-USA</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">Sertifikasi diakui internasional langsung dengan registrasi ID resmi NGH Amerika Serikat.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0F2B5C]">Dibimbing Master Trainer Ahli</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">Penanganan terapi dan pelatihan dipimpin langsung oleh Dr. Iwan D. Gunawan dengan ribuan jam terbang.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0F2B5C]">Klinik Nyaman di Bandung & Jabodetabek</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">Ruang konsultasi kedap suara, privat, higienis, dan dilengkapi reclining lounge terapeutik.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-sky-200 shadow-2xs">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0F2B5C]">Lifetime Mentoring & Free Reseat</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5">Alumni sertifikasi berhak mengulang kelas kapan saja tanpa biaya pelatihan tambahan.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Documentation & Facility Photo Gallery */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-sky-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-bold tracking-wide mb-2">
                <Camera className="w-3.5 h-3.5 text-blue-600" />
                <span>DOKUMENTASI RESMI & FASILITAS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2B5C]">
                Fasilitas Terapi & Suasana Pelatihan Lisensi Resmi
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-md sm:text-right">
              Standar ruang terapi privat higienis serta workshop berakreditasi NGH Amerika Serikat dan Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Photo 1: Clinic Therapy Room */}
            <div className="group bg-white rounded-2xl overflow-hidden border-2 border-sky-200 shadow-sm transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/10">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={clinicRoomImg} 
                  alt="Ruang Hipnoterapi Klinis Privat" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0F2B5C]/90 text-sky-200 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-blue-400/40 backdrop-blur-xs">
                  Ruang Konsultasi Privat
                </span>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-serif font-bold text-base text-[#0F2B5C] group-hover:text-blue-700 transition-colors">
                  Klinik Terapi Privat Bandung & Jabodetabek
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ruangan tenang, kedap suara, ber-AC, dilengkapi reclining chair ergonomis untuk relaksasi gelombang theta yang nyaman dan aman.
                </p>
              </div>
            </div>

            {/* Photo 2: Live Workshop Seminar */}
            <div className="group bg-white rounded-2xl overflow-hidden border-2 border-sky-200 shadow-sm transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/10">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={seminarImg} 
                  alt="Workshop Sertifikasi Hipnoterapi NGH USA" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0F2B5C]/90 text-sky-200 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-blue-400/40 backdrop-blur-xs">
                  Sertifikasi NGH-USA
                </span>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-serif font-bold text-base text-[#0F2B5C] group-hover:text-blue-700 transition-colors">
                  Workshop Lisensi Profesi Praktisi
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pelatihan tatap muka intensif dengan bimbingan langsung Master Instructor, praktik terarah, serta modul resmi standar global.
                </p>
              </div>
            </div>

            {/* Photo 3: 1-on-1 Clinical Session */}
            <div className="group bg-white rounded-2xl overflow-hidden border-2 border-sky-200 shadow-sm transition-all duration-300 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/10">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={therapySessionImg} 
                  alt="Sesi Bimbingan Hipnoterapi Klinis" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#0F2B5C]/90 text-sky-200 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-blue-400/40 backdrop-blur-xs">
                  Sesi 1-on-1 Terarah
                </span>
              </div>
              <div className="p-5 space-y-1.5">
                <h4 className="font-serif font-bold text-base text-[#0F2B5C] group-hover:text-blue-700 transition-colors">
                  Pendampingan Terapi Empatik
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Setiap klien mendapatkan asesmen mendalam dan bimbingan terpersonalisasi untuk menuntaskan akar emosi, trauma, maupun psikosomatis.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
