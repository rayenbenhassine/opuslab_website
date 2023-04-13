import {
  useTranslations,
  BsClock,
  VscCalendar,
  HiOutlineLocationMarker,
  Informations,
  React,
  Typewriter,
} from '..'
export default function Introduction({
  label,
  subDescription,
  duration,
  schedule,

  mode,
}: any) {
  const t = useTranslations('formations.introduction')
  return (
    <section className="bg-darkBlue p-[12vw] text-center tracking-widest text-white lg:bg-formation lg:bg-cover lg:bg-no-repeat">
      <h1 className="font-robotoBold text-[5vw] leading-tight lg:text-[3vw]">
        {t('title1')} <br />
        <span className="bg-lightBlue">
          <Typewriter
            words={[t('title2')]}
            loop={1}
            typeSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="my-[3vw] flex justify-center">
        <p className="w-[70vw] font-robotoLight text-[2vw] lg:w-[45vw] lg:text-[1vw]">
          {subDescription}
        </p>
      </div>
      <div className="hidden flex-row justify-center gap-[3vw] lg:flex">
        <Informations
          icon={<BsClock />}
          description={duration + t('nbHeures')}
        />
        <Informations icon={<VscCalendar />} description={schedule} />
        <Informations
          icon={<HiOutlineLocationMarker />}
          description={t('position')}
        />
      </div>

      <div className="lg:mt-[7%] lg:ml-[5%]">
        <button className="mx-auto mb-[1vw] w-max bg-pink px-[2.2vw] py-[1vw] text-[2vw] font-bold text-white hover:bg-yellow lg:mx-0 lg:mb-0 lg:mr-[2vw] lg:text-[1.2vw]">
          {t('button1')}
        </button>
        <br className="lg:hidden" />
        <button className="mx-auto w-max bg-lightBlue px-[2.2vw] py-[1vw] text-[2vw] font-bold hover:bg-yellow lg:mx-0 lg:text-[1.2vw] lg:text-white">
          {t('button2')}
        </button>
      </div>
    </section>
  )
}
