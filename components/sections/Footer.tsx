import {
  useTranslations,
  BsFillTelephoneFill,
  IoIosMail,
  GiPositionMarker,
  AiFillLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from '..'

export default function Footer() {
  const t = useTranslations('accueil.footer')

  return (
    <footer className="flex justify-center  bg-darkBlue px-[5vw] py-[10vw] font-roboto text-white">
      <div className="w-[25vw]">
        <h1 className="mb-[4vw] font-robotoBold text-[2vw]">
          {t('list1.title')}
        </h1>
        <ul className="text-[1.4vw]">
          <li>{t('list1.item1')}</li>
          <li>{t('list1.item2')}</li>
          <li>{t('list1.item3')}</li>
          <li>{t('list1.item4')}</li>
          <li>{t('list1.item5')}</li>
        </ul>
      </div>
      <div className="w-[25vw]">
        <h1 className="mb-[4vw] font-robotoBold text-[2vw] text-turquoise">
          {t('list2.title')}
        </h1>
        <ul className="text-[1.4vw]">
          <li>{t('list2.item1')}</li>
          <li>{t('list2.item2')}</li>
          <li>{t('list2.item3')}</li>
          <li>{t('list2.item4')}</li>
          <li>{t('list2.item5')}</li>
        </ul>
      </div>

      <div>
        <h1 className="mb-[4vw] font-robotoBold text-[2vw]">
          {t('list3.title')}
        </h1>
        <ul className="text-[1.4vw]">
          <li className="flex gap-[1vw]">
            <BsFillTelephoneFill className="text-turquoise" />
            {t('list3.item1')}
          </li>
          <li className="flex gap-[1vw]">
            <IoIosMail className="text-[1.6vw] text-turquoise" />
            {t('list3.item2')}
          </li>
          <li className="flex gap-[1vw]">
            <GiPositionMarker className="text-[2vw] text-turquoise" />{' '}
            {t('list3.item3')}
          </li>
          <li className="mt-[1vw] flex gap-[0.5vw]">
            <button>
              <AiFillLinkedin className="text-[2vw] text-turquoise" />
            </button>
            <button>
              <FaFacebookSquare className="text-[2vw] text-turquoise" />
            </button>
            <button>
              <FaInstagramSquare className="text-[2vw] text-turquoise" />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mb-[4vw] font-robotoBold text-[2vw] text-yellow">
          {t('list4.title')}
        </h1>
        <p className="text-[1.4vw]">{t('list4.item1')}</p>
        <button className="mt-[2vw] bg-pink px-[3vw] py-[1vw] text-[1.4vw] hover:bg-lightBlue">
          {t('list4.item2')}
        </button>
      </div>
    </footer>
  )
}
