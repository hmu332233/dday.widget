import React from 'react';
import CodeBox from 'components/CodeBox';

import { objectToQueryString } from 'utils/string';

type Props = {
  data: SvgData;
};

const URL = 'https://dday-widget.minung.dev';

function UsageView({ data }: Props) {
  const apiUrl = `${URL}/widget${objectToQueryString(data)}`;
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Usage</h2>
      <p>Copy URL or Example and add it to the page.</p>
      <div>
        <h3 className="text-lg font-bold">URL</h3>
        <CodeBox contents={apiUrl} />
        <h4 className="text-lg font-bold">HTML Example</h4>
        <CodeBox
          contents={`<a href="${URL}">\n    <img src="${apiUrl}" alt="dday-widget.svg" />\n  </a>`}
        />
        <h4 className="text-lg font-bold">Markdown Example</h4>
        <CodeBox contents={`[![Moon.svg](${apiUrl})](${URL})`} />
      </div>
    </div>
  );
}

export default UsageView;
