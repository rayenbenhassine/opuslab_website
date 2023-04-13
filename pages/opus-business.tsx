import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Footer from '../components/sections/Footer'
import Business from '../components/sections/Business'
import NavBar from '../components/nav/NavBar'
import SocialMedia from '../components/asides/SocialMedia'
import OpusLabBusiness from '../components/sections/OpusBusiness'
import Dragons from '../components/sections/Dragons'
export default function OpusBusiness() {
  return (
    <>
      <Head>
        <title>Opus business</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <SocialMedia />
      <OpusLabBusiness />
      <Business />
      <Dragons />
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default,
    },
  }
}
