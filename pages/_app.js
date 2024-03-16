import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import '../static/css/variables.css';
import '../static/css/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>XIRR Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
