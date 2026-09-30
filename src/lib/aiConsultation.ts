import { GoogleGenAI } from '@google/genai';

export async function createAiConsultationReply(question: string, category?: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      reply: `Terima kasih telah bertanya tentang "${question}". Di Transformasi Indonesia, hipnoterapi klinis dan sesi coaching dilakukan oleh praktisi berlisensi S.CH (Certified Hypnotist) & C.Ht (Certified Hypnotherapist) serta Certified Life Coach. Setiap sesi berlangsung privat, aman, ilmiah, dan berorientasi pada hasil (solution-focused). Anda dapat berkonsultasi langsung dengan Master Therapist kami melalui tombol WhatsApp yang tersedia di website.`,
      fallback: true,
    };
  }

  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Anda adalah Asisten Pakar Konsultasi dari Transformasi Indonesia (Lembaga Resmi Hipnoterapi Klinis, Pelatihan Profesi S.CH & C.Ht, dan Mind & Life Coaching).
Kategori pertanyaan klien: ${category || 'Umum'}
Pertanyaan Klien: "${question}"

Berikan jawaban profesional, empatik, ramah, dan mendalam dalam bahasa Indonesia:
1. Jelaskan secara singkat dan ilmiah (neuroscience & subconscious mind) bagaimana hipnoterapi atau coaching menyelesaikan hal tersebut.
2. Tegaskan bahwa klien tetap 100% sadar, memegang kendali penuh, dan tidak ada unsur mistis.
3. Berikan gambaran langkah terapi / program yang tepat di Transformasi Indonesia (misal: Sesi Klinis 1-on-1, Sertifikasi CH/CHt jika berminat jadi praktisi, atau Life Coaching).
4. Gunakan nada bicara yang menenangkan, berwibawa, dan suportif.
5. Akhiri dengan ajakan hangat untuk reservasi sesi konsultasi awal atau hubungi via WhatsApp.
(Maksimal 3-4 paragraf yang sangat nyaman dibaca).`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.8-flash',
    contents: prompt,
  });

  return { reply: response.text, fallback: false };
}