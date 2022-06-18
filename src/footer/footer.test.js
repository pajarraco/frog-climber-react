import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  test('should render footer', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('should have copyright', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/By. Pajarraco/);
    expect(copyrightText).toBeInTheDocument();
    expect(copyrightText).toHaveClass('copyright');
  });
});