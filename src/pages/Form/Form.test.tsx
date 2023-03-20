import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Form from './Form';

describe('From', () => {
  test('renders without errors', () => {
    const wrapper = render(<Form />);
    expect(wrapper).toBeTruthy();
  });
});