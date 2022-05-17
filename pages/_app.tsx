import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout'
import type {AppProps} from 'next/app'
import '../styles/globals.css';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
/*
_app.tsx 파일에는 global css를 적용할 수 있다.
*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </ThemeProvider>
    <>
      <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="JustinTory Website"/>
          <meta name="keywords" content="nextjs,static,website" />
      </Head>
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp

