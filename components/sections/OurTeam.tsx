import {
  team1,
  team2,
  team3,
  useTranslations,
  Image,
  TeamMembers,
  ourTeamPoints,
  teamRectangle,
  rightPointsSide,
  yellowLine2,
  quaterCircle,
  points,
  React,
  halfSemiCircle,
  teamPoints,
  ImageCard,
  fiveLinesTriangleSidePoints,
  blueHalfRectangle,
  Slider,
  Link,
  lg,
  Aos,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function OurTeam() {
  const t = useTranslations('teamPower.OurTeam')
  const size = useScreenSize()
  const images = [team1, team1, team1, team1, team1, team1]
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <>
      <section className="relative z-0 hidden py-[10vw] px-[10vw] lg:block lg:bg-lightGrey">
        <div className="absolute right-0 top-[4vw] w-[6vw]">
          <Image src={ourTeamPoints} alt="team points" objectFit="contain" />
        </div>
        <div className="absolute right-[7vw] top-[22vw] -z-10 w-[18vw]">
          <Image src={teamRectangle} alt="team rectangle" objectFit="contain" />
        </div>
        <div className=" absolute right-0 top-[23vw] w-[3vw]">
          <Image
            src={rightPointsSide}
            alt="rightPointsSide"
            objectFit="contain"
          />
        </div>
        <div className="absolute right-0 top-[55vw] w-[7vw] ">
          <Image src={yellowLine2} alt="yelllowLine" objectFit="contain" />
        </div>

        <div className="absolute -bottom-[1vw] right-0 w-[10%]">
          <Image src={quaterCircle} alt="quaterCircle" objectFit="contain" />
        </div>
        <div className="absolute left-0 bottom-[4vw] w-[4vw]">
          <Image src={points} alt="points" objectFit="contain" />
        </div>
        <div className="absolute -bottom-[1vw] left-0 w-[12vw]">
          <Image src={yellowLine2} alt="yellowLine" objectFit="contain" />
        </div>

        <h1 className="mb-[5vw] lg:text-center lg:font-robotoBold lg:text-[3.5vw] lg:font-bold lg:text-darkBlue">
          {t('title')}
        </h1>
        <div className="mx-auto grid grid-flow-col grid-rows-2 place-items-center gap-[2vw]">
          {images.map((image, key) => {
            return (
              <div
                data-aos={size.width >= lg && 'fade-up'}
                key={key}
                data-aos-delay={key * 200}
              >
                <ImageCard key={key} image={image} />
              </div>
            )
          })}
        </div>
        <button className="mx-auto mt-[5vw] block w-max bg-pink px-[4vw] py-[1vw] text-white">
          {t('button')}
        </button>
      </section>

      <section className="relative z-0 block bg-lightGrey px-[20vw] py-[8vw] text-[5vw] lg:hidden lg:border-t-4 lg:bg-lightGrey lg:px-[4vw] lg:py-[4vw] lg:pl-[6vw]">
        <div className="absolute -left-1/3 -top-1 bottom-0 right-1/3 -z-10 -skew-x-[20deg] bg-darkBlue"></div>

        <div className="absolute top-[1vw] right-[3vw] w-[6%] lg:absolute ">
          <Image src={teamPoints} alt="team points" objectFit="contain" />
        </div>
        <div className="absolute right-0 top-[2vw] -z-10 w-[12%]">
          <Image src={teamRectangle} alt="team rectangle" objectFit="contain" />
        </div>

        <h1 className="mb-[6vw] text-center font-robotoBold text-lightBlue lg:ml-32 lg:text-left lg:font-robotoBold lg:text-[3.5vw] lg:text-lightBlue">
          {t('title')}
        </h1>
        <div className="flex justify-center">
          <div className="w-[70vw]">
            {/*small devices */}
            <Slider
              buttonLeftStyle="bg-lightBlue hover:bg-yellow h-max my-auto rounded-full text-white text-[4vw]"
              buttonRightStyle="bg-pink h-max hover:bg-yellow  my-auto rounded-full text-white text-[4vw]"
            >
              {images.map((image, key) => {
                return <ImageCard image={image} key={key} />
              })}
            </Slider>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:gap-[5vw]">
          {images.map((image, key) => {
            return <ImageCard image={image} key={key} />
          })}
        </div>
        <div className="flex justify-center">
          <Link href="./opus-business/#business">
            <button className="z-10 mt-[5vw] bg-pink py-[1vw] px-[8vw] font-roboto text-[2vw] tracking-wider text-white hover:bg-lightBlue lg:mt-[5vw] lg:px-[5vw] lg:py-[1vw] lg:text-[1.5vw] ">
              {t('button')}
            </button>
          </Link>
        </div>
        <div className="hidden w-[12vw] lg:absolute lg:right-0 lg:bottom-[-2vw] lg:block ">
          <Image
            src={halfSemiCircle}
            objectFit="contain"
            alt="half semi circle"
          />
        </div>
        <div className=" absolute bottom-0  left-0 w-[20vw] lg:z-[-10] lg:w-[25vw]  ">
          <Image
            src={fiveLinesTriangleSidePoints}
            objectFit="contain"
            alt="five lines triangle side points"
          />
        </div>
        <div className="hidden w-[8vw] lg:absolute lg:left-[3vw] lg:bottom-[-2vw] lg:block ">
          <Image
            src={blueHalfRectangle}
            objectFit="contain"
            alt="blue half rectangle"
          />
        </div>
      </section>
    </>
  )
}
