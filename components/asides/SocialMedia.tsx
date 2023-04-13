import { BsInstagram, AiOutlineLinkedin, AiOutlineFacebook } from '..'

export default function SocialMedia() {
  return (
    <aside className="hidden lg:fixed lg:right-0 lg:top-[58vh] lg:z-10 lg:flex lg:flex-col lg:bg-white">
      <button className="lg:bg-darkBlue lg:px-5 lg:py-6">
        <AiOutlineFacebook className="lg:text-4xl lg:text-white" />
      </button>
      <button className="lg:bg-pink lg:px-5 lg:py-6">
        <AiOutlineLinkedin className="lg:text-4xl lg:text-white" />
      </button>
      <button className="lg:bg-lightBlue lg:px-5 lg:py-6">
        <BsInstagram className="lg:text-4xl lg:text-white" />
      </button>
    </aside>
  )
}
