import {
  useTranslations,
  timer,
  Image,
  Tips,
  envelope,
  figure,
  rightDarkBluePoints,
  quaterCircle,
  yellowLine2,
  Slider,
} from '..'

export default function ValidateProject() {
  const t = useTranslations('formations.validateProject')

  return (
    <section className="relative bg-lightGrey p-[10vw]">
      <div className="absolute right-0 top-[3vw] w-[5vw]">
        <Image
          src={rightDarkBluePoints}
          alt="rightDarkBluePoints"
          objectFit="contain"
        />
      </div>
      <div className="mb-[8vw] flex justify-center">
        <h1 className=" w-[40vw] text-center font-robotoBold text-[3vw] leading-tight text-darkBlue">
          {t('title')}
        </h1>
      </div>

      <div className="mb-[5vw] hidden lg:flex lg:justify-center lg:gap-[4vw] lg:font-roboto">
        <Tips
          title={t('card1.title')}
          description={t('card1.description')}
          icon={<Image src={timer} alt="timer" objectFit="contain" />}
          rectangleBg="bg-pink"
        />

        <Tips
          title={t('card2.title')}
          description={t('card2.description')}
          icon={<Image src={envelope} alt="envelope" objectFit="contain" />}
          rectangleBg="bg-cian"
        />
        <Tips
          title={t('card3.title')}
          description={t('card3.description')}
          icon={<Image src={figure} alt="figure" objectFit="contain" />}
          rectangleBg="bg-lightBlue"
        />
      </div>

      <Slider
        buttonLeftStyle="text-pink text-[6vw]"
        buttonRightStyle="text-pink text-[6vw]"
      >
        <Tips
          title={t('card1.title')}
          description={t('card1.description')}
          icon={<Image src={timer} alt="timer" objectFit="contain" />}
          rectangleBg="bg-pink"
        />

        <Tips
          title={t('card2.title')}
          description={t('card2.description')}
          icon={<Image src={envelope} alt="envelope" objectFit="contain" />}
          rectangleBg="bg-cian"
        />
        <Tips
          title={t('card3.title')}
          description={t('card3.description')}
          icon={<Image src={figure} alt="figure" objectFit="contain" />}
          rectangleBg="bg-lightBlue"
        />
      </Slider>
      <div data-aos="zoom-in" className="text-center">
        <button className="mt-[4vw] bg-pink py-[1vw] px-[5vw] text-[1.5vw] font-bold text-white hover:bg-lightBlue">
          {t('button')}
        </button>
      </div>

      <div className="  hidden w-[10vw] lg:absolute lg:right-[0vw] lg:-bottom-[0vw] lg:block">
        <Image src={quaterCircle} alt="quaterCircle" objectFit="contain" />
      </div>
    </section>
  )
}
