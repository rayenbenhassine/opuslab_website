import {
  useTranslations,
  Image,
  RightRocket,
  lamp,
  leftSideCircles,
  rightTopCircles,
  opusBusiness,
  pinkSquare,
  yellow_rectangle,
  quaterCircle,
  triangleTopCircles,
  rocket,
  Link,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function OpusLabBusiness() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  const t = useTranslations('opusBusiness.opusBusiness')
  const size = useScreenSize()
  return (
    <section className="relative z-0 bg-darkBlue py-[12vw] lg:relative lg:font-roboto ">
      <div className="flex justify-center gap-[5vw] px-[4vw] lg:px-0">
        <div
          data-aos={size.width >= lg && 'fade-up-left'}
          className="flex w-[30%]"
        >
          <Image src={opusBusiness} alt="opusLab" objectFit="contain" />
          <div className="mt-[5vw] h-[50%] w-[2vw] bg-yellow"></div>
        </div>

        <div
          data-aos={size.width >= lg && 'fade-up-right'}
          className="w-[70vw] lg:w-[35vw]"
        >
          <h1 className="font-robotoBold text-[4vw] text-lightBlue lg:text-[3vw]">
            {t('title')}
          </h1>
          <p className="py-[3vw] text-justify font-roboto text-[2vw] leading-relaxed text-white lg:py-12 lg:text-2xl ">
            {t('description')}
          </p>
          <Link href="./contact">
            <button className="  bg-pink px-[1vw] py-[1vw] font-roboto text-[1vw] text-white hover:bg-lightBlue lg:text-[1.5vw]">
              {t('button')}
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:absolute lg:bottom-0 lg:left-0 lg:-z-10 lg:block lg:w-[23vw]">
        <Image src={triangleTopCircles} alt="threeHorizontalCircles" />
      </div>

      <div className=" hidden lg:absolute lg:top-0 lg:right-0 lg:-z-10 lg:block lg:w-[20vw]">
        <Image
          src={rightTopCircles}
          alt="half side points"
          objectFit="contain"
        />
      </div>
      <div className=" hidden animate-ping lg:absolute lg:right-[5vw] lg:top-[30vw] lg:block lg:w-[3vw]">
        <Image src={lamp} alt=" leftQuaterCircle" objectFit="contain" />
      </div>
      <div className=" hidden w-[10vw] animate-bounce   lg:absolute lg:right-[25vw] lg:bottom-[1vw] lg:block">
        <Image src={rocket} alt=" leftQuaterCircle" objectFit="contain" />
      </div>
      <div className=" hidden lg:absolute lg:right-0 lg:bottom-[10vw] lg:block lg:w-[1.5vw]">
        <Image src={pinkSquare} alt=" darkQuaterCircle" objectFit="contain" />
      </div>
      <div className="absolute right-0 bottom-0 w-[10vw]">
        <Image src={quaterCircle} alt=" darkQuaterCircle" objectFit="contain" />
      </div>
    </section>
  )
}
