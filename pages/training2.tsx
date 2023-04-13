import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Footer from '../components/sections/Footer'
import NavBar from '../components/nav/NavBar'
import SocialMedia from '../components/asides/SocialMedia'
import GlowingDay from '../components/sections/GlowingDay'
import ValidateProject from '../components/sections/ValidateProject'
import Opusiens from '../components/sections/Opusiens'
export default function Training() {
  return (
    <>
      <Head>
        <title>Opus lab</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <SocialMedia />
      <GlowingDay />
      <ValidateProject />
      <Opusiens />
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
