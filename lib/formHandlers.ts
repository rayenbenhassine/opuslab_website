import { ContactForm, InstructorForm } from './../types'
import {
  submitContactForm,
  submitInstructorForm,
  submitNewsLetterForm,
  submitOpusBusinessForm,
  submitRegisterForm,
  uploadFile,
} from 'lib/api'
import { NewsLetterForm, OpusBusinessForm } from 'types'
import { checkExistEmail } from './formValidators'

export async function handleNewsLetterForm(values: NewsLetterForm) {
  const exist = await checkExistEmail(values.email)
  if (exist) return false
  await submitNewsLetterForm(values)
  return true
}

export async function handleBusinessForm(values: OpusBusinessForm) {
  await submitOpusBusinessForm(values)
}

export async function handleContactForm(values: ContactForm) {
  await submitContactForm(values)
}

export async function handleRegisterForm(values: any) {
  await submitRegisterForm(values)
}

export async function handleInstructorForm(values: InstructorForm) {
  const bodyFormData = new FormData()
  if (values.file) bodyFormData.append('files', values.file)
  const res = await uploadFile(bodyFormData)
  const url: string = res?.data[0].url

  await submitInstructorForm({
    ...values,
    file: url,
  })
}
