import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { createAiConsultationReply } from './src/lib/aiConsultation';

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

      const result = await createAiConsultationReply(question, category);
      res.json(result);
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
