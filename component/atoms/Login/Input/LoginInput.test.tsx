import * as React from 'react'
import { shallow } from 'enzyme';
import LoginInput from './index';

describe('LoginInput test', function(){
    describe('Login input id test', function(){
        const loginIdShallow = shallow(<LoginInput name="id" type="text" />)
        it('login id value change', function(){
            loginIdShallow.find('input').simulate('change', { target: {value: "scd7896"} })
            setTimeout(()=>{
                expect(loginIdShallow.find('input').props().value).toBe('scd7896')
            }, 100)
        })
    })

    describe('login input password test', function(){
        const loginPassWordShallow = shallow(<LoginInput name="password" type="password" />)
        it('login password value Change', function(){
            loginPassWordShallow.simulate('change', { target: {value: "scd7896"} })
            setTimeout(()=>{
                expect(loginPassWordShallow.find('input').props().value).toBe('scd7896')
            },100)
        })
    })
})