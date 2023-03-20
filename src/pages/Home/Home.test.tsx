import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders without errors', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
