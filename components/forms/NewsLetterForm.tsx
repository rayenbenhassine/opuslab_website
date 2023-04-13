import CustomErrorMessage from 'components/alerts/CustomErrorMessage'
import CustomSuccessMessage from 'components/alerts/CustomSuccessMessage'
import { handleNewsLetterForm } from 'lib/formHandlers'
import { useTranslations, ErrorMessage, Field, Form, Formik, Yup } from '..'

export default function NewsLetterForm() {
  const t = useTranslations('accueil.newDigitalSkills')

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(t('errors.required'))
          .required(t('errors.required')),
      })}
      onSubmit={async (values, actions) => {
        const sucess = await handleNewsLetterForm(values)
        sucess
          ? actions.setStatus({ message: t('success') })
          : actions.setStatus({ error: t('errors.existing') })
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(props) => {
        return (
          <Form className="mx-auto mt-[4vw] w-max bg-lightBlue py-[3vw] px-[10vw]">
            <h1 className="mb-[2vw] text-center text-[2.5vw] text-white">
              {t('form.title1')} <br /> {t('form.title2')}
            </h1>
            {props.status && props.status.message && (
              <p className="text-white">{props.status.message}</p>
            )}
            {props.status && props.status.error && (
              <CustomErrorMessage>{props.status.error}</CustomErrorMessage>
            )}
            <ErrorMessage name="email" component={CustomErrorMessage} />
            <Field
              type="text"
              id="email"
              name="email"
              className="mb-[2vw] w-[38vw] border-none px-[3vw] py-[2vw] text-[1.5vw] focus:outline-0"
            />
            <div className="mx-auto w-max rounded border-2 border-dashed border-purple">
              <button
                type="submit"
                className="m-[1vw] block bg-darkBlue py-[1.2vw] px-[2vw] text-center text-[1.5vw] text-white"
                onClick={() => {
                  props.setStatus({ message: '' })
                  props.setStatus({ error: '' })
                }}
              >
                {t('form.button')}
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
