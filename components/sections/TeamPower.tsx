import {
  useTranslations,
  Image,
  RightRocket,
  lamp,
  leftSideCircles,
  rightTopCircles,
  teamPower,
  pinkSquare,
  yellow_rectangle,
  quaterCircle,
  fourLinePoints,
  rocketTop,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function OpusLabBusiness() {
  const t = useTranslations('teamPower.teamPower')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className="relative z-0 flex bg-darkBlue px-[5vw] pt-[15vw] pb-[10vw] font-roboto">
      <div
        className="flex justify-center gap-[5vw]"
        data-aos={size.width >= lg && 'fade-down-right'}
      >
        <div className=" w-[55vw]  text-justify   leading-3 ">
          <h1 className="font-robotoBold text-[4vw] text-lightBlue lg:text-[3vw]">
            {t('title')}
          </h1>
          <p className="mt-[2vw] font-roboto text-[2vw] leading-relaxed text-white lg:my-[2vw] lg:text-[2vw]">
            {t('description')}
          </p>
          <p className=" mb-[4vw] text-justify font-roboto text-[2vw] text-turquoise lg:text-[2vw]">
            {t('question')}
          </p>
          <button className="bg-pink px-[4vw] py-[1vw] font-roboto text-[2vw] text-white hover:bg-lightBlue lg:text-[1.5vw]">
            {t('button')}
          </button>
        </div>

        <div
          data-aos={size.width >= lg && 'fade-down-left'}
          className=" flex w-[40%]  "
        >
          <Image src={teamPower} alt="opusLab" objectFit="contain" />
          <div className="mt-[12vw] h-[50%] w-[2vw] bg-yellow"></div>
        </div>
      </div>
      <div className="hidden lg:absolute lg:right-[3vw] lg:top-[20vw] lg:block lg:w-[3vw]">
        <Image src={lamp} alt=" leftQuaterCircle" objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:bottom-[13vw] lg:right-0 lg:block lg:w-[1.5vw]">
        <Image src={pinkSquare} alt=" darkQuaterCircle" objectFit="contain" />
      </div>
      <div className="hidden animate-bounce lg:absolute lg:bottom-0 lg:right-[55vw] lg:block lg:w-[10vw]">
        <Image src={rocketTop} alt="rocket" objectFit="contain" />
      </div>
      <div className="absolute right-0 bottom-0 w-[8vw] lg:w-[12vw]">
        <Image src={quaterCircle} alt=" darkQuaterCircle" objectFit="contain" />
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
