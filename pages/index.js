import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GC Invitational</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <main>
        <Header title="GC Invitational" />
        <p className="description">
          May 19-22, 2022 &mdash; Scottsdale, AZ
        </p>
      </main>

      <Footer />
    </div>
  )
}
