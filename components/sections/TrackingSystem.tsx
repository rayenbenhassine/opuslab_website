import {
  Image,
  useTranslations,
  blueHalfRectangle,
  leftQuaterCircle,
  darkQuaterCircle,
  TrackingProgressBar,
  littleRightSidePoints,
  teamPoints,
  teamRectangle,
} from '..'

export default function TrackingSystem() {
  const t = useTranslations('formations.trackingSystem')

  return (
    <section className="relative bg-lightGrey  py-[10vw] px-[5vw] lg:px-0">
      <div className="hidden lg:absolute lg:right-0 lg:top-[4vw] lg:z-10 lg:block lg:w-[9vw]">
        <Image src={teamPoints} alt=" " objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:right-0 lg:top-[10vw]  lg:block lg:w-[11vw]">
        <Image src={teamRectangle} alt="teamRectangle" objectFit="contain" />
      </div>
      <div className="hidden w-[8%] lg:absolute lg:left-0 lg:bottom-[-0.5vw] lg:block">
        <Image
          src={leftQuaterCircle}
          alt=" leftQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="hidden w-[25%] lg:absolute lg:right-0 lg:bottom-[-1vw] lg:block">
        <Image
          src={darkQuaterCircle}
          alt=" darkQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="lg:flex lg:justify-center">
        <h1 className="text-center font-robotoBold leading-tight text-darkBlue lg:w-[40vw] lg:text-[4vw]">
          {t('title')}
        </h1>
      </div>
      <div className="lg:flex lg:justify-center">
        <TrackingProgressBar />
      </div>
      <div className=" absolute top-[12%] right-0 hidden">
        <Image
          src={blueHalfRectangle}
          alt="half side points"
          objectFit="contain"
          width="190%"
        />
      </div>

      <div className="absolute top-[2%] right-0 hidden w-[6%]">
        <Image
          src={littleRightSidePoints}
          alt="half side points"
          objectFit="contain"
        />
      </div>

      <div className="absolute left-0 bottom-[-9%] hidden">
        <Image
          src={leftQuaterCircle}
          alt=" leftQuaterCircle"
          width="120%"
          objectFit="contain"
        />
      </div>
      <div className="absolute right-0 bottom-[-7%] hidden">
        <Image
          src={darkQuaterCircle}
          alt=" darkQuaterCircle"
          width="350%"
          objectFit="contain"
        />
      </div>
    </section>
  )
}
