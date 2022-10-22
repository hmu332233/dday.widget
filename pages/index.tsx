import { useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Layout from 'components/Layout';
import SvgForm from 'components/SvgForm';
import SvgSkelton from 'components/SvgSkelton';
const SvgPreview = dynamic(() => import('components/SvgPreview'), {
  loading: () => <SvgSkelton />,
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
      <SvgPreview data={data} />
      <SvgForm defaultValues={defaultValues} onChange={setData} />
    </Layout>
  );
};

export default Home;
