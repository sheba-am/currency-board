import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = 'Frontend Dev Task' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Currency project with CoinGecko API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <MobileNavbar />
      <DesktopNavbar />
      <main className=" mb-4">{children}</main>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
}
