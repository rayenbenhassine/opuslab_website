import { Checked, Image } from '..'

interface Props {
  message: string
}

export default function CustomSuccessMessage({ message }: Props) {
  return (
    <div className="flex">
      <div className="mr-[1vw] mt-[0.2vw] w-[3%]">
        <Image src={Checked} alt="checked" objectFit="contain" />
      </div>
      <p className="text-[1.1vw] text-green">{message}</p>
    </div>
  )
}
