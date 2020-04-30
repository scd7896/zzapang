import * as React from 'react'
import SignupForm from '../../molecules/SignupForm'

import './styles.scss';

const SignUpTemplate = () => {
  return (
    <section className="signup-wrppaer-section">
      <section>
        <h1>회원가입</h1>
        <SignupForm />
      </section>
    </section>
  )
}

export default SignUpTemplate;