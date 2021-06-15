import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './nav';

describe('Navigation', () => {
  test('should render navigation', () => {
    render(<Router><Navigation /></Router>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  test('should have links', async () => {
    render(<Router><Navigation /></Router>);
    const navigationItem = await screen.findAllByRole('link');
    expect(navigationItem).toHaveLength(3);
    expect(navigationItem[0]).toHaveTextContent(/Home/);
    expect(navigationItem[0]).toHaveAttribute('href', '/');
    expect(navigationItem[1]).toHaveTextContent(/User Profile/);
    expect(navigationItem[1]).toHaveAttribute('href', '/users/ernesto');
    expect(navigationItem[2]).toHaveTextContent(/Follow Us/);
    expect(navigationItem[2]).toHaveAttribute('href', '/follow');
  });
});