import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Footer from '../components/sections/Footer'
import NavBar from '../components/nav/NavBar'
import { ContactOpus } from '../components'
import SocialMedia from 'components/asides/SocialMedia'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <ContactOpus />
      <SocialMedia />
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
