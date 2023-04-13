import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Footer from '../components/sections/Footer'
import NavBar from '../components/nav/NavBar'
import SocialMedia from '../components/asides/SocialMedia'
import YourEvolution from '../components/sections/YourEvolution'
import StepByStep from '../components/sections/StepByStep'
import NewDigitalSkills from '../components/sections/NewDigitalSkills'
import Opusiens from '../components/sections/Opusiens'
import OpusLab from '../components/sections/OpusLab'
import OurValues from '../components/sections/OurValues'
import Succes from '../components/sections/Succes'
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <OpusLab />
      <OurValues />
      <SocialMedia />
      <YourEvolution />
      <Succes />
      <StepByStep />
      <Opusiens />
      <NewDigitalSkills />
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
