import React from 'react';

type Props = {};

function SvgSkelton({}: Props) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" rx="22" fill="#080F1A"></rect>
    </svg>
  );
}

export default SvgSkelton;
