import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  //   const sheet = new ServerStyleSheet();
  //   const page = renderPage(
  //     (App) => (props) => sheet.collectStyles(<App {...props} />)
  //   );
  //   const styleTags = sheet.getStyleElement();
  //   return { ...page, styleTags };
  // }

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-CA">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
