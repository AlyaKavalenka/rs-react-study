import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Form from './Form';

describe('From', () => {
  test('renders without errors', () => {
    const wrapper = render(
      <Form
        id={0}
        name=""
        description=""
        price={0}
        popularity={0}
        stock={0}
        animeName=""
        category=""
        images={[]}
        date={new Date()}
        order=""
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
