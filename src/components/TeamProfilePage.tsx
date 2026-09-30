import React from 'react';
import { Award, BookOpen, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react';
import drIwanImg from '../assets/images/dr_iwan_official.jpg';
import arieRakhmatImg from '../assets/images/arie_rakhmat_riyadi.jpg';
import clinicAssociate9 from '../assets/images/clinic_associate_9.jpg';
import clinicAssociate10 from '../assets/images/clinic_associate_10.jpg';
import clinicAssociate11 from '../assets/images/clinic_associate_11.jpg';
import clinicAssociate12 from '../assets/images/clinic_associate_12.jpg';

interface TeamProfilePageProps {
  onOpenBooking: () => void;
}

const teamRoles = [
  {
    icon: ShieldCheck,
    title: 'Praktisi Hipnoterapi Klinis',
    description: 'Mendampingi proses pemulihan secara privat, terarah, dan berorientasi pada akar masalah klien.'
  },
  {
    icon: BookOpen,
    title: 'Tim Pendidikan & Sertifikasi',
    description: 'Menyiapkan kelas, modul, dan pendampingan praktik untuk calon praktisi berstandar NGH-USA dan '
  },
  {
    icon: HeartHandshake,
    title: 'Tim Client Care',
    description: 'Membantu konsultasi awal, penjadwalan, dan memastikan setiap klien mendapat informasi yang jelas.'
  },
  {
    icon: Sparkles,
    title: 'Tim Transformasi Organisasi',
    description: 'Merancang program mindset, coaching, dan pengembangan performa untuk sekolah, komunitas, dan perusahaan.'
  }
];

const clinicAssociates = [clinicAssociate9, clinicAssociate10, clinicAssociate11, clinicAssociate12];

export const TeamProfilePage: React.FC<TeamProfilePageProps> = ({ onOpenBooking }) => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-28 text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(186,230,253,0.5),_transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-900">
              <Users className="h-4 w-4 text-blue-600" />
              <span>PROFIL & TIM KAMI</span>
            </div>
            <h1 className="max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight text-[#0F2B5C] sm:text-5xl lg:text-6xl">
              Orang-orang di balik proses transformasi Anda.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Transformasi Indonesia hadir dengan pendekatan yang hangat, terstruktur, dan berstandar profesi. Setiap bagian tim bekerja untuk membuat proses terapi, pembelajaran, dan pengembangan diri terasa aman serta bermakna.
            </p>
            <button
              onClick={onOpenBooking}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0F2B5C] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition-colors hover:bg-blue-800"
            >
              Konsultasi dengan Tim Kami
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border-2 border-sky-200 bg-[#F8FAFC] p-3 shadow-xl shadow-blue-900/10">
              <img
                src={drIwanImg}
                alt="Dr. Iwan D. Gunawan"
                className="h-[360px] w-full rounded-2xl object-cover object-top sm:h-[420px]"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-[#0F2B5C]/95 p-4 text-white backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Founder & Lead Practitioner</p>
                <h2 className="mt-1 font-serif text-xl font-bold">Dr. Iwan D. Gunawan, S.S., M.Pd.</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-200">President NGH-USA Chapter Indonesia, Certified Instructor NGH-USA, dan Master Trainer NNLP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Award className="h-4 w-4" />
            <span>Kolaborasi untuk hasil yang nyata</span>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#0F2B5C] sm:text-4xl">Satu standar, beberapa keahlian, satu tujuan.</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">Tim kami menyatukan keahlian klinis, pendidikan, layanan klien, dan pengembangan organisasi dalam satu ekosistem yang saling mendukung.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamRoles.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-[#0F2B5C]">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Users className="h-4 w-4" />
              <span>Associate Trainer & Therapist</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#0F2B5C] sm:text-4xl">Associate trainer kami</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">Selain dipimpin oleh Dr. Iwan, Transformasi Indonesia didukung praktisi dan pendidik yang membawa pengalaman akademik, konseling, hipnoterapi, dan pengembangan diri.</p>
          </div>

          <article className="mt-10 grid grid-cols-1 overflow-hidden rounded-3xl border border-sky-200 bg-[#F8FAFC] shadow-sm lg:grid-cols-12">
            <div className="lg:col-span-4">
              <img
                src={arieRakhmatImg}
                alt="Arie Rakhmat Riyadi, M.Pd."
                className="h-72 w-full object-cover object-top sm:h-80 lg:h-full"
              />
            </div>
            <div className="p-6 sm:p-8 lg:col-span-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Associate Trainer Makna Life Institute</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-[#0F2B5C] sm:text-3xl">Arie Rakhmat Riyadi, M.Pd., CHt.</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Hipnoterapis dan dosen dengan latar belakang Psikologi Pendidikan dan Bimbingan serta Magister Bimbingan dan Konseling UPI. Arie mengembangkan pendekatan hypnosis untuk self-improvement, konseling, dan pengajaran.</p>
              <div className="mt-6 grid grid-cols-1 gap-3 text-xs text-slate-700 sm:grid-cols-2">
                <div className="rounded-xl border border-sky-200 bg-white p-3">Certified Hypnotist (CH) & Certified Hypnotherapist (CHt)</div>
                <div className="rounded-xl border border-sky-200 bg-white p-3">NNLP Practitioner & Certified Instructor</div>
                <div className="rounded-xl border border-sky-200 bg-white p-3">Dosen dan praktisi konseling</div>
                <div className="rounded-xl border border-sky-200 bg-white p-3">Trainer empowerment & self-improvement</div>
              </div>
            </div>
          </article>

          <div className="mt-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Mitra Hipnoterapis Klinik</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-[#0F2B5C] sm:text-3xl">Associate therapist kami</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">Tim mitra hipnoterapis yang mendukung layanan klinik Transformasi Indonesia. Foto ditampilkan tanpa nama karena halaman klinik resmi tidak mencantumkan identitas masing-masing mitra.</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
              {clinicAssociates.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-2xl border border-sky-200 bg-[#F8FAFC] shadow-sm">
                  <img src={image} alt={`Mitra hipnoterapis klinik ${index + 1}`} className="aspect-[4/5] w-full object-cover" />
                  <p className="px-3 py-3 text-center text-xs font-semibold text-[#0F2B5C]">Mitra Hipnoterapis {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-sky-100 bg-[#0F2B5C] py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Mulai dari percakapan pertama</p>
            <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">Temukan pendampingan yang tepat untuk Anda.</h2>
          </div>
          <button onClick={onOpenBooking} className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0F2B5C] transition-colors hover:bg-sky-50">Hubungi Tim Kami</button>
        </div>
      </section>
    </main>
  );
};
