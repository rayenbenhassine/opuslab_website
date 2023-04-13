import {
  React,
  Image,
  opusLogo,
  NavLink,
  useTranslations,
  FiMenu,
  MdOutlineClose,
  useState,
  Link,
} from '..'

export default function NavBar() {
  const t = useTranslations('header')
  const [isActive, setIsActive] = useState(false)

  function openCloseMenu() {
    setIsActive(!isActive)
  }

  return (
    <header>
      <nav>
        <ul className="fixed z-20 flex w-full justify-between bg-darkBlue lg:justify-around">
          <li className="mx-[3vw] my-[1vw] w-[3vw] lg:m-2">
            <Image
              src={opusLogo}
              alt="Logo Opus Lab"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </li>
          <button
            className="my-[1vw] mx-[3vw] text-[4vw] text-white lg:hidden"
            onClick={openCloseMenu}
          >
            <FiMenu />
          </button>
          {isActive && (
            <div className="fixed top-0 right-0 z-10 h-full w-[33vw] bg-veryDarkBlue lg:hidden">
              <div className="mb-[8vw] flex w-full flex-row-reverse">
                <button
                  className="mr-[3vw] mt-[3vw] text-[3vw] text-white"
                  onClick={openCloseMenu}
                >
                  <MdOutlineClose />
                </button>
              </div>
              <div className="ml-[4vw]">
                <NavLink href="/" item="item1" />
                <NavLink href="/trainings" item="item2" />
                <NavLink href="/about" item="item3" />
                <NavLink href="/team" item="item4" />
                <NavLink href="/opusBusiness" item="item5" />
                <NavLink href="/contact" item="item6" />
              </div>
            </div>
          )}
          <div className="hidden lg:flex">
            <div className="lg:flex lg:flex-col lg:justify-center">
              <div className="lg:flex">
                <NavLink href="/" item="item1" />
                <NavLink href="/trainings" item="item2" />
                <NavLink href="/about" item="item3" />
                <NavLink href="/team" item="item4" />
                <NavLink href="/opus-business" item="item5" />
                <NavLink href="/contact" item="item6" />
              </div>
            </div>
            <li className="lg:flex lg:flex-col lg:justify-center">
              <Link href="/register">
                <a className="font-roboto lg:bg-lightBlue lg:py-3 lg:px-4 lg:text-[1vw] lg:text-white">
                  {t('item7')}
                </a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
