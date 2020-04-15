import NextDocument, { Main, NextScript, Head } from "next/document";
import ServerStyleSheets from "@material-ui/styles/ServerStyleSheets";

class MyDocument extends NextDocument {
  THEME_COLOr = "#000";

  static async getInitialProps(ctx) {
    const styleSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styleSheets.collect(<App {...props} />)
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      const finalInitProps = {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          styleSheets.getStyleElement()
        ]
      };
      return finalInitProps;
    } finally {
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
