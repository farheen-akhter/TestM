import React from "react";
import Enzyme,{shallow,mount}  from 'enzyme';
import SearchBar from './searchBar';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});
describe('SearchBar',  () =>{
test ("renders", ()=>{
    const wrapper = shallow(<SearchBar/>);
    expect(wrapper.exists()).toBe(true);
});
});