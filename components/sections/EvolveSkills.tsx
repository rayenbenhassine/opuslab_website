import { useScreenSize } from 'contexts/ScreenSizeContext'
import {
  Image,
  pink_line,
  quaterCircle,
  Rectangle,
  rightsidePoints,
  useTranslations,
  rocket2,
  Link,
  Aos,
  useEffect,
  useLayoutEffect,
  useState,
  lg,
} from '..'

export default function Banner() {
  const t = useTranslations('accueil.evolveSkills')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  const RectangleList = [
    {
      title: t('rectangle1.title'),
      nbHours: t('rectangle1.nbHours'),
      style: 'border-yellow lg:hover:bg-yellow',
    },
    {
      title: t('rectangle2.title'),
      nbHours: t('rectangle2.nbHours'),
      style: 'border-pink lg:hover:bg-pink',
    },
    {
      title: t('rectangle3.title'),
      nbHours: t('rectangle3.nbHours'),
      style: 'border-purple lg:hover:bg-purple',
    },
    {
      title: t('rectangle4.title'),
      nbHours: t('rectangle4.nbHours'),
      style: 'lg:border-turquoise lg:hover:bg-turquoise hidden lg:block',
    },
    {
      title: t('rectangle5.title'),
      nbHours: t('rectangle5.nbHours'),
      style: 'lg:border-cian lg:hover:bg-cian hidden lg:block',
    },
    {
      title: t('rectangle6.title'),
      nbHours: t('rectangle6.nbHours'),
      style: 'lg:border-darkBlue lg:hover:bg-darkBlue hidden lg:block',
    },
  ]

  return (
    <section className="relative bg-lightGrey py-[8vw]" id="evolveSkills">
      <div className="ml-[25vw] lg:ml-[13vw] lg:mb-[2vw]">
        <h1 className="flex p-[2vw] font-robotoBold text-[4.5vw] text-darkBlue lg:text-[5vw]">
          {t('title')}
          <span className="ml-[1vw] font-robotoBold text-[4.5vw] text-turquoise lg:text-[5vw]">
            {t('styledWord')}
          </span>
        </h1>
      </div>
      <div className="absolute top-[30%] left-0 w-[8%]">
        <Image src={rightsidePoints} alt="sidePoints" objectFit="contain" />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-flow-col grid-rows-3 gap-[4vw] lg:gap-[2vw]">
          {RectangleList.map((rectangle, key) => {
            return (
              <div
                data-aos={size.width >= lg && 'zoom-in-left'}
                key={key}
                data-aos-delay={size.width >= lg && key * 30}
              >
                <Rectangle
                  key={key}
                  title={rectangle.title}
                  nbHours={rectangle.nbHours}
                  style={rectangle.style}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div
        className="mx-auto w-max lg:block"
        data-aos={size.width >= lg && 'fade-up'}
      >
        <Link href="./trainings">
          <button
            data-aos="flip-left"
            data-aos-delay="800"
            className="mt-4 bg-lightBlue py-[1.5vw] px-[3vw] font-roboto text-[1.5vw] tracking-wide text-white hover:bg-pink lg:mt-8"
          >
            {t('button')}
          </button>
        </Link>
      </div>

      <div className=" translateY(0) absolute right-[3%] top-[15%] block w-[15%] scale-125 animate-bounce ease-in">
        <Image src={rocket2} alt="rocket" objectFit="contain" />
      </div>
      <div className="absolute bottom-[-1vw]  right-0 block w-[10%]">
        <Image src={quaterCircle} alt="quaterCircle" objectFit="contain" />
      </div>
      <div className="absolute bottom-[-2vw] right-0 block w-[20%]">
        <Image src={pink_line} alt="pink_line" objectFit="contain" />
      </div>
    </section>
  )
}
