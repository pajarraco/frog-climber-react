import { render, screen } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

import FollowPage from './follow_page';

describe('Follow Page', () => {
  test('should render follow page', () => {
    render(<FollowPage />);
    expect(screen.getByText(/Follow Us/)).toBeInTheDocument();
  });

  test('should render 5 links', () => {
    render(<FollowPage/>);
    const links = screen.getAllByRole('link');

    expect(links.length).toBe(5);
  });

});