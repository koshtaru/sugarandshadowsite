import type { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/Header.css'
import '../styles/Hero.css'
import '../styles/Services.css'
import '../styles/About.css'
import '../styles/Contact.css'
import '../styles/Footer.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
