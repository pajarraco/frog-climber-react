import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import UserPage from './user_page';

describe('User Page', () => {
  test('should render user page', async () => {
    useParams.mockReturnValue({ user: 'ernesto' });
    render(<UserPage />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(/This is your awesome User Profile for ernesto/)).toBeInTheDocument();
  });
});