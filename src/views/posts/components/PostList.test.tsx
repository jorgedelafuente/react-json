import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { createStore } from '../../../store/store';
import PostList from './PostList';

test('renders username from PostList correctly', async () => {
  const mockModule = jest.requireActual('../../../../__mocks__/index');
  render(
    <Provider store={createStore()}>
      <PostList
        allPosts={mockModule.mockPosts}
        allUsers={mockModule.mockUsers}
      />
    </Provider>
  );

  const userName = mockModule.mockUsers[0].username;
  const userNameElement = screen.getByText(userName);
  expect(userNameElement).toHaveTextContent(userName);
});
