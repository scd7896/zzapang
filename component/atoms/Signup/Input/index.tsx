import * as React from "react";

import "./styles.scss";

interface SignupInputProps {
  type: string,
  name: string,
  required?: boolean
}

const SignupInput = ({ type, name, required }: SignupInputProps) => {
  return (
    <div>
      <p>{name.toUpperCase()}</p>
      <input className="signup-input-content" type={type} name={name} required={required}/>
    </div>
  )
};

export default SignupInput;
