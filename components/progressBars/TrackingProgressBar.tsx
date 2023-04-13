import {
  useTranslations,
  SuiviList,
  FaRegUser,
  IoIosListBox,
  GiCheckMark,
  HiOutlineDesktopComputer,
} from '..'

export default function TrackingProgressBar() {
  const t = useTranslations('formations.trackingSystem')
  const trackingList = [
    {
      icon: <IoIosListBox />,
      title: t('list1.title'),
      description: t('list1.description'),
      bgStyle: 'bg-pink',
    },
    {
      icon: <HiOutlineDesktopComputer />,
      title: t('list2.title'),
      description: t('list2.description'),
      bgStyle: 'bg-turquoise',
    },
    {
      icon: <GiCheckMark />,
      title: t('list3.title'),
      description: t('list3.description'),
      bgStyle: 'bg-darkBlue',
    },
    {
      icon: <FaRegUser />,
      title: t('list4.title'),
      description: t('list4.description'),
      bgStyle: 'bg-purple',
    },
  ]
  return (
    <ul className="lg:relative  lg:mt-24 lg:w-[50vw] lg:p-12">
      <div className=" lg:relative lg:z-0">
        {trackingList.map((item, key) => {
          return (
            <div data-aos="flip-up" key={key * 300}>
              <SuiviList
                icon={item.icon}
                title={item.title}
                description={item.description}
                bgStyle={item.bgStyle}
              />
            </div>
          )
        })}
      </div>
    </ul>
  )
}
