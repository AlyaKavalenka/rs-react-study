import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';
import Search from './Search';

describe('Search', () => {
  it('renders without errors', () => {
    const wrapper = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
  it('Renders not found placeholder in input', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Type to search'));
  });
});
