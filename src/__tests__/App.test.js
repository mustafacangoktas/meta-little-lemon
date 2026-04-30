import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Verify the home page renders the specials heading
test('renders "This Week\'s Specials" heading on the home route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const heading = screen.getByText(/This Week's Specials/i);
  expect(heading).toBeInTheDocument();
});

// Verify navigating to /about renders the About page
test('renders About page content on /about route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Our Story/i)).toBeInTheDocument();
});

// Verify navigating to /menu renders the Menu page heading
test('renders Menu page on /menu route', () => {
  render(
    <MemoryRouter initialEntries={['/menu']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /Our Menu/i })).toBeInTheDocument();
});

// Verify navigating to /login renders the login form
test('renders Login page on /login route', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: /Sign In/i })).toBeInTheDocument();
});

// Verify a 404 path renders the NotFound page
test('renders 404 page for unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/does-not-exist']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
