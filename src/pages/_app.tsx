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
      <Script id="hotjar">
        {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3687975,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </Script>
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
