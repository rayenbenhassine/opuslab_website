import {
  useTranslations,
  lg,
  Image,
  rectangleBlueCircles,
  bag,
  twoYellowLines,
  triangleBottomCircles,
  arrowZigzag,
  quaterCircle,
  yellowPentagone,
  RightRocket,
  Aos,
} from '..'
import { useEffect } from 'react'

import BusinessForm from '../forms/BusinessForm'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function Business() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  const t = useTranslations('opusBusiness.businessForm')
  const size = useScreenSize()
  return (
    <section
      className="relative bg-lightGrey  py-[12vw] lg:bg-darkBlue"
      id="business"
    >
      <div
        data-aos={size.width >= lg && 'zoom-in'}
        className="mx-auto flex w-[60vw] flex-col pt-10 lg:w-[50vw]"
      >
        <div className="rounded-xl bg-cian py-4 pb-8">
          <h2 className="text-center font-robotoBold text-3xl font-bold text-lightGrey">
            {t('title')}
          </h2>
        </div>
        <BusinessForm />
      </div>
      {/* <div className=" absolute hidden lg:right-0 lg:bottom-[-0.5vw] lg:block lg:w-[20%]">
        <Image src={yellow_Line} alt="yellow Line" objectFit="contain" />
      </div> */}
      <div className="absolute hidden lg:bottom-0 lg:left-0 lg:block lg:w-[26%]">
        <Image
          src={rectangleBlueCircles}
          alt="rectangle Blue Circles"
          objectFit="contain"
        />
      </div>
      <div className=" absolute hidden animate-bounce lg:bottom-[10vw] lg:right-[12vw] lg:block lg:w-[9%]">
        <Image src={bag} alt="bag" objectFit="contain" />
      </div>
      <div className=" absolute hidden lg:top-[10vw] lg:right-0 lg:block lg:w-[5%]">
        <Image
          src={twoYellowLines}
          alt="two Yellow Lines"
          objectFit="contain"
        />
      </div>
      <div className=" absolute hidden lg:top-[-0.5vw] lg:left-0 lg:block lg:w-[10.7vw]">
        <Image
          src={triangleBottomCircles}
          alt="triangleBottomCircles"
          objectFit="contain"
        />
      </div>
      <div className="absolute bottom-[-1vw] right-0 w-[10vw] lg:hidden ">
        <Image src={quaterCircle} alt="quater Circle" objectFit="contain" />
      </div>
      <div className=" absolute left-[5vw] bottom-[50vw] w-[8vw] lg:hidden ">
        <Image src={arrowZigzag} alt="arrow Zigzag" objectFit="contain" />
      </div>
      {/* <div className=" absolute right-0 bottom-[-1.5vw] w-[20vw] lg:hidden ">
        <Image src={pink_line} alt="pink line" objectFit="contain" />
      </div> */}
      <div className=" absolute left-[13vw] top-[60vw]  lg:hidden ">
        <Image src={yellowPentagone} alt="pink line" objectFit="contain" />
      </div>
      <div className="  absolute bottom-0 left-0 w-[20%] lg:hidden">
        <Image
          src={rectangleBlueCircles}
          alt="rectangle Blue Circles"
          objectFit="contain"
        />
      </div>
      <div className=" absolute right-[5vw] bottom-[20vw]  w-[8%] lg:hidden">
        <Image src={RightRocket} alt="pink line" objectFit="contain" />
      </div>
    </section>
  )
}
