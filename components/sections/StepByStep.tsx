import {
  useTranslations,
  Image,
  threeLineLeftSidePoints,
  rectangle_yellow,
  whitePoints,
  GIRL,
  stripedBlueLine,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function YourEvolution() {
  const t = useTranslations('about.stepByStep')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className=" relative z-0 bg-lightBlue py-[5vw]">
      <div
        data-aos-delay="800"
        data-aos={size.width >= lg && 'fade-right'}
        data-aos-easing="ease-out-cubic"
        className="mb-[5vw] ml-[3vw] flex  w-[60vw] flex-col lg:ml-[12vw] lg:w-[45vw]"
      >
        <h1 className="font-robotoBold  text-[5vw] leading-10 text-white lg:text-[5vw] lg:leading-none">
          {t('title')}
        </h1>
        <p className="mb-[3vw] font-robotoLight text-[2vw] leading-relaxed tracking-widest text-darkBlue lg:text-[1.5vw]">
          {t('description')}
        </p>
        <button className="w-max bg-pink py-[1vw] px-[4vw] text-[1.5vw] font-bold tracking-widest text-white hover:bg-lightBlue">
          {t('button')}
        </button>
      </div>
      <div
        data-aos={size.width >= lg && 'fade-left'}
        className=" absolute bottom-[-2vw] right-0  z-0 w-[38%] lg:w-[53%]"
      >
        <Image src={GIRL} alt=" darkQuaterCircle" objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:left-0 lg:bottom-1 lg:block lg:w-[5vw]">
        <Image
          src={threeLineLeftSidePoints}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="hidden lg:absolute lg:bottom-[-1.5vw] lg:right-0 lg:block lg:w-[20vw]">
        <Image
          src={rectangle_yellow}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="-z-10 hidden lg:absolute lg:bottom-[3vw] lg:right-0 lg:block lg:w-[9vw]">
        <Image src={whitePoints} alt=" darkQuaterCircle" objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:top-[3vw] lg:left-0 lg:block lg:w-[5vw]">
        <Image
          src={stripedBlueLine}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
    </section>
  )
}
