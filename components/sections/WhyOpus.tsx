import {
  Card,
  Image,
  useTranslations,
  whyOpusIcon1,
  whyOpusIcon2,
  whyOpusIcon3,
  whyOpusPoints,
  Slider,
  points,
  Link,
  Aos,
  lg,
} from '..'
import { useState } from 'react'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function WhyOpus() {
  const t = useTranslations('accueil.whyOpus')
  const size = useScreenSize()
  const [animation, setAnimation] = useState('')
  const cardsData = [
    {
      title: t('card1.title'),
      description: t('card1.description'),
      icon: whyOpusIcon1,
      iconBg: 'bg-darkBlue',
    },
    {
      title: t('card1.title'),
      description: t('card1.description'),
      icon: whyOpusIcon2,
      iconBg: 'bg-pink',
    },
    {
      title: t('card1.title'),
      description: t('card1.description'),
      icon: whyOpusIcon3,
      iconBg: 'bg-darkBlue',
    },
  ]
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className="bg-lightGrey py-[10vw] lg:relative lg:flex lg:flex-col lg:pt-36 lg:pb-16">
      <h1 className="mb-[10vw] text-center font-robotoBold text-[4vw] text-darkBlue lg:ml-[7vw] lg:mb-16 lg:text-left  lg:text-[4vw] lg:tracking-tight">
        {t('title')}
      </h1>
      <div className="flex justify-center">
        {/* small devices  */}
        <Slider
          setAnimation={setAnimation}
          buttonLeftStyle="relative z-10 text-[3vw]"
          buttonRightStyle="relative z-10 text-[3vw]"
        >
          {cardsData.map((card, key) => {
            return (
              <div className={`animate-${animation}`} key={key}>
                <Card
                  key={key}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  iconBg={card.iconBg}
                />
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="hidden lg:relative lg:flex lg:justify-center lg:gap-10 lg:font-roboto">
        {cardsData.map((card, key) => {
          return (
            <div
              data-aos={size.width >= lg && 'fade-up'}
              key={key}
              data-aos-delay={key * 300}
            >
              <Card
                title={card.title}
                description={card.description}
                icon={card.icon}
                iconBg={card.iconBg}
              />
            </div>
          )
        })}
        <div className="top-[30vw] lg:absolute lg:left-0 lg:w-[3%]">
          <Image src={points} alt="points" objectFit="contain" />
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="./about">
          <button
            data-aos={size.width >= lg && 'fade-up'}
            className="mt-[4vw] bg-lightBlue py-[1vw] px-[3vw] text-[1.6vw] font-semibold tracking-wider text-white hover:bg-pink"
          >
            {t('button')}
          </button>
        </Link>
      </div>
      <div className="hidden lg:absolute lg:bottom-4">
        <Image
          src={whyOpusPoints}
          alt="points"
          objectFit="contain"
          width={70}
        />
      </div>
    </section>
  )
}
