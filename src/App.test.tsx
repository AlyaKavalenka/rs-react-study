import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

describe('App', () => {
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent('404 Page Not Found');
  });
});
