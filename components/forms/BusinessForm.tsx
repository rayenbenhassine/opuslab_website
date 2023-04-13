import CustomErrorMessage from 'components/alerts/CustomErrorMessage'
import CustomSuccessMessage from 'components/alerts/CustomSuccessMessage'
import {
  useTranslations,
  Formik,
  Yup,
  Form,
  Field,
  ErrorMessage,
  handleBusinessForm,
} from '..'

export default function BusinessForm() {
  const t = useTranslations('opusBusiness.businessForm')

  return (
    <Formik
      initialValues={{
        fullName: '',
        company: '',
        skills: '',
        needs: '',
      }}
      validationSchema={Yup.object({
        fullName: Yup.string().required(t('errors.required')),
        company: Yup.string().required(t('errors.required')),
        skills: Yup.string().required(t('errors.required')),
        needs: Yup.string().required(t('errors.required')),
      })}
      onSubmit={async (values, actions) => {
        await handleBusinessForm(values)
        actions.setStatus({ message: t('success') })
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => {
        return (
          <Form className="mt-[-1.5vw] rounded-xl bg-white px-[10vw] py-[4vh]">
            {props.status && props.status.message && (
              <CustomSuccessMessage message={props.status.message} />
            )}
            <Field
              type="text"
              id="fullName"
              name="fullName"
              placeholder={t('fullName')}
              className="w-full border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw]  placeholder-gray-500"
            />
            <ErrorMessage name="fullName" component={CustomErrorMessage} />

            <Field
              type="text"
              id="company"
              name="company"
              placeholder={t('company')}
              className="mt-5 w-full border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
            />
            <ErrorMessage name="company" component={CustomErrorMessage} />

            <Field
              type="text"
              id="skills"
              name="skills"
              placeholder={t('skill')}
              className="mt-5 w-full border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
            />
            <ErrorMessage name="skills" component={CustomErrorMessage} />

            <Field
              as="textarea"
              type="text"
              id="needs"
              name="needs"
              placeholder={t('message')}
              className="mt-5 w-full border border-b-4 bg-lightGrey px-[1vw] py-[0.8vw] placeholder-gray-500"
            />
            <ErrorMessage name="needs" component={CustomErrorMessage} />

            <button
              type="submit"
              className="text-m mx-auto mt-[1.5vw] block bg-pink py-[0.8vw] px-[2.5vw] font-roboto text-white"
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
