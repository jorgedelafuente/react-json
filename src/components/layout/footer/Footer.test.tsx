import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component with allPostsAmount number prop', () => {
  const listCount = 10;

  render(<Footer allPostsAmount={listCount} />);

  const spanElement = screen.getByTestId('footer-count');
  expect(spanElement).toHaveTextContent(String(listCount));
});
