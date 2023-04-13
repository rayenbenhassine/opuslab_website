import React from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string
  icon: StaticImageData
  textColor: string
}

export default function Values({ title, icon, textColor }: Props) {
  return (
    <>
      <div className="w-[50vw] text-center  lg:w-auto">
        <div className="mx-auto mb-[1vw] w-[40%]  lg:w-auto">
          <Image
            src={icon}
            alt="heart"
            objectFit="contain"
            width={120}
            height={168}
          />
        </div>
        <h1
          className={`text-center font-robotoBold text-[3vw] lg:text-[1.5vw] ${textColor}  `}
        >
          {title}
        </h1>
      </div>
    </>
  )
}
