import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import NavBar from '../components/nav/NavBar'
import SocialMedia from '../components/asides/SocialMedia'
import SkillsDescription from '../components/sections/SkillsDescription'
import Dragons from 'components/sections/Dragons'
import NewDigitalSkills from 'components/sections/NewDigitalSkills'
import Footer from 'components/sections/Footer'
import EvolveSkills from 'components/sections/EvolveSkills'

export default function Trainings() {
  return (
    <>
      <Head>
        <title>Trainings</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <SocialMedia />
      <div className="hidden lg:block">
        <SkillsDescription />
      </div>
      <div className="lg:hidden">
        <EvolveSkills />
      </div>
      <Dragons /> {/* // TODO: to fix later */}
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
