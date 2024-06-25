import '../styles/globals.css'
import Layout from '../components/Layout';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


function MyApp({ Component, pageProps }) {
    return (
      <ClerkProvider {...pageProps}>
          
          <Layout><Component {...pageProps} /></Layout>
        
      </ClerkProvider>
    )
  }

export default MyApp