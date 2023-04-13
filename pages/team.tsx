import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Footer from '../components/sections/Footer'
import Instructor from '../components/sections/Instructor'
import NavBar from '../components/nav/NavBar'
import SocialMedia from '../components/asides/SocialMedia'
import TeamPower from '../components/sections/TeamPower'
import Dragons from '../components/sections/Dragons'
import OurTeam from 'components/sections/OurTeam'

export default function OpusTeam() {
  return (
    <>
      <Head>
        <title>Opus team</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <SocialMedia />
      <TeamPower />
      <OurTeam />
      <Dragons />
      <Instructor />
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
