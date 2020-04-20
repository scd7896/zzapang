import * as React from 'react'
import { shallow } from 'enzyme'
import SearchInput from './index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = shallow(<SearchInput />)
      wrap.simulate('change', { currentTarget: { value: 'Hello' } })
      expect(wrap.find('input').props().value).toBe('Hello')
    })
  })  
})