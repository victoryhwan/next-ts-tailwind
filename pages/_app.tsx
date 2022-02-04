import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout'
import type {AppProps} from 'next/app'
import '../styles/globals.css';
import { GetStaticPaths, GetStaticProps } from 'next';

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

