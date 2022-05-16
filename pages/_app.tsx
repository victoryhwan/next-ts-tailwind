import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout'
import type {AppProps} from 'next/app'
import '../styles/globals.css';
import { GetStaticPaths, GetStaticProps } from 'next';

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
    <Component {...pageProps} />
  )
}

export default MyApp

