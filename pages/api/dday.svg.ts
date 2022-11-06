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
      date = '2023-01-01';
      startDate = '2022-01-01';
    default:
  }

  const svg = createSvg({
    date: date as string,
    text: text as string,
    startDate: startDate as string,
  });
  res.setHeader('Content-Type', 'image/svg+xml');
  // res.setHeader('Cache-Control', 's-maxage=3600, max-age=3600');
  res.status(200).end(svg);
}
