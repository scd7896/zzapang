import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from './index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<IndexPage buttonText={"Hello world"}/>)
      expect(wrap.find('button').text()).toBe('Hello world')
    })
  })  
})