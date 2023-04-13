import CustomErrorMessage from 'components/alerts/CustomErrorMessage'
import CustomSuccessMessage from 'components/alerts/CustomSuccessMessage'
import { handleContactForm, handleRegisterForm } from 'lib/formHandlers'
import { useTranslations, Formik, Yup, Form, Field, ErrorMessage } from '..'

export default function RegisterForm() {
  const t = useTranslations('register.registerForm')
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        age: '',
        profession: '',
        university: '',
        adress: '',
        tel: '',
        formation: '',
        interest: '',
      }}
      validationSchema={Yup.object({
        fullName: Yup.string().required(t('errors.required')),
        email: Yup.string()
          .email(t('errors.email'))
          .required(t('errors.required')),
        age: Yup.number().required(t('errors.required')),
        profession: Yup.string().required(t('errors.required')),
        university: Yup.string().required(t('errors.required')),
        adress: Yup.string().required(t('errors.required')),
        tel: Yup.string().required(t('errors.required')),
        formation: Yup.string().required(t('errors.required')),
        interest: Yup.string().required(t('errors.required')),
      })}
      onSubmit={async (values, actions) => {
        handleRegisterForm(values)
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => {
        return (
          <div className="mx-auto w-max">
            <Form className="flex flex-col rounded-xl  py-[4vw] px-[8vw]">
              {props.status && props.status.message && (
                <div className="mx-auto mb-[2vw]">
                  <CustomSuccessMessage message={props.status.message} />
                </div>
              )}
              <label className="text-white">{t('fullName')}</label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="mb-[2.5vw] w-[30vw] px-[1vw]  py-[0.8vw]"
              />
              <ErrorMessage name="fullName" component={CustomErrorMessage} />

              <label className="text-white">{t('email')}</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mb-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="email" component={CustomErrorMessage} />

              <label className="text-white">{t('age')}</label>
              <Field
                type="number"
                id="age"
                name="age"
                className="mb-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="age" component={CustomErrorMessage} />

              <label className="text-white">{t('profession')}</label>
              <Field
                type="text"
                id="profession"
                name="profession"
                className="mb-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="profession" component={CustomErrorMessage} />

              <label className="text-white">{t('university')}</label>
              <Field
                type="text"
                id="university"
                name="university"
                className="mb-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="university" component={CustomErrorMessage} />

              <label className="text-white">{t('adress')}</label>
              <Field
                type="text"
                id="adress"
                name="adress"
                className="mb-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="adress" component={CustomErrorMessage} />

              <label className="text-white">{t('tel')}</label>
              <Field
                type="text"
                id="tel"
                name="tel"
                className="mb-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="tel" component={CustomErrorMessage} />

              <label className="text-white">{t('formation')}</label>
              <Field
                type="text"
                id="formation"
                name="formation"
                className="mb-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="formation" component={CustomErrorMessage} />

              <label className="text-white">{t('interest')}</label>
              <Field
                as="textarea"
                type="text"
                id="interest"
                name="interest"
                className=" w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
              />
              <ErrorMessage name="interest" component={CustomErrorMessage} />

              <button
                type="submit"
                className="text-m mx-auto mt-[5vw] block bg-pink py-[0.6vw] px-[3vw] font-roboto text-white"
                disabled={props.isSubmitting}
              >
                {t('submit')}
              </button>
            </Form>
          </div>
        )
      }}
    </Formik>
  )
}
