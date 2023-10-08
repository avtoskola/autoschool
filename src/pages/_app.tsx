import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// eslint-disable-next-line camelcase
import { Noto_Sans } from 'next/font/google';

import RootLayout from '@/components/layout';

const font = Noto_Sans({
  weight: ['200', '300', '400', '600'],
  subsets: ['cyrillic'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}
