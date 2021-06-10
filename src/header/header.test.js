import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  test('should render header', () => {
    render(<Router><Header /></Router>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('should render navigation', () => {
    render(<Router><Header /></Router>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('should have a logo', () => {
    render(<Router><Header /></Router>);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('App-logo');
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo'));
  })
});