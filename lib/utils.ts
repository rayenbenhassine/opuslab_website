import { Course } from '.'

export function paginateCourses(courses: Array<Course>) {
  const pages: Array<Array<Course>> = []
  let page: Array<Course> = []

  courses.map((course: Course) => {
    page.push(course)
    if (page.length == 4) {
      pages.push(page)
      page = []
    }
  })
  if (page.length != 0) {
    pages.push(page)
  }
  return pages
}
