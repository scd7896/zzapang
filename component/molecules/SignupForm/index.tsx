import * as React from 'react'
import SignupInput from '../../atoms/Signup/Input'
import SignupButton from '../../atoms/Signup/Button'

const SignupForm = () => {
  return (
    <form method="POST" action="testtest">
      <SignupInput name="id" type="text" />
      <SignupInput name="password" type="password" />
      <SignupInput name="user_name" type="text" />
      <SignupButton />
    </form>
  )
}

export default SignupForm;