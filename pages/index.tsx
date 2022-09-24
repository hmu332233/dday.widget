import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  {
    /* <svg width="199" height="199" viewBox="0 0 199 199" fill="none" xmlns="http://www.w3.org/2000/svg">

  <rect width="199" height="199" rx="22" fill="#080F1A"/>
</svg>  */
  }
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
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
        New Year
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
        D-365
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
        Days
      </text>
    </svg>
  );
};

export default Home;
