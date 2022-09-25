import { useState } from 'react';
import type { NextPage } from 'next';

import Layout from 'components/Layout';
import SvgPreview from 'components/SvgPreview';
import SvgForm from 'components/SvgForm';

const defaultValues: SvgData = {
  text: 'New Year',
  date: new Date('2023-01-01').toISOString().substring(0, 10),
};

const Home: NextPage = () => {
  const [data, setData] = useState<SvgData>(defaultValues);
  return (
    <Layout>
      <p>디데이가 계산되는 이미지를 Github, Notion 등에 넣어보세요!</p>
      <SvgPreview data={data} />
      <SvgForm
        defaultValues={defaultValues}
        onChange={(v: SvgData) => setData(v)}
      />
    </Layout>
  );
};

export default Home;
