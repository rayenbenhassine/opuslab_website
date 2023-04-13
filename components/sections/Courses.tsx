import {
  Salary,
  CoursesPagination,
  CoursesProgressBar,
  paginateCourses,
  useState,
  lines,
  Image,
  yellowRectangle,
  useTranslations,
  rightPointsSide,
  coursesRectongle,
} from '..'

export default function Courses({ courses, person, salary }: any) {
  const pages = paginateCourses(courses)

  const [page, setPage] = useState<number>(1)

  const t = useTranslations('formation.courses')

  return (
    <section className="relative py-[10vw] pl-[12vw] pr-[8vw] font-roboto">
      <div className="hidden lg:absolute lg:right-0 lg:top-[10vw]  lg:block lg:w-[3vw]">
        <Image
          src={rightPointsSide}
          alt=" rightPointsSide"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-[12.5vw] right-0 w-[5vw]">
        <Image src={coursesRectongle} alt="yellowLine" objectFit="contain" />
      </div>

      <h1 className="mb-[4vw]  text-left font-robotoBold text-[4vw]  lg:text-[2.5vw]">
        {t('title')}
      </h1>
      <CoursesPagination pages={pages} setPage={setPage} />
      <div className="lg:flex lg:justify-between">
        <CoursesProgressBar courses={pages[page - 1]} />
        <Salary person={person} salary={salary} />
      </div>
      <div className="absolute -left-4 bottom-24 hidden w-[3%] lg:block">
        <Image src={lines} alt="lines" objectFit="contain" />
      </div>
      <div className="bottom-18 absolute -left-0 hidden w-[6%] lg:block">
        <Image
          src={yellowRectangle}
          alt="yellow rectangle"
          objectFit="contain"
        />
      </div>
      <div className="absolute -bottom-16 right-0 hidden w-[3%] lg:block">
        <Image src={lines} alt="lines" objectFit="contain" />
      </div>
    </section>
  )
}
