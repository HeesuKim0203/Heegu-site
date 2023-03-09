import Head from 'next/head'

import Header from 'common/Header'
import Footer from 'common/Footer'

import Home from 'common/Home'

export default function Index() {
  return (
    <>
      {/* Meta Data */}
      <Head>
      </Head>
      {/* Pages rendering -> Main Object */}
      <main>
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  )
}
