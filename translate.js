import translate from '@vitalets/google-translate-api';

export default async function handler(req, res) {
  const { q, to } = req.query;
  if (!q || !to) {
    return res.status(400).json({ error: 'Parameter q dan to diperlukan' });
  }
  try {
    const result = await translate(q, { to });
    res.status(200).json({ translatedText: result.text });
  } catch (err) {
    res.status(500).json({ error: 'Gagal menerjemahkan', detail: err.message });
  }
}
