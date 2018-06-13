import React from 'react';
import {shallow} from 'enzyme';
import {Navigation} from '../components/Navigation';

it('renders Navigation component successfully',()=>{
    const setStory = jest.fn();
    const wrapper = shallow(<Navigation setStories={setStory}/>);
    expect(wrapper).toMatchSnapshot();
});