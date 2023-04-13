import { Image } from '..'

// interface Props {
//   image: StaticImageData
// }

export default function ImageCard({ image }: any) {
  return (
    <div className="group  relative mx-[3vw] mt-[2.5vw] drop-shadow-[9px_10px_0px_rgba(34,171,180,1)] lg:mx-0 lg:w-auto ">
      <Image src={image} alt="imageCard" objectFit="contain" className="z-0" />
      <div className="absolute inset-0 z-10 flex  items-center justify-center bg-lightBlue text-[2vw] font-semibold text-white opacity-0 duration-300 hover:opacity-100">
        Siwar GHARBI
      </div>
    </div>
  )
}
