import {
  useTranslations,
  Image,
  leftTwoLinesPoints,
  littleBlueBar,
  man,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function YourEvolution() {
  const t = useTranslations('about.yourEvolution')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className="relative py-[8vw] pt-[12vw]">
      <div
        data-aos={size.width >= lg && 'fade-right'}
        className="ml-[3vw] w-[55vw] lg:mb-[15vw] lg:w-[40vw]"
      >
        <h1 className="mb-[3vw]  font-robotoBold text-[4.7vw] leading-tight text-darkBlue lg:text-[3.5vw]">
          {t('title')}
        </h1>
        <p className="mb-[3vw] font-robotoLight text-[2vw] leading-relaxed tracking-widest text-darkBlue lg:text-[1.5vw]">
          {t('description')}
        </p>
        <button className="bg-pink py-[1vw] px-[4vw] text-[1.5vw] font-bold tracking-widest text-white hover:bg-lightBlue">
          {t('button')}
        </button>
      </div>

      <div
        data-aos={size.width >= lg && 'fade-left'}
        data-aos-delay="800"
        data-aos-easing="ease-out-cubic"
        className=" absolute right-0 bottom-0 w-[45vw]"
      >
        <Image src={man} alt="darkQuaterCircle" objectFit="contain" />
      </div>
      <div className="absolute bottom-[-1%] left-0 hidden w-[10vw] lg:block">
        <Image
          src={littleBlueBar}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="absolute left-0 bottom-0 hidden w-[5vw] lg:block">
        <Image
          src={leftTwoLinesPoints}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
    </section>
  )
}
