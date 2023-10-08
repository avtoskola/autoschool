import React from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <>
      <Header/>
      <main className="mt-[76px] lg:mt-[150px]">
        {children}
      </main>
      <Footer/>
    </>
  );
}
