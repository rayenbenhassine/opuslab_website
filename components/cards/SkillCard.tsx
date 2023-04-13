import React from 'react'
import { BsEyeFill, BsClock, TbCalendarStats, useTranslations, Link } from '..'

type Props = {
  style: string
  title: string
  description: string
  styleButton: string
  nb: number
}

export default function SkillCard({
  style,
  title,
  description,
  styleButton,
  nb,
}: Props) {
  const t = useTranslations('formations.skillsDescription')
  return (
    <Link href={`trainings/${nb}`}>
      <a>
        <div className="lg:flex lg:flex-col">
          <div
            className={` bg-white  lg:mt-4 lg:mb-4 lg:h-[40%] lg:w-[70%] lg:border-b-8 lg:p-8 ${style}`}
          >
            <div className="text-darkBlue lg:flex  lg:justify-between ">
              <h1 className="font-roboto lg:text-3xl ">{title}</h1>
              <button>
                <BsEyeFill className="text-3xl" />
              </button>
            </div>
            <p className="my-8 text-lg ">{description}</p>
            <div className="text-m my-4 text-grey group-hover:text-white lg:flex">
              <span className="lg:flex">
                <BsClock className="lg:mt-1 lg:mr-2 lg:text-lg lg:text-turquoise" />
                {t('skillCard1.heure')}
              </span>
              <span className="ml-2 lg:flex">
                <TbCalendarStats className=" lg:mt-1 lg:mr-2 lg:text-lg lg:text-turquoise" />{' '}
                {t('skillCard1.calendar')}
              </span>
            </div>
            <div className="text-semibold my-4 lg:mr-3 lg:flex ">
              <button
                className={`text-turquoise  lg:w-[20%] lg:border-2 lg:border-turquoise lg:py-4 ${styleButton}`}
              >
                {t('skillCard1.button1')}
              </button>
              <button
                className={`text-pink lg:ml-4 lg:w-[20%]  lg:border-2 lg:border-pink lg:px-6 ${styleButton}`}
              >
                {t('skillCard1.button2')}
              </button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
