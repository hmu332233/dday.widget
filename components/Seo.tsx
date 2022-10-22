import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

type Props = {};

function Seo({}: Props) {
  return (
    <>
      <Head>
        <title>D-Day.widget</title>
        <meta
          name="description"
          content="Add D-Day widget to anywhere, such as your Github Profile, Notion, etc"
        />
        <meta name="keywords" content="D-Day,widget,github,notion" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="D-Day.widget" />
        <meta
          property="og:description"
          content="Add D-Day widget to anywhere, such as your Github Profile, Notion, etc"
        />
        {/* <meta property="og:image" content=""/> */}
        <meta property="og:url" content="https://dday-widget.minung.dev" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XS51JN8JHW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XS51JN8JHW');
        `}
      </Script>
    </>
  );
}

export default Seo;
