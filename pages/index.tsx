import { useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Suspense } from 'react';
import Layout from 'components/Layout';
// import SvgPreview from 'components/SvgPreview';
import SvgForm from 'components/SvgForm';
const SvgPreview = dynamic(() => import('components/SvgPreview'), {
  ssr: false,
});

const defaultValues: SvgData = {
  text: 'New Year',
  date: new Date('2023-01-01').toISOString().substring(0, 10),
};

const Home: NextPage = () => {
  const [data, setData] = useState<SvgData>(defaultValues);
  return (
    <Layout>
      <p>
        Add Countdowns to anywhere,
        <br />
        such as your Github, Notion, etc
      </p>
      {/* TODO: 같은 크기로 스켈레톤 추가해서 로딩 효과 주기 */}
      <SvgPreview data={data} />
      <SvgForm defaultValues={defaultValues} onChange={setData} />
    </Layout>
  );
};

export default Home;
