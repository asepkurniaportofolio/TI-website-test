import type { Request, Response } from 'express';
import { createAiConsultationReply } from '../src/lib/aiConsultation';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question, category } = req.body ?? {};
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Pertanyaan wajib diisi.' });
  }

  try {
    const result = await createAiConsultationReply(
      question,
      typeof category === 'string' ? category : undefined,
    );
    return res.json(result);
  } catch (error: unknown) {
    console.error('Error generating AI consultation:', error);
    return res.status(500).json({
      error: 'Terjadi kendala saat memproses konsultasi AI. Silakan coba lagi atau hubungi via WhatsApp.',
      details: error instanceof Error ? error.message : 'Internal error',
    });
  }
}