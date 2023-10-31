import { Head, Html, Main, NextScript } from 'next/document';

import translations from '../../public/locales/ua.json';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="google-site-verification" content="WBSlXwpNU39dvsWbIYk2h9_85iSO31ZrqqcP_7d4jOs" />
        <meta property="og:title" content={translations['НАЗВА СТОРІНКИ']}/>
        <meta property="og:image" content="/images/auto-1.webp"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
