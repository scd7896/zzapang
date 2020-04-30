import * as React from "react";
import LoginInput from "../../atoms/Login/Input";
import SubmitButton from "../../atoms/Login/SubmitButton";

import "./styles.scss";

const LoginForm = () => {
  return (
    <form className="login-input-form" method="POST" action="apilogin">
      <LoginInput name="id" type="text" />
      <LoginInput name="password" type="password" />
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
