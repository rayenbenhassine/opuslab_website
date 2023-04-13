import React from 'react'

type Props = { title: string; style: string }

export default function SkillButton({ title, style }: Props) {
  return (
    <button
      className={`lg:text-roboto font-semibold lg:mr-4 lg:w-[20%] lg:py-2 lg:text-center lg:text-xl lg:text-white ${style} `}
    >
      {title}
    </button>
  )
}
