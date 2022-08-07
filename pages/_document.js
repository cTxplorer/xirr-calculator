import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    const theme_color = '#5982f6';
    return (
      <Html lang="en">
        <Head>

          <meta charSet="UTF-8" />

          <meta name="application-name" content="XIRR Calculator 📈" />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico"></link>

          <link rel="canonical" href="http://xirr.pgxplorer.dev"></link>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color={theme_color} />

          <meta name="theme-color" content={theme_color} />
          <meta name="msapplication-TileColor" content={theme_color} />

          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="XIRR Calculator 📈" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* Primary Meta Tags */}
          <meta name="title" content="XIRR Calculator 📈" />
          <meta name="description" content="" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://xirr.netlify.app/" />
          <meta property="og:title" content="XIRR Calculator 📈" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="static/images/logo.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://xirr.netlify.app/" />
          <meta property="twitter:title" content="XIRR Calculator 📈" />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="static/images/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
