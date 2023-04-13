import { useTranslations, Image, paymentBoy } from '..'

export default function Payment() {
  const t = useTranslations('formations.payment')
  return (
    <section className="flex flex-col justify-center gap-[8vw] bg-lightBlue pt-[5vw] lg:flex-row">
      <div data-aos="fade-down-right">
        <h1 className="mb-[5vw] text-center font-robotoBold text-[3vw] text-darkBlue lg:text-left">
          {t('title')}
        </h1>
        <ul className="ml-[2vw] list-disc text-[2vw] tracking-wider text-darkBlue">
          <li className="mx-auto w-max lg:mx-0">{t('item1')}</li>
          <li className="mx-auto w-max lg:mx-0">{t('item2')}</li>
          <li className="mx-auto w-max lg:mx-0">{t('item3')}</li>
        </ul>
      </div>
      <div data-aos="fade-down-left" className="mx-auto w-[30%] lg:mx-0">
        <Image src={paymentBoy} alt="paymentBoy" objectFit="contain" />
      </div>
    </section>
  )
}
