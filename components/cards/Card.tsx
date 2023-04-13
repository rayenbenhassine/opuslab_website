import { Image, Aos } from '..'

type Props = {
  title: string
  description: string
  // icon: StaticImageData
  iconBg: string
}

export default function Card({ title, description, icon, iconBg }: any) {
  return (
    <>
      <div className="relative mx-[3vw] w-[40vw] bg-white pt-[10vw] pb-[6vw] shadow lg:mx-[0.4vw] lg:mt-[6vw] lg:w-[28vw] lg:pt-[8vw]">
        <div
          className={`align-center absolute left-[38%] right-[38%] top-[-4vw] flex h-[9vw] justify-center p-[2vw]  lg:left-[3vw] lg:w-[9vw] ${iconBg}`}
        >
          <Image src={icon} alt="icon1" objectFit="contain" />
        </div>

        <div className="px-[3vw]">
          <h1 className="mb-4 text-center text-[2.3vw] font-semibold leading-tight lg:text-left">
            {title}
          </h1>
          <p className="text-center text-[1.5vw] text-grey lg:text-left lg:text-[1vw]">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
