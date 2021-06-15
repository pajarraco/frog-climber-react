import { render, screen } from '@testing-library/react';
import FollowPage from './follow_page';

describe('Follow Page', () => {
  test('should render follow page', () => {
    render(<FollowPage />);

    expect(screen.getByText(/Follow Us/)).toBeInTheDocument();
  });
});