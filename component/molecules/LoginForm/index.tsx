import * as React from 'react'
import LoginInput from '../../atoms/Login/Input'
import SubmitButton from '../../atoms/Login/SubmitButton'

const LoginForm = () => {
    return (
        <article>
            <form>
                <LoginInput name="id" type="text"/>
                <LoginInput name="password" type="password"/>
                <SubmitButton />
            </form>
        </article>
    )
}

export default LoginForm;