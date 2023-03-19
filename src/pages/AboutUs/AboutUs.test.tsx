import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('Renders not found about us header', () => {
    render(<AboutUs />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Us');
  });
});
