import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import PostContainer from './PostContainer';
import { createStore } from '../../../redux/store';

// const server = setupServer(
//   rest.get('/api', (req, res, ctx) => {
//     return res(ctx.json({ name: 'Jack' }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test('render redux store', async () => {
  render(
    <Provider store={createStore()}>
      <PostContainer />
    </Provider>
  );

  const counterEl = await waitFor(() => screen.findByText(/sunt aut facere/i));

  expect(counterEl).toHaveTextContent('sunt aut facere');

  // replace with mock data
});
