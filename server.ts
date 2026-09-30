import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // AI Hypnotherapy & Mind Coaching Advisor endpoint
  app.post('/api/ai-consult', async (req, res) => {
    try {
      const { question, category } = req.body;

      if (!question || typeof question !== 'string') {
        return res.status(400).json({ error: 'Pertanyaan wajib diisi.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback gracefully if API key is not configured yet
        return res.json({
          reply: `Terima kasih telah bertanya tentang "${question}". Di Transformasi Indonesia, hipnoterapi klinis dan sesi coaching dilakukan oleh praktisi berlisensi S.CH (Certified Hypnotist) & C.Ht (Certified Hypnotherapist) serta Certified Life Coach. Setiap sesi berlangsung privat, aman, ilmiah, dan berorientasi pada hasil (solution-focused). Anda dapat berkonsultasi langsung dengan Master Therapist kami melalui tombol WhatsApp yang tersedia di website.`,
          fallback: true
        });
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

      res.json({
        reply: response.text,
        fallback: false
      });
    } catch (error: any) {
      console.error('Error generating AI consultation:', error);
      res.status(500).json({
        error: 'Terjadi kendala saat memproses konsultasi AI. Silakan coba lagi atau hubungi via WhatsApp.',
        details: error?.message || 'Internal error'
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
