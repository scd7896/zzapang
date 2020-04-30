import * as React from "react";

import "./styles.scss";

interface SignupInputProps {
  type: string;
  name: string;
}

const SignupInput = ({ type, name }: SignupInputProps) => {
  return <input className="signup-input-content" type={type} name={name} />;
};

export default SignupInput;
