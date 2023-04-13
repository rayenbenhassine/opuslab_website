import { ReactNode } from 'react'
import React from 'react'
type Props = {
  icon: ReactNode
  description: string
}

export default function Informations({ icon, description }: Props) {
  return (
    <>
      <div className="flex flex-row">
        <div className="mr-[2vw] text-[1.2vw] text-lightBlue ">{icon}</div>
        <p className="font-roboto text-[1vw]  text-white">{description}</p>
      </div>
    </>
  )
}
