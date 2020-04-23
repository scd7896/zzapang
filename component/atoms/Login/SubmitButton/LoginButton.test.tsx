import * as React from 'react'
import { mount, shallow } from 'enzyme';
import SubmitButton from './index'
import LoginInput from '../Input';

describe('loginButton click simulate', function(){
    it('button click and input clear', async function(){
        
        const submitButton = shallow(<SubmitButton />)
        const idLoginInput = shallow(<LoginInput name="id" type="text" />)
        const passwordLoginInput = shallow(<LoginInput name="password" type="password"/>)
        await idLoginInput.find('input').simulate('change', {target: {value: "scd7896"}})
        await passwordLoginInput.find('input').simulate('change', {target: {value: 'password'}})
        expect(idLoginInput.find('input').props().value).toBe('scd7896')
        expect(passwordLoginInput.find('input').props().value).toBe('password')
        await submitButton.find('button').simulate('click', {event: {target: null}})
        setTimeout(()=>{
            expect(idLoginInput.find('input').props().value).toBe('')
            expect(passwordLoginInput.find('input').props().value).toBe('')
        }, 100)
        
    })
})