import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';
import Card from './Card';

describe('Card', () => {
  it('should return card component', () => {
    const wrapper = render(
      <Provider store={store}>
        <Card
          id={0}
          name=""
          description=""
          price={0}
          popularity={0}
          stock={0}
          animeName=""
          category=""
          images={[]}
          date=""
          order=""
        />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
