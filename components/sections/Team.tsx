import {
  Image,
  team1,
  team2,
  team3,
  teamPoints,
  teamRectangle,
  useTranslations,
  ImageCard,
  Slider,
  halfSemiCircle,
  blueHalfRectangle,
  fiveLinesTriangleSidePoints,
  Link,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function Team() {
  const size = useScreenSize()

  const t = useTranslations('accueil.team')
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  const images = [team1, team1, team1]

  return (
    <section className="relative z-0 bg-lightGrey px-[20vw] py-[8vw] text-[5vw] lg:border-t-4 lg:bg-lightGrey lg:px-[4vw] lg:py-[4vw] lg:pl-[6vw]">
      <div className="absolute -left-1/3 -top-1 bottom-0 right-1/3 -z-10 -skew-x-[20deg] bg-darkBlue"></div>

      <div className="absolute top-[1vw] right-[3vw] w-[6%] lg:absolute ">
        <Image src={teamPoints} alt="team points" objectFit="contain" />
      </div>
      <div className="absolute right-0 top-[2vw] -z-10 w-[12%]">
        <Image src={teamRectangle} alt="team rectangle" objectFit="contain" />
      </div>

      <h1 className="mx-auto ml-[3vw] font-robotoBold  text-[7vw] text-lightBlue lg:text-[5vw]">
        {t('title')}
      </h1>
      <div className="flex justify-center">
        <div className="w-[40vw]">
          {/*small devices */}
          <Slider
            buttonLeftStyle="bg-lightBlue hover:bg-yellow  h-max my-auto rounded-full text-white text-[4vw]"
            buttonRightStyle="bg-pink hover:bg-yellow  h-max my-auto rounded-full text-white text-[4vw]"
          >
            {images.map((image, key) => {
              return <ImageCard image={image} key={key} />
            })}
          </Slider>
        </div>
      </div>

      <div className="mb-[5vw] hidden h-max lg:flex lg:justify-center lg:gap-[5vw]">
        {images.map((image, key) => {
          return (
            <div
              data-aos={size.width >= lg && 'fade-up'}
              key={key}
              data-aos-delay={key * 300}
            >
              <ImageCard image={image} />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <Link href="./team/#instructor">
          <button
            data-aos={size.width >= lg && 'zoom-in'}
            className="z-10 bg-pink py-[1vw] px-[8vw] font-roboto text-[2vw] tracking-wider text-white hover:bg-lightBlue  lg:px-[5vw] lg:py-[1vw] lg:text-[1.5vw] "
          >
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
  )
}
