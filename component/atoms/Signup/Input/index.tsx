import * as React from "react";

import "./styles.scss";

interface SignupInputProps {
  type: string;
  name: string;
  required?: boolean;
}

const SignupInput = ({ type, name, required }: SignupInputProps) => {
  return (
    <article>
      <p>{name}</p>
      <input className="signup-input-content" type={type} name={name} required={required} />
    </article>
  )
};

export default SignupInput;
