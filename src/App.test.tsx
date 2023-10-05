import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders header, footer, and routes', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headerElement = screen.getByTestId('header');
  const footerElement = screen.getByTestId('footer');

  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
