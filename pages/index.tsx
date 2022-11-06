import { useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { SvgData } from 'types';
import Layout from 'components/Layout';
import SvgForm from 'components/SvgForm';
import SvgSkelton from 'components/SvgSkelton';
import Drawer from 'components/Drawer';
import UsageView from 'components/UsageView';
import Hits from 'components/Hits';
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
    <Drawer>
      <Drawer.Content>
        <Layout>
          <p className="text-center">
            Add D-Day widget to anywhere,
            <br />
            such as your Github Profile, Notion, etc
          </p>
          <Hits />
          <SvgPreview data={data} />
          <SvgForm defaultValues={defaultValues} onChange={setData} />
          <Drawer.Button>Add Widget</Drawer.Button>
        </Layout>
      </Drawer.Content>
      <Drawer.Side>
        <UsageView data={data} />
      </Drawer.Side>
    </Drawer>
  );
};

export default Home;
