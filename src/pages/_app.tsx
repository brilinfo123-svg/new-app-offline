import Header from '@/component/header';
import '@/styles/globals.css'; // Global CSS
import '../../public/font/css/fontello.css'; // Global CSS

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/* Ensuring the Header component is correctly rendered */}
      <Component {...pageProps} />
    </>
  );
}