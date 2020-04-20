import * as React from 'react'
import { shallow } from 'enzyme'
import SearchInput from './index'

describe('SearchInput', () => {
  describe('inputChainge', () => {
    it('value input change', function () {
      const wrap = shallow(<SearchInput />)
      wrap.simulate('change', { currentTarget: { value: 'Hello' } })
      expect(wrap.find('input').props().value).toBe('Hello')
    })
    it('enter submit value', function(){
      const wrap = shallow(<SearchInput />)
      wrap.simulate('keypress', { key: 'Enter' })
      expect(wrap.find('input').props().value).toBe('')
    })
  })  
})