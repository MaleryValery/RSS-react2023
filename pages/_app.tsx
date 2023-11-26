import Layout from '@/components/Layout';
import { wrapper } from '@/redux/store';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default wrapper.withRedux(App);
