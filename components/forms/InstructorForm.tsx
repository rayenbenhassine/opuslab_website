import CustomErrorMessage from 'components/alerts/CustomErrorMessage'
import CustomSuccessMessage from 'components/alerts/CustomSuccessMessage'
import { uploadFile } from 'lib/api'
import { handleInstructorForm } from 'lib/formHandlers'
import { ChangeEvent, useEffect, useState } from 'react'
import { useTranslations, Formik, Yup, Form, Field, ErrorMessage } from '..'
export default function InstructorForm() {
  const t = useTranslations('team.teamForm')

  return (
    <div className="flex w-full flex-col justify-center text-center">
      <h1 className="w-[60vw] rounded-xl bg-darkBlue p-[3vw] font-robotoBold text-[2vw] text-white">
        {t('title')}
      </h1>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          domain: '',
          file: '',
          message: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required(t('errors.required')),
          email: Yup.string()
            .email(t('errors.email'))
            .required(t('errors.required')),
          domain: Yup.string().required(t('errors.required')),
          file: Yup.string().required(t('errors.required')),
          message: Yup.string().required(t('errors.required')),
        })}
        onSubmit={async (values, actions) => {
          console.log(values)
          await handleInstructorForm(values)
          actions.setStatus({ message: t('success') })
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => {
          return (
            <Form className="mt-[-1vw] flex w-[60vw] flex-col rounded-xl bg-white p-[5vw]">
              {props.status && props.status.message && (
                <CustomSuccessMessage message={props.status.message} />
              )}
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="mb-[1vw] block w-full  border border-b-4 p-[0.8vw] placeholder-gray-500"
                placeholder={t('fullName')}
              />
              <ErrorMessage name="fullName" component={CustomErrorMessage} />

              <Field
                type="email"
                id="email"
                name="email"
                className="mb-[1vw] block w-full border border-b-4 p-[0.8vw] placeholder-gray-500"
                placeholder={t('email')}
              />
              <ErrorMessage name="email" component={CustomErrorMessage} />

              <Field
                type="text"
                id="domain"
                name="domain"
                className="mb-[1vw] block w-full border border-b-4 p-[0.8vw] placeholder-gray-500"
                placeholder={t('domain')}
              />
              <ErrorMessage name="domain" component={CustomErrorMessage} />

              <Field
                type="file"
                id="cv"
                name="cv"
                className="block w-full border border-b-4 bg-white p-[0.8vw] placeholder-gray-500"
                placeholder={t('cv')}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.currentTarget.files)
                    props.setFieldValue('file', event.currentTarget.files[0])
                }}
              />
              <ErrorMessage name="file" component={CustomErrorMessage} />

              <Field
                as="textarea"
                id="message"
                name="message"
                className="block w-full border border-b-4 p-[1vw]"
                placeholder={t('message')}
              />
              <ErrorMessage name="message" component={CustomErrorMessage} />

              <button
                type="submit"
                disabled={props.isSubmitting}
                className="mx-auto mt-4 w-max bg-pink py-[1vw] px-[3vw] font-roboto text-[1.5vw] text-white hover:bg-lightBlue"
              >
                {t('submit')}
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
