import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './home_page';

describe('Home Page', () => {
  test('should render home page', () => {
    render(<Router><HomePage /></Router>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/This is your awesome HomePage/)).toBeInTheDocument();
  });

  test('should have a link to user page', () => {
    render(<Router><HomePage /></Router>);
    expect(screen.getByRole('link')).toHaveTextContent('User Ernesto');
  });
});