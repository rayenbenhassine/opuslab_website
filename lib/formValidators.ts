import { getNewsLetterEmail } from './api'

export async function checkExistEmail(email: string) {
  const data = await getNewsLetterEmail(email)
  if (data) return true
  return false
}
