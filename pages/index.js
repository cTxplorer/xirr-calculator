import Head from 'next/head';
import AboutXIRR from '../components/AboutXIRR.js';
import Calculator from '../components/Calculator.js';
import Header from '../components/Header.js';
import Sidebar from '../components/Sidebar.js';
import Help from '../components/Help.js';
import Contribute from '../components/Contribute.js';

const title = 'XIRR Calculator 📈';
const description = "Use XIRR to calculate realistic returns for your portfolio. Upload Zerodha tradebook and find out your XIRR, securely.";
const websiteUrl = "https://xirr.pgxplorer.dev";
const imagePath = "static/images/logo.png";

const elementIdMap = {
  ABOUT_XIRR: 'xirr',
  CALCULATOR: 'calculator',
  FAQ: 'faq',
  CONTRIBUTE: 'contribute',
  HELP: 'help',
};

function HomePage() {
  return (
    <>
      <Head>
        <link rel="canonical" href={websiteUrl}></link>

        <title>{title}</title>

        {/* Primary Meta Tags */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePath} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={websiteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imagePath} />
      </Head>
      <div>
        <Header />

        <main className="fold">
          <Sidebar />

          <div className="content">

            <Calculator />
            <div className="mb-16" />

            <Help id={elementIdMap.HELP} />
            <div className="mb-16" />

            <AboutXIRR id={elementIdMap.ABOUT_XIRR} />
            <div className="mb-16" />

            <Contribute id={elementIdMap.CONTRIBUTE} />
            <div className="mb-16" />

          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;
