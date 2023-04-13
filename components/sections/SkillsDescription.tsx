import {
  useTranslations,
  SkillCard,
  SKillButton,
  Image,
  RightRocket,
  halfSidePoints,
  shapes,
  Aos,
  lg,
} from '..'
import { useEffect } from 'react'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function SkillsDescription() {
  const t = useTranslations('formations.skillsDescription')
  const size = useScreenSize()

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  const skillsList = [
    {
      title: t('skillCard1.title'),
      description: t('skillCard1.description'),
      style: 'lg:hover:bg-yellow lg:border-yellow group',
      styleButton: '',
    },
    {
      title: t('skillCard2.title'),
      description: t('skillCard2.description'),
      style: 'lg:hover:bg-pink lg:border-pink group',
      styleButton: 'group-hover:border-white group-hover:text-white',
    },
    {
      title: t('skillCard3.title'),
      description: t('skillCard2.description'),
      style: 'lg:hover:bg-purple  lg:border-purple group',
      styleButton: 'group-hover:border-white group-hover:text-white',
    },
  ]
  const buttons = [
    { title: t('button1'), style: 'lg:bg-yellow' },
    { title: t('button2'), style: 'lg:bg-darkBlue' },
    { title: t('button3'), style: 'lg:bg-pink' },
  ]

  return (
    <section className="relative pb-[8vw] pt-[12vw] lg:relative lg:bg-lightGrey lg:font-roboto">
      <div className="ml-[10vw] ">
        <div className="flex flex-col justify-center">
          <h1 className="font-robotoBold text-darkBlue lg:text-[4vw]">
            {t('title')}
            <span className="ml-[1vw] text-turquoise">{t('styledWord')}</span>
          </h1>
          <p className="text-2xl lg:mt-8 lg:mb-8 ">{t('description')}</p>
        </div>

        <div className=" lg:mt-6 lg:mr-3 lg:mb-10 lg:flex lg:flex-row">
          {buttons.map((button, key) => {
            return (
              <SKillButton
                key={key}
                title={button.title}
                style={button.style}
              />
            )
          })}
        </div>

        {skillsList.map((skill, key) => {
          return (
            <div
              data-aos={size.width >= lg && 'fade-up'}
              key={key}
              data-aos-delay={key * 300}
            >
              <SkillCard
                title={skill.title}
                description={skill.description}
                style={skill.style}
                styleButton={skill.styleButton}
                nb={key + 1}
              />
            </div>
          )
        })}
      </div>

      <div className="top-[50%] right-0 w-[10%] lg:absolute">
        <Image
          src={halfSidePoints}
          alt="half side points"
          objectFit="contain"
        />
      </div>
      <div className="hidden lg:absolute lg:bottom-[10vw] lg:right-0 lg:block lg:w-[5%]">
        <Image src={shapes} alt="stripedBlueLine" objectFit="contain" />
      </div>

      <div className=" top-[20vw] animate-bounce lg:absolute lg:top-[25vw] lg:right-[1vw] lg:w-[13VW]">
        <Image src={RightRocket} alt="rocket" objectFit="contain" />
      </div>
    </section>
  )
}
