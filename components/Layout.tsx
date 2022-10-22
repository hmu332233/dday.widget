import Head from 'next/head';
import Script from 'next/script';

import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
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
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto grow flex flex-col items-center gap-y-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
