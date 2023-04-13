import {
  useTranslations,
  contactPoints,
  Image,
  contactRocket,
  contactLamp,
  endtrianglePoints,
  letter,
  bag,
  pinkSquare,
  quaterCircle,
  lg,
  Aos,
} from '..'
import { useEffect } from 'react'

import ContactForm from '../forms/ContactForm'
import { useScreenSize } from 'contexts/ScreenSizeContext'

export default function ContactOpus() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  const t = useTranslations('contact.contactOpus')
  const size = useScreenSize()
  return (
    <>
      <section className="relative hidden  bg-darkBlue py-[12vw]  lg:block lg:bg-darkBlue">
        <div className="absolute right-0 top-[2vw] w-[4vw] ">
          <Image src={contactPoints} alt="contactPoints" objectFit="contain" />
        </div>
        <div className="absolute top-[11vw] right-[21vw] w-[5vw] animate-bounce">
          <Image src={contactRocket} alt="contactRocket" objectFit="contain" />
        </div>
        <div className="absolute left-[4vw] top-[14vw] w-[6vw] animate-ping">
          <Image src={contactLamp} alt="contactLamp" objectFit="contain" />
        </div>
        <div className="absolute left-0 top-[30vw]  w-[8vw]">
          <Image
            src={endtrianglePoints}
            alt="endTrainglePoints"
            objectFit="contain"
          />
        </div>
        <div className="absolute right-[55vw] bottom-[5vw] w-[8vw] animate-bounce">
          <Image src={letter} alt="letter" objectFit="contain" />
        </div>
        <div className="absolute bottom-[4vw] left-[78vw] w-[9vw] animate-bounce">
          <Image src={bag} alt="bag" objectFit="contain" />
        </div>
        <div className="absolute bottom-[12vw] right-0">
          <Image src={pinkSquare} alt="pinkSquare" objectFit="contain" />
        </div>

        <h1 className="text-center font-robotoBold text-[4vw] font-bold text-turquoise ">
          {t('title')}
        </h1>
        <div
          data-aos={size.width >= lg && 'zoom-in-down'}
          className="  px-[9vw] pt-[1.5vw]  lg:flex"
        >
          <div className="mt-[2vw] mr-[10vw] w-[30vw]">
            <ul>
              <li className="mb-[3vw] list-none">
                <h3 className="font-robotoBold text-[1.8vw] font-bold uppercase text-turquoise">
                  {t('details.item1.title')}
                </h3>
                <p className="font-roboto text-[1.5vw] leading-8 text-lightGrey">
                  {t('details.item1.description')}
                </p>
              </li>
              <li className="mb-[3vw] list-none">
                <h3 className="font-robotoBold text-[1.8vw] font-bold uppercase text-turquoise">
                  {t('details.item2.title')}
                </h3>
                <p className="font-roboto text-[1.5vw] leading-8 text-lightGrey">
                  {t('details.item2.description')}
                </p>
              </li>
              <li className="mb-[3vw] list-none">
                <h3 className="font-robotoBold text-[1.8vw] font-bold uppercase text-turquoise">
                  {t('details.item3.title')}
                </h3>
                <p className="font-roboto text-[1.5vw] leading-8 text-lightGrey">
                  {t('details.item3.description')}
                </p>
              </li>
            </ul>
          </div>
          <div data-aos={size.width >= lg && 'zoom-in-left'}>
            <ContactForm />
          </div>
        </div>
        <div className="absolute  bottom-[0vw] right-0 w-[10vw]">
          <Image src={quaterCircle} alt="quaterCircle" objectFit="contain" />
        </div>
        <div className="absolute right-0 bottom-[0vw] w-[15vw]">
          {/* <Image src={pinkLine} alt="pinkLine" objectFit="contain" /> */}
        </div>
      </section>

      <section className="relative flex flex-col  bg-darkBlue  px-[28vw] pt-[8vw]  lg:hidden ">
        <div className="absolute top-[15vw] right-[17vw] w-[11vw]">
          <Image src={contactRocket} alt="contactRocket" objectFit="contain" />
        </div>

        <div className="absolute left-[15vw] bottom-[20vw] w-[11vw] ">
          <Image src={letter} alt="letter" objectFit="contain" />
        </div>
        <div className="absolute right-[13vw] bottom-[20vw] w-[13vw] ">
          <Image src={bag} alt="bag" objectFit="contain" />
        </div>

        <div className="absolute bottom-0 right-0 w-[10vw]">
          <Image src={quaterCircle} alt="quaterCircle" objectFit="contain" />
        </div>

        <h1 className="text-center font-robotoBold text-[5vw] font-bold text-turquoise ">
          {t('title')}
        </h1>
        <ContactForm />

        <ul className="mt-[3vw] text-center">
          <li className="mb-[3vw] list-none">
            <h3 className="font-robotoBold text-[1.8vw] font-bold uppercase text-turquoise">
              {t('details.item1.title')}
            </h3>
            <p className="font-roboto text-[1.5vw] leading-8 text-lightGrey ">
              {t('details.item1.description')}
            </p>
          </li>
          <li className="mb-[3vw] list-none">
            <h3 className="font-robotoBold text-[1.8vw] font-bold uppercase text-turquoise">
              {t('details.item2.title')}
            </h3>
            <p className="font-roboto text-[1.5vw] leading-8 text-lightGrey">
              {t('details.item2.description')}
            </p>
          </li>
          <li className="mb-[3vw] list-none">
            <h3 className="font-robotoBold text-[1.8vw] font-bold uppercase text-turquoise">
              {t('details.item3.title')}
            </h3>
            <p className="font-roboto text-[1.5vw] leading-8 text-lightGrey">
              {t('details.item3.description')}
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
