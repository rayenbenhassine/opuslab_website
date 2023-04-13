import {
  darkQuaterCircle,
  Image,
  opusien,
  points,
  QuaterCircle_pinkLine,
  quotes,
  rectangleDarkBlue,
  useTranslations,
  endQuotes,
  Link,
  Aos,
  lg,
} from '..'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function Opusiens() {
  const t = useTranslations('accueil.ourOpusiens')
  const size = useScreenSize()
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <>
      <section className="relative bg-lightGrey p-[10vw]  lg:hidden">
        <div className="absolute top-[0vw] left-0 w-[30vw] ">
          <Image
            src={QuaterCircle_pinkLine}
            alt="QuaterCircle_pinkLine"
            objectFit="contain"
          />
        </div>

        <div className="absolute right-0 top-[0vw] w-[30vw]  ">
          <Image
            src={rectangleDarkBlue}
            alt="rectangleDarkBlue"
            objectFit="contain"
          />
        </div>

        <h1 className="mb-[5vw] text-center font-robotoBold text-[4vw] font-bold text-darkBlue">
          {t('title')}
        </h1>
        <div className="mx-auto mb-[5vw] w-[50%] drop-shadow-[10px_10px_0px_rgba(238,189,62,0.75)]">
          <Image src={opusien} alt="opusien" objectFit="contain" />
        </div>
        <div className="relative mx-[8vw] text-center">
          <div className="mb-[2vw] w-[8%]">
            <Image src={quotes} alt="quotes" objectFit="contain" />
          </div>
          <p className="mx-[2vw] mb-[3vw] font-roboto text-[1.8vw] text-darkBlue">
            {t('text')}
          </p>
          <div className="absolute left-[55vw] mb-[28%] w-[15%] ">
            <Image
              src={endQuotes}
              alt="endQuotes"
              objectFit="contain"
              width={60}
            />
          </div>
          <p className="text-center font-roboto text-[2vw] font-bold text-lightBlue">
            {t('name')}
          </p>
          <p className="mb-[3vw] text-center font-robotoLight text-[1.5vw] text-darkBlue">
            {t('status')}
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="./opus-business/#business">
            <button className="bg-lightBlue py-[1vw] px-[4vw] text-[1.6vw] font-bold tracking-widest text-white hover:bg-pink">
              {t('button')}
            </button>
          </Link>
        </div>
      </section>

      <section className="relative hidden gap-[5vw] bg-lightGrey p-[10vw] lg:flex">
        <div className="absolute top-[0vw] left-0 w-[27vw] ">
          <Image
            src={QuaterCircle_pinkLine}
            alt="QuaterCircle_pinkLine"
            objectFit="contain"
          />
        </div>

        <div className="absolute right-0  top-[0vw] w-[18vw]   ">
          <Image
            src={rectangleDarkBlue}
            alt="rectangleDarkBlue"
            objectFit="contain"
          />
        </div>
        <div className="absolute  left-0 top-[42vw] w-[4vw] ">
          <Image src={points} alt="points" objectFit="contain" />
        </div>
        <div className="absolute right-0 -bottom-2  w-[20%] ">
          <Image
            src={darkQuaterCircle}
            alt="darkQuaterCircle"
            objectFit="contain"
          />
        </div>

        <div
          data-aos={size.width >= lg && 'fade-right'}
          className="relative mt-[3vw] w-[50vw]  "
        >
          <h1 className="mb-[5vw] font-robotoBold text-[4vw] font-bold text-darkBlue">
            {t('title')}
          </h1>
          <div className="mb-[3vw] w-[12%] animate-bounce duration-[2000ms]">
            <Image src={quotes} alt="quotes" objectFit="contain" />
          </div>
          <p className="mb-[3vw] font-roboto text-[1.3vw] text-darkBlue">
            {t('text')}
          </p>

          <p className="ml-auto w-max font-roboto text-[1.5vw] font-bold text-lightBlue">
            {t('name')}
          </p>
          <p className="ml-auto w-max font-robotoLight text-[1vw] text-darkBlue">
            {t('status')}
          </p>
          <Link href="./opus-business/#business">
            <button className="bg-lightBlue py-[1vw] px-[4vw] text-[1.2vw] font-bold tracking-widest text-white hover:bg-pink">
              {t('button')}
            </button>
          </Link>
        </div>

        <div
          data-aos={size.width >= lg && 'fade-left'}
          className="mb-[5vw] w-[50%] animate-rightLeft drop-shadow-[10px_10px_0px_rgba(238,189,62,0.75)] ease-out"
        >
          <Image src={opusien} alt="opusien" objectFit="contain" />
        </div>
      </section>
    </>
  )
}
