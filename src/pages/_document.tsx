import { Head, Html, Main, NextScript } from 'next/document';

import translations from '../../public/locales/ua.json';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VARIFICATION_ID} />
        <meta property="og:title" content={translations['НАЗВА СТОРІНКИ']}/>
        <meta property="og:description" content={translations['КОРОТКИЙ ОПИС СТОРІНКИ']}/>
        <meta property="og:image" content="/android-chrome-512x512.png"/>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_HOME_URL}/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
