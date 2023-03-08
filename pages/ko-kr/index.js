import Head from 'next/head'

import Header from 'common/Header'
import Footer from 'common/Footer'

import HomeContents from 'common/HomeContents'

export default function Home() {
  return (
    <>
      {/* Meta Data */}
      <Head>
      </Head>
      {/* Pages rendering -> Main Object */}
      <main>
        <Header />
        <HomeContents />
        <Footer />
      </main>
    </>
  )
}
