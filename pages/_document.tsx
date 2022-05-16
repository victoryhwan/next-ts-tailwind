import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="JustinTory Website"/>
          <meta name="keywords" content="nextjs,static,website" />
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument