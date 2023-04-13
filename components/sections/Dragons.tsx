import {
  GoTriangleLeft,
  GoTriangleRight,
  Image,
  useTranslations,
  Slider,
  dragons,
  whitePoints,
  shapes,
  Link,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function Dragons() {
  const t = useTranslations('accueil.Dragons')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <>
      <section className="relative bg-darkBlue px-[10vw] pt-[12vw] text-white lg:hidden">
        <h1 className="mb-[4vw] text-center font-robotoBold text-[3vw]">
          {t('title')}
        </h1>
        <Slider
          buttonLeftStyle="rounded-full bg-pink p-[0.5vw] h-max hover:bg-yellow "
          buttonRightStyle="rounded-full bg-pink p-[0.5vw] h-max hover:bg-yellow "
        >
          {[1, 2, 3, 4].map((_, key) => {
            return (
              <div key={key} className="relative">
                <p className="mb-[2vw] px-[6vw] text-center font-roboto text-[1.5vw] text-lightGrey">
                  {t('text')}
                </p>
                <div>
                  <h2 className="text-center font-robotoBold text-[1.7vw]">
                    {t('name')}
                  </h2>
                  <p className="text-center text-[1.2vw]">{t('status')}</p>
                </div>
                <div className="my-[3vw] flex justify-center">
                  <Link href="./team">
                    <button className=" bg-lightBlue px-[2vw] py-[1vw] font-roboto text-[1.5vw] hover:bg-pink">
                      {t('button')}
                    </button>
                  </Link>
                </div>
                <div className=" ml-[12vw] flex justify-center">
                  <div className=" bottom-[0vw] w-[60vw]">
                    <Image
                      src={dragons}
                      alt="DRAGON_girl"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        <div className="absolute right-0 bottom-[20vw] w-[10vw] scale-[30vw]">
          <Image src={whitePoints} alt="whitePoints" objectFit="contain" />
        </div>
        <div className="absolute left-0 bottom-[50vw] w-[5%]">
          <Image src={shapes} alt="shapes" objectFit="contain" />
        </div>
      </section>

      <section className=" relative hidden justify-between bg-darkBlue py-[10vw] pr-[7vw] text-white lg:flex lg:flex-row">
        <div className="left-0 w-[3vw]  scale-[20vw] ">
          <Image src={shapes} alt="shapes" objectFit="contain" />
        </div>

        <div
          data-aos={size.width >= lg && 'fade-left'}
          className="absolute left-[5vw] w-[45%]  "
        >
          <Image src={dragons} alt="DRAGON_girl" objectFit="contain" />
        </div>
        <div
          data-aos={size.width >= lg && 'fade-right'}
          className="  top-[40vw]   lg:w-[40vw]  "
        >
          <h1 className="mb-[4vw] font-robotoBold text-[4vw] leading-loose">
            {t('title')}
          </h1>
          <p className="mb-[2vw] font-roboto text-[1.7vw]">{t('text')}</p>

          <div className="mb-[2vw] flex justify-between">
            <div>
              <h2 className="font-robotoBold text-[1.7vw]">{t('name')}</h2>
              <p>{t('status')}</p>
            </div>
            <div className="text-[2vw] text-white">
              <button className="mr-[0.3vw] rounded-full bg-pink p-[0.5vw] hover:bg-yellow">
                <GoTriangleLeft />
              </button>
              <button className="mr-[5vw] rounded-full bg-lightBlue p-[0.5vw] hover:bg-yellow">
                <GoTriangleRight />
              </button>
            </div>
          </div>
          <Link href="./team/#instructor">
            <button className="bg-lightBlue px-[2vw] py-[1vw] font-roboto text-[1.5vw] hover:bg-pink">
              {t('button')}
            </button>
          </Link>
        </div>
        <div className="absolute right-0  mt-[40vw] w-[8vw] scale-[30vw]">
          <Image src={whitePoints} alt="whitePoints" objectFit="contain" />
        </div>
      </section>
    </>
  )
}
