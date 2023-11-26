import { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';

interface ILayout {
  children?: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Head>
        <title>App Adventures</title>
        <link rel="icon" type="image/svg+xml" href="../public/favicon.svg" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
