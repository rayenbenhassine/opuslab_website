import Courses from '../../components/sections/Courses'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Footer from '../../components/sections/Footer'
import NavBar from '../../components/nav/NavBar'
import SocialMedia from 'components/asides/SocialMedia'
import Goals from 'components/sections/Goals'
import TrackingSystem from 'components/sections/TrackingSystem'
import GlowingDay from 'components/sections/GlowingDay'
import ValidateProject from 'components/sections/ValidateProject'
import Opusiens from 'components/sections/Opusiens'
import Payment from 'components/sections/Payment'
import Introduction from 'components/sections/Introduction'
import { getAllTrainingsIds, getTrainingData } from 'lib/api'

export default function DevWeb({ trainingData }: any) {
  return (
    <>
      <Head>
        <title>Opus lab</title>
        <link rel="icon" href="/images/opus_logo.ico" />
      </Head>
      <NavBar />
      <Introduction
        label={trainingData.label}
        subDescription={trainingData.subDescription}
        duration={trainingData.duration}
        schedule={trainingData.schedule}
        mode={trainingData.mode}
      />
      <Courses
        courses={trainingData.courses}
        person={trainingData.person}
        salary={trainingData.salary}
      />
      <Goals goals={trainingData.objectifs} />
      <TrackingSystem />
      <GlowingDay />
      <ValidateProject />
      <Opusiens />
      <Payment />
      <SocialMedia />
      <Footer />
    </>
  )
}

export async function getStaticProps({
  locale,
  params,
}: {
  locale: GetStaticPropsContext
  params: any
}) {
  const trainingData = await getTrainingData(params.pathName)
  return {
    props: {
      trainingData: trainingData,
      messages: (await import(`/lang/${locale}.json`)).default,
    },
  }
}

export async function getStaticPaths() {
  const paths = await getAllTrainingsIds()
  return {
    paths,
    fallback: false,
  }
}
