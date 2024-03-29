// pages/_app.tsx

import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app'; // Import AppProps

function MyApp({ Component, pageProps }: AppProps) { // Use the AppProps type here
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
