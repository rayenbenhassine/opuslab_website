import {
  darkQuaterCircle,
  Image,
  leftQuaterCircle,
  linesSidePoints,
  threeHorizontalCircles,
  useTranslations,
  NewsLetterForm,
  rocket2,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function NewDigitalSkills() {
  const t = useTranslations('accueil.newDigitalSkills')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className="relative py-[12vw] font-roboto" id="newDigitalSkills">
      <h1 className="text-center">
        <span className="text-[4vw] leading-[3vw] text-darkBlue">
          {t('title')} <br />
          {t('word')}{' '}
        </span>
        <span className="ml-[1vw] font-robotoBold text-[4vw] text-pink">
          {t('styledWord')}
        </span>
      </h1>
      <div data-aos={size.width >= lg && 'zoom-in'}>
        <NewsLetterForm />
      </div>

      <div className="hidden w-[22%] lg:absolute lg:top-[3%] lg:left-[-6%]">
        <Image
          src={threeHorizontalCircles}
          alt="threeHorizontalCircles"
          objectFit="contain"
        />
      </div>

      <div className="hidden w-[10%] lg:absolute lg:top-[12%] lg:right-0 lg:block">
        <Image
          src={linesSidePoints}
          alt="half side points"
          objectFit="contain"
        />
      </div>

      <div className="hidden w-[8%] lg:absolute lg:left-0 lg:bottom-[-0.5vw] lg:block">
        <Image
          src={leftQuaterCircle}
          alt=" leftQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="hidden w-[25%] lg:absolute lg:right-0 lg:bottom-[-1vw] lg:block">
        <Image
          src={darkQuaterCircle}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="absolute left-[3vw] top-[10vw] w-[12%] animate-bounce lg:top-[40%]  lg:left-[5%] lg:block">
        <Image src={rocket2} alt="rocket" objectFit="contain" />
      </div>
    </section>
  )
}
