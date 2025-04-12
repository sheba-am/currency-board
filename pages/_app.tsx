import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import {ThemeProvider} from '@/contexts/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
