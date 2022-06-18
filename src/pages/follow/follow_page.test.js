import { render, renderer, screen } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas);

import FollowPage from './follow_page';

export function mount(props = {}, { createNodeMock } = {}) {
  const component = render(<FontAwesomeIcon { ...props } />, {
    createNodeMock
  });

  return component;
}

describe('Follow Page', () => {
  test('should render follow page', () => {
    render(<FollowPage />);
    expect(screen.getByText(/Follow Us/)).toBeInTheDocument();
  });

  test('should render 5 links', () => {
    render(<FollowPage />);
    const links = screen.getAllByRole('link');

    expect(links.length).toBe(5);
    expect(links[ 0 ]).toHaveTextContent(/YouTube/);
    expect(links[ 0 ]).toHaveAttribute('href', 'https://www.youtube.com/channel/UCAbswsLikC3QeLSHmOLdBNA');
    expect(links[ 1 ]).toHaveTextContent(/Instagram/);
    expect(links[ 1 ]).toHaveAttribute('href', 'https://www.instagram.com/frogclimber/');
    expect(links[ 2 ]).toHaveTextContent(/Facebook/);
    expect(links[ 2 ]).toHaveAttribute('href', 'https://www.facebook.com/frogclimber');
    expect(links[ 3 ]).toHaveTextContent(/LinkedIn/);
    expect(links[ 3 ]).toHaveAttribute('href', 'https://www.linkedin.com/company/frogclimber/');
    expect(links[ 4 ]).toHaveTextContent(/Twitter/);
    expect(links[ 4 ]).toHaveAttribute('href', 'https://twitter.com/frog_climber');
  });

  test('render icons', () => {
    render(<FollowPage />);
    const icons = screen.getByTitle('youtube');

    expect(icons.parentElement).toHaveClass('fa-youtube');
  });
});
