import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  it('Renders not found placeholder in input', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Type to search'));
  });
  it('Renders found default value if Local Storage empty', () => {
    localStorage.setItem('inputValue', '');
    const storage = localStorage.getItem('inputValue');

    render(<Search />);
    if (storage?.length === 0) expect(screen.getByDisplayValue(''));
  });
  it('Renders not found default value if Local Storage has value', () => {
    localStorage.setItem('inputValue', 'test');
    const storageGet = localStorage.getItem('inputValue');

    render(<Search />);
    if (storageGet?.length !== 0) expect(screen.getByDisplayValue('test'));
  });
});
