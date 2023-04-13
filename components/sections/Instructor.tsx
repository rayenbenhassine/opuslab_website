import InstructorForm from '../forms/InstructorForm'
import {
  Image,
  yellowPoints,
  rectangleBlueCircles,
  arrowZigzag,
  darkQuaterCircle,
  pink_line,
  yellowLine2,
  yellowRectangle,
  yellow_rectangle,
  //yellow_Line,
  RightRocket,
  rocket,
  rocketTop,
  shapes,
  shapeLine,
  rightSidePoints,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function Instructor() {
  const size = useScreenSize()
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section
      className="relative bg-gray-100 py-[12vw] pl-[20vw]"
      id="instructor"
    >
      <div data-aos={size.width >= lg && 'zoom-in'}>
        <InstructorForm />
      </div>

      <div className=" absolute left-0 bottom-[30vw] w-[5vw] lg:bottom-[15vw] lg:block  lg:w-[8%]">
        <Image src={yellowPoints} alt="yellow Points" objectFit="contain" />
      </div>
      <div className=" absolute hidden lg:bottom-0 lg:left-[5vw] lg:block lg:w-[22%]">
        <Image
          src={rectangleBlueCircles}
          alt="rectangle Blue Circles"
          objectFit="contain"
        />
      </div>
      <div className=" absolute bottom-[50vw] left-[7vw] w-[8vw] lg:bottom-[30vw] lg:left-[8vw] lg:block lg:w-[10%]">
        <Image src={arrowZigzag} alt="arrow Zigzag" objectFit="contain" />
      </div>
      <div className="  absolute bottom-0 right-0 w-[20vw] lg:block lg:w-[20%]">
        <Image
          src={darkQuaterCircle}
          alt="dark Quater Circle"
          objectFit="contain"
        />
      </div>

      {/* <div className=" absolute hidden lg:right-0 lg:top-[-0.5vw] lg:block lg:w-[20%]">
        <Image src={yellow_Line} alt="yellow Line" objectFit="contain" />
      </div> */}
      <div className=" hidden lg:absolute lg:top-[-0.5vw] lg:left-0 lg:block lg:w-[20%]">
        <Image src={pink_line} alt="pink_line" objectFit="contain" />
      </div>
      <div className=" hidden lg:absolute  lg:right-[5vw] lg:bottom-[25vw] lg:block lg:w-[8%] ">
        <Image src={rocketTop} alt="pink_line" objectFit="contain" />
      </div>

      <div className=" hidden lg:absolute lg:right-0 lg:top-[3vw] lg:block lg:w-[6%]">
        <Image src={rightSidePoints} alt="pink_line" objectFit="contain" />
      </div>
    </section>
  )
}
