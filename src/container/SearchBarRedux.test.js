import configureStore from 'redux-mock-store';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './searchBar';
import {shallow} from 'enzyme';
import { fetchWeatherData } from '../actions/index';


const mockStore = configureStore([]);
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      myState: 'value',
    });
    store.dispatch = jest.fn();
    component = renderer.create(
        <Provider store={store}>
          <SearchBar />
        </Provider>
    )
  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should dispatch an action on button click', () => {
    renderer.act(() => {
        component.root.findByType('button').props.onClick();
      });
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledWith(
        fetchWeatherData({ type: 'FETCH_WEATHER', payload: response.data  })
      );
  });
});