import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GC Invitational</title>
        <link rel="icon" href="/favicon.ico" />
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
