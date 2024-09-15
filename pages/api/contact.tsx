import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Wszystkie pola są wymagane' });
    }

    // Logika wysyłki wiadomości lub zapisania danych (tu można dodać np. wysyłkę maila)

    res.status(200).json({ message: 'Wiadomość została wysłana!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
