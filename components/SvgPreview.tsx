import React from 'react';
import { SvgData, Theme } from 'types';
import createSvgFuncMap from 'utils/dday';

type Props = {
  data: SvgData;
};

function SvgPreview({ data: { date, text, theme = 'theme1' } }: Props) {
  const createSvg = createSvgFuncMap[theme as Theme];
  const svg = createSvg({ date, text });
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default SvgPreview;
