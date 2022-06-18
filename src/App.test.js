import { render, screen, } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

describe('App', () => {
  test('renders app components', () => {
    render(<Router><App /></Router>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
