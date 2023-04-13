import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import SocialMedia from '../components/asides/SocialMedia'
import NavBar from '../components/nav/NavBar'
import Banner from '../components/sections/Banner'
import Dragons from '../components/sections/Dragons'
import EvolveSkills from '../components/sections/EvolveSkills'
import Footer from '../components/sections/Footer'
import NewDigitalSkills from '../components/sections/NewDigitalSkills'
import Opusiens from '../components/sections/Opusiens'
import Team from '../components/sections/Team'
import WhyOpus from '../components/sections/WhyOpus'
import Intercourse from '../components/sections/Intercourse'

export default function Accueil() {
  return (
    <>
      <Head>
        <title>Opus lab</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <Banner />
      <EvolveSkills />
      <Intercourse />
      <WhyOpus />
      <Opusiens />
      <Dragons />
      <Team />
      <NewDigitalSkills />
      <Footer />
      <SocialMedia />
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
