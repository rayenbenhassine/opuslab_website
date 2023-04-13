import {
  useTranslations,
  opusLab,
  Image,
  fourLinePoints,
  quaterCircle,
  lamp,
  pinkSquare,
  rocketTop,
  rightTopCircles,
  Link,
  Aos,
  lg,
} from '..'
import React, { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function OpusLab() {
  const t = useTranslations('Apropos.opusLab')
  const size = useScreenSize()
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className="relative z-0 justify-center gap-[5vw] bg-darkBlue py-[14vw] px-[8vw] lg:flex">
      <div className="gap-[5vw] lg:flex lg:justify-center">
        <div
          data-aos={size.width >= lg && 'fade-right'}
          className="w-[55vw]  text-justify  leading-3  lg:w-[40vw]"
        >
          <h1 className="mb-[5vw] font-robotoBold text-[4vw] text-lightBlue lg:text-[3.5vw]">
            {t('title')}
          </h1>
          <p className="mt-8 mb-[1vw] font-roboto text-[2vw] leading-relaxed text-white lg:mb-[5vw] lg:text-[1.4vw]">
            {t('description')}
          </p>
          <ul className="mb-[5vw] hidden list-inside list-disc font-roboto text-[1.4vw] leading-tight text-lightBlue lg:block">
            <li>{t('departements.departement1')}</li>
            <li>{t('departements.departement2')}</li>
            <li>{t('departements.departement3')}</li>
            <li>{t('departements.departement4')}</li>
          </ul>
          <Link href="./opus-business/#business">
            <button className=" bg-pink py-[1vw]  px-[5vw] text-[1.5vw] font-bold text-white hover:bg-lightBlue">
              {t('button')}
            </button>
          </Link>
        </div>
        <div className="hidden    lg:flex">
          <div
            data-aos={size.width >= lg && 'fade-left'}
            className="  lg:w-[90%]"
          >
            <Image src={opusLab} alt="opusLab" objectFit="contain" />
          </div>
          <div className="lg:mt-[8vw] lg:h-[30vh] lg:w-[1vw] lg:bg-lightBlue"></div>
        </div>
      </div>

      <div className="hidden animate-ping lg:absolute lg:right-[3vw] lg:top-[20vw] lg:block lg:w-[3vw]">
        <Image src={lamp} alt=" leftQuaterCircle" objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:bottom-[13vw] lg:right-0 lg:block lg:w-[1.5vw]">
        <Image src={pinkSquare} alt=" darkQuaterCircle" objectFit="contain" />
      </div>
      <div className="absolute right-0 bottom-0 w-[8vw]   lg:w-[12vw]">
        <Image src={quaterCircle} alt=" darkQuaterCircle" objectFit="contain" />
      </div>
      <div className="absolute bottom-[15vw] right-[20vw] w-[8vw]  animate-bounce lg:bottom-[4vw] lg:right-[50vw] lg:w-[6vw]                                                              ">
        <Image src={rocketTop} alt="rocket" objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:bottom-0  lg:left-0 lg:-z-10 lg:block lg:w-[18vw]">
        <Image src={fourLinePoints} alt="rocket" objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:top-[1vw]  lg:right-0 lg:-z-10 lg:block lg:w-[18vw]">
        <Image src={rightTopCircles} alt="rocket" objectFit="contain" />
      </div>
    </section>
  )
}
