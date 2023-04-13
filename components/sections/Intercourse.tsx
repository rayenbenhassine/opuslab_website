import RotatingCircle from 'components/shapes/RotatingCircle'
import {
  useTranslations,
  Image,
  lines,
  pinkQuaterCircle,
  blueLines,
  whiteBottomPoints,
  blue_rectangle,
  Link,
  Aos,
  lg,
} from '..'
import { useEffect, useState } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function Intercourse() {
  const size = useScreenSize()
  const [positions, setPositions] = useState([
    'purple',
    'turquoise',
    'pink',
    'lightBlue',
  ])
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  const t = useTranslations('accueil.intercourse')

  return (
    <section className="relative bg-darkBlue py-[5vw] font-roboto lg:py-[15vw]">
      <h1 className=" text-center font-robotoBold text-[2.6vw] text-white lg:hidden">
        {/* small devices*/}
        {t('sectionTitle')}
      </h1>
      <div className="absolute left-[4vw] top-[-4vw] z-10 hidden bg-darkBlue p-[2vw] drop-shadow-[1vw_1vw_0px_rgb(83,185,205)] lg:block">
        {/* large devices*/}
        <h1 className="text-center font-robotoBold text-[2.6vw] text-white">
          {t('sectionTitle')}
        </h1>
      </div>

      <div className="ml-[5vw] flex flex-col-reverse lg:flex-row lg:gap-[7vw]">
        <div
          className="w-[60vw] lg:w-[40vw]"
          data-aos={size.width >= lg && 'fade-up-right'}
        >
          <h1 className="text-center font-robotoBold text-[2vw] text-white lg:text-left lg:text-[3vw]">
            {positions[0] === 'purple' && t('title.purple')}
            {positions[0] === 'pink' && t('title.pink')}
            {positions[0] === 'lightBlue' && t('title.lightBlue')}
            {positions[0] === 'turquoise' && t('title.turquoise')}
          </h1>
          <p className="mt-[3vw] mb-[5vw] text-justify font-robotoLight text-[1.1vw] text-white ">
            {positions[0] === 'purple' && t('description.purple')}
            {positions[0] === 'pink' && t('description.pink')}
            {positions[0] === 'lightBlue' && t('description.lightBlue')}
            {positions[0] === 'turquoise' && t('description.turquoise')}
          </p>
          <div className="flex justify-center lg:block">
            <Link href="./about">
              <button className="bg-turquoise px-[2vw] py-[1vw] font-roboto text-[1.3vw] text-white hover:bg-pink">
                {t('button')}
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos={size.width >= lg && 'fade-up-left'}
          className="mt-[-7vw]"
        >
          <RotatingCircle positions={positions} setPositions={setPositions} />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[4vw]">
        <Image src={lines} alt="threeHorizontalCircles" />
      </div>
      <div className="absolute  top-[9vw] left-0 w-[4vw]">
        <Image src={blueLines} alt="rocket" objectFit="contain" />
      </div>
      <div className=" absolute bottom-0 left-0 w-[10vw]">
        <Image
          src={whiteBottomPoints}
          alt="half side points"
          objectFit="contain"
        />
      </div>
      <div className="absolute -bottom-[2vw] left-0 w-[20vw] ">
        <Image src={blue_rectangle} alt="blue_rectangle" objectFit="contain" />
      </div>

      <div className="absolute right-0 bottom-[-0.5vw] w-[10vw]">
        <Image
          src={pinkQuaterCircle}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
    </section>
  )
}
