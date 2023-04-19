import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './Home';
import { store } from '../../Store/store';

describe('Home', () => {
  it('renders without errors', () => {
    const wrapper = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
