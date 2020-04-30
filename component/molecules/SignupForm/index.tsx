import * as React from "react";
import SignupInput from "../../atoms/Signup/Input";
import SignupButton from "../../atoms/Signup/Button";

import "./styles.scss";

const SignupForm = () => {
  return (
    <form className="" method="POST" action="testtest">
      <SignupInput name="id" type="text" required={true} />
      <SignupInput name="password" type="password" required={true} />
      <SignupInput name="user_name" type="text" required={true} />
      <SignupButton />
    </form>
  );
};

export default SignupForm;
