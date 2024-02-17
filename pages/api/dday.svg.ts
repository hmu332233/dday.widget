// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Theme } from 'types';
import createSvgFuncMap from 'utils/dday';
import { isTheme } from 'utils/dday/utils';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { keyword = '', theme = 'theme1' } = req.query;
  let { date, text = '', startDate } = req.query;

  if (!isTheme(theme)) {
    return res.status(400).end('invalid theme');
  }

  const createSvg = createSvgFuncMap[theme as Theme];

  switch (keyword) {
    case 'new-year':
      text = 'New Year 🙂';
      date = '2025-01-01';
      startDate = '2024-01-01';
    default:
  }

  const svg = createSvg({
    date: date as string,
    text: text as string,
    startDate: startDate as string,
  });
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, max-age=300');
  res.status(200).end(svg);
}
