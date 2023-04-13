import {
  triangleSidePoints,
  Image,
  useTranslations,
  BsClock,
  glowingDay,
  pinkSquare,
} from '..'

export default function GlowingDay() {
  const t = useTranslations('formations.GlowingDay')
  return (
    <>
      <section className="bg-darkBlue py-[5vh] px-[7vw] text-white lg:hidden">
        <h1 className="text-center font-robotoBold text-[4.5vw] text-lightBlue">
          {t('title')}
        </h1>
        <div className="my-[4vw] flex justify-center">
          <div className="  w-[30vw]">
            <Image src={glowingDay} alt="glowingDay" objectFit="contain" />
          </div>
        </div>
        <span className="flex justify-center gap-[2vw]">
          <BsClock className="text-[3vw] text-lightBlue" />
          <span className="font-robotoLight text-[2.3vw] text-white">
            {t('infos')}
          </span>
        </span>
        <div className="mt-[3vw] flex justify-center">
          <button className="bg-pink py-[1.2vw] px-[6vw] text-[2vw] font-bold text-white">
            {t('button')}
          </button>
        </div>
      </section>
      <section className="relative hidden gap-[5vw] bg-darkBlue  p-[10vw] lg:flex">
        <div className=" absolute top-0 left-0 w-[12vw]">
          <Image
            src={triangleSidePoints}
            alt="triangleSidePoints"
            objectFit="contain"
          />
        </div>
        <div className="w-[4vw ] absolute right-0 bottom-[7vw]">
          <Image src={pinkSquare} alt="pinkSquare" objectFit="contain" />
        </div>
        <div data-aos="fade-right" className="relative mt-[3vw] w-[50vw] ">
          <h1 className="lg:font-robotoBold lg:text-[3vw] lg:text-lightBlue">
            {t('title')}
          </h1>
          <p className="lg:mt-16 lg:font-robotoLight lg:text-[1.2vw] lg:text-white">
            {t('paragraph')}
          </p>
          <span className="mt-[2vw] mb-[2vw] flex flex-row">
            <BsClock className="lg:mr-[1vw] lg:text-[1.5vw] lg:text-lightBlue" />
            <span className="lg:text-[1vw] lg:text-white">{t('infos')}</span>
          </span>
          <button className="lg:bg-pink lg:py-[1vw] lg:px-[6vw] lg:text-[1.2vw] lg:font-bold lg:text-white">
            {t('button')}
          </button>
        </div>

        <div data-aos="fade-left" className="hidden    lg:flex">
          <div className="  lg:w-[90%]">
            <Image src={glowingDay} alt="glowingDay" objectFit="contain" />
          </div>
          <div className="lg:mt-[9vw] lg:h-[30vh] lg:w-[1vw] lg:bg-lightBlue"></div>
        </div>
      </section>
    </>
  )
}
