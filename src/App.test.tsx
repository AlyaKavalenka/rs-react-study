import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import { App } from './App';

describe('App', () => {
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent('404 Page Not Found');
  });
});
