import { useTranslations } from '..'

export default function Salary({ person, salary }: any) {
  const t = useTranslations('formation.courses')

  return (
    <aside
      className="hidden lg:block lg:h-max lg:w-[39%] lg:border-b-8 lg:border-b-lightBlue lg:bg-lightGrey lg:py-14 lg:px-8"
      data-aos="zoom-in-left"
    >
      <p className="lg:text-2xl lg:font-semibold">
        {t('salary')} {person} {t('link')}
      </p>
      <span className="lg:my-6 lg:flex lg:justify-center lg:font-robotoBold lg:text-4xl lg:text-lightBlue">
        {salary}.000
      </span>
      <br />
      <div className="lg:flex lg:justify-center">
        <button className="hover:bg-lightBlue lg:bg-pink lg:py-4 lg:px-16 lg:text-xl lg:font-semibold lg:text-white">
          {t('button')}
        </button>
      </div>
    </aside>
  )
}
