import * as React from 'react'
import { useState } from 'react';
import './styles.scss'
type LoginInputProps = {
    type: string,
    name: string
}
const LoginInput = ({ type, name }: LoginInputProps) => {
    const [textValue, setTextValue] = useState<string>('');
    const onValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value)
    }
    return (
        <div>
            <span>{ name }</span>
            <input className={`login-input-${name}`}
                name={name} 
                type={type} 
                value={textValue} 
                onChange={onValueInput}
            />
        </div>
    )
}

export default LoginInput