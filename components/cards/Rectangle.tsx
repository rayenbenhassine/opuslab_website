type Props = {
  title: string
  nbHours: string
  style: string
}

export default function Rectangle({ title, nbHours, style }: Props) {
  return (
    <div
      className={`group w-[46vw] border-b-[0.6vw] bg-white p-[5vw] lg:w-[36vw] lg:p-[3vw] ${style}`}
    >
      <h1 className="text-center font-roboto text-[3vw] text-darkBlue lg:text-[2vw] lg:group-hover:text-white">
        {title}
      </h1>
      <h1 className="text-center font-roboto text-[1vw] text-grey lg:group-hover:text-white">
        {nbHours}
      </h1>
    </div>
  )
}
