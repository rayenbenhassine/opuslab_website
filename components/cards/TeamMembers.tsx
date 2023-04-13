import { ReactNode } from 'react'
import React from 'react'
type Props = {
  icon: ReactNode
}

export default function TeamMembers({ icon }: Props) {
  return (
    <div>
      <div className="relative mr-[5vw]">
        {icon}
        <div className="lg:w-1/ bg-lightBlue lg:absolute lg:right-[4%] lg:bottom-[0%] lg:-z-10 lg:h-2/3"></div>
      </div>
    </div>
  )
}
