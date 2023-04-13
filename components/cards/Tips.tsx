import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  icon: ReactNode
  rectangleBg: string
}

export default function Tips({ title, description, icon, rectangleBg }: Props) {
  return (
    <>
      <div
        data-aos="fade-down"
        className="relative mx-[4vw] w-[60vw] pt-[6vw] text-center lg:mx-0 lg:w-[26vw]"
      >
        <div
          className={`align-center absolute right-[44%] left-[44%] top-[-3.5vw] flex h-[6vw] justify-center p-[1vw]  lg:right-[38%] lg:left-[38%]  ${rectangleBg} `}
        >
          {icon}
        </div>
        <h1 className="mb-[1vw] font-roboto text-[2vw] font-semibold leading-tight">
          {title}
        </h1>
        <p className="font-roboto text-[1.2vw]  text-grey">{description}</p>
      </div>
    </>
  )
}
