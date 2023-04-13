import { useTypewriter } from 'react-simple-typewriter'
import {
  arrowBanner,
  GoTriangleDown,
  Image,
  semiCircle,
  useTranslations,
  BannerImage,
  Link,
  Typewriter,
  useState,
} from '..'

export default function Banner() {
  const t = useTranslations('accueil.banner')
  const [firstAnimationDone, setFirstAnimationDone] = useState(false)
  const handleDone = () => {
    setFirstAnimationDone(true)
  }

  return (
    <>
      {/* Small devices */}
      <section className="relative bg-darkBlue pt-[16vw] pb-4 lg:hidden">
        <div className="mx-auto w-[20%] animate-wiggle">
          <Image src={arrowBanner} alt="Arrow" objectFit="contain" />
        </div>

        <h1 className="mx-auto mb-[3vw] text-center font-robotoBold text-[7vw] leading-tight text-white">
          {t('sm.title1')} <br /> {t('sm.title2')}
        </h1>
        <div className="flex justify-center">
          <Link href="#newDigitalSkills">
            <button className="bg-lightBlue px-[4vw] py-[1vw] font-roboto text-[2.5vw] tracking-wide text-white hover:bg-pink">
              {t('button')}
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="#evolveSkills">
            <button className="mt-[8vw] h-[5vw] w-[5vw] rounded-full bg-lightBlue hover:bg-pink">
              <GoTriangleDown className="m-auto mt-[0.5vw] text-[3vw] text-white" />
            </button>
          </Link>
        </div>
      </section>

      {/* large devices */}
      <section className=" relative hidden pl-[8vw] lg:flex lg:bg-darkBlue lg:pt-[10vw] lg:tracking-widest  ">
        <div className="mb-[10vw] gap-[2vw] lg:z-10 lg:flex lg:w-[50vw] lg:flex-col">
          <div className="w-[35%]">
            <Image src={arrowBanner} alt="Arrow" objectFit="contain" />
          </div>

          <h1 className="lg:text-white">
            <span className="lg:font-robotoBold lg:text-[4vw] lg:leading-tight">
              {/* {t('bigTitle')} */}
              <Typewriter
                words={[t('bigTitle')]}
                loop={1}
                typeSpeed={140}
                delaySpeed={1000}
                onLoopDone={handleDone}
              />
              <span className="ml-[1vw] lg:bg-pink">
                {firstAnimationDone && (
                  <Typewriter
                    words={[t('styledWord')]}
                    loop={1}
                    typeSpeed={250}
                    delaySpeed={30000}
                  />
                )}
              </span>
            </span>
            <div className="mt-[1vw] lg:font-roboto lg:font-semibold lg:text-turquoise">
              {t('littleTitle')}
              <span className="lg:text-[2vw]">{t('mediumTitle')}</span>
            </div>
          </h1>
          <Link href="#newDigitalSkills">
            <button className=" w-max hover:bg-pink lg:bg-lightBlue lg:py-[1vw] lg:px-[4vw] lg:font-roboto lg:text-[1.5vw] lg:tracking-wide lg:text-white">
              {t('button')}
            </button>
          </Link>
        </div>
        <div className=" mt-auto w-[40%]">
          <Image src={BannerImage} alt="semi-circle" objectFit="contain" />
        </div>

        <div className=" hidden lg:absolute lg:left-0 lg:bottom-0 lg:block lg:w-[20vw] ">
          <Image src={semiCircle} alt="semi-circle" objectFit="contain" />
        </div>
        <div className="hidden lg:absolute lg:left-[50vw] lg:bottom-[2vw] lg:block">
          <Link href="#evolveSkills">
            <button className="mt-[8vw] h-[5vw] w-[5vw] rounded-full bg-lightBlue hover:bg-pink">
              <GoTriangleDown className="m-auto mt-[0.5vw] text-[3vw] text-white" />
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
