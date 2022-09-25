// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createSvg } from 'utils/dday';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { date, text = '' } = req.query;

  const svg = createSvg({ date: date as string, text: text as string });
  res.setHeader('Content-Type', 'image/svg+xml');
  // res.setHeader('Cache-Control', 's-maxage=3600, max-age=3600');
  res.status(200).end(svg);
}