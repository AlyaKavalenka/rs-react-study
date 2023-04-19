import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';
import Popup from './Popup';

describe('Popup', () => {
  it('renders without errors', () => {
    const wrapper = render(
      <Provider store={store}>
        <Popup popup name="Test" />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
