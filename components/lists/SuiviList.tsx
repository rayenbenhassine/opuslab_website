import { ReactNode } from 'react'
import { useTranslations } from '..'

type Props = {
  title: string
  description: string
  icon: ReactNode
  bgStyle: string
}

export default function SuiviList({
  title,
  description,
  icon,
  bgStyle,
}: Props) {
  const t = useTranslations('formations.trackingSystem')
  return (
    <li className="mb-[2.5vw] flex gap-[5vw]">
      <div
        className={`relative z-10 h-max rounded-full p-[0.7vw] text-[2vw] text-white ${bgStyle} `}
      >
        {icon}
      </div>
      <div className="relative mt-[0.5vw]">
        <hr className="absolute left-[-6.7vw] top-[2.8vw] h-full border-l-[1px] border-black" />

        <h1 className="mb-[1.5vw] font-robotoBold text-[2.5vw] text-darkBlue lg:text-[1.5vw]">
          {title}
        </h1>
        <p className="text-[2vw] before:mr-[1.5vw] before:content-['•']  lg:text-[1.2vw]">
          {description}
        </p>
      </div>
    </li>
  )
}
