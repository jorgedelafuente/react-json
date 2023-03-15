import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component text', () => {
  render(<Header />);
  const headerText = screen.getByText(/JSON App/i);
  expect(headerText).toBeInTheDocument();
  expect(headerText).toHaveTextContent('JSON App');
});
