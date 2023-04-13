import { Dispatch, MouseEvent, SetStateAction, Course } from '..'

interface Props {
  pages: Array<Array<Course>>
  setPage: Dispatch<SetStateAction<number>>
}

export default function CoursesPagination({ pages, setPage }: Props) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const page = parseInt((e.target as HTMLButtonElement).value)
    setPage(page)
  }

  return (
    <div className="mb-[4vw] flex justify-center lg:block">
      {pages.map((_, key) => {
        return (
          <button
            key={key}
            onClick={handleClick}
            value={key + 1}
            className="mr-[1.2vw] border-[1px] border-darkBlue bg-lightGrey px-[1.5vw] py-[0.8vw] font-roboto text-[2vw] font-semibold hover:bg-pink hover:text-white focus:bg-pink focus:text-white lg:px-[1vw] lg:text-[1.2vw]"
          >
            {key + 1}
          </button>
        )
      })}
    </div>
  )
}
