import * as React from 'react';
import { shallow } from 'enzyme';
import BasketCount from './index';

describe('icon-count-teet', function(){
    it('props text test',function(){
        const buttonShallow = shallow(<BasketCount count={10}/>)
        expect(buttonShallow.text()).toBe('10');
        
    })
    
})