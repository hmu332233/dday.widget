import React from 'react';

type Props = {};

function Hits({}: Props) {
  return (
    <a href="https://hits.seeyoufarm.com">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        width="96"
        height="20"
        alt="hits"
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fdday-widget.minung.dev&count_bg=%2366CC8A&title_bg=%23333C4D&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"
      />
    </a>
  );
}

export default Hits;
