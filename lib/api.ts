import { ContactForm, InstructorForm, NewsLetterForm } from 'types'
import { AxiosResponse, TrainingCollection, OpusBusinessForm, axios } from '.'
export async function getAllTrainingsIds() {
  try {
    const { data }: AxiosResponse = await axios.get('/trainings')
    const trainings = data.data
    return trainings.map((training: TrainingCollection) => {
      return {
        params: {
          pathName: training.attributes.pathName,
        },
      }
    })
  } catch (e) {
    if (e instanceof Error) {
      return []
    }
  }
}

export async function getTrainingData(pathName: string) {
  try {
    const { data } = await axios.get(`/trainings/${pathName}`)
    return {
      ...data.data.attributes,
    }
  } catch (e) {
    if (e instanceof Error) {
      return []
    }
  }
}

export async function submitOpusBusinessForm(
  opusBusinessFormData: OpusBusinessForm,
) {
  try {
    await axios.post('/opus-businesses', {
      data: opusBusinessFormData,
    })
  } catch (e) {
    return
  }
}

// export async function submitInstructorForm(instructorData: InstructorForm) {
//   try {
//     await axios.post('/opus-businesses', {
//       data: opusBusinessFormData,
//     })
//   } catch (e) {
//     return
//   }
// }

export async function submitNewsLetterForm(newsLetterFormData: NewsLetterForm) {
  try {
    await axios.post('/news-letters', {
      data: newsLetterFormData,
    })
  } catch (e) {
    return
  }
}

export async function getNewsLetterEmail(email: string) {
  try {
    const { data } = await axios.get(`/news-letters/${email}`)
    return {
      ...data.data.attributes,
    }
  } catch (e) {
    if (e instanceof Error) {
      return
    }
  }
}

export async function submitContactForm(ContactData: ContactForm) {
  try {
    await axios.post('/contacts', {
      data: ContactData,
    })
  } catch (e) {
    console.log(e)
  }
}

export async function submitInstructorForm(InstructorData: InstructorForm) {
  try {
    await axios.post('/instructors', {
      data: InstructorData,
    })
  } catch (e) {
    console.log(e)
  }
}

export async function submitRegisterForm(studsentData: any) {
  try {
    await axios.post('/registers', {
      data: studsentData,
    })
  } catch (e) {
    console.log(e)
  }
}

export async function uploadFile(file: FormData) {
  try {
    return await axios({
      method: 'post',
      url: '/upload',
      data: file,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  } catch (e) {
    return
  }
}
