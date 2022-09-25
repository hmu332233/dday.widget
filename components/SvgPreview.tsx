import React from 'react';

type Props = {
  data: SvgData;
};

const getDaysDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  Math.ceil((dateFinal.getTime() - dateInitial.getTime()) / (1000 * 3600 * 24));

function SvgPreview({ data: { date, text, subText } }: Props) {
  const dday =
    getDaysDiffBetweenDates(new Date(date as string), new Date()) - 1 || '-Day';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
    >
      <rect width="100%" height="100%" rx="22" fill="#080F1A" />
      <text
        x="50%"
        y="40"
        fill="white"
        font-size="24"
        font-family="Inter"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {text}
      </text>
      <text
        x="50%"
        y="50%"
        fill="white"
        font-size="48"
        font-family="Inter"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        D{dday}
      </text>
      <text
        x="50%"
        y="150"
        fill="white"
        font-size="16"
        font-family="Inter"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {subText}
      </text>
    </svg>
  );
}

export default SvgPreview;
