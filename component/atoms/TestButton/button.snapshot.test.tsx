import * as React from 'react'
import Button from './index';
import * as renderer from 'react-test-renderer'

it('renders correctly', () => {
    console.log(renderer)
    const tree = renderer.create(<Button buttonText="Some Text" />).toJSON()
    expect(tree).toMatchSnapshot()
})