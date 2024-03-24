import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default class MyDocument extends Document {
  render() {
    const theme_color = '#5982f6';
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />

          <meta name="application-name" content="XIRR Calculator 📈" />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />

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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};
