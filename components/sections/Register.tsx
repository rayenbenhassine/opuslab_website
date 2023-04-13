import RegisterForm from 'components/forms/RegisterForm'
import React from 'react'

export default function Register() {
  return (
    <section className="bg-veryDarkBlue py-[10vw]">
      <h1 className="text-center font-robotoBold text-[4vw] font-bold text-turquoise ">
        DEVENIR UN OPUCIEN
      </h1>
      <p className="mx-auto w-max text-[1.5vw] text-white">
        Remplissez le formulaire soigneusement
      </p>
      <RegisterForm />
    </section>
  )
}
