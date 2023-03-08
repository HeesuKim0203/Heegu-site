import Head from 'next/head'

import Header from 'common/Header'
import Footer from 'common/Footer'

import BlogContents from 'common/BlogContents'

export default function Blog() {
  return (
    <>
      {/* Meta Data */}
      <Head>
      </Head>
      {/* Pages rendering -> Main Object */}
      <main>
        <Header />
        <BlogContents />
        <Footer />
      </main>
    </>
  )
}
