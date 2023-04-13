import { Link, useTranslations } from '..'

interface Props {
  href: string
  item: string
}

export default function NavLink({ href, item }: Props) {
  const t = useTranslations('header')

  return (
    <li className="mb-[4vw] lg:mb-0 lg:mr-[3vw]">
      <Link href={href}>
        <a className="font-roboto text-[2.5vw] text-lightGrey focus:text-pink lg:font-louisGeorgeCafe lg:text-[1.3vw]">
          {t(item)}
        </a>
      </Link>
    </li>
  )
}
