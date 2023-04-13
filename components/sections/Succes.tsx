import {
  useTranslations,
  Image,
  shapes,
  React,
  succesMan,
  leftSidePoints,
  Aos,
  lg,
  blueStripedLines,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function Succes() {
  const t = useTranslations('Apropos.succes')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className="relative flex flex-col-reverse  bg-darkBlue px-[10vw] pt-[8vw] lg:relative lg:flex-row lg:gap-[5vw] lg:px-[5vw]">
      <div className="absolute left-0 top-[5vw] w-[4vw]">
        <Image src={blueStripedLines} alt="shapes" objectFit="contain" />
      </div>
      <div
        data-aos={size.width >= lg && 'fade-right'}
        className=" buttom-0 absolute right-0  w-[38vw]"
      >
        <Image src={succesMan} alt="succesMan" objectFit="contain" />
      </div>
      <div className="absolute left-0 bottom-0 w-[5vw]">
        <Image src={leftSidePoints} alt="leftSidePoints" objectFit="contain" />
        **
      </div>
      <div
        data-aos={size.height >= lg && 'zoom-out-left'}
        data-aos-delay={800}
        className="w-[50vw] lg:mb-[15vw] lg:w-[40vw]"
      >
        <h1 className="mb-[3vw]  font-robotoBold text-[4.7vw] leading-tight text-white lg:text-[3.5vw]">
          {t('title')}
          <br /> {t('title2')}
        </h1>
        <p className="mb-[3vw] font-robotoLight text-[2vw] leading-relaxed tracking-widest text-lightGrey lg:text-[1.5vw]">
          {t('description')}
        </p>
        <button className="bg-pink py-[1vw] px-[4vw] text-[1.5vw] font-bold tracking-widest text-white hover:bg-lightBlue">
          {t('button')}
        </button>
      </div>
    </section>
  )
}
