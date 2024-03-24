import Head from 'next/head';
import Link from 'next/link';
import HeaderNew from '../components/HeaderNew';
import FindMyXirr from '../components/FindMyXirr';
import { Typography } from 'antd';

const title = 'Online XIRR Calculator | Simple, secure & free';
const description = "Calculate XIRR by entering cashflow amounts & corresponding dates to XIRR calculator. Also learn about XIRR and its importance";
const websiteUrl = "https://xirr.pgxplorer.dev/xirr-calculator";
const imagePath = "static/images/logo.png";

const XirrCalulator = () => (
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
      <HeaderNew />
      <div className="mb-16" />
      <FindMyXirr />

      <div className="mb-16" />
      <div className="mb-16" />

      <section style={{ width: 'min(100%, 600px)', maxWidth: 'calc(100vw - 24px)', margin: '0 auto' }}>
        <Typography.Title level={5}>How to use this XIRR calculator?</Typography.Title>
        <Typography.Text>
          <ul>
            For each relevant cashflow, enter transaction amount and corresponding date.
            <li>Inflow amounts should have minus sign (-)</li>
            <li>Outflow amounts should have minus sign (-)</li>
            <li>If the portfolio is not completed sold, add current portfolio value as an outflow</li>
          </ul>
        </Typography.Text>

        <Typography.Title level={5}>What is XIRR?</Typography.Title>
        <Typography.Text>XIRR is a financial metric used to calculate growth of a portfolio (could be an investment or a liability) that involve uneven cashflow. It gives you a clearer picture of how your money is working for you over time.</Typography.Text>

        <Typography.Title level={5}>Why is that important?</Typography.Title>
        <Typography.Text>Because there is time value of money. A hundred dollars invested today is worth more than a hundred dollars invested a year from now. XIRR takes this "time value of money" into account, giving you a more accurate annualized return rate. This lets you compare different investment strategies – Lumpsum vs SIP.</Typography.Text>

        <Typography.Title level={5}>Absolute Return vs CAGR vs XIRR</Typography.Title>
        <Typography.Text>
          In short,
          <ul>
            <li>Absolute returns does not consider time</li>
            <li>CAGR calculates annualized returns, but considers that all the investments were done at the start of the duration and all withdrawals were at the end. It works best when there are only two transaction entry - one investment, one withdrawal.</li>
            <li>IRR takes time into account, but works when all the portfolio transaction are <em>periodic</em>. Eg. a SIP investment, or a loan</li>
            <li>XIRR considers timing for all individual transactions in a portfolio, including irregular timing</li>
          </ul>
          To understand the differences and calculations with example, <Link href="https://bit.ly/xirr-guide">continue reading</Link>.
        </Typography.Text>

        <Typography.Title level={5}>Why use our XIRR calculator?</Typography.Title>
        <Typography.Text>It's a simple & free calculator that computes XIRR in your browser, with no data is sent to the server.</Typography.Text>
      </section>

      <div className="mb-16" />
      <div className="mb-16" />

      <footer style={{ width: 'min(100%, 550px)', maxWidth: 'calc(100vw - 24px)', margin: '128px auto 36px', textWrap: 'balance', textAlign: 'center' }}>
        <Typography.Text type='secondary'>Built by <Link href="https://pgxplorer.dev">Pratik Gadhiya</Link>. Are you also interest in personal&nbsp;finance?</Typography.Text>
      </footer>
    </div>
  </>
);

export default XirrCalulator;
