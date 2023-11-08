import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// eslint-disable-next-line camelcase
import { Noto_Sans } from 'next/font/google';
import Script from 'next/script';

import RootLayout from '@/components/layout';

const font = Noto_Sans({
  weight: ['200', '300', '400', '600'],
  subsets: ['cyrillic'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());

             gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
         `}
      </Script>
      <div className={`${font.className} app`}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </>
  );
}
