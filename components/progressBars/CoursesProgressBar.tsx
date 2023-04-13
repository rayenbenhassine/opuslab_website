interface Course {
  title: string
  items: Array<string>
}

interface Props {
  courses: Array<Course>
}

export default function CoursesProgressBar({ courses }: Props) {
  return (
    <ul className="relative h-max">
      <hr className="absolute top-[2vw] left-[0.85vw] -z-10  h-[98%] border-l-2 text-grey" />
      {courses.map((course, key) => {
        return (
          <li
            data-aos="zoom-in-left"
            data-aos-delay={key * 300}
            key={key}
            className="mb-[4vw] before:mr-[3vw] before:inline-block before:text-[3vw] before:font-bold before:text-lightBlue before:content-['●']"
          >
            <span className="text-[2.5vw] font-semibold lg:text-[1.7vw]">
              {course.title}
            </span>
            <ul className="ml-[5vw] mt-[1vw]">
              {course.items.map((item, key) => {
                return (
                  <li
                    key={key}
                    className="text-[2.2vw] before:mr-[1vw] before:inline-block before:text-[1.5vw] before:content-['•'] lg:text-[1.5vw]"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
