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
