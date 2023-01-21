import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
// import Layout from '../components/Layout';

export default function App({
      Component,
      pageProps: { session, ...pageProps },
    }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
