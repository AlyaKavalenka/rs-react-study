import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Form from './Form';
import { store } from '../../Store/store';

describe('From', () => {
  test('renders without errors', () => {
    const wrapper = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
