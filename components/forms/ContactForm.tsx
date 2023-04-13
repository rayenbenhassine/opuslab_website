import CustomErrorMessage from 'components/alerts/CustomErrorMessage'
import CustomSuccessMessage from 'components/alerts/CustomSuccessMessage'
import { handleContactForm } from 'lib/formHandlers'
import { useTranslations, Formik, Yup, Form, Field, ErrorMessage } from '..'

export default function ContactForm() {
  const t = useTranslations('contact.form')
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        object: '',
        message: '',
      }}
      validationSchema={Yup.object({
        fullName: Yup.string().required(t('errors.required')),
        email: Yup.string()
          .email(t('errors.email'))
          .required(t('errors.required')),
        object: Yup.string().required(t('errors.required')),
        message: Yup.string().required(t('errors.required')),
      })}
      onSubmit={async (values, actions) => {
        await handleContactForm(values)
        actions.setStatus({ message: t('success') })
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => {
        return (
          <Form className="flex  flex-col rounded-xl bg-veryDarkBlue py-[4vw] px-[8vw]">
            {props.status && props.status.message && (
              <div className="mx-auto mb-[2vw]">
                <CustomSuccessMessage message={props.status.message} />
              </div>
            )}
            <Field
              type="text"
              id="fullName"
              name="fullName"
              placeholder={t('fullName')}
              className="w-[30vw] px-[1vw]  py-[0.8vw]"
            />
            <ErrorMessage name="fullName" component={CustomErrorMessage} />

            <Field
              type="text"
              id="email"
              name="email"
              placeholder={t('email')}
              className="mt-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
            />
            <ErrorMessage name="email" component={CustomErrorMessage} />

            <Field
              type="text"
              id="object"
              name="object"
              placeholder={t('object')}
              className="mt-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
            />
            <ErrorMessage name="object" component={CustomErrorMessage} />

            <Field
              as="textarea"
              type="text"
              id="message"
              name="message"
              placeholder={t('message')}
              className="mt-[2.5vw] w-[30vw] border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
            />
            <ErrorMessage name="message" component={CustomErrorMessage} />

            <button
              type="submit"
              className="text-m mx-auto mt-[5vw] block bg-pink py-[0.6vw] px-[3vw] font-roboto text-white"
              disabled={props.isSubmitting}
            >
              {t('submit')}
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
