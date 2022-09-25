import React from 'react';
import { createSvg } from 'utils/dday';

type Props = {
  data: SvgData;
};

function SvgPreview({ data: { date, text } }: Props) {
  const svg = createSvg({ date, text });
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default SvgPreview;
