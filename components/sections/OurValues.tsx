import {
  Value,
  useTranslations,
  Image,
  heart,
  share,
  professionalism,
  engagement,
  teamPoints,
  teamRectangle,
  rightPointsSide,
  leftQuaterCircle,
  quaterCircle,
  yellowLine2,
  React,
  Slider,
  team1,
  team2,
  team3,
  Aos,
  lg,
  // pinkLine,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function OurValues() {
  const t = useTranslations('Apropos.ourValues')
  const size = useScreenSize()
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  const values = [
    {
      title: t('values.value1'),
      icon: heart,
      textColor: 'text-pink',
    },
    {
      title: t('values.value2'),
      icon: share,
      textColor: 'text-lightBlue',
    },
    {
      title: t('values.value3'),
      icon: professionalism,
      textColor: 'text-darkBlue',
    },
    {
      title: t('values.value4'),
      icon: engagement,
      textColor: 'text-cian',
    },
  ]
  const images = [team1, team2, team3]

  return (
    <section className="relative z-0 bg-lightGrey py-[10vw] lg:relative lg:py-[5vw]">
      <div className="hidden lg:absolute lg:right-0 lg:z-10 lg:block lg:w-[7vw]">
        <Image src={teamPoints} alt=" " objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:right-0 lg:top-[10vw]  lg:block lg:w-[10vw]">
        <Image src={teamRectangle} alt="teamRectangle" objectFit="contain" />
      </div>
      <div className="hidden lg:absolute lg:right-0 lg:top-[15vw]  lg:block lg:w-[3vw]">
        <Image
          src={rightPointsSide}
          alt=" rightPointsSide"
          objectFit="contain"
        />
      </div>

      <h1 className="mb-[4vw] text-center font-robotoBold text-[4vw] text-darkBlue lg:text-[3.2vw]">
        {t('title')}
      </h1>

      <div className="lg:hidden">
        {/* small devices */}
        <Slider
          buttonLeftStyle="text-[6vw] text-mediumGrey"
          buttonRightStyle="text-[6vw] text-mediumGrey"
        >
          {values.map((value, key) => {
            return (
              <div key={key}>
                <Value
                  title={value.title}
                  icon={value.icon}
                  textColor={value.textColor}
                />
              </div>
            )
          })}
        </Slider>
      </div>

      <div className="hidden lg:flex lg:justify-center lg:gap-[10vw]">
        {values.map((value, key) => {
          return (
            <div
              data-aos={size.width >= lg && 'fade-up'}
              key={key}
              data-aos-delay={key * 400}
            >
              <Value
                title={value.title}
                icon={value.icon}
                textColor={value.textColor}
              />
            </div>
          )
        })}
      </div>
      <div className="hidden lg:absolute lg:bottom-[-1vw] lg:left-0  lg:block lg:w-[8vw]">
        <Image
          src={leftQuaterCircle}
          alt="leftQuaterCircle"
          objectFit="contain"
        />
      </div>
      <div className="hidden lg:absolute lg:right-0  lg:bottom-0 lg:block">
        <Image src={yellowLine2} alt="yellowRectongle " objectFit="contain" />
      </div>
      <div className="absolute right-0 bottom-0 w-[13vw] lg:hidden">
        <Image src={quaterCircle} alt="" objectFit="contain" />
      </div>
      {/* <div className="absolute right-0 bottom-0 w-[20vw] lg:hidden">
        <Image src={pinkLine} alt="pinkline" objectFit="contain" />
      </div> */}
    </section>
  )
}
