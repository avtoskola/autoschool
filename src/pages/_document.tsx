import { Head, Html, Main, NextScript } from 'next/document';

import translations from '../../public/locales/ua.json';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VARIFICATION_ID} />
        <meta property="og:title" content={translations['НАЗВА СТОРІНКИ']}/>
        <meta property="og:description" content={translations['КОРОТКИЙ ОПИС СТОРІНКИ']}/>
        <meta property="og:image" content="/images/auto-1.webp"/>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_HOME_URL}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
