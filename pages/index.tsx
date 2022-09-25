import { useState } from 'react';
import type { NextPage } from 'next';

import Layout from 'components/Layout';
import SvgPreview from 'components/SvgPreview';
import SvgForm from 'components/SvgForm';

const Home: NextPage = () => {
  const [data, setData] = useState<SvgData>({
    text: 'New Year',
    date: new Date().toISOString().substring(0, 10),
  });
  return (
    <Layout>
      <p>테스트 문구</p>
      <SvgPreview data={data} />
      <SvgForm onChange={(v: SvgData) => setData(v)} />
    </Layout>
  );
};

export default Home;
